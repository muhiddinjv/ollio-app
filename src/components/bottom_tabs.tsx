import { Image, View, Text } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PrintScreen from "./tabs/print";
import CartScreen from "./tabs/all_products";
import ProfileScreen from "./tabs/change_language";
import CatalogScreen from "./tabs/email";
import HistoryOrders from "./tabs/history_orders";

import {
  print_select,
  email_select,
  share_select,
  pdf_select,
} from "../utils/icons";
import { INavigation } from "../utils/interfaces";
const Tab = createBottomTabNavigator();

const tabOptions = {
  headerShown: false,
  showLabel: false,
  style: {
    height: 100,
  },
};

const BottomTabs = ({ navigation, route }: INavigation) => {
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState("");
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    setName("Home");
    setRefresh(refresh!);
  }, []);

  const tabOptions = {
    tabBarActiveTintColor: "#0066CC",
    tabBarInactiveTintColor: "#FFFFFF",
    tabBarActiveBackgroundColor: "#FFBF00",
    tabBarInactiveBackgroundColor: "#333333",
    headerShown: false,
  };

  return (
    <Tab.Navigator
      // tabBarOptions={tabOptions}
      initialRouteName="Home"
      // tabBarIcon=""
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case "Home":
              return (
                <View className="flex-col items-center">
                  <Image
                    source={print_select}
                    className="w-24 h-24 object-contain"
                  />
                  {/* <Text>{I18n.t('home')}</Text> */}
                </View>
              );
            case "Catalog":
              return (
                <View className="flex-col items-center">
                  <Image
                    source={pdf_select}
                    className="w-24 h-24 object-contain"
                  />
                  {/* <Text>{I18n.t('catalog')}</Text> */}
                </View>
              );
            case "Cart":
              return (
                <View className="flex-col items-center">
                  {/* <Image source={cart_unselect} className="w-24 h-24 object-contain" /> */}
                  {/* <Text>{I18n.t('cart')}</Text> */}
                </View>
              );
            case "HistoryOrders":
              return (
                <View className="flex-col items-center">
                  {/* <Image source={dostavka} className="w-24 h-24 object-contain" /> */}
                  <Text>Favorite</Text>
                </View>
              );
            case "Account":
              return (
                <View className="flex-col items-center">
                  <Image
                    source={share_select}
                    className="w-24 h-24 object-contain"
                  />
                  <Text>Account</Text>
                </View>
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <Image source={pdf_select} className="w-24 h-24 object-contain" />
              {/* <Text>{I18n.t('catalog')}</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <Image
                source={email_select}
                className="w-24 h-24 object-contain"
              />
              {/* <Text>{I18n.t('cart')}</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={PrintScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <Image
                source={print_select}
                className="w-24 h-24 object-contain"
              />
              {/* <Text>{I18n.t('home')}</Text> */}
            </View>
          ),
        }}
      />
      {userToken ? (
        <Tab.Screen
          name="HistoryOrders"
          component={HistoryOrders}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="flex-col items-center">
                {/* <Image source={dostavka} className="w-24 h-24 object-contain" /> */}
              </View>
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center">
              <Image source={share_select} className="w-24 h-24" />
              {/* <Text>{I18n.t('profile')}</Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
