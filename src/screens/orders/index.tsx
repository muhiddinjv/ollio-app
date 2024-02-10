import React, { useState } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { more_1 } from "../../contants/icons";
import ProductItem from "../../components/app_bar/product_item";
import { ScrollView } from "react-native-gesture-handler";
import ListProduct from "../../components/list_product";
import MyBottomSheet from "../../components/bottomsheet/bottomsheet";
import { INavigation } from "../../utils/interfaces";

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
  const productItems = Array.from({ length: 20 }, (_, index) => (
    <ProductItem key={index} />
  ));

  return (
    <ScrollView>
      <View className="flex-1 justify-center scene bg-white">
        {productItems}
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
      <View className="bg-green-600 p-4 flex-row items-center">
        <Image
          source={more_1}
          className="w-6 h-6 text-red-800"
          style={{ tintColor: "#FFF" }}
        />
        <Text className="mx-4 text-2xl font-bold text-white">Orders</Text>
      </View>
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
