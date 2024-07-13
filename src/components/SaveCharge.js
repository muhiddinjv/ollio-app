import { Pressable, Text, View } from "react-native";
import React from "react";

const SaveCharge = ({ navigation, isSaved }) => {
  return (
    <View className="p-2 bg-white dark:bg-slate-800 flex-row gap-2">
      <Pressable
        className="p-2 bg-primary rounded flex-1"
        onPress={() =>
          isSaved
            ? navigation.navigate("SaveTicket")
            : navigation.navigate("OpenTickets")
        }
      >
        <Text className="text-white text-xl text-center font-medium ">
          {isSaved ? "SAVE" : "Open bills"}
        </Text>
      </Pressable>
      <Pressable
        className="p-2 bg-primary rounded flex-1"
        onPress={() => {
          navigation.navigate("PaymentScreen");
        }}
      >
        <Text className="text-white text-xl text-center uppercase font-medium">
          charge
        </Text>
      </Pressable>
    </View>
  );
};

export default SaveCharge;
