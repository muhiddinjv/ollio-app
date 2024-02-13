import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { done_circle, done_green } from "../../constants/icons";

const ProductItem = ({}) => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleIndicator} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>Zo'r mahsulot</Text>
        <Text style={styles.productValue}>ishonavering</Text>
      </View>
      {isChecked ? (
        <TouchableOpacity onPress={()=>console.log('wdidw8hdw')}>
          <Image source={done_circle} style={{ height: 36, width: 36 }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=>console.log('wdidw8hdw')}>
          <Image source={done_green} style={{ height: 36, width: 36 }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  circleIndicator: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "red",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProductItem;
