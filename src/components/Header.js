import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

function Header({ title, iconLeft, onLeftPress, iconRight, onRightPress, navigation, backBtn, fontSize }) {
  const { colors } = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }} theme={{ mode: 'adaptive' }}>
      {onLeftPress && <Appbar.Action icon={iconLeft} color="white" onPress={onLeftPress} />}
      {backBtn && <Appbar.BackAction iconColor="white" onPress={() => navigation.goBack()} />}
      <Appbar.Content title={title} titleStyle={{ color: 'white', fontSize: fontSize || 22 }} />
      {onRightPress && <Appbar.Action icon={iconRight} color="white" onPress={onRightPress} />}
    </Appbar.Header>
  );
}

export default Header;
