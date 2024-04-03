import * as React from "react";
import { Menu, Divider, PaperProvider, IconButton } from "react-native-paper";

const ThreeDots = ({ visible, toggleMenu }: any) => {
  return (
    <PaperProvider>
      <Menu
        style={{ left: -110, top: 60 }}
        visible={visible}
        onDismiss={toggleMenu}
        anchor={
          <IconButton
            iconColor="white"
            icon="dots-vertical"
            onPress={toggleMenu}
          />
        }
      >
        <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
        <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
        <Divider />
        <Menu.Item
          leadingIcon="content-cut"
          onPress={() => {}}
          title="Cut"
          disabled
        />
        <Menu.Item
          leadingIcon="content-copy"
          onPress={() => {}}
          title="Copy"
          disabled
        />
        <Menu.Item
          leadingIcon="content-paste"
          onPress={() => {}}
          title="Paste"
        />

        <Menu.Item
          trailingIcon="share-variant"
          onPress={() => {}}
          title="Share"
        />
      </Menu>
    </PaperProvider>
  );
};

export default ThreeDots;
