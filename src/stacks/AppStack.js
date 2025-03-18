import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getAccessToken } from "../screens/Auth/astorage";
import { useNavigation } from "@react-navigation/native";

import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import DrawerNav from "./DrawerNav";
import GoodsList from "../screens/Goods/GoodsList";
import GoodEdit from "../screens/Goods/GoodEdit";
import GoodTabs from "../screens/Goods/GoodTabs";
import GoodsAdd from "../screens/Goods/GoodsAdd";
import GoodQty from "../screens/Goods/GoodQty";
import Bills from "../screens/Bills/Bills";
import Buyers from "../screens/Users/Buyers";
import OpenTickets from "../screens/Sales/OpenTickets";
import { AntDesign } from "@expo/vector-icons";
import SaveTicket from "../screens/Sales/SaveTicket";
import BillDetails from "../screens/Bills/BillDetails";
import { Pressable, View } from "react-native";
import PaidScreen from "../screens/Payment/Paid";
import PaymentScreen from "../screens/Payment/Payment";
import SalesScreen from "../screens/Sales/Sales";
import BillCart from "../screens/Bills/BillCart";
import BillCartItemCount from "../screens/Bills/BillCartItemCount";
const Stack = createStackNavigator();
const isSignedIn = true;

const AppStack = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        navigation.navigate("SignIn");
      } else {
        navigation.navigate("DrawerNav");
      }
    };
    checkToken();
  }, []);

  return (
    <Stack.Navigator initialRouteName={isSignedIn ? "DrawerNav" : "SignIn"}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GoodTabs"
        component={GoodTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GoodQty"
        component={GoodQty}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Goods" component={GoodsList} />
      <Stack.Screen name="Bills" component={Bills} />
      <Stack.Screen name="Buyers" component={Buyers} />
      <Stack.Screen 
        name="GoodsAdd" 
        component={GoodsAdd}
        options={{
          headerStyle: {
            backgroundColor: "rgba(103, 80, 164, 1)",
          },
          headerTitle: "Manage Goods",
          headerTintColor: "white",
        }}
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
        name="BillDetails"
        component={BillDetails}
        options={{
          headerStyle: { backgroundColor: "rgba(103, 80, 164, 1)" },
          headerTintColor: "white",
          // headerLeft: () => (
          //   <View className="pl-4">
          //     <AntDesign name="arrowleft" size={24} color="white" />
          //   </View>
          // ),
          // headerTitle: "",
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
      <Stack.Screen
        name="BillCart"
        component={BillCart}
        options={{
          headerStyle: {
            backgroundColor: "rgba(103, 80, 164, 1)",
          },
          headerTitle: "Bills cart",
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} className="pl-2">
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
          ),
          headerTintColor: "white",
        }}
      />
       <Stack.Screen
        name="BillCartItemCount"
        component={BillCartItemCount}
        options={{
          headerTitle: "",
          headerBackImage: () => (
            <AntDesign name="close" size={20} color="black" />
          ),
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      />

      {/* Common modal screens */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default AppStack;
