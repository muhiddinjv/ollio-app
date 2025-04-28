import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'react-native-paper';

function Loader() {
  const { colors } = useTheme();
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="extra-large" color={colors.primary} />
    </View>
  );
}

export default Loader;
