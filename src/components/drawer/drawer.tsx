import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './appNavigator';

const Apps = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Apps;