import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
// import { card_icon, dollar } from "../../assets/icons";
// import AppBar from "../../components/appbar";

const PaymentScreen = ({ navigation }) => {
  const [cashReceived, setCashReceived] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash'); // Default to Cash

  const handlePaymentMethodChange = () => {
    setPaymentMethod((prevMethod) => (prevMethod === 'Cash' ? 'Card' : 'Cash'));
  };

  const handleBackPress = () => {
    // Handle navigation or go back logic here
  };

  const handleNextPress = () => {
    // Handle next or submit payment logic here
  };

  return (
    <View className="flex-1 bg-white">
      <View className="h-120 justify-start items-center">
        <Text className="text-2xl mt-8 text-black">UZS 150,000</Text>
        <Text className="text-lg">Total</Text>

        <TextInput
          className="border-b border-gray-400 w-full h-10 mb-4 px-2"
          placeholder="Cash Received"
          keyboardType="numeric"
          value={cashReceived}
          onChangeText={(text) => setCashReceived(text)}
        />
        <View className="flex-col w-full">
          <TouchableOpacity
            className="border border-gray-400 my-4 bg-white h-12 justify-center items-center flex-row"
            onPress={handlePaymentMethodChange}
          >
            {/* <Image
              source={dollar}
              className="w-6 h-6 mx-2"
            /> */}
            <Text className="mx-2 text-black">Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-gray-400 my-4 bg-white h-12 justify-center items-center flex-row"
            onPress={handlePaymentMethodChange}
          >
            {/* <Image
              source={card_icon}
              className="w-6 h-6 mx-2"
            /> */}
            <Text className="mx-2 text-black">Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  total: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "column",
    height: 100,
    width: "100%",
  },
  splitButton: {
    flex: 1,
    backgroundColor: "green",
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 8,
  },
  splitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "green",
    paddingVertical: 12,
    alignItems: "center",
    marginLeft: 8,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PaymentScreen;
