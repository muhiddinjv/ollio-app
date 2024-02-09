import React, { useState } from "react";
import { View, Dimensions, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { more_1, search_icon } from "../contants/icons";
import { Picker } from "@react-native-picker/picker";
import ProductItem from "../components/app_bar/product_item";
import { ScrollView } from "react-native-gesture-handler";
import AddToPrivate from "../components/add_to_private";
import { INavigation } from "../utils/interfaces";

const FirstRoute = () => (
  <ScrollView className="h-87%">
    <View>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      {/* Add more ProductItem components as needed */}
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView>
    <View>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      {/* Add more ProductItem components as needed */}
    </View>
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView>
    <View>
      <ProductItem />
      <ProductItem />
      {/* Add more ProductItem components as needed */}
    </View>
  </ScrollView>
);

const initialLayout = { width: Dimensions.get("window").width };

const OrdersScreen = ({ navigation }: INavigation) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Public" },
    { key: "second", title: "Private" },
    { key: "third", title: "Tab" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      className="bg-slate-600"
      indicatorStyle={{ backgroundColor: 'white' }}
    />
  );

  const handlePickerChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <View className="flex-1">
      <View className="flex-row bg-green-500 p-4 justify-between items-center">
        <View className="flex-row items-center">
          <Image source={more_1} className="h-8 w-8 mr-2" />
          <Picker
            selectedValue={selectedValue}
            onValueChange={handlePickerChange}
            className="w-48 bg-white"
          >
            <Picker.Item label="All items" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            {/* Add more Picker.Item components as needed */}
          </Picker>
        </View>
        <Image source={search_icon} className="h-6 w-6" />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
      <AddToPrivate />
    </View>
  );
};

export default OrdersScreen;
