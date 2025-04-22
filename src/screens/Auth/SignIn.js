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
import { useColorScheme } from "nativewind";
import { useForm } from "react-hook-form";
import { MainColors } from "../../theme";
import { useAuth } from "./AuthPro";
import ControlledInput from "../../components/ControlledInput";

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { colorScheme } = useColorScheme();
  const { signIn } = useAuth();

  const { formState: { errors }, control, handleSubmit } = useForm();

  React.useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSignIn = async ({ phone, password }) => {
    signIn({ phone, password });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="w-full flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="w-full">
        <View className="flex-1 justify-center bg-gray-200">
          <SafeAreaView className="flex flex-1 flex-grow justify-center p-16 dark:bg-slate-800">
            <View className="flex flex-1 items-center justify-center">
              {errorMessage ? (
                <Text className="text-red-500 mb-3">{errorMessage}</Text>
              ) : null}

              <ControlledInput
                name="phone"
                control={control}
                error={errors?.phone?.message}
                label="Phone number"
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
