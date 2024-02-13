import React from "react";
import { View, Text } from "react-native";
import { IBase } from "../../utils/interfaces";

const ProductItem3 = ({ title, subtitle, price }: IBase) => {
  return (
    <View className="flex-row items-center p-4 border-b border-gray-300">
      <View className="w-5 h-5 bg-red-500 mr-4" />
      <View className="flex-1 flex-row items-center pr-4">
        <Text className="text-lg font-semibold text-gray-700 mr-2">
          {title}
        </Text>
        <Text className="text-lg text-gray-700">{subtitle}</Text>
      </View>
      <Text className="text-xl font-bold text-green-600">{price}</Text>
    </View>
  );
};

export default ProductItem3;
