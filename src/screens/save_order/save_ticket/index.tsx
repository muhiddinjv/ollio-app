// SaveTicketScreen.js
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { cancel } from "../../../contants/icons";
import { INavigation } from "../../../utils/interfaces";

const SaveTicketScreen = ({ navigation }: INavigation) => {
  const [productName, setProductName] = useState("");
  const [comment, setComment] = useState("");

  const handleSave = () => {
    console.log("Product Name:", productName);
    console.log("Comment:", comment);
    // You can send the data to an API, store it in state, etc.
  };

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row justify-between items-center pb-4 border-b border-gray-300">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={cancel} className="h-6 w-6 text-gray-600" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Save ticket</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerProfileScreen")}
        >
          <Text className="text-green-500">Save</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        label="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
        className="bg-white mb-4"
      />

      <TextInput
        label="Comment"
        value={comment}
        onChangeText={(text) => setComment(text)}
        className="bg-white mb-4"
        multiline
      />
    </View>
  );
};

export default SaveTicketScreen;
