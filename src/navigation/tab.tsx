import {Image, View, Text} from 'react-native';
import {useState, useEffect, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PrintScreen from '../screens/tabs/print';
import CartScreen from '../screens/tabs/all_products';
import ProfileScreen from '../screens/tabs/change_language';
import CatalogScreen from '../screens/tabs/email';
import HistoryOrders from '../screens/tabs/history_orders';

import {
  print_select,
  email_select,
  share_select,
  pdf_select,
} from '../contants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();

const tabOptions = {
  headerShown: false,
  showLabel: false,
  style: {
    height: 100,
  },
};

const Tabs = ({navigation, route}:{navigation:any, route:any}) => {
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState('');
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    setName('Home');
    setRefresh(refresh!);
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      initialRouteName="Home"
      tabBarIcon=""
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveBackgroundColor: '#FFBF00',
        tabBarInactiveBackgroundColor: '#333333',
        headerShown: false,
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={print_select}
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: 'contain',
                      }}
                    />
                    {/* <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                      }}>
                      {I18n.t('home')}
                    </Text> */}
                  </View>
                </>
              );
            case 'Catalog':
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={pdf_select}
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: 'contain',
                      }}
                    />
                    {/* <Text>{I18n.t('catalog')}</Text> */}
                  </View>
                </>
              );
            case 'Cart':
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={cart_unselect}
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: 'contain',
                      }}
                    />
                    {/* <Text>{I18n.t('cart')}</Text> */}
                  </View>
                </>
              );
            case 'HistoryOrders':
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={dostavka}
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: 'contain',
                      }}
                    />
                    <Text>Favorite</Text>
                  </View>
                </>
              );
            case 'Account':
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={share_select}
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: 'contain',
                      }}
                    />
                    <Text>Account</Text>
                  </View>
                </>
              );
          }
        },
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image
                  source={pdf_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text style={{color: 'black'}}>{I18n.t('catalog')}</Text> */}
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={pdf_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text>{I18n.t('catalog')}</Text> */}
              </View>
            ),
        }}
        name="Catalog"
        component={CatalogScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image
                  source={email_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text style={{color: 'black'}}>{I18n.t('cart')}</Text> */}
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={email_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text>{I18n.t('cart')}</Text> */}
              </View>
            ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={print_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text style={{color: 'black'}}>{I18n.t('home')} </Text> */}
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={print_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text>{I18n.t('home')}</Text> */}
              </View>
            ),
        }}
        component={PrintScreen}
      />
      {userToken ? (
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Image
                    source={dostavka}
                    style={{
                      width: 24,
                      height: 24,
                      objectFit: 'contain',
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={dostavka}
                    style={{
                      width: 24,
                      height: 24,
                      objectFit: 'contain',
                    }}
                  />
                </View>
              ),
          }}
          name="HistoryOrders"
          component={HistoryOrders}
        />) : (null)}
        
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image
                  source={share_select}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'contain',
                  }}
                />
                {/* <Text style={{color: 'black'}}>{I18n.t('profile')}</Text> */}
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Image
                  source={share_select}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
                {/* <Text>{I18n.t('profile')}</Text> */}
              </View>
            ),
        }}
        name="Account"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
