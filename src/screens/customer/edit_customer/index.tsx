import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  arrow,
  barcode,
  location,
  mail,
  membership,
  telephone,
  user,
} from "../../../contants/icons";
import UserItem from "../../../components/user/user_item";
import { ScrollView } from "react-native-gesture-handler";
import { INavigation } from "../../../utils/interfaces";

const userData = [
  { title: "Name", icon: user },
  { title: "Email", icon: mail },
  { title: "Phone", icon: telephone },
  { title: "Address", icon: location },
  { title: "City", icon: user },
  { title: "State", icon: user },
  { title: "Zipcode", icon: user },
  { title: "Country", icon: user },
  { title: "Costumer code", icon: barcode },
  { title: "Vip customer", icon: membership },
];

const EditCustomerScreen = ({ navigation }: INavigation) => {
  return (
    <View className="flex-1">
      {/* AppBar */}
      <View className="flex-row justify-between items-center border-b border-gray-500 p-4 mt-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrow} className="h-6 w-6 text-gray-600" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Edit customer</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerProfileScreen")}
        >
          <Text className="text-green-600 font-semibold text-lg">Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {userData.map(({ title, icon }, index) => (
          <UserItem key={index} title={title} icon={icon} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EditCustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  appBarTitle: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
    marginLeft: 48,
  },

  saveButton: {
    color: "green",
    fontSize: 16,
  },
  userTab: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginRight: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "gray",
    flex: 1,
  },
});
