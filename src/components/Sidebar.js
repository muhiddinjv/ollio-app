import { View } from "react-native";
import { Text, Switch, Button, IconButton, useTheme } from "react-native-paper";
import { useColorScheme } from "nativewind";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const Sidebar = (props) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const theme = useTheme();

  return (
    <View className="flex-1 w-full dark:bg-slate-800">
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: theme.colors.primary}}>
        <View className="flex-row items-center justify-between px-6 pt-10">
          <View>
            <Text className="pt-2 text-2xl text-white font-bold">Owner</Text>
            <Text className="pt-2 text-lg text-white">POS 1</Text>
            <Text className="pt-2 text-lg text-white">Koriznka</Text>
          </View>
          <IconButton icon="lock" size={35} iconColor={theme.colors.primary} className="bg-white h-12 w-12 rounded-full items-center justify-center" onPress={() => {alert('lock')}} />
        </View>
        <Switch
          color="white"
          className="mr-2"
          value={colorScheme === "light"}
          onChange={toggleColorScheme}
        />
        <View className="bg-white dark:bg-slate-800">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View className="flex-row justify-between p-4 border-t border-gray-300">
        <Button className='w-min' icon="account-voice" mode="contained" onPress={() => {alert('sidebar profile')}}>Share</Button>
        <Button className='w-min' icon="logout" mode="contained" onPress={() => {alert('sign out')}}>Sign Out</Button>
      </View>
    </View>
  );
};

export default Sidebar;
