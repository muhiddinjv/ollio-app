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
      className={`absolute z-10 h-screen ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } ${isDrawerOpen ? "flex" : "hidden"} bg-slate-600`}
    >
      {/* <TouchableOpacity className="border-4 w-full z-50 absolute bg-slate-600" /> */}
      <View className="max-w-50 bg-white">
        <View className="flex-row items-center bg-green-500 border-r border-slate-400">
          <View className=" ">
            <Text className="mt-2 text-lg text-white">user@gmail.com</Text>
            <Text className="mt-2 text-lg text-white">Mega Planet</Text>
            <Text className="mt-2 text-lg text-white">mega planet pos</Text>
          </View>
          <TouchableOpacity onPress={toggleDrawer} className="z-20 h-12 w-12 rounded-full items-center justify-center">
            <Image source={lock} className="h-8 w-8" />
          </TouchableOpacity>
        </View>
        <View className="h-full bg-white border-r border-slate-400">
          {sidebarItems?.map((el: any) => (
            <DrawerItem title={el.name} icon={el.icon} />
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

export default Sidebar;
