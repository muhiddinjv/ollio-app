import * as React from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button as RNButton } from "react-native-paper";
import { AuthProvider, useAuth } from ".";
import { setAccessToken } from "./astorage";
import axiosInstance from "../../api/instance";
import { useColorScheme } from "nativewind";
import { MainColors } from "../../theme";
import { useForm } from "react-hook-form";
import ControlledInput from "../../components/ControlledInput";

export default function SignIn({ navigation }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { signIn } = useAuth();
  const { colorScheme } = useColorScheme();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const handleSignIn = async (data) => {
    try {
      const response = await axiosInstance.post("auth/login", {
        login: data?.phoneNumber,
        password: data?.password,
      });
      const { token } = response.data;
      setAccessToken(token);
      signIn(token);
      navigation.navigate("DrawerNav");
      return response.data;
    } catch (error) {
      console.log("error", { error: error });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="w-full flex-1"
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        className="w-full"
        style={{ flex: 1, backgroundColor: "red" }}
      >
        <AuthProvider>
          <View className="flex-1 justify-center bg-gray-200">
            <SafeAreaView className="flex flex-1 flex-grow justify-center p-16 dark:bg-slate-800">
              <View className="flex flex-1 items-center justify-center">
                <ControlledInput
                  name="phoneNumber"
                  control={control}
                  error={errors?.phoneNumber?.message}
                  label="Phone number"
                  // keyboardType="number-pad"
                  mode="outlined"
                  className="w-full dark:bg-slate-700 text-white"
                  textColor={MainColors.icon[colorScheme]}
                  rules={{ required: "Phone number is required" }}
                />
                <ControlledInput
                  name="password"
                  control={control}
                  error={errors?.password?.message}
                  label="Password"
                  mode="outlined"
                  className="w-full dark:bg-slate-700 text-white"
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
                <RNButton
                  mode="contained"
                  onPress={handleSubmit(handleSignIn)}
                  className="mb-5 w-full p-1 rounded"
                  textColor="white"
                >
                  Sign In
                </RNButton>
                <Text className="text-blue-500">Forgot Password?</Text>
              </View>
            </SafeAreaView>
          </View>
        </AuthProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
