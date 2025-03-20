import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoodTabs from "../screens/Goods/GoodTabs";
import GoodsAdd from "../screens/Goods/GoodsAdd";

const Stack = createStackNavigator();

export default function GoodsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GoodTabs" component={GoodTabs} options={{headerShown: false}}/>
      <Stack.Screen name="GoodsAdd" component={GoodsAdd} options={{
          headerStyle: {
            backgroundColor: "rgba(103, 80, 164, 1)",
          },
          headerTitle: "Manage Goods",
          headerTintColor: "white",
        }}/>
    </Stack.Navigator>
  );
}
