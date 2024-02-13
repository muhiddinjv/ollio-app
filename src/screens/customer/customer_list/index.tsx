import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { close, search_icon, user_1 } from "../../../constants/icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { INavigation } from "../../../utils/interfaces";

const CustomerListScreen = ({ navigation }: INavigation) => {
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between border-b border-gray-500 p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={close} className="h-6 w-6" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Add Customer to Ticket</Text>
        <View></View>
      </View>

      <View className="flex-row items-center border-b border-gray-500 p-2">
        <TouchableOpacity onPress={() => console.log("Search icon pressed")}>
          <Image source={search_icon} className="h-5 w-5 text-gray-600 mr-2" />
        </TouchableOpacity>
        <TextInput placeholder="Search" className="w-52" />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("EditCustomerScreen")}
        className="p-3 rounded-lg items-center mt-4"
      >
        <Text className="text-green-600 text-lg font-semibold">
          ADD NEW CUSTOMER
        </Text>
      </TouchableOpacity>
      <View className="border-b border-gray-500 h-0.5"></View>
      <Text className="text-lg font-semibold mt-4 ml-2">Recent customers</Text>
      <ScrollView>
        <View className="flex items-center p-2">
          {[...Array(20)].map((_, index) => (
            <View key={index} className="flex-row items-center w-full">
              <Image source={user_1} className="h-10 w-10 rounded-full m-3" />
              <View className="flex-col w-full">
                <Text className="text-lg font-semibold">John Doe</Text>
                <Text className="text-gray-600 text-sm">
                  john.doe@example.com , 123-456-7890
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomerListScreen;
