import React, { useState, useEffect } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
import { View, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";

import FABplus from "../../components/FABplus";
import ListItem from "../../components/ListItem";
import Catalog from "./Catalog";
import Goods from "./Goods";

const TabMore = ({ navigation }) => (
  <ScrollView>
    <ListItem
      editable={true}
      navigate={navigation}
      title="COCA-COLA"
      description="kolani rasmini qidirishga vaqt yoq shunga qulupnay rasmini qoydim, Hojaka"
      price={62000}
    />
  </ScrollView>
);

const initialLayout = { width: Dimensions.get("window").width };

const routes = [
  { key: "first", title: "Catalog" },
  { key: "second", title: "Goods" },
  // { key: "third", title: "More" },
];

const GoodTabs = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState("initialKey");
  const [index, setIndex] = useState(0);
  const { colors } = useTheme();

  useEffect(() => {
    if (index < 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [index]);

  const changeTabIndex = (newIndex) => {
    setIndex(newIndex);
    setKey(new Date().getTime().toString()); // Update the key to trigger re-render
  };

  const renderScene = SceneMap({
    first: Catalog,
    second: () => <Goods keyProp={key} navigation={navigation.navigate} />,
    third: () => <TabMore navigation={navigation.navigate} />,
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
        changeTabIndex={changeTabIndex}
      />
    </View>
  );
};

export default GoodTabs;
