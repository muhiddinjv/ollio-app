// DrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DrawerContent = ({ navigation }:any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text>Home</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
    </View>
  );
};

export default DrawerContent;
