import React, { useState, useEffect } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
import { View, Dimensions } from "react-native";
import { INavigation } from "../../utils/interfaces";
import { FABplus } from "../../components/FABplus";
import ListItem from "../../components/ListItem";
import { Catalog } from "./Catalog";
import { Goods } from "./Goods";
import { useGlobal } from "../../contexts";


const TabMore = ({ navigation }: any) => (
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
  { key: "third", title: "More" },
];

const AllItems = ({ navigation }: INavigation) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  // const { state, dispatch } = useGlobal();

  useEffect(() => {
    if (index < 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [index]);

  const renderScene = SceneMap({
    first: Catalog,
    second: Goods,
    third: () => <TabMore navigation={navigation.navigate} />,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      className="bg-purple-900"
      indicatorStyle={{ backgroundColor: "white" }}
    />
  );

  const handlePickerChange = (value: any) => {
    setSelectedValue(value);
  };

  // const toggleVisibility = () => {
  //   dispatch({ type: 'TOGGLE_VISIBILITY', payload: !state.visible });
  // };

  return (
    <View className="flex-1 bg-white dark:bg-slate-800">
      <TabView
        navigationState={{ index, routes }}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
      <FABplus visible={visible} navigate={navigation.navigate} />
    </View>
  );
};

export default AllItems;
