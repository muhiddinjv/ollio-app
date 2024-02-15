import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import DrawerItem from "../../components/drawer_item";
import {
  back_office,
  burger_icon,
  information,
  receipt,
  sales,
  search_icon,
  setting,
  transfers_icon,
} from "../../constants/icons";
import { Picker } from "@react-native-picker/picker";
import ProductItem3 from "../../components/app_bar/product_item_3";
import { INavigation } from "../../utils/interfaces";
import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "../../components/appbar";

const StyledPicker = styled(Picker);

const SalesScreen = ({ navigation }: INavigation) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const animatedValue = new Animated.Value(0);
  const drawerWidth = 240;
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

  const toggleDrawer = () => {
    const toValue = isDrawerOpen ? 0 : 1;

    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsDrawerOpen(!isDrawerOpen);
    });
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-drawerWidth, 0],
  });

  const contentOpacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 0],
  });

  return (
    <View className="relative flex-grow flex-row bg-white">
      {isDrawerOpen && (
        <Animated.View
          className="absolute inset-0 bg-black"
          style={{ opacity: animatedValue }}
        />
      )}
      <Animated.View
        className="absolute top-0 left-0 bg-white border-r border-gray-300 z-10"
        style={{
          width: drawerWidth,
          transform: [{ translateX }],
          display: isDrawerOpen ? "flex" : "none",
        }}
      >
        <View className="h-fit bg-green-500 p-6">
          <Text className="text-white text-lg font-semibold mt-10">Owner</Text>
          <Text className="text-white text-base mt-1">POS 1</Text>
          <Text className="text-white text-base mt-1">MY SHOP</Text>
        </View>
        <View>
          <DrawerItem title="Sales" icon={sales} />
          <DrawerItem title="Orders" icon={receipt} />
          <DrawerItem title="Transfers" icon={transfers_icon} />
          <DrawerItem title="Items" icon={burger_icon} />
          <DrawerItem title="Settings" icon={setting} />
          <DrawerItem title="Back Offiice" icon={back_office} />
          <DrawerItem title="Support" icon={information} />
        </View>
      </Animated.View>

      <TouchableOpacity
        onPress={toggleDrawer}
        className="absolute top-4 left-4 z-10"
      >
        <Text className="text-lg font-semibold">
          {isDrawerOpen ? "Close" : "Open"}
        </Text>
      </TouchableOpacity>

      <Animated.View
        className="flex-1 ml-0 transition-all"
        style={{ marginLeft: isDrawerOpen ? drawerWidth : 0 }}
      >
        <View className="flex-1 w-full">
          <AppBar title="Items" hamburgerIcon={{ onPress: ()=> alert('hamburger button was clicked!') }}/>
          <View className="p-2 bg-white flex-row items-center justify-around">
            <TouchableOpacity
              onPress={() => navigation.navigate("SaveTicketScreen")}
              className="w-48 p-4 bg-green-500"
            >
              <Text className="text-white font-semibold text-center text-xl">SAVE</Text>
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
              {/* Add more Picker items as needed */}
            </StyledPicker>
            <View className="w-1/5 h-full flex items-center justify-center border border-gray-400">
              <Image source={search_icon} className="h-7 w-7 text-slate-500" />
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
      </Animated.View>
    </View>
  );
};

export default SalesScreen;
