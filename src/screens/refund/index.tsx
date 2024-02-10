import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import { arrow, more } from "../../contants/icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RefundItem from "../../components/refund_item";
import { INavigation } from "../../utils/interfaces";

const initialLayout = { width: Dimensions.get("window").width };

const RefundScreen = ({ navigation }: INavigation) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSearchSubmit = () => {
    // Handle search submission logic
    console.log("Search submitted:", searchQuery);
  };

  return (
    <View className="flex-grow">
      <View className="bg-green-600 p-4 justify-between flex-row items-center">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrow} className="h-6 w-6" style={{tintColor:'white'}}/>
          </TouchableOpacity>
          <Text className="text-white text-xl font-semibold ml-4">#2-1001</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-white text-xl font-semibold mr-4">REFUND</Text>
          <Image source={more} className="h-6 w-6" style={{tintColor:'white'}} />
        </View>
      </View>
      <ScrollView>
        <View className="justify-start items-center">
          <Text className="text-4xl mt-10 text-black">UZS 150,000</Text>
          <Text className="text-lg">Total</Text>
        </View>
        <View className="border-b border-gray-500 w-full my-5" />
        <View className="px-4">
          <View className="flex-row">
            <Text className="font-semibold text-lg text-black">Employee: </Text>
            <Text className="text-lg text-black">ogashblog@gmail.com</Text>
          </View>
          <View className="flex-row">
            <Text className="font-semibold text-lg text-black">POS: </Text>
            <Text className="text-lg text-black">mega planet pos</Text>
          </View>
          <View className="flex-row">
            <Text className="font-semibold text-lg text-black">Customer: </Text>
            <Text className="text-lg text-black">Stive Jobs</Text>
          </View>
        </View>
        <View className="border-b border-gray-500 w-full my-5" />
        {[...Array(20)].map((_, index) => (
          <RefundItem
            key={index}
            title="0282 Niso gaz falga qalin"
            productAmount="1 x UZS 1,000"
            productPrice="UZS 1,000"
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RefundScreen;
