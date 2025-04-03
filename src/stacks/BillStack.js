import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bills from "../screens/Bills/Bills";
import BillDetails from "../screens/Bills/BillDetails";
import BillCart from "../screens/Bills/BillCart";
import BillCartItemCount from "../screens/Bills/BillCartItemCount";
import BillsOpen from "../screens/Bills/BillsOpen";

const Stack = createStackNavigator();

export default function BillStack() {
  console.log('5) BillStack loaded');
  return (
    <Stack.Navigator initialRouteName="BillList">
      <Stack.Screen name="BillList" component={Bills} options={{headerShown: false}}/>
      <Stack.Screen name="BillCart" component={BillCart} options={{headerShown: false}}/>
      <Stack.Screen name="BillDetails" component={BillDetails} options={{headerShown: false}}/>
      <Stack.Screen name="BillCartItemCount" component={BillCartItemCount} options={{headerShown: false}}/>
      <Stack.Screen name="BillsOpen" component={BillsOpen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
