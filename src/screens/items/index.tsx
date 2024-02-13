import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AppBarItem from "../../components/app_bar/item_app_bar";
import { burger_icon, category, discount_icon } from "../../constants/icons";
import { INavigation } from "../../utils/interfaces";

const Items = ({ navigation }: INavigation) => {
  return (
    <View>
      <AppBarItem title={"Items"} />
      <TouchableOpacity className="h-16 bg-white flex-row items-center px-4">
        <Image source={burger_icon} className="h-6 w-6 mr-4" />
        <View className="flex-grow border-b border-black">
          <Text className="text-black text-lg">Items</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="h-16 bg-white flex-row items-center px-4">
        <Image source={category} className="h-6 w-6 mr-4 bg-slate-700" />
        <View className="flex-grow border-b border-black">
          <Text className="text-black text-lg">Categories</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="h-16 bg-white flex-row items-center px-4">
        <Image source={discount_icon} className="h-6 w-6 mr-4" />
        <View className="flex-grow border-b border-black">
          <Text className="text-black text-lg">Discounts</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Items;
