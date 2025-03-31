import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "../screens/Users/UserList";
import UserAdd from "../screens/Users/UserAdd";
import { useHeaderStyle } from "../hooks";

const Stack = createStackNavigator();

export default function UsersStack() {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserList} options={useHeaderStyle("Foydalanuvchilar")}/>
      <Stack.Screen name="UserAdd" component={UserAdd} options={useHeaderStyle("Foydalanuvchi qo'shish")}/>
    </Stack.Navigator>
  );
}
