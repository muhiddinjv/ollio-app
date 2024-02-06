import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SaveChargeButton = () => {
  return (
    <View
      style={{
        height: 80,
        width: "94%",
        backgroundColor: "#4CAF50",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          OPEN TICKETS
        </Text>
      </TouchableOpacity>
      <View
        style={{ width: 1, backgroundColor: "black", height: "100%" }}
      ></View>
      <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginRight: 56, }}>
          CHARGE
        </Text>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginRight: 56, }}>
          UZS 0
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SaveChargeButton;
