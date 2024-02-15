import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
import { AppContext, INavigation } from "../../utils/interfaces";
import { homePages } from "../../data/static.data";
import Sidebar from "../../components/sidebar";
import AppBar from "../../components/appbar";

const ItemsScreen = ({ navigation }: INavigation) => {
  const {openDrawer, setOpenDrawer} = useContext(AppContext);
  const drawerWidth = 300;
  const animatedValue = new Animated.Value(0);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <View className="h-full bg-white">
      <AppBar title="Items" hamburgerIcon={{ onPress: toggleDrawer }} />
      <Sidebar
        navigation={navigation}
        openDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
      />
      {homePages?.map((el: any, index) => (
        <TouchableOpacity
          key={index}
          className="ml-2 h-16 flex-row items-center p-4"
          onPress={() => navigation.navigate(el.navigation)}
        >
          <Image source={el.icon} className="h-6 w-6 mr-4" tintColor='black' />
          <View className="flex-grow border-b border-slate-800">
            <Text className="text-slate-800 text-lg">{el.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ItemsScreen;
