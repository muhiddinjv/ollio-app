import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image
} from "react-native";
import {
  Avatar,
  Drawer,
  Title,
  Caption,
  Text as PaperText,
} from "react-native-paper";
import AppBarItem from "../../components/app_bar/item_app_bar";
import DrawerItem from "../../components/drawer_item";
import { apps, back_office, burger_icon, category, discount_icon, information, receipt, sales, setting } from "../../contants";
import ProductItem from "../../components/app_bar/product_item";

const HomeScreen = ({navigation}:any) => {
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
            }}
          >
            ogabekabdijabborov@gmail.com
          </Text>

          <Text
            numberOfLines={1}
            style={{
              marginTop: 8,
              fontSize: 16,
              overflow: "hidden",
            }}
          >
            ogabekabdijabborov@gmail.com
          </Text>
          <Text
            numberOfLines={1}
            style={{
              marginTop: 4,
              fontSize: 16,
              overflow: "hidden",
            }}
          >
            ogabekabdijabborov@gmail.com
          </Text>
        </View>
        <View>
          <DrawerItem title={'Sales'}  icon={sales}/>
          <DrawerItem title={'Receipt'}  icon={receipt}/>
          <DrawerItem title={'Items'}  icon={burger_icon}/>
          <DrawerItem title={'Settings'}  icon={setting}/>
          <DrawerItem title={'Back Offiice'}  icon={back_office}/>
          <DrawerItem title={'Apps'}  icon={apps}/>
          <DrawerItem title={'Support'}  icon={information}/>



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
      <View>
        <AppBarItem title={"Items"} />
        <TouchableOpacity style={styles.itemStyle} onPress={() => navigation.navigate('TabView')}>
          <Image
            source={burger_icon}
            style={styles.iconStyle}
          />

          <View style={styles.itemChildStyle}>
            <View></View>
            <Text style={styles.titleStyle}>Items</Text>
            <View
              style={{ height: 1, backgroundColor: "black", width: "100%" }}
            ></View>
          </View>
        </TouchableOpacity >
        <TouchableOpacity style={styles.itemStyle} >
          <Image
            source={category}
            style={styles.iconStyle}
          />

          <View style={styles.itemChildStyle}>
            <View></View>
            <Text style={styles.titleStyle}>Categories</Text>
            <View
              style={{ height: 1, backgroundColor: "black", width: "100%" }}
            ></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemStyle}>
          <Image
            source={discount_icon}
            style={styles.iconStyle}
          />

          <View style={styles.itemChildStyle}>
            <View></View>
            <Text style={styles.titleStyle}>Discounts</Text>
            <View
              style={{height: 1, backgroundColor: "black", width: "100%" }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
        
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: 'black'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff'
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

export default HomeScreen;
