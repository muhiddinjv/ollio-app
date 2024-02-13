import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/loader';
import axios from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../app/slices/authentication';
import { LoginPage } from './Login';

const Stack = createStackNavigator();

function ProtectedRoutes({children}: any): JSX.Element {
  // const [token, setToken] = useState<any>(null) 
  const [isInitilized, setIsInitilized] = useState<boolean>(false);
  const isAuthenticated = useSelector((state: any) => state.authentication.isAuthenticated);
  const dispatch = useDispatch()
  const [isInitiallyAuthenticated, setIsInitiallyAuthenticated] = useState<boolean>()
  useEffect(() => {
    const handleLogin = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('token');
        if (accessToken && accessToken !== null) {
          
          const response = await axios.get('users/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          
          const user = response.data.data;
          dispatch(LOGIN(user))
          setIsInitiallyAuthenticated(true)
          setIsInitilized(true)

        } else {
          setIsInitiallyAuthenticated(false)
          setIsInitilized(true)
        }
      } catch (err) {
        setIsInitiallyAuthenticated(false)
        setIsInitilized(true)
      }
    }
    handleLogin();
  }, [])

  if (isInitiallyAuthenticated) {
    return <>{children}</>
  } else if (!isInitiallyAuthenticated) {
    return (<LoginPage />)
  } else {
    return (
      <Loader />
    )
  }
}

export default ProtectedRoutes;