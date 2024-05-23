import React, { useState } from "react";
import { View, ScrollView, Image } from "react-native";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const TicketScreen = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View>
      <ScrollView className="px-2">
        <View className=" bg-gray-300 my-4 h-0.5"></View>
        <View className="flex-row justify-between mb-4">
          <Text className="text-black font-bold text-3xl my-4">Total</Text>
          <Text className="text-black font-bold text-3xl my-4">UZS 98,000</Text>
        </View>
      </ScrollView>
      <View className="w-full">
        <View className="w-full h-20 bg-green-500 flex-row justify-around items-center">
          <TouchableOpacity>
            <Text className="text-white text-lg">SAVE</Text>
          </TouchableOpacity>
          <View className="w-0.5 h-full bg-slate-600"></View>
          <TouchableOpacity
            className="flex items-center"
            onPress={() => navigation.navigate("PaymentScreen")}
          >
            <Text className="text-white text-lg">CHARGE</Text>
            <Text className="text-white text-lg">98,000</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TicketScreen;
