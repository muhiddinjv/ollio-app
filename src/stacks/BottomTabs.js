import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { IconButton } from 'react-native-paper';
import Catalog from '../screens/Goods/Catalog';
import GoodEdit from '../screens/Goods/GoodEdit';
import Goods from '../screens/Goods/Goods';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const GoodStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Goods" component={Goods}/>
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <IconButton name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GoodTabs"
        component={Goods}
        options={({route}) => ({
          tabBarStyle: {
            color: 'black',
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <IconButton name="home-outline" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="GoodEditor"
        component={GoodEdit}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconButton name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log(routeName);

  // if( routeName == 'Goods' ) {
  //   return 'none';
  // }
  return 'flex';
};

export default BottomTabs;
