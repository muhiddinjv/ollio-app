import React from 'react';
import { View } from 'react-native';
import { Button, IconButton, Switch, Text, useTheme } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useColorScheme } from 'nativewind';

import { useAuth } from '../screens/Auth/AuthPro';

function Sidebar(props) {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { signOut, user } = useAuth();
  const { colors } = useTheme();
  console.log('user :>> ', user);

  return (
    <View className="w-full flex-1 dark:bg-slate-800">
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: colors.primary }}>
        <View className="flex-row items-center justify-between px-6 pt-10">
          <View>
            <Text className="pt-2 text-2xl font-bold text-white">{user?.name || 'User'}</Text>
            <Text className="pt-2 text-2xl font-bold text-white">{user?.role || 'Role'}</Text>
            <Text className="pt-2 text-lg text-white">{user?.store_type || 'Store'}</Text>
          </View>
          <IconButton
            icon="lock"
            size={35}
            iconColor={colors.primary}
            className="h-12 w-12 items-center justify-center rounded-full bg-white"
            onPress={() => {
              alert('lock');
            }}
          />
        </View>
        <Switch color="white" className="mb-4 mr-2" value={colorScheme === 'light'} onChange={toggleColorScheme} />
        {/* ----------------------------------- BAD CODE m-[-12] */}
        <View className="m-[-12] bg-white pt-2 dark:bg-slate-800">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View className="flex-row justify-between border-t border-gray-300 p-4">
        <Button
          className="w-min"
          icon="account-voice"
          mode="contained"
          onPress={() => {
            // eslint-disable-next-line no-undef
            alert('sidebar profile');
          }}
        >
          <Text>Share</Text>
        </Button>
        <Button className="w-min" icon="logout" mode="contained" onPress={signOut}>
          <Text>Sign Out</Text>
        </Button>
      </View>
    </View>
  );
}

export default Sidebar;
