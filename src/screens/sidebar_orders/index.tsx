import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import AppBarHome from "../../components/app_bar/app_bar_ticket";
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
} from "../../contants/icons";
import { Picker } from "@react-native-picker/picker";
import ProductItem3 from "../../components/app_bar/product_item_3";
import { INavigation } from "../../utils/interfaces";
import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";

const StyledPicker = styled(Picker);

const SideBarOrders = ({ navigation }: INavigation) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const animatedValue = new Animated.Value(0);
  const drawerWidth = 240;
  const tempItems = ["coca-cola", "fanta", "sprite", "chocolate", "pop-corn", "huggies", "nuts", "paper", "utencils", "dairy products", "snickers", "mars"];

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
        <Animated.View className="absolute inset-0 bg-black" style={{ opacity: animatedValue }} />
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

      <TouchableOpacity onPress={toggleDrawer} className="absolute top-4 left-4 z-10">
        <Text className="text-lg font-semibold">{isDrawerOpen ? "Close" : "Open"}</Text>
      </TouchableOpacity>

      <ScrollView>
      <Animated.View
        className="flex-1 ml-0 transition-all"
        style={{ marginLeft: isDrawerOpen ? drawerWidth : 0 }}
      >
        <View className="flex-1 w-full">
          <AppBarHome title="Ticket 6" />
          <View className="p-4 bg-white flex-row items-center justify-around">
            <TouchableOpacity onPress={() => navigation.navigate("SaveTicketScreen")} className="w-48 h-20 bg-green-500 flex items-center justify-center border-r border-green-900 mr-1">
              <Text className="text-white font-semibold text-xl">SAVE</Text>
            </TouchableOpacity>
            <View className="w-48 h-20 bg-green-500 flex items-center justify-center">
              <Text className="text-white font-semibold text-xl">CHARGE 98 000</Text>
            </View>
          </View>
          <View className="flex-row items-center pl-4 h-16 border border-gray-400">
            <StyledPicker
              selectedValue={selectedValue}
              onValueChange={(itemValue:any) => setSelectedValue(itemValue)}
              className="w-4/5 text-base text-black"
            >
              <Picker.Item label="All items" value="option0" />
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
              {/* Add more Picker items as needed */}
            </StyledPicker>
            <View className="w-1/5 h-full flex items-center justify-center border border-gray-400">
              <Image
                source={search_icon}
                className="h-7 w-7 text-slate-500"
              />
            </View>
          </View>
          {tempItems.map((value, index) => (
            <ProductItem3
              key={index}
              title={value}
              subtitle={"mahsulot"}
              price={'5600 so"m'}
            />
          ))}
        </View>
      </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
    color: "#333",
  },

  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: 188,
    backgroundColor: "#4CAF50",
    height: 84,
    paddingHorizontal: 32,
  },
  itemStyle: {
    height: 64,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  itemChildStyle: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingLeft: 32,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  iconStyle: {
    height: 24,
    width: 24,
    tintColor: "black",
  },
  titleStyle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  drawer: {
    width: 300,
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    elevation: 16,
    zIndex: 2,
  },
  menuIcon: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 2,
  },
  menuText: {
    color: "transparent",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  contentText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
});

export default SideBarOrders;
