import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getAccessToken } from "../screens/Auth/astorage";
import { useNavigation } from "@react-navigation/native";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import DrawerNav from "./DrawerNav";
import UserStack from "./UserStack";
import SaleStack from "./SaleStack";
import BillStack from "./BillStack";

const Stack = createStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  }, []);

  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
      <Stack.Screen name="Users" component={UserStack} options={{ headerShown: false }}/>
      <Stack.Screen name="Sales" component={SaleStack} options={{ headerShown: false }}/>
      <Stack.Screen name="Bills" component={BillStack} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppStack;
