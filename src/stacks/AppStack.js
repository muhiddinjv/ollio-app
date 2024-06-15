import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { getAccessToken } from '../screens/Auth/astorage';
import { useNavigation } from '@react-navigation/native';

import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import DrawerNav from './DrawerNav';
import Goods from '../screens/Goods/Goods';
import GoodEdit from '../screens/Goods/GoodEdit';
import GoodTabs from '../screens/Goods/GoodTabs';
import GoodAdd from '../screens/Goods/GoodAdd';
import GoodQty from '../screens/Goods/GoodQty';
import Bills from '../screens/Bills/Bills';
import Buyers from '../screens/Users/Buyers';

const Stack = createStackNavigator();
const isSignedIn = true; 

const AppStack = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        navigation.navigate('SignIn');
      } else {
        navigation.navigate('DrawerNav');
      }
    };
    checkToken();
  }, []);

  return (
    <Stack.Navigator initialRouteName={isSignedIn ? 'DrawerNav' : 'SignIn'}>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }}/>
      <Stack.Screen name="GoodEdit" component={GoodEdit} options={{ headerShown: false }}/>
      <Stack.Screen name="GoodTabs" component={GoodTabs} options={{ headerShown: false }}/>
      <Stack.Screen name="GoodQty" component={GoodQty} options={{ headerShown: false }}/>
      <Stack.Screen name="GoodAdd" component={GoodAdd}/>
      <Stack.Screen name="Goods" component={Goods}/>
      <Stack.Screen name="Bills" component={Bills}/>
      <Stack.Screen name="Buyers" component={Buyers}/>
      {/* Common modal screens */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default AppStack;
