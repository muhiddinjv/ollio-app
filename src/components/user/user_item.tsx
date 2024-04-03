import React, { useState } from "react";
import { Image, TextInput, View } from "react-native";
import { IBase } from "../../utils/interfaces";

const UserItem = ({ title, icon }: IBase) => {
  const [customerName, setCustomerName] = useState("");

  return (
    <View className="flex-row items-end h-10 my-4 px-4">
      <Image source={icon} className="w-8 h-8 mr-4 text-gray-500" />
      <View className="w-full border-b border-gray-500">
        <TextInput
          className="w-full text-base pb-1"
          placeholder={title}
          value={customerName}
          onChangeText={(text) => setCustomerName(text)}
        />
      </View>
    </View>
  );
};

export default UserItem;