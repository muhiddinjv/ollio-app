import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { onlineManager } from '@tanstack/react-query';
import NetInfo from '@react-native-community/netinfo';

import ItemsScreen from '../screens/items';
import SignInScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import SplashScreen from '../screens/splash';
import SelectScreen from '../screens/select_store';
import BottomTabs from '../components/bottom_tabs'
import TabView from '../screens/tabview';
import SearchScreen from '../screens/search';
import EditItem from '../screens/edit_item';
import AddCustomerScreen from '../screens/customer/add_customer';
import PinCodeScreen from '../screens/enter_pin';
import SaveTicketScreen from '../screens/orders/save_ticket';
import Confirmation from '../screens/enter_pin';
import SalesScreen from '../screens/sales';
import OrdersScreen from '../screens/orders';
import RefundScreen from '../screens/refund';
import CustomersScreen from '../screens/customer/customer_list';
import EditCustomerScreen from '../screens/customer/edit_customer';
import CustomerProfileScreen from '../screens/customer/customer_profile';
import QuantityScreen from '../screens/payment/quantity';
import PaymentScreen from '../screens/payment/pay';
import PaidScreen from '../screens/paid';
import AddToCartScreen from '../screens/customer/add_to_cart/index'
import TicketScreen from '../screens/payment/ticket';
import AssignTicketTo from '../screens/orders/assign_ticket_to';
import TestAi from '../screens/aigen/test';
import { AppContext } from '../utils/interfaces';
import Sidebar from '../components/sidebar';

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected)
  })
})

const Stack = createStackNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>
//   );
// }

export const InitApp = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  
  return (
   <AppContext.Provider value={{openDrawer,setOpenDrawer}}>
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Sales">
      <Stack.Screen name="AiGen" component={TestAi} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Signin" component={SignInScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="SelectStore" component={SelectScreen} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Items" component={ItemsScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />

      <Stack.Screen name="EditItem" component={EditItem} />
      <Stack.Screen name="TabView" component={TabView} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="AddCustomer" component={AddCustomerScreen} />
      <Stack.Screen name="PinCode" component={PinCodeScreen} />
      <Stack.Screen name="SaveTicket" component={SaveTicketScreen} />
      <Stack.Screen name="Refund" component={RefundScreen} />
      <Stack.Screen name="Customers" component={CustomersScreen} />
      <Stack.Screen name="EditCustomer" component={EditCustomerScreen} />
      <Stack.Screen name="CustomerProfile" component={CustomerProfileScreen} />
      <Stack.Screen name="Quantity" component={QuantityScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Paid" component={PaidScreen} />
      <Stack.Screen name="AddToCart" component={AddToCartScreen} />
      <Stack.Screen name="Ticket" component={TicketScreen} />
      <Stack.Screen name="AssignTicketTo" component={AssignTicketTo} />
      {/* FIX BottomTabs STYLE */}
      <Stack.Screen name="BottomTabs" component={BottomTabs} /> 
      <Stack.Screen name="Sidebar" component={Sidebar} />
    </Stack.Navigator>
   </AppContext.Provider>
  );
};
