import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { done, receipt } from "../../utils/icons";

const PaidScreen = () => {
  const [cashReceived, setCashReceived] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to Cash

  return (
    <View className="flex">
      {/* <View className="h-14 flex-row items-center bg-green-500 justify-between shadow-md px-4"></View> */}

      <View className="h-36 flex-row items-center justify-around">
        <View className="flex-col items-end w-48">
          <Text className="text-2xl mt-8 text-center">UZS 98,000</Text>
          <Text className="text-lg my-4">Total Paid</Text>
        </View>

        <View className="w-px h-36"></View>
        <View className="flex-col w-48">
          <Text className="text-2xl mt-8">UZS 0</Text>
          <Text className="text-lg my-4">Change</Text>
        </View>
      </View>
      <Image source={done} className="h-24 w-24 self-center my-48" />
      <TouchableOpacity className="border-2 border-slate-500 m-4 bg-gray-100 h-12 flex-row items-center justify-center">
        <Image source={receipt} className="h-6 w-6 mx-2" />
        <Text className="mx-2 font-bold">Receipt</Text>
      </TouchableOpacity>

      <TouchableOpacity className="m-4 bg-green-500 h-12 flex-row items-center justify-center">
        <Image source={done} className="h-6 w-6 mx-2" style={{tintColor:'white'}} />
        <Text className="mx-2 text-white font-bold">NEW SALE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaidScreen;
