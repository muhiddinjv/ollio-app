import { View, Text, Pressable, TextInput, Switch } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import ControlledInputCustom from "../../components/ControlledInputCustom";

export default function BillCartItemCount({ navigation }) {
  const {
    control,
    formState: { errors },
  } = useForm();

  navigation.setOptions({
    headerRight: () => (
      <Pressable
        onPress={() => navigation.navigate("BillCart")}
        className="pr-4"
      >
        <Text className="text-primary font-semibold uppercase">Save</Text>
      </Pressable>
    ),
  });
  return (
    <View className="p-4">
      <View>
        <Text className="text-primary font-medium mb-4">Quantity</Text>
        <View className="flex-row justify-between">
          <Pressable className="bg-gray-200 border border-gray-300 w-8 h-8 justify-center items-center">
            <Text className="text-lg text-gray-500">-</Text>
          </Pressable>
          <TextInput
            className="bg-transparent mb-0 pb-0 border-b-gray-600 border-b w-9/12 text-center"
            defaultValue="2.000"
          />
          <Pressable className="bg-gray-200 border border-gray-300 w-8 h-8 justify-center items-center">
            <Text className="text-lg text-gray-500">+</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text className="text-primary font-medium mb-1 mt-8">Comment</Text>
        <TextInput
          placeholder="Enter comment"
          className="bg-transparent mb-0 py-2 border-b-gray-600 border-b w-full"
        />
      </View>
      <View>
        <Text className="text-primary font-medium mb-1 mt-8">Discount</Text>
        <View className="flex-row justify-between items-center">
          <Text>Cola 1.5, 1%</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
}
