import { useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Text, Icon, Switch } from "react-native-paper";
import { useColorScheme } from "nativewind";

import { MainColors } from "../theme";
import { sidebarItems } from "../utils/data";

function SidebarItem({ item, navigate }: any) {
  return (
    <TouchableOpacity
      className="items-center flex-row px-5 py-2 dark:bg-slate-800"
      onPress={() => navigate(item.name)}
    >
      <Icon source={item.icon} color={MainColors.primary} size={30} />
      <Text className="text-xl ml-4 text-black dark:text-white">{item.name}</Text>
    </TouchableOpacity>
  );
}

const Sidebar = ({ navigation }: any) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [active, setActive] = useState(0);

  return (
    <View>
      <View className="flex-row items-center justify-between px-6 pt-10 bg-purple-800">
        <View>
          <Text className="pt-2 text-2xl text-white font-bold">Owner</Text>
          <Text className="pt-2 text-lg text-white">POS 1</Text>
          <Text className="pt-2 text-lg text-white">Koriznka</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.closeDrawer()}
          className="bg-white h-12 w-12 rounded-full items-center justify-center"
        >
          <Icon source="lock" size={35} color={MainColors.primary} />
        </TouchableOpacity>
      </View>

      <Switch
        className="bg-purple-800"
        // color="white"
        value={colorScheme === "dark"}
        onChange={toggleColorScheme}
      />
      <View className="pt-3 h-full dark:bg-slate-800">
      <FlatList
        className="h-full"
        data={sidebarItems}
        renderItem={({ item, index }: any) => (
          <SidebarItem key={index} item={item} navigate={navigation.navigate} />
        )}
      />
      </View>
    </View>
  );
};

export default Sidebar;
