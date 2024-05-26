import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import GoodEdit from '../screens/Goods/GoodEdit';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();
const isLoggedIn = true; 

const RootStack = () => {
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
          <Stack.Screen name="GoodEdit" component={GoodEdit} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Group>
      )}
      {/* Common modal screens */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default RootStack;
