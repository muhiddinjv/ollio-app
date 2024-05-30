import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { IconButton, useTheme } from 'react-native-paper';
import { useColorScheme } from 'nativewind';

import SalesScreen from '../screens/Sales';
import GoodTabs from '../screens/Goods/GoodTabs';
import Sidebar from '../components/Sidebar';
import SignIn from '../screens/Auth/SignIn';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const { colorScheme } = useColorScheme();
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: colorScheme == 'dark' ? '#fff' : '#333',
        drawerLabelStyle: { marginLeft: -25, fontSize: 18}
      }}>
      <Drawer.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          drawerIcon: ({color}) => (
            <IconButton className='m-0' icon="currency-usd" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Goods"
        component={GoodTabs}
        options={{
          drawerIcon: ({color}) => (
            <IconButton className='m-0' icon="format-list-bulleted" iconColor={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          drawerIcon: ({color}) => (
            <IconButton className='m-0' icon="account" iconColor={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
