import React, { useState, useEffect } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { View, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";

import FABplus from "../../components/FABplus";
import GoodsList from "./GoodsList";
import Catalog from "./Catalog";

const initialLayout = { width: Dimensions.get("window").width };

const routes = [
  { key: "first", title: "Catalog" },
  { key: "second", title: "Goods" },
];

const GoodTabs = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState("initialKey");
  const [index, setIndex] = useState(0);
  const { colors } = useTheme();

  useEffect(() => {
    setVisible(index < 1);
  }, [index]);

  const renderScene = SceneMap({
    first: Catalog,
    second: () => <GoodsList keyProp={key} navigation={navigation} />,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      labelStyle={{ fontWeight: "bold" }}
      style={{ backgroundColor: colors.primary }}
      indicatorStyle={{ backgroundColor: "white" }}
    />
  );

  return (
    <View className="flex-1 bg-white dark:bg-slate-800">
      <TabView
        navigationState={{ index, routes }}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
      <FABplus
        visible={visible}
        navigate={navigation.navigate}
      />
    </View>
  );
};

export default GoodTabs;
