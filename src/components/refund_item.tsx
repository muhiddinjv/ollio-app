import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import { dollar } from "../contants/icons";

interface IRefundItem {
  title: string;
  productAmount: string|number;
  productPrice: string|number;
}

const RefundItem = ({ title, productAmount, productPrice}:IRefundItem) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: 'center' }}>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.productValue}>{productAmount}</Text>
        </View>
      </View>

      <View style={{}}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
          }}
        >
          {productPrice}
        </Text>
        <Text
          style={{
            color: "red",
          }}
        >
      
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
    borderBottomColor: "#ddd",
    marginHorizontal: 8,
  
  },

  productDetails: {
    marginLeft: 0,
    marginRight: 0,
  },
  productName: {
    fontSize: 16,
    color: "black",
  },
  productValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default RefundItem;
