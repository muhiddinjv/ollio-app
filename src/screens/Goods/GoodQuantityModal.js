import { View, Text, Pressable, Platform, TextInput } from "react-native";
import React from "react";
import BaseModal from "../../components/BaseModal";

export default function GoodQuantityModal({
  visible,
  onClose,
  value,
  onChangeText,
}) {
  console.log("visible", visible);
  return (
    <BaseModal visible={visible} onClose={() => onClose()}>
      <View className="w-full">
        <Text>Change quantity</Text>
        <TextInput
          onChangeText={(qty) => onChangeText(qty)}
          value={value}
          returnKeyType="done"
          onSubmitEditing={() => navigation.navigate("Sales")}
          keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
          placeholder="0"
          autoFocus
          className="bg-transparent w-full mb-0 pb-0 border-b-gray-600 border-b"
        />
      </View>
      <View className="w-full flex-row justify-center mt-6 gap-x-2.5">
        <Pressable
          title="Close"
          onPress={() => onClose()}
          className="w-1/2 py-0.5 border border-gray-300 rounded-md"
        >
          <Text className="text-center text-gray-400">Close</Text>
        </Pressable>
        <Pressable
          title="Close"
          onPress={() => onClose()}
          className="w-1/2 bg-primary rounded-md items-center justify-center"
        >
          <Text className="text-center text-white items-center justify-center">
            Save
          </Text>
        </Pressable>
      </View>
    </BaseModal>
  );
}
