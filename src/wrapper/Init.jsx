import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/index";
import SigninScreen from "../screens/signin/index";
import SplashScreen from "../screens/splash/index";
import SelectScreen from "../screens/select_store/index";

const Stack = createStackNavigator();

export const InitApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Splash"}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={SigninScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SelectStore" component={SelectScreen} />
    </Stack.Navigator>
  );
};
