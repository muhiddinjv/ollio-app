import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { user } from "../../contants/icons";

const UserItem = ({title, icon}:{title:string, icon:any}) => {
  const [customerName, setCustomerName] = useState("");

  return (
    <View style={styles.userTab}>
      <Image source={icon} style={styles.userIcon} />
      <View
        style={{
          height: "100%",
          width: "90%",
         
          borderBottomWidth: 1,
        }}
      >
        <Text>{title}</Text>
        <TextInput
          style={styles.textInput}
          value={customerName}
          onChangeText={(text) => setCustomerName(text)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userTab: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 60,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  userIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
    tintColor: 'grey'
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "gray",
    flex: 1,
  },
});

export default UserItem;
