import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Dimensions, Image } from "react-native";
import { TextInput } from "react-native-paper";

import ProductItem2 from "../../components/app_bar/product_item2";
import { INavigation } from "../../utils/interfaces";
import { arrow, cancel } from "../../constants/icons";

const initialLayout = { width: Dimensions.get("window").width };

const SearchScreen = ({ navigation }: INavigation) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: any) => {
    setSearchQuery(query);
  };

  const onSearchSubmit = () => {
    console.log("Search submitted:", searchQuery);
  };

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between bg-green-500 p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrow} className="h-8 w-8" />
        </TouchableOpacity>
        <TextInput
          className="input-field bg-transparent w-72"
          placeholder="Search"
          value={searchQuery}
          onChangeText={onChangeSearch}
          underlineColor="transparent"
        />
        <Image source={cancel} className="h-6 w-6" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("EditItem")}>
        <ProductItem2 title={"Olma"} subtitle={"1 tonna"} price={"100 000"} />
      </TouchableOpacity>
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

export default SearchScreen;
