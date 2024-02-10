import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import SignInScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import SplashScreen from '../screens/splash';
import SelectScreen from '../screens/select_store';
import Tab from '../navigation/tab'
import Items from '../screens/items';
import TabView from '../screens/tabview';
import SearchScreen from '../screens/search';
import EditItem from '../screens/edit_item';
import AddCustomerScreen from '../screens/customer/add_customer';
import PinCodeScreen from '../screens/enter_pin/enter_pin';
import SaveTicketScreen from '../screens/save_order/save_ticket';
import Confirmation from '../screens/enter_pin/enter_pin';
import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';
import SideBarOrders from '../screens/sidebar_orders';
import OrdersScreen from '../screens/orders';
import RefundScreen from '../screens/refund';
import CustomerListScreen from '../screens/customer/customer_list';
import EditCustomerInformationScreen from '../screens/customer/edit_customer';
import CustomerProfileScreen from '../screens/customer/customer_profile';
import QuantityScreen from '../screens/payment/quantity';
import PaymentScreen from '../screens/payment/paymet';
import PaymentDoneScreen from '../screens/payment/payment_done';
import AddToCartScreen from '../screens/customer/add_to_cart/index'
import TicketScreen from '../screens/payment/ticket';
import PreTicketScreen from '../screens/save_order/pre_ticket';
import OpenTicketScreen from '../screens/save_order/open_tickets';
import TestAi from '../screens/aigenerated/test';

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})
const Stack = createStackNavigator();

export const InitApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"OrdersScreen"}>
      <Stack.Screen name="AiGenerated" component={TestAi} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> FIX ERRORS */}
      <Stack.Screen name="Signin" component={SignInScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SelectStore" component={SelectScreen} />
      {/* FIX THE STYLE OF TAB */}
      <Stack.Screen name="Tab" component={Tab} /> 
      <Stack.Screen name="Items" component={Items} />
      <Stack.Screen name="TabView" component={TabView} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="EditItem" component={EditItem} />
      <Stack.Screen name="AddCustomerScreen" component={AddCustomerScreen} />
      <Stack.Screen name="PinCodeScreen" component={PinCodeScreen} />
      <Stack.Screen name="SaveTicketScreen" component={SaveTicketScreen} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="SideBarOrders" component={SideBarOrders} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />

      <Stack.Screen name="RefundScreen" component={RefundScreen} />
      <Stack.Screen name="CustomerListScreen" component={CustomerListScreen} />
      <Stack.Screen name="EditCustomerInformationScreen" component={EditCustomerInformationScreen} />
      <Stack.Screen name="CustomerProfileScreen" component={CustomerProfileScreen} />
      <Stack.Screen name="QuantityScreen" component={QuantityScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="PaymentDoneScreen" component={PaymentDoneScreen} />
      <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
      <Stack.Screen name="PreTicketScreen" component={PreTicketScreen} />
      <Stack.Screen name="OpenTicketScreen" component={OpenTicketScreen} />
    </Stack.Navigator>
  );
};
