import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton, MD3Colors } from "react-native-paper";
import { onlineManager } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import Sidebar from "../components/sidebar";
import { screens } from "../data";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const InitApp = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [screenList] = useState(screens);

  return (
    // <AppContext.Provider value={{ openDrawer, setOpenDrawer }}>
    <Drawer.Navigator
      initialRouteName="Orders"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: MD3Colors.primary40,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <IconButton
            iconColor="white"
            icon="dots-vertical"
            onPress={() => alert("vertical dots pressed")}
          />
        ),
      }}
    >
      {screenList?.map(({ name, screen }: any) => (
        <Drawer.Screen name={name} component={screen} />
      ))}
    </Drawer.Navigator>
    // </AppContext.Provider>
  );
};
