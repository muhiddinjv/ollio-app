import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { InitApp } from './Init';
import { AuthApp } from '../screens/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/loader';
import axios from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../app/slices/authentication';
const Drawer = createDrawerNavigator();

function Wrapper(): JSX.Element {
  // const [token, setToken] = useState<any>(null) 
  const [isInitilized, setIsInitilized] = useState<boolean>(true);
  const isAuthenticated = useSelector((state: any) => state.authentication.isAuthenticated);
  const initial = useSelector((state: any) => state.authentication.initial);
  const dispatch = useDispatch()
  const [isInitiallyAuthenticated, setIsInitiallyAuthenticated] = useState<boolean>()


  if (isInitilized) {
    return (
      <NavigationContainer>
        {/* {(isAuthenticated || isInitiallyAuthenticated) && initial == "init" ?
           : <AuthApp />
          } */}
          <InitApp />
      </NavigationContainer>
    )
  } else {
    return (
      <Loader />
    )
  }
}

export default Wrapper;
