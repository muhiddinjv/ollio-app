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
  user_done,
  user_plus,
} from "../../../contants/icons";
import SaveChargeButton from "../../../components/save_charge_button";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductInfo from "../../tabs/product_info";
import ProductItem from "../../../components/app_bar/product_item";
import ProductItem2 from "../../../components/app_bar/product_item2";
import ProductItem3 from "../../../components/app_bar/product_item_3";
import RefundItem from "../../../components/refund_item";

const TicketScreen = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [productItems, setProductItems] = useState([
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 2", price: 29.99 },
    { id: 4, name: "Product 2", price: 29.99 },
    { id: 5, name: "Product 2", price: 29.99 },
    { id: 6, name: "Product 2", price: 29.99 },
    { id: 7, name: "Product 2", price: 29.99 },
    { id: 8, name: "Product 2", price: 29.99 },
    { id: 9, name: "Product 2", price: 29.99 },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={arrow}
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
        <RefundItem
          title={"0282 Niso gaz falga qalin"}
          productAmount={"1 x UZS 1,000"}
          productPrice={"UZS 1,000"}
        />
        <RefundItem
          title={"0282 Niso gaz falga qalin"}
          productAmount={"1 x UZS 1,000"}
          productPrice={"UZS 1,000"}
        />
        <RefundItem
          title={"0282 Niso gaz falga qalin"}
          productAmount={"1 x UZS 1,000"}
          productPrice={"UZS 1,000"}
        />
        <View
          style={{ height: 1, backgroundColor: "grey", marginVertical: 16 }}
        ></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 360, }}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>UZS 98,000</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View
            style={{
              height: 80,
              width: "94%",
              backgroundColor: "#4CAF50",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginLeft: 36,
                }}
              >
                SAVE
              </Text>
            </TouchableOpacity>
            <View
              style={{ width: 1, backgroundColor: "black", height: "100%" }}
            ></View>
            <TouchableOpacity onPress={()=> navigation.navigate('PaymentScreen')}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text
                style={{ color: "white", fontSize: 20, textAlign: "center" }}
              >
                CHARGE
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, textAlign: "center" }}
              >
                UZS 98,000
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical:  16,
  },
  container: {
    flex: 1,
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

export default TicketScreen;
