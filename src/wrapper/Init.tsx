import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import SignInScreen from '../screens/signIn';
import SignupScreen from '../screens/signup';
import SplashScreen from '../screens/splash';
import SelectScreen from '../screens/select_store';
import Tab from '../navigation/tab'
import AllItems from '../screens/items/allItems';
import TabView from '../screens/tabview';
import SearchScreen from '../screens/search';
import EditItem from '../screens/edit_item';
import SaveItemScreen from '../screens/save_order';
import PinCodeScreen from '../screens/enter_pin/enter_pin';
import SaveTicketScreen from '../screens/save_order/save_ticket_screen';
import Confirmation from '../screens/enter_pin/enter_pin';
import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';
import SideBarOrders from '../screens/sidebar_orders';
import OrdersScreen from '../screens/orders';
import RefundScreen from '../screens/refund';
import AddCustomerScreen from '../screens/customer/add_customer';

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

const Stack = createStackNavigator();

export const InitApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"AddCustomerScreen"}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SelectStore" component={SelectScreen} />
      <Stack.Screen name="Main" component={Tab} />
      <Stack.Screen name="AllItems" component={AllItems} />
      <Stack.Screen name="TabView" component={TabView} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="EditItem" component={EditItem} />
      <Stack.Screen name="SaveOrder" component={SaveItemScreen} />
      <Stack.Screen name="PinCodeScreen" component={PinCodeScreen} />
      <Stack.Screen name="SaveTicketScreen" component={SaveTicketScreen} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="SideBarOrders" component={SideBarOrders} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="RefundScreen" component={RefundScreen} />
      <Stack.Screen name="AddCustomerScreen" component={AddCustomerScreen} />


    </Stack.Navigator>
  );
};
