import React from "react";
import {
  Appbar,
  Button,
  IconButton,
  MD3Colors,
  TextInput,
} from "react-native-paper";
import { AppBarProps } from "../utils/interfaces";

const AppBar = ({
  title,
  backButton,
  hamburgerIcon,
  dropdown,
  searchIcon,
  searchInput,
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
        <IconButton
          icon="arrow-left"
          iconColor="white"
          onPress={backButton.onPress}
        />
      )}
      {hamburgerIcon && (
        <IconButton
          icon="menu"
          size={30}
          iconColor={MD3Colors.secondary100}
          onPress={hamburgerIcon.onPress}
        />
      )}
      <Appbar.Content title={title} color="white" />
      {searchIcon && (
        <IconButton
          iconColor="white"
          icon="magnify"
          onPress={searchIcon.onPress}
        />
      )}
      {searchInput && (
        <TextInput
        mode="flat"
        textColor="white"
        underlineColor="white"
        label={searchInput.label}
        value={searchInput.value}
        onChangeText={searchInput.onChangeText}
        contentStyle={{ backgroundColor: "none", flex: 1 }}
        />
      )}
      {clearButton && <IconButton icon="close" onPress={clearButton.onPress} />}
      {saveButton && (
        <Button textColor="white" uppercase={true} onPress={saveButton.onPress}>
          {saveButton.label}
        </Button>
      )}
      {closeButton && <IconButton icon="close" onPress={closeButton.onPress} />}
      {trashIcon && <IconButton icon="delete" onPress={trashIcon.onPress} />}
      {userIcon && <IconButton icon="account" onPress={userIcon.onPress} />}
      {transferButton && (
        <Button onPress={transferButton.onPress}>{transferButton.label}</Button>
      )}
      {dropdown && (
        <IconButton
          iconColor="white"
          icon="dots-vertical"
          onPress={dropdown.onPress}
        />
      )}
    </Appbar.Header>
  );
};

export default AppBar;
