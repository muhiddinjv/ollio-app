import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Appbar, Text, Button, Drawer } from "react-native-paper";

const CollapseableDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => setIsDrawerOpen(!isDrawerOpen)}
        />
        <Appbar.Content title="App Title" />
      </Appbar.Header>
      <View>
        <Text>Main Content</Text>
      </View>

      {isDrawerOpen && (
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
