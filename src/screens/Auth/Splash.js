import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

function Splash() {
  return (
    <View className="flex-1 items-center justify-center bg-violet-600">
      <Text className="text-6xl font-bold text-white">OLLIO</Text>
      <ActivityIndicator size="extra-large" color="white" className="mt-4" />
    </View>
  );
}

export default Splash;
