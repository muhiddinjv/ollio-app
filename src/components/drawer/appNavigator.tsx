// AppNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ItemsScreen from "../../screens/splash/index";
import DrawerContent from "./drawerContent";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={ItemsScreen} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
