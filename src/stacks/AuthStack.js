import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import SignupScreen from "../screens/Auth/SignUp";

const Stack = createStackNavigator();

export default function AuthStack() {
  console.log('0) AuthStack loaded');
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
