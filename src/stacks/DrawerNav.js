import React from "react";
import { Platform, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, useTheme, Button } from "react-native-paper";
import { useColorScheme } from "nativewind";

import GoodStack from "./GoodStack";
import Sidebar from "./Sidebar";
import { useGlobalState } from "../hooks";
import BillStack from "./BillStack";
import SaleStack from "./SaleStack";

const Drawer = createDrawerNavigator();
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const DrawerNav = ({ navigation }) => {
  console.log('2) DrawerNav loaded');
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
                  onPress={() => navigation.navigate("Users")}
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
    </Drawer.Navigator>
  );
};

export default DrawerNav;
