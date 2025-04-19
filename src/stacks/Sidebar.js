import React from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { Text, Switch, Button, IconButton, useTheme } from "react-native-paper";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useAuth } from "../screens/Auth/AuthPro";
import { jwtDecode } from "jwt-decode";

const Sidebar = (props) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { signOut, userToken } = useAuth();
  const theme = useTheme();

  const user = React.useMemo(() => {
    try {
      return userToken ? jwtDecode(userToken) : null;
    } catch (e) {
      return null;
    }
  }, [userToken]);


  return (
    <View className="flex-1 w-full dark:bg-slate-800">{/* -- REMOVE PADDING DrawerContentScrollView ---*/}
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: theme.colors.primary}}>
        <View className="flex-row items-center justify-between px-6 pt-10">
          <View>
            <Text className="pt-2 text-2xl text-white font-bold">{user?.name || 'User'}</Text>
            <Text className="pt-2 text-2xl text-white font-bold">{user?.role || 'Role'}</Text>
            <Text className="pt-2 text-lg text-white">{user?.store_type || 'Store'}</Text>
          </View>
          <IconButton icon="lock" size={35} iconColor={theme.colors.primary} className="bg-white h-12 w-12 rounded-full items-center justify-center" onPress={() => {alert('lock')}} />
        </View>
        <Switch
          color="white"
          className="mr-2 mb-4"
          value={colorScheme === "light"}
          onChange={toggleColorScheme}
        />
        {/* ----------------------------------- BAD CODE m-[-12]*/}
        <View className="bg-white dark:bg-slate-800 pt-2 m-[-12]">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View className="flex-row justify-between p-4 border-t border-gray-300">
        <Button className='w-min' icon="account-voice" mode="contained" onPress={() => {alert('sidebar profile')}}>Share</Button>
        <Button className='w-min' icon="logout" mode="contained" onPress={signOut}>Sign Out</Button>
      </View>
    </View>
  );
};

export default Sidebar;
