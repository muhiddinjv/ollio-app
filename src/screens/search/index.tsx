import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import ProductItem2 from "../../components/app_bar/product_item2";
import { INavigation } from "../../utils/interfaces";
import AppBar from "../../components/appbar";

const initialLayout = { width: Dimensions.get("window").width };

const SearchScreen = ({ navigation }: INavigation) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: any) => {
    console.log(query);
    setSearchQuery(query);
  };

  const onSearchSubmit = () => {
    console.log("Search submitted:", searchQuery);
  };

  return (
    <View className="flex-1">
      <AppBar
        searchInput={{
          icon: "close",
          color: "white",
          label: "Search",
          value: searchQuery,
          onChangeText: (text) => onChangeSearch(text),
          onIconPress: () => setSearchQuery(""),
        }}
        backButton={{ onPress: () => alert("back button was clicked!") }}
      />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("EditItem")}>
          <ProductItem2 title={"Click this"} subtitle={"1 tonna"} price={"200 000"} />
        </TouchableOpacity>
        {[...Array(20)].map((_, index) => (
          <ProductItem2
            key={index}
            title={"Olma"}
            subtitle={"1 tonna"}
            price={"100 000"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
