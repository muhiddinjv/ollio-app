import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "../screens/Users/UserList";
import UserAdd from "../screens/Users/UserAdd";
import UserProfile from "../screens/Users/UserProfile";
import UserEdit from "../screens/Users/UserEdit";
import SalesList from '../screens/Sales/SalesList';
import { useHeaderStyle } from "../hooks";
const Stack = createStackNavigator();

export default function UserStack() {
  console.log('6) UserStack loaded');
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserList} options={{headerShown: false}}/>
      <Stack.Screen name="UserAdd" component={UserAdd} options={useHeaderStyle("Foydalanuvchi qo'shish")}/>
      <Stack.Screen name="UserEdit" component={UserEdit} options={useHeaderStyle("Foydalanuvchi tahrirlash")}/>
      <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
