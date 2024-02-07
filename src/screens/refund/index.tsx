import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import {
  arrow,
  cancel,
  more,
  more_ho,
  search_icon,
} from "../../contants/icons";
import { Appbar, TextInput, Button } from "react-native-paper";
import ProductItem2 from "../../components/app_bar/product_item2";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RefundItem from "../../components/refund_item";

const initialLayout = { width: Dimensions.get("window").width };

const RefundScreen = ({ navigation }:INavigation) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query:string) => {
    setSearchQuery(query);
  };

  const onSearchSubmit = () => {
    // Handle search submission logic
    console.log("Search submitted:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={arrow}
              style={{
                height: 28,
                width: 28,
                tintColor: "#FFF",
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 18,
              color: "white",
              fontWeight: "600",
            }}
          >
            #2-1001
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 18,
              color: "white",
              fontWeight: "600",
            }}
          >
            REFUND
          </Text>
          <Image
            source={more}
            style={{
              height: 20,
              width: 20,
              tintColor: "#FFF",
            }}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            height: 120,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 32, marginTop: 32, color: "black" }}>
            UZS 150,000
          </Text>
          <Text style={{ fontSize: 18 }}>Total</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: "96%",
            marginVertical: 16,
            marginLeft: 8,

            backgroundColor: "black",
          }}
        ></View>
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Employee: </Text>
            <Text style={styles.subTitle}>ogashblog@gmail.com</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>POS: </Text>
            <Text style={styles.subTitle}>mega planet pos</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Customer: </Text>
            <Text style={styles.subTitle}>Stive Jobs</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: "96%",
            marginVertical: 16,
            backgroundColor: "black",
            marginLeft: 8,
          }}
        ></View>
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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    justifyContent: "flex-start",
    textAlign: "left",
    fontSize: 18,
    color: "black",
  },
  subTitle: {
    justifyContent: "flex-start",
    textAlign: "left",
    fontSize: 18,
    color: "black",
  },
  input: {
    backgroundColor: "transparent",
    marginRight: 10,
    width: 280,
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
});
export default RefundScreen;
