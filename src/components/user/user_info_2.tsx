import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { user_1 } from "../../constants/icons";
import { IBase } from "../../utils/interfaces";

const UserInfo2 = ({ title, subtitle, icon }:IBase) => {
  const [customerName, setCustomerName] = useState("");

  return (
    <View style={styles.userTab}>
      <Image source={icon} style={styles.userPlusIcon} />
      <View>
        <Text style={{ color: "black", fontSize: 18 }}>{title}</Text>
        <Text style={{ color: "grey", fontSize: 16 }}>{subtitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userTab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  userPlusIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
    tintColor: 'black'
  },
});

export default UserInfo2;
