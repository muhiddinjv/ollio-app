import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Button } from 'react-native-paper';
import { MainColors } from '../theme';

import SalesScreen from '../screens/Sales';
import ItemsMenu from '../screens/Goods/ItemsMenu';
import AllGoods from '../screens/Goods/AllGoods';
import SignIn from '../screens/Auth/SignIn';
import Sidebar from '../components/Sidebar';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: MainColors.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        drawerActiveBackgroundColor: '#8200d6',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 18,
        }
      }}>
      <Drawer.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Button icon="currency-usd" textColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Goods"
        component={AllGoods}
        options={{
          drawerIcon: ({color}) => (
            <Button icon="box" textColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Items"
        component={ItemsMenu}
        options={{
          drawerIcon: ({color}) => (
            <Button icon="arrow-up" textColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          drawerIcon: ({color}) => (
            <Button icon="login" textColor={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
