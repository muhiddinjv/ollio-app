import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { onlineManager } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";

import ThreeDots from "../components/ThreeDots";
import Sidebar from "../components/Sidebar";
import { MainColors } from "../theme";

//AUTH
// import SignInScreen from "../screens/Auth/SignIn";
// import SignupScreen from "../screens/Auth/SignUp";
// import SplashScreen from "../screens/Auth/Splash";
// import SelectScreen from "../screens/Auth/SelectStore";
// import PinCodeScreen from "../screens/Auth/PinCode";

//ITEMS
import ItemsMenu from "../screens/Goods/ItemsMenu";
import AllItems from "../screens/Goods/AlIItems";
import EditItem from "../screens/Goods/EditItem";
import SearchScreen from "../screens/Goods/SearchItem";
import AddToCartScreen from "../screens/Goods/AddToCart";
// import AllItems from "../screens/orders";

//PAYMENT
import RefundScreen from "../screens/Payment/Refund";
import QuantityScreen from "../screens/Payment/Quantity";
import PaymentScreen from "../screens/Payment/Payment";
import PaidScreen from "../screens/Payment/Paid";
import TicketScreen from "../screens/Payment/Ticket";

//CUSTOMER
import AddCustomerScreen from "../screens/Users/AddCustomer";
import CustomersScreen from "../screens/Users/Customers";
import EditCustomerScreen from "../screens/Users/EditCustomer";
import CustomerProfileScreen from "../screens/Users/CustomerProfile";

//ORDER
import Orders from "../screens/Orders/Orders";
import SaveOrder from "../screens/Orders/SaveOrder";
import AssignOrder from "../screens/Orders/AssignOrder";

import BottomTabs from "../components/bottom_tabs";
import SalesScreen from "../screens/Sales";
import SignIn from "../screens/Auth/SignIn";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

const Drawer = createDrawerNavigator();

export const InitApp = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleMenu = () => setVisible(!visible);

  return (
    <Drawer.Navigator
      initialRouteName="AllItems"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: MainColors.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        headerRight: () => (
          <ThreeDots visible={visible} toggleMenu={toggleMenu} />
        ),
      }}
    >
      <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Drawer.Screen name="Sales" component={SalesScreen} />
      <Drawer.Screen name="Items" component={ItemsMenu} />
      <Drawer.Screen name="EditItem" component={EditItem} />
      <Drawer.Screen name="AllItems" component={AllItems} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="SaveOrder" component={SaveOrder} />
      <Drawer.Screen name="AssignOrder" component={AssignOrder} />
      <Drawer.Screen name="AddToCart" component={AddToCartScreen} />
      {/* <Drawer.Screen name="Splash" component={SplashScreen} />
      <Drawer.Screen name="Signin" component={SignInScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
      <Drawer.Screen name="SelectStore" component={SelectScreen} />
      <Drawer.Screen name="PinCode" component={PinCodeScreen} /> */}
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="AddCustomer" component={AddCustomerScreen} />
      <Drawer.Screen name="CustomerProfile" component={CustomerProfileScreen} />
      <Drawer.Screen name="EditCustomer" component={EditCustomerScreen} />
      <Drawer.Screen name="Customers" component={CustomersScreen} />
      <Drawer.Screen name="Refund" component={RefundScreen} />
      <Drawer.Screen name="Quantity" component={QuantityScreen} />
      <Drawer.Screen name="Payment" component={PaymentScreen} />
      <Drawer.Screen name="Paid" component={PaidScreen} />
      <Drawer.Screen name="Ticket" component={TicketScreen} />
      {/* FIX BottomTabs STYLE */}
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
};
