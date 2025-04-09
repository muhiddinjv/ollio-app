import { Pressable, Text, View } from "react-native";
import React from "react";

const SaveCharge = ({ saveBill, navigation, isSaved }) => {
  return (
    <View className="p-2 bg-white dark:bg-slate-800 flex-row gap-2">
      <Pressable
        className="p-2 bg-primary rounded flex-1"
        onPress={() => {
          if (isSaved) {
            navigation.navigate("BillList");
          } else {
            saveBill();
            navigation.navigate("SaveBill");
          }
        }}
      >
        <Text className="text-white text-xl text-center font-medium ">
          {isSaved ? "Open Bills" : "Save Bill"}
        </Text>
      </Pressable>
      <Pressable className="p-2 bg-primary rounded flex-1" onPress={() => navigation.navigate("Payment")}>
        <Text className="text-white text-xl text-center capitalize font-medium">
          Charge
        </Text>
      </Pressable>
    </View>
  );
};

export default SaveCharge;
