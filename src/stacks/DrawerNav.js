import { IconButton, useTheme } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'nativewind';

import BillCart from '../screens/Bills/BillCart';
import BillDetails from '../screens/Bills/BillDetails';
import BillList from '../screens/Bills/BillList';
import GoodEdit from '../screens/Goods/GoodEdit';
import GoodsAdd from '../screens/Goods/GoodsAdd';
import GoodTabs from '../screens/Goods/GoodTabs';
import SaleMade from '../screens/Sales/SaleMade';
import SalesList from '../screens/Sales/SalesList';
import UserAdd from '../screens/Users/UserAdd';
import UserEdit from '../screens/Users/UserEdit';
import UserList from '../screens/Users/UserList';
import UserProfile from '../screens/Users/UserProfile';

import Sidebar from './Sidebar';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Goods() {
  return (
    <Stack.Navigator initialRouteName="GoodTabs" headerShown={false}>
      <Stack.Screen name="GoodTabs" component={GoodTabs} options={{ headerShown: false }} />
      <Stack.Screen name="GoodEdit" component={GoodEdit} options={{ headerShown: false }} />
      <Stack.Screen name="GoodsAdd" component={GoodsAdd} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function DrawerNav() {
  const { colorScheme } = useColorScheme();
  const { colors } = useTheme();

  const hidden = { drawerItemStyle: { display: 'none' }, headerShown: false };

  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: colorScheme === 'dark' ? '#fff' : '#333',
        drawerLabelStyle: { fontSize: 18 },
        drawerItemStyle: {
          borderRadius: 5,
          marginHorizontal: 10,
        },
      })}
    >
      <Drawer.Screen
        name="Savdo"
        component={SalesList}
        options={{
          drawerIcon: ({ color }) => <IconButton className="m-0" icon="currency-usd" iconColor={color} />,
        }}
      />
      <Drawer.Screen
        name="Tovarlar"
        component={Goods}
        options={{
          drawerIcon: ({ color }) => (
            <IconButton
              className="m-0"
              icon="format-list-bulleted"
              iconColor={color}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cheklar"
        component={BillList}
        options={{
          drawerIcon: ({ color }) => <IconButton className="m-0" icon="cash-fast" iconColor={color} />,
        }}
      />
      <Drawer.Screen name="SaleMade" component={SaleMade} options={hidden} />
      <Drawer.Screen name="BillCart" component={BillCart} options={hidden} />
      <Drawer.Screen name="BillDetails" component={BillDetails} options={hidden} />
      <Drawer.Screen name="UserList" component={UserList} options={hidden} />
      <Drawer.Screen name="UserAdd" component={UserAdd} options={hidden} />
      <Drawer.Screen name="UserEdit" component={UserEdit} options={hidden} />
      <Drawer.Screen name="UserProfile" component={UserProfile} options={hidden} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
