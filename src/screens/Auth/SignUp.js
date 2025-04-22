import React from "react";
import { View, SafeAreaView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ControlledInput from "../../components/ControlledInput";
import { useForm } from "react-hook-form";

const Signup = ({ navigation }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignup = (data) => {
    console.log("Signup pressed", data);
  };

  return (
    <SafeAreaView className="flex-grow justify-center p-4">
      <View className="flex-grow justify-center p-4">
        <ControlledInput
          control={control}
          name="username"
          error={errors?.username?.message}
          label="Username"
          mode="outlined"
          className="mb-5 w-full dark:bg-slate-700 text-white"
        />
        <ControlledInput
          control={control}
          name="phoneNumber"
          error={errors?.phoneNumber?.message}
          keyboardType="number-pad"
          label="Phone number"
          mode="outlined"
          className="mb-5 w-full dark:bg-slate-700 text-white"
        />
        <ControlledInput
          name="password"
          control={control}
          error={errors?.password?.message}
          label="Password"
          mode="outlined"
          className="mb-5 w-full dark:bg-slate-700 text-white"
          textColor={MainColors.icon[colorScheme]}
          rules={{ required: "Password is required" }}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              color={MainColors.icon[colorScheme]}
              icon={`${showPassword ? "eye-off" : "eye"}`}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button
          mode="contained"
          onPress={handleSubmit(handleSignup)}
          className="my-4 p-1"
        >
          Signup
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
