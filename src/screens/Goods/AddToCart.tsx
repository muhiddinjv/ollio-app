import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Icon } from "react-native-paper";
import { styled } from "nativewind";
import { INavigation } from "../../utils/interfaces";

const StyledPicker = styled(Picker);

const AddToCartScreen = ({ navigation }: INavigation) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <View className="flex">
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
            <Icon source="lock" size={20} />
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
  ProductsContainer: {
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
  Product: {
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
