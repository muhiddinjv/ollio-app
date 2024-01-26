import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  Home,
  Login,
  Register,
  ForgotPwd,
  Dashboard,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ForgotPwd" component={ForgotPwd} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}