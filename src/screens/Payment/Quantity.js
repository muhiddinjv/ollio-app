import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const QuantityScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState("");

  const handleSave = () => {
    console.log("Quantity saved:", quantity);
    navigation.goBack();
  };
  
  return (
    <View className="flex-1 p-4">
      {/* App Bar */}
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Image source={delete1} className="w-5 h-5 text-gray-500" /> */}
        </TouchableOpacity>
        <Text className="text-lg text-black ml-4">A74 cola 1.5 sunny gold</Text>
      </View>
      <Text className="text-base font-semibold mb-2">Quantity:</Text>

      {/* Quantity Section */}
      <View className="flex-row items-center mb-4">
        <TextInput
          className="flex-1 p-2 text-lg border border-gray-400 rounded"
          value={quantity}
          keyboardType="numeric"
          onChangeText={(text) => setQuantity(text.replace(/[^0-9]/g, ""))}
        />
        <TouchableOpacity onPress={() => navigation.navigate("TicketScreen")}>
          {/* <Image source={delete1} style={{ width: 36, height: 36 }} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default QuantityScreen;
