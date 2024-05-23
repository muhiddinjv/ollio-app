import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const initialLayout = { width: Dimensions.get("window").width };

const RefundScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const onSearchSubmit = () => {
    // Handle search submission logic
    console.log("Search submitted:", searchQuery);
  };

  return (
    <View className="flex-grow">
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
      </ScrollView>
    </View>
  );
};

export default RefundScreen;
