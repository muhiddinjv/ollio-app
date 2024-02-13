import React from "react";
import { Appbar, Button, IconButton, MD3Colors } from "react-native-paper";
import { AppBarProps } from "../utils/interfaces";

const AppBar = ({
  title,
  backButton,
  hamburgerIcon,
  dropdown,
  searchIcon,
  clearButton,
  saveButton,
  closeButton,
  trashIcon,
  userIcon,
  transferButton,
}: AppBarProps) => {
  return (
    <Appbar.Header className="bg-green-500">
      {backButton && (
        <IconButton icon="arrow-left" onPress={backButton.onPress} />
      )}
      {hamburgerIcon && (
        <IconButton icon="menu" size={30} iconColor={MD3Colors.secondary100} onPress={hamburgerIcon.onPress} />
      )}
      <Appbar.Content title={title} color="white"/>
      {dropdown && (
        <IconButton icon="dots-vertical" onPress={dropdown.onPress} />
      )}
      {searchIcon && <IconButton icon="magnify" onPress={searchIcon.onPress} />}
      {clearButton && <IconButton icon="close" onPress={clearButton.onPress} />}
      {saveButton && (
        <Button onPress={saveButton.onPress}>{saveButton.label}</Button>
      )}
      {closeButton && <IconButton icon="close" onPress={closeButton.onPress} />}
      {trashIcon && <IconButton icon="delete" onPress={trashIcon.onPress} />}
      {userIcon && <IconButton icon="account" onPress={userIcon.onPress} />}
      {transferButton && (
        <Button onPress={transferButton.onPress}>{transferButton.label}</Button>
      )}
    </Appbar.Header>
  );
};

export default AppBar;
