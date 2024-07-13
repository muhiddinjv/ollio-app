import { View, Text, Pressable } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import ControlledInputCustom from "../../components/ControlledInputCustom";

export default function SaveTicket({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <View className="pr-2.5">
        <Pressable>
          <Text className="text-green-600 font-medium pr-2 uppercase">
            Save
          </Text>
        </Pressable>
      </View>
    ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View className="p-4">
      <ControlledInputCustom
        control={control}
        name="name"
        inputLabel="Name"
        inputLabelClass="text-xs"
        error={errors?.name?.message}
        className="bg-transparent w-full mb-0 pb-0 border-b-gray-600 border-b focus:border-green-600 focus:border-b-2"
      />
      <ControlledInputCustom
        control={control}
        name="comment"
        inputLabel="Comment"
        inputLabelClass="text-xs"
        error={errors?.comment?.message}
        className="bg-transparent w-full mb-0 pb-0 border-b-gray-600 border-b"
      />
    </View>
  );
}
