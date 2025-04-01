import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import GoodQty from "../screens/Goods/GoodQty";
import OpenTickets from "../screens/Sales/OpenTickets";
import SaveTicket from "../screens/Sales/SaveTicket";
import PaidScreen from "../screens/Payment/Paid";
import PaymentScreen from "../screens/Payment/Payment";
import SalesScreen from "../screens/Sales/Sales";
import { useHeaderStyle } from "../hooks";

const Stack = createStackNavigator();

export default function SaleStack() {
  console.log('3) SaleStack loaded');
  return (
    <Stack.Navigator initialRouteName="SalesScreen" options={{ headerShown: false }}>
      <Stack.Screen name="SalesScreen" component={SalesScreen} options={{ headerShown: false }}/>
      <Stack.Screen
        name="GoodQty"
        component={GoodQty}
        options={useHeaderStyle("Tovar Soni")}
      />
      <Stack.Screen
        name="OpenTickets"
        component={OpenTickets}
        options={{
          headerTitle: "Open tickets",
          headerBackImage: () => (
            <AntDesign name="close" size={20} color="black" />
          ),
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      />
      <Stack.Screen
        name="SaveTicket"
        component={SaveTicket}
        options={{
          headerBackImage: () => (
            <AntDesign name="close" size={20} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="PaidScreen"
        component={PaidScreen}
        options={{
          headerStyle: {
            backgroundColor: "rgba(103, 80, 164, 1)",
          },
          headerTitle: "",
          headerTintColor: "white",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerStyle: {
            backgroundColor: "rgba(103, 80, 164, 1)",
          },
          headerTitle: "",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
