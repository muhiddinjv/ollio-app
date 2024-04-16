import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InitApp } from './Init';
import 'react-native-gesture-handler';
import Loader from '../components/Loader';
// import { AuthApp } from '../screens/Auth';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../api/axios';

function Wrapper(): JSX.Element {
  // const [token, setToken] = useState<any>(null) 
  const [isInitilized, setIsInitilized] = useState<boolean>(true);
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
