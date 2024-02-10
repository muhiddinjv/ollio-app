import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IBase } from '../../utils/interfaces';

const ProductItem2 = ({ title, subtitle, price }: IBase) => {
  return (
    <View className="flex-row items-center p-4 border-b border-gray-300">
      <View className="w-5 h-5 rounded-full bg-red-500 mr-4" />
      <View className="flex-1 pr-4">
        <Text className="text-base font-bold text-gray-700">{title}</Text>
        <Text className="text-sm text-gray-500">{subtitle}</Text>
      </View>
      <Text className="text-base font-bold text-green-600">{price}</Text>
    </View>
  );
};

export default ProductItem2;

