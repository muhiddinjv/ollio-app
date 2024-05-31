import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { IconButton, useTheme } from 'react-native-paper';
import { useColorScheme } from 'nativewind';

import SignOutScreen from '../screens/Auth/SignOut';
import GoodTabs from '../screens/Goods/GoodTabs';
import SalesScreen from '../screens/Sales';
import Sidebar from '../components/Sidebar';

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
        name="Sign out"
        component={SignOutScreen}
        options={{
          drawerIcon: ({color}) => (
            <IconButton className='m-0' icon="logout" iconColor={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
