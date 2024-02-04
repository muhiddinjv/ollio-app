import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { clock, down, more_1 } from "../../contants/icons";
import { Picker } from "@react-native-picker/picker";
import ProductItem from "../../components/app_bar/product_item";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AddToPrivate from "../../components/add_to_private";
import ListProduct from "../../components/list_product";
import MyBottomSheet from "../../components/bottomsheet/bottomsheet";

const FirstRoute = () => (
  <View>
    <ScrollView
      style={{
        height: "100%",
      }}
    >
      <View style={[styles.scene, { backgroundColor: "#fff" }]}>
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            fontWeight: "700",
            color: "#4CB050",
          }}
        >
          Wednesday, December 13, 2023
        </Text>
        <ListProduct
          price={"UZS 3000"}
          time={"21:12"}
          productNumber={"21:12"}
          state={"Refund #2-1000"}
        />
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            fontWeight: "700",
            color: "#4CB050",
          }}
        >
          Wednesday, December 13, 2023
        </Text>

        <ListProduct
          price={"UZS 3000"}
          time={"21:12"}
          productNumber={"21:12"}
          state={"Refund #2-1000"}
        />
      </View>
    </ScrollView>
  </View>
);
const data = [
  { label: "List", value: "option1" },
  { label: "Transfer", value: "option2" },
  { label: "Tab", value: "option3" },
];
const SecondRoute = () => (
  <ScrollView>
    <View style={[styles.scene, { backgroundColor: "#fff" }]}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            marginHorizontal: 16,
            marginVertical: 16,
            fontWeight: "700",
            color: "#4CB050",
          }}
        >
          Wednesday, December 13, 2023
        </Text>
        <MyBottomSheet />
      </View>

      <ListProduct
        price={"UZS 3000"}
        time={"21:12"}
        productNumber={"21:12"}
        state={"Pending"}
      />
      <Text
        style={{
          marginHorizontal: 16,
          marginVertical: 8,
          fontWeight: "700",
          color: "#4CB050",
        }}
      >
        Wednesday, December 13, 2023
      </Text>

      <ListProduct
        price={"UZS 3000"}
        time={"21:12"}
        productNumber={"21:12"}
        state={"Accepted"}
      />
    </View>
  </ScrollView>
);

const ThirdRoute = () => (
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
);

const initialLayout = { width: Dimensions.get("window").width };

const OrdersScreen = ({ navigation }: any) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "List" },
    { key: "second", title: "Transfer" },
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
            source={more_1}
            style={{
              height: 32,
              width: 32,
              tintColor: "#FFF",
            }}
          />
          <Text
            style={{
              marginHorizontal: 16,
              fontSize: 24,
              fontWeight: "700",
              color: "white",
            }}
          >
            Orders
          </Text>
        </View>
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
export default OrdersScreen;
