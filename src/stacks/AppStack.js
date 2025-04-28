import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../screens/Auth/AuthPro';
import SignIn from '../screens/Auth/SignIn';
import Splash from '../screens/Auth/Splash';

import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

function AppStack() {
  const { signedIn, isLoading } = useAuth();
  if (isLoading) return <Splash />;

  return (
    <Stack.Navigator headerShown={false}>
      {signedIn ? (
        <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
