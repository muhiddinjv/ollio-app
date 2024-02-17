import React, { useState } from "react";
import { View, SafeAreaView, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useMe } from "../../api/data.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { INavigation } from "../../utils/interfaces";
import { login } from "../../api/data.fn";

const SignInScreen = ({ navigation }: INavigation) => {
  const user = useMe();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(email, password);
    if (email.length > 5 && password.length > 5) {
      let res = await login({ password, email });
      console.log(res);
      if (res) {
        await AsyncStorage.setItem("token", res.access_token);
        navigation.navigate("SelectStore");
      } else {
        Alert.alert("Password or Email is wrong...");
      }
    } else {
      Alert.alert("Password or Email is wrong...");
    }
  };

  return (
    <SafeAreaView className="flex flex-grow justify-center p-16">
      <View className="flex flex-1 items-center justify-center">
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          className="mb-5 w-full"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          className="mb-6 w-full"
        />
        <Button mode="contained" onPress={handleLogin} className="mb-5 w-full p-1">
          Login
        </Button>
        <Text className="text-blue-500">Forgot Password?</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;