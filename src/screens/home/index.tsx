import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";
import { INavigation } from "../../utils/interfaces";
import { apps, back_office, burger_icon, category, discount_icon, information, lock, receipt, sales, setting } from "../../contants/icons";
import AppBarItem from "../../components/app_bar/item_app_bar";
import DrawerItem from "../../components/drawer_item";

//TODO: FIX HOME PAGE STYLE
const HomeScreen = ({ navigation }: INavigation) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerWidth = 300;
  const animatedValue = new Animated.Value(0);

  const toggleDrawer = () => {
    const toValue = isDrawerOpen ? 0 : 1;

    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsDrawerOpen(!isDrawerOpen);
    });
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-drawerWidth, 0],
  });
  const contentOpacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 0],
  });

  return (
    <View className="flex-row bg-white">
      {isDrawerOpen && (
        <Animated.View className="absolute inset-0 bg-black opacity-50" style={{ opacity: animatedValue }} />
      )}
      <Animated.View
        className={`absolute h-full bg-white border-r border-gray-300 shadow-xl z-10 transition-transform transform ${
          isDrawerOpen ? 'translate-x-0' : `-translate-x-${drawerWidth}`
        }`}
      >
        <View className="h-100 bg-green-500 flex flex-col px-6">
          <Text className="mt-52 text-xl overflow-hidden">user1@gmail.com</Text>
          <Text className="mt-2 text-base overflow-hidden">user2@gmail.com</Text>
        </View>
        <View>
          <DrawerItem title="Sales" icon={sales} />
          <DrawerItem title="Receipt" icon={receipt} />
          <DrawerItem title="Items" icon={burger_icon} />
          <DrawerItem title="Settings" icon={setting} />
          <DrawerItem title="Back Office" icon={back_office} />
          <DrawerItem title="Apps" icon={apps} />
          <DrawerItem title="Support" icon={information} />
        </View>
      </Animated.View>

      <TouchableOpacity onPress={toggleDrawer} className="absolute top-4 left-4 z-20">
        {isDrawerOpen ? (
          <View className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
            <Image source={lock} className="w-6 h-6" />
          </View>
        ) : (
          <Text className="font-semibold text-transparent text-lg">Open</Text>
        )}
      </TouchableOpacity>

      <Animated.View
        className={`flex-1 ml-${isDrawerOpen ? '0' : `${drawerWidth}`} transition-margin`}
      >
        <View>
          <AppBarItem title="Items" />
          <TouchableOpacity
            className="flex-row items-center py-4 px-6"
            onPress={() => navigation.navigate("TabView")}
          >
            <Image source={burger_icon} className="w-6 h-6" />
            <View className="pl-4 flex-1 border-b border-black">
              <Text className="text-lg text-black font-semibold">Items</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-4 px-6">
            <Image source={category} className="w-6 h-6" />
            <View className="pl-4 flex-1 border-b border-black">
              <Text className="text-lg text-black font-semibold">Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-4 px-6">
            <Image source={discount_icon} className="w-6 h-6" />
            <View className="pl-4 flex-1 border-b border-black">
              <Text className="text-lg text-black font-semibold">Discounts</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};


export default HomeScreen;
