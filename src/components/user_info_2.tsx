import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { user_1 } from "../contants/icons";

interface IUserInfo2 {
  title: string,
  icon: any,
  subtitle: string
}

const UserInfo2 = ({ title, icon, subtitle }:IUserInfo2) => {
  const [customerName, setCustomerName] = useState("");

  return (
    <View style={styles.userTab}>
      <Image source={icon} style={styles.userIcon} />
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
  userIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
    tintColor: 'black'
  },
});

export default UserInfo2;
