import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { onlineManager } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";

import ItemsScreen from "../screens/items";
import SignInScreen from "../screens/signin";
import SignupScreen from "../screens/signup";
import SplashScreen from "../screens/splash";
import SelectScreen from "../screens/select_store";
import BottomTabs from "../components/bottom_tabs";
import TabView from "../screens/tabview";
import SearchScreen from "../screens/search";
import EditItem from "../screens/edit_item";
import AddCustomerScreen from "../screens/customer/add_customer";
import PinCodeScreen from "../screens/enter_pin";
import SaveTicketScreen from "../screens/orders/save_ticket";
import Confirmation from "../screens/enter_pin";
import SalesScreen from "../screens/sales";
import OrdersScreen from "../screens/orders";
import RefundScreen from "../screens/refund";
import CustomersScreen from "../screens/customer/customer_list";
import EditCustomerScreen from "../screens/customer/edit_customer";
import CustomerProfileScreen from "../screens/customer/customer_profile";
import QuantityScreen from "../screens/payment/quantity";
import PaymentScreen from "../screens/payment/pay";
import PaidScreen from "../screens/paid";
import AddToCartScreen from "../screens/customer/add_to_cart/index";
import TicketScreen from "../screens/payment/ticket";
import AssignTicketTo from "../screens/orders/assign_ticket_to";
import TestAi from "../screens/aigen/test";
import { AppContext } from "../utils/interfaces";
import Sidebar from "../components/sidebar";
import { createDrawerNavigator } from "@react-navigation/drawer";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const InitApp = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    // <AppContext.Provider value={{ openDrawer, setOpenDrawer }}>
      <Drawer.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName="Sales"
      >
        <Drawer.Screen name="AiGen" component={TestAi} />
        <Drawer.Screen name="Splash" component={SplashScreen} />
        <Drawer.Screen name="Signin" component={SignInScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="SelectStore" component={SelectScreen} />
        <Drawer.Screen name="Confirmation" component={Confirmation} />

        <Drawer.Screen name="Sales" component={SalesScreen} />
        <Drawer.Screen name="Items" component={ItemsScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />

        <Drawer.Screen name="EditItem" component={EditItem} />
        <Drawer.Screen name="TabView" component={TabView} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="AddCustomer" component={AddCustomerScreen} />
        <Drawer.Screen name="PinCode" component={PinCodeScreen} />
        <Drawer.Screen name="SaveTicket" component={SaveTicketScreen} />
        <Drawer.Screen name="Refund" component={RefundScreen} />
        <Drawer.Screen name="Customers" component={CustomersScreen} />
        <Drawer.Screen name="EditCustomer" component={EditCustomerScreen} />
        <Drawer.Screen name="CustomerProfile" component={CustomerProfileScreen}/>
        <Drawer.Screen name="Quantity" component={QuantityScreen} />
        <Drawer.Screen name="Payment" component={PaymentScreen} />
        <Drawer.Screen name="Paid" component={PaidScreen} />
        <Drawer.Screen name="AddToCart" component={AddToCartScreen} />
        <Drawer.Screen name="Ticket" component={TicketScreen} />
        <Drawer.Screen name="AssignTicketTo" component={AssignTicketTo} />
        {/* FIX BottomTabs STYLE */}
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        {/* <Drawer.Screen name="Sidebar" component={Sidebar} /> */}
      </Drawer.Navigator>
    // </AppContext.Provider>
  );
};
/*
convert this into a js array of objects each of which has the followings:
name, screen = screen name inside component, icon = "account"
*/