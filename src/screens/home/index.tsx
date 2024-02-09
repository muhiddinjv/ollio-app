import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { INavigation } from "../../utils/interfaces";

//TODO: FIX HOME PAGE. ITS NOT WORKING
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
    <View className="flex-row flex-1 bg-white">
      {isDrawerOpen && (
        <Animated.View
          className="absolute inset-0 bg-black opacity-50"
          style={{ opacity: contentOpacity }}
        />
      )}
      <Animated.View
        // className="absolute top-0 left-0 bg-white border-r border-gray-300 shadow-2xl"
        style={{
          transform: `translateX(${translateX}px)`,
          width: drawerWidth,
          display: isDrawerOpen ? "flex" : "none",
        }}
      >
        <View className="h-220 bg-green-500 p-4">
          <Text className="text-white text-lg" numberOfLines={1}>
            ogabekabdijabborov@gmail.com
          </Text>
          <Text className="text-white text-lg" numberOfLines={1}>
            ogabekabdijabborov@gmail.com
          </Text>
        </View>
        <View>{/* Drawer Items */}</View>
      </Animated.View>

      <TouchableOpacity
        onPress={toggleDrawer}
        className="absolute top-4 left-4 z-10"
      >
        <Text className="text-lg font-bold">
          {isDrawerOpen ? "Close" : "Open"}
        </Text>
      </TouchableOpacity>
      <Animated.View
        className="flex-1"
        style={{ marginLeft: isDrawerOpen ? drawerWidth : 0 }}
      >
        <View>{/* Main Content */}</View>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
