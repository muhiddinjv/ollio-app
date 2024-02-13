import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from './Login';
import RecoverPassword from './RecoverPassword';

const Stack = createStackNavigator();

export const AuthApp = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}
      >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{title: 'Aккаунтингизга киринг'}}
        />
      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
        options={{title: 'Паролни қайта тиклаш'}}
      />
    </Stack.Navigator>
  )
}
