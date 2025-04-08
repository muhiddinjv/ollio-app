import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, useTheme } from "react-native-paper";
import { useColorScheme } from "nativewind";
import Sidebar from "./Sidebar";
import { getAccessToken } from "../screens/Auth/astorage";
import SignIn from "../screens/Auth/SignIn";
import SignupScreen from "../screens/Auth/SignUp";
import SalesList from "../screens/Sales/SalesList";
import GoodsList from "../screens/Goods/GoodsList";
import BillList from "../screens/Bills/BillList";
import UserList from "../screens/Users/UserList";
import UserAdd from "../screens/Users/UserAdd";
import UserEdit from "../screens/Users/UserEdit";
import UserProfile from "../screens/Users/UserProfile";
import BillCart from "../screens/Bills/BillCart";
import BillOpen from "../screens/Bills/BillOpen";
import BillDetails from "../screens/Bills/BillDetails";
import BillCartItemCount from "../screens/Bills/BillCartItemCount";
import GoodsAdd from "../screens/Goods/GoodsAdd";
import GoodTabs from "../screens/Goods/GoodTabs";
import PaidScreen from "../screens/Payment/Paid";
import GoodQty from "../screens/Goods/GoodQty";
import SaleMade from "../screens/Sales/SaleMade";

const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const { colors } = useTheme();

  const hidden = { drawerItemStyle: { display: "none" }, headerShown: false };

  React.useEffect(() => {
    const checkToken = async () => {
      const accessToken = await getAccessToken();
      console.log("Access Token:", accessToken);
      if (!accessToken) {
        console.log("No access token found. Redirecting to SignIn...");
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: colorScheme == "dark" ? "#fff" : "#333",
        drawerLabelStyle: { fontSize: 18 },
        drawerItemStyle: {
          borderRadius: 5,
          marginHorizontal: 10,
        },
      })}
    >
      <Drawer.Screen
        name="Sales"
        component={SalesList}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton className="m-0" icon="currency-usd" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Goods"
        component={GoodTabs}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton
              className="m-0"
              icon="format-list-bulleted"
              iconColor={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Bills"
        component={BillList}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton className="m-0" icon="cash-fast" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Paid"
        component={PaidScreen}
        options={{
          headerStyle: {
            backgroundColor: "rgba(103, 80, 164, 1)",
          },
          headerTitle: "",
          headerTintColor: "white",
          headerLeft: () => null,
          drawerItemStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Drawer.Screen name="SaleMade" component={SaleMade} options={hidden} />
      <Drawer.Screen name="GoodQty" component={GoodQty} options={hidden} />
      <Drawer.Screen name="BillCart" component={BillCart} options={hidden} />
      <Drawer.Screen name="BillOpen" component={BillOpen} options={hidden} />
      <Drawer.Screen name="BillDetails" component={BillDetails} options={hidden} />
      <Drawer.Screen name="BillCartItemCount" component={BillCartItemCount} options={hidden} />
      <Drawer.Screen name="GoodsAdd" component={GoodsAdd} options={hidden}/>
      <Drawer.Screen name="GoodsList" component={GoodsList} options={hidden} />
      <Drawer.Screen name="SignIn" component={SignIn} options={hidden} />
      <Drawer.Screen name="SignUp" component={SignupScreen} options={hidden} />
      <Drawer.Screen name="UserList" component={UserList} options={hidden} />
      <Drawer.Screen name="UserAdd" component={UserAdd} options={hidden} />
      <Drawer.Screen name="UserEdit" component={UserEdit} options={hidden} />
      <Drawer.Screen name="UserProfile" component={UserProfile} options={hidden} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

/*
client: 67c04aa89b212873f50d2cee
67b85cc8ac2e3c40d155f6e3
67b85cc8ac2e3c40d155f6f2
*/