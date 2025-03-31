import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoodTabs from "../screens/Goods/GoodTabs";
import GoodsAdd from "../screens/Goods/GoodsAdd";
import { useHeaderStyle } from "../hooks";

const Stack = createStackNavigator();

export default function GoodStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GoodTabs" component={GoodTabs} options={{headerShown: false}}/>
      <Stack.Screen name="GoodsAdd" component={GoodsAdd} options={useHeaderStyle("Add Goods")}/>
    </Stack.Navigator>
  );
}
