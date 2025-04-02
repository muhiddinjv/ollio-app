import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

const Header = ({ title, iconLeft, iconRight, onPress, navigation, leftBtn, backBtn, rightBtn, fontSize }) => {
  const { colors } = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }} theme={{ mode: 'adaptive' }}>
      {leftBtn && <Appbar.Action icon={iconLeft} size={28} color="white" onPress={onPress} />}
      {backBtn && <Appbar.BackAction iconColor="white" onPress={() => navigation.goBack()} />}
      <Appbar.Content title={title} titleStyle={{ color: 'white', fontSize: fontSize || 22 }} />
      {rightBtn && <Appbar.Action icon={iconRight} size={28} color="white" onPress={onPress} />}
    </Appbar.Header>
  );
};

export default Header;