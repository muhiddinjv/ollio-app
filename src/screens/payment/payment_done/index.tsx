import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import AppBarHome from "../../../components/app_bar/app_bar_ticket";
import PaymentAppBar from "../../../components/app_bar/payment_appbar";
import { card_icon, dollar, done, receipt } from "../../../contants/icons";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import GetOrderBottomSheet from "../../../components/bottomsheet/get_order_bottom";

const PaymentDoneScreen = () => {
  const [cashReceived, setCashReceived] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash"); // Default to Cash

  return (
    <View style={{}}>
      <View
        style={{
          height: 56,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#4CAF50",
          justifyContent: "space-between",
          elevation: 5,
          paddingHorizontal: 16,
        }}
      ></View>

      <View
        style={{
          height: 120,
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            width: 180,
          }}
        >
          <Text style={{ fontSize: 32, marginTop: 32, color: "black" }}>
            UZS 98,000
          </Text>
          <Text style={{ fontSize: 18, marginVertical: 16 }}>Total Paid</Text>
        </View>
        <View
          style={{ height: "80%", width: 1, backgroundColor: "black" }}
        ></View>
        <View
          style={{
            flexDirection: "column",
            width: 180,
          }}
        >
          <Text style={{ fontSize: 32, marginTop: 32, color: "black" }}>
            UZS 0
          </Text>
          <Text style={{ fontSize: 18, marginVertical: 16 }}>Change</Text>
        </View>
      </View>
      <Image
        source={done}
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
          marginVertical: 100,
        }}
      />
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
          marginTop: 100,
        }}
      >
        <Image
          source={receipt}
          style={{
            height: 24,
            width: 24,
            marginHorizontal: 8,
            tintColor: "black",
          }}
        />
        <Text style={{ marginHorizontal: 8, color: "black" }}>Receipt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          margin: 16,
          backgroundColor: "#4CAF50",
          height: 48,
          borderColor: "#4CAF50",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={done}
          style={{
            height: 24,
            width: 24,
            marginHorizontal: 8,
            tintColor: "white",
          }}
        />
        <Text style={{ marginHorizontal: 8, color: "white" }}>NEW SALE</Text>
      </TouchableOpacity>
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
});

export default PaymentDoneScreen;
