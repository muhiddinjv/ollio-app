import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { arrow, search_icon } from "../contants";
import { Picker } from "@react-native-picker/picker";
import ProductItem from "../components/app_bar/product_item";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AddToPrivate from "../components/add_to_private";

const FirstRoute = () => (
  <View>
    <ScrollView
      style={{
        height: "100%",
      }}
    >
      <View style={[styles.scene, { backgroundColor: "#fff" }]}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </View>
     
    </ScrollView>
  </View>
);
const data = [
  { label: "Mega planet", value: "option1" },
  { label: "Samarqand darvoza", value: "option2" },
  { label: "Golden Life", value: "option3" },
];
const SecondRoute = () => (
  <ScrollView>
    <View style={[styles.scene, { backgroundColor: "#fff" }]}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </View>
  </ScrollView>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#fff", }]}>
     <ProductItem />
     <AddToPrivate/>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const TabViewExample = ({ navigation }:any) => {
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

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={arrow}
            style={{
              height: 32,
              width: 32,
              tintColor: "#FFF",
            }}
          />
          <Picker
            style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Do'konni tanlang" value={null} />
            {data.map((item) => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
                style={{}}
              />
            ))}
          </Picker>
          {selectedValue && (
            <Text style={styles.selectedValue}>
              Selected Option: {selectedValue}
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Image
            source={search_icon}
            style={{
              height: 32,
              width: 32,
              tintColor: "#FFF",
            }}
          />
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  picker: {
    width: 200,
    backgroundColor: "#4CB050",
    borderColor: "#fff",
  },
  selectedValue: {
    marginTop: 21,
    fontSize: 18,
    color: "#27ae60",
  },
  container: {
    flex: 1,
  },
  appBar: {
    backgroundColor: "#4CB050",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    flexDirection: "row",
  },
  appBarText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  tabBar: {
    backgroundColor: "#FFF",
  },
  indicator: {
    backgroundColor: "#4CB050",
    textDecorationColor: "#4CB050",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B4949",
  },
  text: {
    color: "#4B4949",
    fontSize: 20,
  },
});
export default TabViewExample;
