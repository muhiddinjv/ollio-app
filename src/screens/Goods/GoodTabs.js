import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import FABplus from "../../components/FABplus";
import GoodsList from "./GoodsList";
import Catalog from "./Catalog";
import Header from "../../components/Header";

const Tab = createMaterialTopTabNavigator();

const GoodTabs = ({ route }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);
  const { colors } = useTheme();

  const initialIndex = route?.params?.tabIndex ?? 0;

  useEffect(() => {
    setVisible(initialIndex === 0);
  }, [initialIndex]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        title="Goods"
        fontSize={20}
        iconLeft="menu"
        navigation={navigation}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        leftBtn
      />
      <Tab.Navigator
        initialRouteName={initialIndex === 0 ? "Catalog" : "Dokon"}
        screenOptions={{
          tabBarStyle: { backgroundColor: colors.secondary },
          tabBarIndicatorStyle: { backgroundColor: "white" },
          tabBarLabelStyle: { fontWeight: "bold", color: "white" },
        }}
        screenListeners={{
          state: (e) => {
            const tabIndex = e.data.state.index;
            setVisible(tabIndex === 0); // Hide FAB when on "Goods" tab
          },
        }}
      >
        <Tab.Screen name="Catalog" component={Catalog} />
        <Tab.Screen name="Dokon">
          {(props) => <GoodsList {...props} navigation={navigation} />}
        </Tab.Screen>
      </Tab.Navigator>

      <FABplus visible={visible} navigate={navigation.navigate} />
    </View>
  );
};

export default GoodTabs;
