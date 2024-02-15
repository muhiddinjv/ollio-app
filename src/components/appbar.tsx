import React from "react";
import {
  Appbar,
  Button,
  IconButton,
  MD3Colors,
  TextInput,
} from "react-native-paper";
import { AppBarProps } from "../utils/interfaces";
import { StyleSheet } from "react-native";

const AppBar = ({
  title,
  backButton,
  hamburgerIcon,
  dropdown,
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
      {searchInput && (
        <TextInput
          mode="flat"
          style={[styles.inputContainerStyle, styles.fontSize]}
          textColor="white"
          placeholder={searchInput.label}
          value={searchInput.value}
          underlineColor="none"
          activeUnderlineColor="transparent"
          onChangeText={searchInput.onChangeText}
          right={
            <TextInput.Icon
              icon={searchInput.icon}
              color={searchInput.color}
              onPress={searchInput.onIconPress}
            />
          }
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

const styles = StyleSheet.create({
  helpersWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    flex: 1,
  },
  helper: {
    flexShrink: 1,
  },
  counterHelper: {
    textAlign: "right",
  },
  inputContainerStyle: {
    backgroundColor: "transparent",
    width: "85%",
    // margin: 8,
  },
  inputContentStyle: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  fontSize: {
    fontSize: 20,
  },
  textArea: {
    height: 60,
  },
  // eslint-disable-next-line react-native/no-color-literals
  noPaddingInput: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
  },
  centeredText: {
    textAlign: "center",
  },
  fixedHeight: {
    height: 100,
  },
  row: {
    margin: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  month: {
    flex: 1,
    marginRight: 4,
  },
  year: {
    flex: 1,
    marginLeft: 4,
  },
  inputLabelText: {
    backgroundColor: "transparent",
    color: MD3Colors.tertiary70,
  },
  left: {
    width: "30%",
  },
  right: {
    width: "70%",
  },
  autoText: {
    textAlign: "auto",
  },
});

export default AppBar;
