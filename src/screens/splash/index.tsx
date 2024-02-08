import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AppBarUniversal from "../../components/app_bar/appBar_universal";
import { INavigation } from "../../utils/interfaces";

const SplashScreen = ({ navigation }: INavigation) => {
  const handleRegisterPress = () => {
    // Add navigation logic for registration
    console.log("Navigate to registration page");
  };

  const handleLoginPress = () => {
    // Add navigation logic for login
    console.log("Navigate to login page");
  };

  return (
    <SafeAreaView className="flex-grow items-center bg-gray-200">
      <AppBarUniversal title={"hello guys"} />
      <View className="flex-grow items-center content-center">
        <Text style={styles.title}>Welcome to My App</Text>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    width: "70%",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#4CAF50",
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SplashScreen;
