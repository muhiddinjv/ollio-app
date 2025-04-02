import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, useTheme } from "react-native-paper";
import { useColorScheme } from "nativewind";

import GoodStack from "./GoodStack";
import BillStack from "./BillStack";
import SaleStack from "./SaleStack";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import Sidebar from "./Sidebar";
import { getAccessToken } from "../screens/Auth/astorage";

const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }) => {
  console.log('2) DrawerNav loaded');
  const { colorScheme } = useColorScheme();
  const { colors } = useTheme();

  React.useEffect(() => {
    const checkToken = async () => {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        navigation.navigate("Auth");
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
          marginHorizontal: 10
        }
      })}
    >
      <Drawer.Screen
        name="Sales"
        component={SaleStack}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton className="m-0" icon="currency-usd" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Goods"
        component={GoodStack}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton
              className="m-0"
              icon="format-list-bulleted"
              iconColor={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Bills"
        component={BillStack}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton className="m-0" icon="cash-fast" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Users"
        component={UserStack}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="Auth"
        component={AuthStack}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
