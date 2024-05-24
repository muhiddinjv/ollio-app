import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AppContext } from "../../utils";
import { styled } from "nativewind";
import { IconButton } from "react-native-paper";
import ListItem from "../../components/ListItem";
import Wrapper from "../../wrapper/Wrapper";
import SaveChargeBtns from "../../components/SaveChargeBtns";

const StyledPicker = styled(Picker);

const SalesScreen = ({ navigation }) => {
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

  return (
    <View className="flex-1 w-full bg-white dark:bg-slate-800">
      {/* <AppBar
        title="Items"
        hamburgerIcon={{ onPress: () => setOpenDrawer(!openDrawer) }}
        userPlusIcon={{ onPress: () => alert("add customer") }}
        threeDots={{ onPress: () => alert("threedots") }}
      />
      <Sidebar
      navigation={navigation}
      openDrawer={openDrawer}
      toggleDrawer={() => setOpenDrawer(!openDrawer)}
      /> */}
      
      <View className="flex-row bg-white items-center pl-4 h-14 border border-gray-400">
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          className="w-4/5 text-base text-black"
        >
          <Picker.Item label="All items" value="option0" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </StyledPicker>
        <View className="w-1/5 h-full flex items-center justify-center border border-gray-400">
          <IconButton
            size={30}
            icon="magnify"
            onPress={() => alert("magnify clicked")}
          />
        </View>
      </View>
      <Wrapper>
        {tempItems.map((value, index) => (
          <ListItem
            key={index}
            title={value}
            description="mahsuloti"
            price={5000}
          />
        ))}
      </Wrapper>
        <SaveChargeBtns navigation={navigation} />
    </View>
  );
};

export default SalesScreen;
