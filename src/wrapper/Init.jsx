import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/Home/index';
import LoginPage from '../screens/login/index';
import SplashPage from '../screens/splash/index';
import SelectStorePage from '../screens/select_store/index';

const Stack = createStackNavigator();

export const InitApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Splash'}
    >
      <Stack.Screen
        name="Home"
        component={HomePage} 
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
      />
  <Stack.Screen
        name="Splash"
        component={SplashPage}
      />
       <Stack.Screen
              name="SelectStorePage"
              component={SelectStorePage}
            />
    </Stack.Navigator>
  );
};
