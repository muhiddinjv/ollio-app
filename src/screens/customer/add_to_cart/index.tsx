import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import {
  arrow,
  burger_icon,
  cancel,
  more,
  more_1,
  search_icon,
  user_done,
  user_plus,
} from "../../../constants/icons";
import SaveChargeButton from "../../../components/save_charge_button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { INavigation } from "../../../utils/interfaces";
import { styled } from "nativewind";

const StyledPicker = styled(Picker);

const AddToCartScreen = ({ navigation }: INavigation) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View className="flex">
      <View className="bg-green-500 px-4 py-3 flex-row items-center justify-between shadow-md">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Image source={more_1} className="h-6 w-6" style={{tintColor:'white'}} />
          </TouchableOpacity>
          <Text className="text-white text-lg ml-9 font-semibold">Ticket</Text>
        </View>
        <View className="flex-row">
          <TouchableOpacity onPress={() => console.log("iojw8djiow")}>
            <Image source={user_done || user_plus} className="h-6 w-6 mx-2" style={{tintColor:'white'}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={more} className="h-5 w-5 ml-4" style={{tintColor:'white'}} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-4 py-2">
        <View className="w-full">
          <View className="w-full h-20 bg-green-500 flex-row justify-around items-center">
            <TouchableOpacity>
              <Text className="text-white text-lg">SAVE</Text>
            </TouchableOpacity>
            <View className="w-0.5 h-full bg-slate-600"></View>
            <TouchableOpacity className="flex items-center">
              <Text className="text-white text-lg">CHARGE</Text>
              <Text className="text-white text-lg">98,000</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center items-center border border-black my-4 h-14">
          <StyledPicker
            selectedValue={selectedItem}
            onValueChange={(itemValue: any) => setSelectedItem(itemValue)}
            className="w-5/6"
          >
            <Picker.Item label="Select an Item" value="" />
            <Picker.Item label="Item 1" value="item1" />
          </StyledPicker>
          <TouchableOpacity className="border-l border-black items-center justify-center p-4">
            <Image source={search_icon} className="h-5 w-5 ml-2" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="border-b border-gray-300">
            {[...Array(20)].map((_, index) => (
              <TouchableOpacity
                // onPress={() => navigation.navigate("QuantityScreen")}
                key={index}
                className="flex-row items-center px-2 py-3 border-b border-gray-300"
              >
                <View className="w-10 h-10 bg-gray-500 mr-2"></View>
                <View className="flex-row flex-1 justify-between">
                  <Text className="text-base font-semibold">Product 2</Text>
                  <Text className="text-base font-semibold">$22.99</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItemsContainer: {
    padding: 0,
  },
  contentContainer: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
  picker: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  circleIndicator: {
    width: 40,
    height: 40,
    backgroundColor: "grey",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
  appBar: {
    backgroundColor: "#4CB050",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    flexDirection: "row",
  },
});

export default AddToCartScreen;
