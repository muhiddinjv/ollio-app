import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

const Header = ({ title, icon, onPress, navigation, hasBackBtn }) => {
  const { colors } = useTheme();
  
  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }} theme={{ mode: 'adaptive' }}>
      {hasBackBtn && <Appbar.BackAction iconColor="white" onPress={() => navigation.goBack()} />}
      <Appbar.Content title={title} titleStyle={{ color: 'white' }} />
      <Appbar.Action icon={icon} size={28} color="white" onPress={onPress} />
      <Appbar.Action icon={icon} size={28} color="white" onPress={onPress} />
    </Appbar.Header>
  );
};

export default Header;