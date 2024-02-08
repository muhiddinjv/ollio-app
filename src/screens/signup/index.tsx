import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { INavigation } from "../../utils/interfaces";

const SignupScreen = ({ navigation }: INavigation) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    console.log("Login pressed");
  };

  return (
    <SafeAreaView className="flex-grow justify-center p-4">
      <View className="flex-grow justify-center p-4">
        <TextInput
          className="my-2"
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          mode="outlined"
        />
        <TextInput
          className="my-2"
          label="Phone number"
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          mode="outlined"
        />
        <TextInput
          className="my-2"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
        />
        <Button mode="contained" onPress={handleSignup} className="my-4">
          Signup
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
