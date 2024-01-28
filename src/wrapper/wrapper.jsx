import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { InitApp } from './Init';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AuthApp } from '../auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from '../utils/axios';
// import { LOGIN } from '../app/slices/authentication';
const Drawer = createDrawerNavigator();

function Wrapper() {
  // const [token, setToken] = useState<any>(null) 
  const [isInitilized, setIsInitilized] = useState(true);
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const initial = useSelector((state) => state.authentication.initial);
  const dispatch = useDispatch()
  const [isInitiallyAuthenticated, setIsInitiallyAuthenticated] = useState()


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
