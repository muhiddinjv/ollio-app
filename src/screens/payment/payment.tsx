import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import AppBarHome from "../../components/app_bar/app_bar_ticket";
import PaymentAppBar from "../../components/app_bar/payment_appbar";
import { card_icon, dollar } from "../../contants/icons";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const PaymentScreen = () => {
  const [cashReceived, setCashReceived] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to Cash

  const handlePaymentMethodChange = () => {
    setPaymentMethod((prevMethod) => (prevMethod === "Cash" ? "Card" : "Cash"));
  };

  const handleBackPress = () => {
    // Handle navigation or go back logic here
  };

  const handleNextPress = () => {
    // Handle next or submit payment logic here
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <PaymentAppBar />
      </View>

      <View
        style={{
          height: 120,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 32, marginTop: 32, color: "black" }}>
          UZS 150,000
        </Text>
        <Text style={{ fontSize: 18 }}>Total</Text>

        <TextInput
          style={styles.input}
          placeholder="Cash Received"
          keyboardType="numeric"
          value={cashReceived}
          onChangeText={(text) => setCashReceived(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              margin: 16,
              backgroundColor: "#FAFAFA",
              height: 48,
              borderColor: "grey",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={dollar}
              style={{
                height: 24,
                width: 24,
                marginHorizontal: 8,
                tintColor: "black",
              }}
            />

            <Text style={{ marginHorizontal: 8,  color: 'black' }}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              margin: 16,
              backgroundColor: "#FAFAFA",
              height: 48,
              borderColor: "grey",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={card_icon}
              style={{
                height: 24,
                width: 24,
                marginHorizontal: 8,
                tintColor: "black",
              }}
            />
            <Text style={{ marginHorizontal: 8, color: 'black' }}>Card</Text>
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
