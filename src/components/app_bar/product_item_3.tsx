import React from "react";
import { View, Text } from "react-native";
import { IBase } from "../../utils/interfaces";

const ProductItem3 = ({ title, price }: IBase) => {
  return (
    <View className="flex-row text-gray-600 items-center p-4 border-b border-gray-300">
      <View className="w-10 h-10 bg-red-500 mr-4" />
      <View className="flex-1 flex-row items-center pr-4 mr-2">
        <Text className="text-lg">{title}</Text>
      </View>
      <Text className="text-lg">{price}</Text>
    </View>
  );
};

export default ProductItem3;
