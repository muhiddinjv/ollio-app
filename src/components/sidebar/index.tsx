import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
import { sidebarItems } from "../../data/static.data";
import { lock } from "../../constants/icons";
import DrawerItem from "../drawer_item";

const Sidebar = ({
  isDrawerOpen,
  toggleDrawer,
}: any) => {
  return (
    <Animated.View
      className={`absolute w-full z-20 h-screen ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } ${isDrawerOpen ? "flex" : "hidden"} `}
    >
      <TouchableOpacity onPress={toggleDrawer} className="w-full h-full absolute bg-slate-800 opacity-50"/>
      <View className="w-72">
        <View className="flex-row items-center justify-between p-4 py-10 bg-green-500 border-r border-slate-400">
          <View>
            <Text className="mt-2 text-2xl text-white font-bold">Owner</Text>
            <Text className="mt-2 text-lg text-white">POS 1</Text>
            <Text className="mt-2 text-lg text-white">Koriznka</Text>
          </View>
          <TouchableOpacity onPress={toggleDrawer} className="bg-white h-12 w-12 rounded-full items-center justify-center">
            <Image source={lock} className="h-8 w-8" />
          </TouchableOpacity>
        </View>
        <View className="h-full bg-white border-r border-slate-400 py-4">
          {sidebarItems?.map((el: any, index) => (
            <DrawerItem key={index} title={el.name} icon={el.icon} />
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

export default Sidebar;
