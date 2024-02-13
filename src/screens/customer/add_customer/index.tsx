import React, { useState } from "react";
import { View, ScrollView, Image } from "react-native";
import {  Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import {
  more,
  more_1,
  search_icon,
  user_plus,
} from "../../../constants/icons";
import SaveChargeButton from "../../../components/save_charge_button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { INavigation } from "../../../utils/interfaces";

import { styled } from "nativewind";

const StyledPicker = styled(Picker)

const AddCustomerScreen = ({ navigation }:INavigation) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [productItems, setProductItems] = useState([
    { id: 1, name: "Narxlar o'zgarishi mumkin", price: 0 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 2", price: 29.99 },
    { id: 4, name: "Product 2", price: 29.99 },
    { id: 5, name: "Product 2", price: 29.99 },
    { id: 6, name: "Product 2", price: 29.99 },
    { id: 7, name: "Product 2", price: 29.99 },
    { id: 8, name: "Product 2", price: 29.99 },
    { id: 9, name: "Product 2", price: 29.99 },
    { id: 10, name: "Product 2", price: 29.99 },
    { id: 11, name: "Product 2", price: 29.99 },
    { id: 12, name: "Product 2", price: 29.99 },
    { id: 13, name: "Product 2", price: 29.99 },
    // Add1 more product items as needed
  ]);

  return (
    <View className="flex-1">
      <View className="p-4 bg-green-500 flex-row justify-between items-center shadow-md">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Image
              source={more_1}
              className="h-6 w-6 text-white"
            />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold ml-8">Ticket</Text>
        </View>

        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("CustomerListScreen")}
          >
            <Image
              source={user_plus}
              className="h-6 w-6 text-white mx-2"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={more}
              className="h-5 w-5 text-white ml-4"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="p-4">
        <View className="w-full items-center">
          <SaveChargeButton />
        </View>
        <View className="flex-row justify-center items-center border border-black h-12 my-4">
          <StyledPicker
            selectedValue={selectedItem}
            onValueChange={(itemValue:any) => setSelectedItem(itemValue)}
            className="w-5/6"
          >
            <Picker.Item label="Select an Item" value="" />
            <Picker.Item label="Item 1" value="item1" />
          </StyledPicker>
          <TouchableOpacity
            className="w-1/6 border-l border-black h-full justify-center"
          >
            <Image
              source={search_icon}
              className="h-5 w-5 ml-2"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center p-2 border-b border-gray-300">
          <View className="w-10 h-10 bg-gray-500 mr-2" />
          <View className="flex-row justify-between w-full">
            <Text className="text-base font-semibold">Narxlar o'zgarishi</Text>
            <Text className="text-base font-semibold">-</Text>
          </View>
        </View>
        <View className="p-2">
          {productItems.map((item) => (
            <View className="flex-row items-center p-2 border-b border-gray-300" key={item.id}>
              <View className="w-10 h-10 bg-gray-500 mr-2" />
              <View className="flex-row justify-between w-full">
                <Text className="text-base font-semibold">{item.name}</Text>
                <Text className="text-base font-semibold">{`$${item.price.toFixed(2)}`}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddCustomerScreen;
