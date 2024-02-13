import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import { dollar } from "../constants/icons";
import { IProduct } from "../utils/interfaces";

const ListProduct = ({ price, time, productNumber, state}: IProduct) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <Image source={dollar} style={{ height: 36, width: 36 }} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{price}</Text>
          <Text style={styles.productValue}>{time}</Text>
        </View>
      </View>

      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {productNumber}
        </Text>
        <Text
          style={{
            color: "red",
          }}
        >
          {state}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-between',
    height: 64,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginHorizontal: 16,
  
  },

  productDetails: {
    marginLeft: 16,
    marginRight: 132,
  },
  productName: {
    fontSize: 20,
    color: "black",
  },
  productValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ListProduct;
