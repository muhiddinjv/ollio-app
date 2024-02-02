import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const SignupScreen = ({ navigation }:any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    console.log("Login pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Phone number"
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSignup} style={styles.button}>
          Signup
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
});

export default SignupScreen;
