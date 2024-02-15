import React, { useState } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { more_1 } from "../../constants/icons";
import ProductItem from "../../components/app_bar/product_item";
import { ScrollView } from "react-native-gesture-handler";
import ListProduct from "../../components/list_product";
import MyBottomSheet from "../../components/bottomsheet/bottomsheet";
import { INavigation } from "../../utils/interfaces";
import AppBar from "../../components/appbar";

const FirstRoute = () => (
  <View>
    <ScrollView className="h-full">
      <View className="flex-1 justify-center scene bg-white">
        <Text className="mx-4 my-2 font-bold text-green-600">
          Wednesday, December 13, 2023
        </Text>
        <ListProduct
          price="UZS 3000"
          time="21:12"
          productNumber="21:12"
          state="Refund #2-1000"
        />
        <Text className="mx-4 my-2 font-bold text-green-600">
          Wednesday, December 13, 2023
        </Text>

        <ListProduct
          price="UZS 3000"
          time="21:12"
          productNumber="21:12"
          state="Refund #2-1000"
        />
      </View>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <ScrollView>
    <View className="flex-1 justify-center scene bg-white">
      <View className="flex-row w-full items-center justify-between">
        <Text className="mx-4 my-4 font-bold text-green-600">
          Wednesday, December 13, 2023
        </Text>
        <MyBottomSheet />
      </View>

      <ListProduct
        price="UZS 3000"
        time="21:12"
        productNumber="21:12"
        state="Pending"
      />
      <Text className="mx-4 my-2 font-bold text-green-600">
        Wednesday, December 13, 2023
      </Text>

      <ListProduct
        price="UZS 3000"
        time="21:12"
        productNumber="21:12"
        state="Accepted"
      />
    </View>
  </ScrollView>
);

const ThirdRoute = () => {
  return (
    <ScrollView>
      <View className="flex-1 justify-center scene bg-white">
        {[...Array(20)].map((_, index) => <ProductItem key={index} />)}
      </View>
    </ScrollView>
  );
};

const initialLayout = { width: Dimensions.get("window").width };

const OrdersScreen = ({ navigation }: INavigation) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "List" },
    { key: "second", title: "Transfer" },
    { key: "third", title: "Tab" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar {...props} className="bg-slate-600" indicatorStyle={{ backgroundColor: 'white' }}/>
  );

  return (
    <View className="flex-1">
      <AppBar title="Orders" hamburgerIcon={{onPress: ()=>alert('hamburger icon pressed')}} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default OrdersScreen;
