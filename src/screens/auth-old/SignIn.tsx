import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, SafeAreaView, Alert } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";

import { useMe } from "../../api/data.service";
import { INavigation } from "../../utils/interfaces";
import { signIn } from "../../api/data.fn";
import axios from "axios";

const SignInScreen = ({ navigation }: INavigation) => {
  const theme = useTheme();
  const user = useMe();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    console.log(phoneNumber, password);
    // if (phone.length > 5 && password.length > 5) {
      let res = await signIn({ phoneNumber, password });

      try {
        const response = await axios.post('http://localhost:4000/auth/signin', {
          // Add your data to send in the request body here
          phoneNumber, password
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      // console.log(888,res);
      if (res) {
        await AsyncStorage.setItem("token", res.accessToken);
        navigation.navigate("Sales");
      } else {
        Alert.alert("Password or phone number is wrong...");
      }
    // } else {
    //   Alert.alert("Password or Email is wrong...");
    // }
  };

  return (
    <SafeAreaView className="flex flex-grow justify-center p-16 dark:bg-slate-800">
      <View className="flex flex-1 items-center justify-center">
        <TextInput
          label="Phone"
          value={phoneNumber}
          keyboardType="number-pad"
          onChangeText={(text) => setPhoneNumber(text)}
          mode="outlined"
          className="mb-5 w-full dark:bg-slate-700"
          textColor={theme.colors.secondary}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          textColor={theme.colors.secondary}
          className="mb-5 w-full dark:bg-slate-700"
        />
        <Button mode="contained" onPress={handleSignIn} className="mb-5 w-full p-1" textColor="white">
          Sign In
        </Button>
        <Text className="text-blue-500">Forgot Password?</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;