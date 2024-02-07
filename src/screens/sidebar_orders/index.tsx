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
import ProductItem2 from "../../components/app_bar/product_item2";
import ProductItem3 from "../../components/app_bar/product_item_3";
const SideBarOrders = ({ navigation }:INavigation) => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handlePickerChange = (value:any) => {
      setSelectedValue(value);
    };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerWidth = 300;
  const animatedValue = new Animated.Value(0);

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
    <View style={styles.container}>
      {isDrawerOpen && (
        <Animated.View style={[styles.overlay, { opacity: animatedValue }]} />
      )}
      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX: translateX }] },
          { display: isDrawerOpen ? "flex" : "none" },
        ]}
      >
        <View
          style={{
            height: 220,
            backgroundColor: "#4CB050",
            flexDirection: "column",
            paddingHorizontal: 24,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              marginTop: 52,
              fontSize: 20,
              overflow: "hidden",
              color: "#fff",
            }}
          >
            Owner
          </Text>

          <Text
            numberOfLines={1}
            style={{
              marginTop: 8,
              fontSize: 16,
              overflow: "hidden",
              color: "#fff",
            }}
          >
            POS 1
          </Text>
          <Text
            numberOfLines={1}
            style={{
              marginTop: 4,
              fontSize: 16,
              overflow: "hidden",
              color: "#fff",
            }}
          >
            MAXENGLISH
          </Text>
        </View>
        <View>
          <DrawerItem title={"Sales"} icon={sales} />
          <DrawerItem title={"Orders"} icon={receipt} />
          <DrawerItem title={"Transfers"} icon={transfers_icon} />
          <DrawerItem title={"Items"} icon={burger_icon} />
          <DrawerItem title={"Settings"} icon={setting} />
          <DrawerItem title={"Back Offiice"} icon={back_office} />
          <DrawerItem title={"Support"} icon={information} />
        </View>
      </Animated.View>

      <TouchableOpacity onPress={toggleDrawer} style={styles.menuIcon}>
        <Text style={styles.menuText}>{isDrawerOpen ? "Close" : "Open"}</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.mainContent,
          { marginLeft: isDrawerOpen ? drawerWidth : 0 },
        ]}
      >
        <View style={{ flex: 1, width: "100%" }}>
          <AppBarHome title={'Ticket 6'}/>
          <View
            style={{
              margin: 16,
              backgroundColor: "#008000",
              height: 86,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity onPress={()=> navigation.navigate('SaveTicketScreen')}
              style={styles.buttonStyle}
            >

              <Text style={styles.titleStyle}>Save</Text>
            </TouchableOpacity>
            <View style={styles.buttonStyle}>
              <Text style={styles.titleStyle}>CHARGE UZS 98 000</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 16, height: 60,
        borderWidth: 1,
        borderBlockColor: 'grey'
        }}>
      
      <Picker
        selectedValue={selectedValue}
        onValueChange={handlePickerChange}
        style={styles.picker}
      >
        <Picker.Item label="All items" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        {/* Add more Picker items as needed */}
      </Picker>
      <View style={{
        borderWidth: 1,
        height: '100%', 
        width: '14%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBlockColor: 'grey'
      }}>
      <Image source={search_icon} style={{height: 28, width: 28, tintColor: 'grey'}}/>
      </View>

    </View>
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />
    <ProductItem3 title={'0333'} subtitle={'paypoq'} price={'5600 so"m'} />

        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
      icon: {
        marginRight: 10,
      },
      picker: {
        flex: 1,
        color: '#333',
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
