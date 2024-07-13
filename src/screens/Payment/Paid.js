import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import { done, receipt } from "../../assets/icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const PaidScreen = ({ navigation }) => {
  const [cashReceived, setCashReceived] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to Cash

  return (
    <View className="flex">
      {/* <View className="h-14 flex-row items-center bg-green-500 justify-between shadow-md px-4"></View> */}

      <View className="h-36 flex-row items-center justify-around">
        <View className="flex-col items-end w-48">
          <Text className="text-2xl font-semibold mt-8 text-center">
            UZS 98,000
          </Text>
          <Text className="text-lg my-4 text-gray-500">Total Paid</Text>
        </View>

        <View className="w-[2px] bg-gray-300 h-24"></View>
        <View className="flex-col w-48">
          <Text className="text-2xl font-semibold mt-8">UZS 0</Text>
          <Text className="text-lg my-4 text-gray-500">Change</Text>
        </View>
      </View>
      <TouchableOpacity className="border border-gray-300 m-4 bg-gray-100 h-12 flex-row items-center justify-center">
        <FontAwesome5 name="receipt" size={24} color="black" />
        <Text className="mx-2 font-medium">Receipt</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SalesScreen")}
        className="m-4 bg-primary h-12 flex-row items-center justify-center"
      >
        <AntDesign name="check" size={24} color="white" />
        <Text className="mx-2 text-white font-bold">NEW SALE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaidScreen;
