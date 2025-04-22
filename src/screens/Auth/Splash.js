import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Splash = () => {
  return (
    <View className="flex-1 justify-center items-center bg-violet-600">
      <Text className="text-6xl font-bold text-white">OLLIO</Text>
      <ActivityIndicator size="extra-large" color="white" className="mt-4" />
    </View>
  );
};

export default Splash;