import React, { useState } from "react";
import { View } from "react-native";
import { Appbar, Text, Drawer } from "react-native-paper";

const CollapseableDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => setOpenDrawer(!openDrawer)}
        />
        <Appbar.Content title="App Title" />
      </Appbar.Header>
      <View>
        <Text>Main Content</Text>
      </View>

      {openDrawer && (
        <Drawer.Section
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <Drawer.Item
            label="First Item"
            icon="star"
            active={active === 0}
            onPress={() => setActive(0)}
          />
          <Drawer.Item
            label="Second Item"
            active={active === 1}
            onPress={() => setActive(1)}
          />
        </Drawer.Section>
      )}
    </View>
  );
};

export default CollapseableDrawer;
