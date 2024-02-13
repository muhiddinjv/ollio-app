import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
import { INavigation } from "../../utils/interfaces";
import AppBarItem from "../../components/app_bar/item_app_bar";
import Sidebar from "../../components/sidebar";
import { homePages } from "../../data/static.data";

const HomeScreen = ({ navigation }: INavigation) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerWidth = 300;
  const animatedValue = new Animated.Value(0);

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev)

  return (
    <View className="">
      {isDrawerOpen && <Animated.View style={{ opacity: animatedValue }} />}
      <AppBarItem title="Items" toggleDrawer={toggleDrawer} />
      <Sidebar
        navigation={navigation}
        isDrawerOpen={isDrawerOpen}
        animatedValue={animatedValue}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      {homePages?.map((el: any) => (
        <TouchableOpacity
          className="h-16 bg-white justify-center px-4 flex-row items-center"
          onPress={() => navigation.navigate(el.navigation)}
        >
          <Image source={el.icon} className="h-8 w-8 m-2" tintColor="black" />
          <View className="flex-1 ml-2">
            <Text className="text-lg font-medium m-2">{el.name}</Text>
            <View className="h-0.5 bg-slate-800 w-full" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;
