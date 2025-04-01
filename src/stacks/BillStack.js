import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useHeaderStyle } from "../hooks";
import Bills from "../screens/Bills/Bills";
import BillDetails from "../screens/Bills/BillDetails";
import BillCart from "../screens/Bills/BillCart";
import BillCartItemCount from "../screens/Bills/BillCartItemCount";

const Stack = createStackNavigator();

export default function BillStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bills" component={Bills} options={{headerShown: false}}/>
      <Stack.Screen name="BillCart" component={BillCart} options={{headerShown: false}}/>
      <Stack.Screen name="BillDetails" component={BillDetails} options={useHeaderStyle("Bill Details")}/>
      <Stack.Screen name="BillCartItemCount" component={BillCartItemCount} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
