import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const PaymentScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to Cash

  const handlePaymentMethodChange = () => {
    navigation.navigate("PaidScreen");
    // setPaymentMethod((prevMethod) => (prevMethod === "Cash" ? "Card" : "Cash"));
  };

  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <View className="pb-12 pt-8">
          <Text className="text-4xl text-center font-medium">UZS 150 000</Text>
          <Text className="text-gray-600 text-xl text-center">Total</Text>
        </View>

        <View className="pb-4 border-b border-gray-600 gap-y-2">
          <Text className="text-primary font-semibold text-base">
            Cash received
          </Text>
          <Text className="font-semibold text-base">UZS 980,000</Text>
        </View>
        <View className="flex-col w-full">
          <TouchableOpacity
            className="border bg-gray-100 border-gray-300 my-4 h-12 justify-center items-center flex-row"
            onPress={handlePaymentMethodChange}
          >
            <Ionicons name="cash-outline" size={24} color="black" />
            <Text className="mx-2 text-gray-600 text-lg font-medium uppercase">
              Cash
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border bg-gray-100 border-gray-300 my-4 h-12 justify-center items-center flex-row"
            onPress={handlePaymentMethodChange}
          >
            <AntDesign name="creditcard" size={24} color="black" />
            <Text className="mx-2 text-gray-600 text-lg font-medium uppercase">
              Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;
