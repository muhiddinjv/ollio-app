import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { search_icon } from "../../constants/icons";
import { Picker } from "@react-native-picker/picker";
import ProductItem3 from "../../components/app_bar/product_item_3";
import { AppContext, INavigation } from "../../utils/interfaces";
import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../../components/appbar";
import Sidebar from "../../components/sidebar";
import { IconButton } from "react-native-paper";

const StyledPicker = styled(Picker);

const SalesScreen = ({ navigation }: INavigation) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const { openDrawer, setOpenDrawer } = useContext(AppContext);

  const tempItems = [
    "coca-cola",
    "fanta",
    "sprite",
    "chocolate",
    "pop-corn",
    "huggies",
    "nuts",
    "paper",
    "utencils",
    "dairy products",
    "snickers",
    "mars",
    "cookies",
    "marshmallow",
  ];

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <View className="flex-1 w-full">
      <AppBar
        title="Items"
        hamburgerIcon={{ onPress: toggleDrawer }}
        userPlusIcon={{ onPress: () => alert("add customer") }}
        threeDots={{ onPress: () => alert("threedots") }}
      />
      <Sidebar
        navigation={navigation}
        openDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
      />
      <View className="p-2 bg-white flex-row items-center justify-around">
        <TouchableOpacity
          onPress={() => navigation.navigate("SaveTicketScreen")}
          className="w-48 p-4 bg-green-500"
        >
          <Text className="text-white font-semibold text-center text-xl">
            SAVE
          </Text>
        </TouchableOpacity>
        <View className="w-48 p-4 bg-green-500 flex items-center justify-center">
          <Text className="text-white font-semibold text-xl">
            CHARGE 98 000
          </Text>
        </View>
      </View>
      <View className="flex-row items-center pl-4 h-16 border border-gray-400">
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue: any) => setSelectedValue(itemValue)}
          className="w-4/5 text-base text-black"
        >
          <Picker.Item label="All items" value="option0" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </StyledPicker>
        <View className="w-1/5 h-full flex items-center justify-center border border-gray-400">
          <IconButton size={35} icon="magnify" onPress={()=>alert('magnify clicked')} />
        </View>
      </View>
      <ScrollView>
        {tempItems.map((value, index) => (
          <ProductItem3
            key={index}
            title={value}
            subtitle={"mahsuloti"}
            price={'5600 so"m'}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SalesScreen;
