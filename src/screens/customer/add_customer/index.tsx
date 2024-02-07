import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import {
  arrow,
  burger_icon,
  cancel,
  more,
  more_1,
  search_icon,
  user_plus,
} from "../../../contants/icons";
import SaveChargeButton from "../../../components/save_charge_button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { INavigation } from "../../../utils/interfaces";

const AddCustomerScreen = ({ navigation }:INavigation) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [productItems, setProductItems] = useState([
    { id: 1, name: "Narxlar o'zgarishi mumkin", price: 0 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 2", price: 29.99 },
    { id: 4, name: "Product 2", price: 29.99 },
    { id: 5, name: "Product 2", price: 29.99 },
    { id: 6, name: "Product 2", price: 29.99 },
    { id: 7, name: "Product 2", price: 29.99 },
    { id: 8, name: "Product 2", price: 29.99 },
    { id: 9, name: "Product 2", price: 29.99 },
    // Add more product items as needed
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={more_1}
              style={{
                height: 24,
                width: 24,
                tintColor: "#FFF",
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              marginLeft: 36,
              fontWeight: "700",
            }}
          >
            Ticket
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CustomerListScreen")}
          >
            <Image
              source={user_plus}
              style={{
                height: 24,
                width: 24,
                tintColor: "#FFF",
                marginHorizontal: 8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={more}
              style={{
                height: 20,
                width: 20,
                tintColor: "#FFF",
                marginLeft: 16,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <SaveChargeButton />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "black",
            height: 48,
            marginVertical: 16,
          }}
        >
          <Picker
            selectedValue={selectedItem}
            onValueChange={(itemValue) => setSelectedItem(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select an Item" value="" />
            <Picker.Item label="Item 1" value="item1" />
          </Picker>
          <TouchableOpacity
            style={{
              width: "20%",
              borderLeftWidth: 1,
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Image
              source={search_icon}
              style={{
                height: 20,
                width: 20,
                marginLeft: 16,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.productItem}>
          <View style={styles.circleIndicator} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Narxlar o'zgarishi </Text>
            <Text style={styles.productPrice}>-</Text>
          </View>
        </View>
        <View style={styles.productItemsContainer}>
          {productItems.map((item) => (
            <View style={styles.productItem} key={item.id}>
              <View style={styles.circleIndicator} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{`$${item.price.toFixed(
                  2
                )}`}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItemsContainer: {
    padding: 0  
  },
  contentContainer: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
  picker: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
  },

  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  circleIndicator: {
    width: 40,
    height: 40,
    backgroundColor: "grey",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
  appBar: {
    backgroundColor: "#4CB050",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    flexDirection: "row",
  },
});

export default AddCustomerScreen;
