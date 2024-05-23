import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { user_1 } from "../../assets/icons";
import { IBase } from "../../utils/interfaces";

const UserInfo = ({ title, icon }) => {
  const [customerName, setCustomerName] = useState("");

  return (
    <View style={styles.userTab}>
      <Image source={icon} style={styles.userPlusIcon} />
      <Text>{title}</Text>
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
    tintColor: 'grey'

  },
});

export default UserInfo;
