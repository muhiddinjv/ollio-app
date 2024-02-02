import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import { arrow, cancel, search_icon } from "../../contants";
import { Appbar, TextInput, Button } from "react-native-paper";
import ProductItem2 from "../../components/app_bar/product_item2";
import { TouchableOpacity } from "react-native-gesture-handler";

const initialLayout = { width: Dimensions.get("window").width };

const SearchScreen = ({ navigation }:any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query:any) => {
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
          <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Image
              source={arrow}
              style={{
                height: 32,
                width: 32,
                tintColor: "#FFF",
              }}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={onChangeSearch}
          underlineColor="transparent"
        />
        <Image
          source={cancel}
          style={{
            height: 24,
            width: 24,
            tintColor: "#FFF",
          }}
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('EditItem')}><ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} /></TouchableOpacity>
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
    </View>
  );
};
const styles = StyleSheet.create({
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
export default SearchScreen;
