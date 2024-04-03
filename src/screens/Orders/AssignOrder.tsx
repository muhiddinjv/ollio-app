// SaveTicketScreen.js
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { green_circle, search_icon } from "../../utils/icons";
import { INavigation } from "../../utils/interfaces";

const AssignOrder = ({ navigation }: INavigation) => {
  const [productName, setProductName] = useState("");
  const [comment, setComment] = useState("");

  const handleSave = () => {
    // Implement your save logic here
    console.log("Product Name:", productName);
    console.log("Comment:", comment);
    // You can send the data to an API, store it in state, etc.
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center px-4 md:px-8 border-b border-gray-300 h-12 md:h-16">
        <Image
          source={search_icon}
          className="h-6 w-6 md:h-8 md:w-8 t-gray-600"
        />
        <TextInput
          placeholder="Search employee"
          className="bg-transparent flex-1 text-base md:text-lg"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
      </View>
      <View className="flex-row items-center px-4 md:px-8 border-b border-gray-300 h-12 md:h-16">
        <TouchableOpacity className="h-6 w-6 md:h-8 md:w-8 border-2 rounded-full justify-center items-center border-green-500">
          <Image
            source={green_circle}
            className="h-5 w-5 md:h-7 md:w-7 t-green-500"
          />
        </TouchableOpacity>
        <Text className="text-base md:text-lg t-black ml-2 md:ml-4">Owner</Text>
      </View>
    </View>
  );
};

export default AssignOrder;
