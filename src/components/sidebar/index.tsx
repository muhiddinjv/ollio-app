import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { sidebarItems } from "../../data/static.data";
import { lock } from "../../constants/icons";
import { Drawer } from "react-native-paper";

const Sidebar = ({ openDrawer, toggleDrawer, navigation }: any) => {
  const [active, setActive] = useState(0);

  return (
    <Drawer.Section
      style={{
        zIndex: 40,
        width: "100%",
        height: "100%",
        position: "absolute",
        display: openDrawer ? "flex" : "none",
      }}
    >
      <TouchableOpacity onPress={toggleDrawer} className="absolute w-full h-full bg-black opacity-60" />
      <View className="w-4/6">
        <View className="flex-row items-center justify-between p-4 py-10 bg-green-500">
          <View>
            <Text className="mt-2 text-2xl text-white font-bold">Owner</Text>
            <Text className="mt-2 text-lg text-white">POS 1</Text>
            <Text className="mt-2 text-lg text-white">Koriznka</Text>
          </View>
          <TouchableOpacity
            onPress={toggleDrawer}
            className="bg-white h-12 w-12 rounded-full items-center justify-center"
          >
            <Image source={lock} className="h-8 w-8" />
          </TouchableOpacity>
        </View>

        <View className="h-full bg-white py-4">
          {sidebarItems?.map((el: any, index) => (
            <Drawer.Item
              onPress={() => {
                setActive(index)
                // ,navigation.navigate(el.screen)
              }}
              key={index}
              active={active === index}
              label={el.name}
              icon={el.icon}
            />
          ))}
        </View>
      </View>
    </Drawer.Section>
  );
};

export default Sidebar;
