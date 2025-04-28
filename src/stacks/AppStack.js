import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../screens/Auth/AuthPro';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Splash from '../screens/Auth/Splash';

import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

function AppStack() {
  const { signedIn, isLoading } = useAuth();
  console.log('AppStack signedIn :>> ', signedIn);
  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
        {signedIn ? (
          <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
