import { View, TouchableOpacity, FlatList } from "react-native";
import { Text, Icon, Switch } from "react-native-paper";
import { useColorScheme } from "nativewind";

import { MainColors } from "../theme";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const Sidebar = (props) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className='flex-1'>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <View className="flex-row items-center justify-between px-6 pt-10">
          <View>
            <Text className="pt-2 text-2xl text-white font-bold">Owner</Text>
            <Text className="pt-2 text-lg text-white">POS 1</Text>
            <Text className="pt-2 text-lg text-white">Koriznka</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('sidebar lock')}
            className="bg-white h-12 w-12 rounded-full items-center justify-center"
          >
            <Icon source="lock" size={35} color={MainColors.primary} />
          </TouchableOpacity>
        </View>
        <Switch
          className="bg-primary"
          // color="white"
          value={colorScheme === "light"}
          onChange={toggleColorScheme}
        />
        <View className="flex-1 pt-10 px-6 bg-white dark:bg-slate-800">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View className="p-5 border-t border-gray-300 dark:bg-slate-800">
        <TouchableOpacity onPress={() => {}} className="py-4">
          <View className="flex items-center">
            <Icon source="format-list-bulleted" size={22} />
            <Text className="text-base ml-2">Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} className="py-4">
          <View className="flex items-center">
            <Icon source="content-copy" size={22} />
            <Text className="text-base ml-2">Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;
