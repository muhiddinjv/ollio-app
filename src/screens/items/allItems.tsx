import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppBarItem from "../../components/app_bar/item_app_bar";
import { burger_icon, category, discount_icon } from "../../contants";

export class AllItems extends Component {
  render() {
    return (
      <View>
        <AppBarItem title={"Items"} />
        <TouchableOpacity style={styles.itemStyle}>
          <Image
            source={burger_icon}
            style={styles.iconStyle}
          />

          <View style={styles.itemChildStyle}>
            <View></View>
            <Text style={styles.titleStyle}>Items</Text>
            <View
              style={{ height: 1, backgroundColor: "black", width: "100%" }}
            ></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemStyle}>
          <Image
            source={category}
            style={styles.iconStyle}
          />

          <View style={styles.itemChildStyle}>
            <View></View>
            <Text style={styles.titleStyle}>Categories</Text>
            <View
              style={{ height: 1, backgroundColor: "black", width: "100%" }}
            ></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemStyle}>
          <Image
            source={discount_icon}
            style={styles.iconStyle}
          />

          <View style={styles.itemChildStyle}>
            <View></View>
            <Text style={styles.titleStyle}>Discounts</Text>
            <View
              style={{height: 1, backgroundColor: "black", width: "100%" }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AllItems;
const styles = StyleSheet.create({
  itemStyle: {
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  itemChildStyle: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingLeft: 32,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  iconStyle: {
    height: 24,
    width: 24,
    tintColor: "black",
  },
  titleStyle: {
    fontSize: 20,
    color: 'black'
  }
});
