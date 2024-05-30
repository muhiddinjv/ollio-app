import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import GoodEdit from '../screens/Goods/GoodEdit';
import Goods from '../screens/Goods/Goods';
import DrawerNav from './DrawerNav';
import GoodTabs from '../screens/Goods/GoodTabs';
import { getAccessToken } from '../screens/Auth/astorage';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const isLoggedIn = false; 

const AppStack = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const accessToken = await getAccessToken();
      console.log({accessToken});
      if (!accessToken) {
        navigation.navigate('SignIn');
      } else {
        navigation.navigate('DrawerNav');
      }
    };

    checkToken();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
      <Stack.Screen name="GoodEdit" component={GoodEdit}/>
      <Stack.Screen name="GoodTabs" component={GoodTabs}/>
      <Stack.Screen name="Goods" component={Goods}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      {/* Common modal screens */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default AppStack;
