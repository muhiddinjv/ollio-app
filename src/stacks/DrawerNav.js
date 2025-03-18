import React from "react";
import { Platform, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, useTheme, Text, Button } from "react-native-paper";
import { useColorScheme } from "nativewind";

import SignOutScreen from "../screens/Auth/SignOut";
import GoodTabs from "../screens/Goods/GoodTabs";
import SalesScreen from "../screens/Sales/Sales";
import Sidebar from "../components/Sidebar";
import Bills from "../screens/Bills/Bills";
import { useGlobalState } from "../hooks/useGlobalState";

const Drawer = createDrawerNavigator();
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const DrawerNav = ({ navigation }) => {
  const { goodQty } = useGlobalState();
  const { colorScheme } = useColorScheme();
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={({ route }) => ({
        headerRight: () => {
          if (route.name === "Sales") {
            return (
              <View className="flex-row items-center">
                <Button
                  icon="cart"
                  mode="contained"
                  labelStyle={{ fontSize: 19 }}
                  onPress={() => navigation.navigate("BillCart")}
                >
                  {goodQty}
                </Button>
                <IconButton
                  icon="account-plus"
                  iconColor="white"
                  size={25}
                  onPress={() => navigation.navigate("Buyers")}
                />
                <IconButton
                  icon={MORE_ICON}
                  iconColor="white"
                  size={25}
                  onPress={() => console.log("more")}
                />
              </View>
            );
          }
          if (route.name === "Goods") {
            return (
              <IconButton
                icon="magnify"
                iconColor="white"
                size={25}
                onPress={() => console.log("search")}
              />
            );
          }
        },
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: colorScheme == "dark" ? "#fff" : "#333",
        drawerLabelStyle: { marginLeft: -25, fontSize: 18 },
      })}
    >
      <Drawer.Screen
        name="Sales"
        component={SalesScreen}
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
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Bills"
        component={Bills}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton className="m-0" icon="cash-fast" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign out"
        component={SignOutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton className="m-0" icon="logout" iconColor={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
