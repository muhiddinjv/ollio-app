import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { INavigation } from "../../utils/interfaces";
import { useColorScheme } from 'nativewind';

const SplashScreen = ({ navigation }: INavigation) => {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  const handleRegisterPress = () => {
    // Add navigation logic for registration
    console.log("Navigate to registration page");
  };

  const handleLoginPress = () => {
    // Add navigation logic for login
    console.log("Navigate to login page");
  };

  return (
    <SafeAreaView className="flex-grow bg-gray-200 dark:bg-slate-800">
      <View className="flex-grow items-center justify-center">
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
        <Text className="text-2xl mb-4 font-medium text-gray-900 dark:text-white">Welcome to Ollio</Text>
        <TouchableOpacity
          style={{ width: '70%' }}
          className="py-4 px-6 rounded-md mb-4 bg-green-600"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-white text-lg font-bold text-center">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: '70%' }}
          className="py-4 px-6 rounded-md mb-4 bg-blue-500"
          onPress={() => navigation.navigate("Signin")}
        >
          <Text className="text-white text-lg font-bold text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
