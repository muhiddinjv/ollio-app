import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "../../components/ListItem";
import { INavigation } from "../../utils/interfaces";
import MyBottomSheet from "../../components/bottomsheet/bottomsheet";

const FirstRoute = () => (
  <View>
    <ScrollView className="h-full">
      <View className="flex-1 justify-center scene bg-white">
        <Text className="mx-4 my-2 font-bold text-green-600">
          Wednesday, December 13, 2023
        </Text>
        <ListItem
          title="COCA-COLA"
          description="kolani rasmini qidirishga vaqt yoq shunga qulupnay rasmini qoydim, Hojaka"
          price={15000}
        />
        <Text className="mx-4 my-2 font-bold text-green-600">
          Wednesday, December 13, 2023
        </Text>

        <ListItem
          title="COCA-COLA"
          description="kolani rasmini qidirishga vaqt yoq shunga qulupnay rasmini qoydim, Hojaka"
          price={15000}
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

      <ListItem
        title="COCA-COLA"
        description="kolani rasmini qidirishga vaqt yoq shunga qulupnay rasmini qoydim, Hojaka"
        price={15000}
      />
      <Text className="mx-4 my-2 font-bold text-green-600">
        Wednesday, December 13, 2023
      </Text>

      <ListItem
        title="COCA-COLA"
        description="kolani rasmini qidirishga vaqt yoq shunga qulupnay rasmini qoydim, Hojaka"
        price={15000}
      />
    </View>
  </ScrollView>
);

const ThirdRoute = () => {
  return (
    <ScrollView>
      <View className="flex-1 justify-center bg-white dark:bg-slate-800">
        {[...Array(20)].map((_, index) => (
          <ListItem
            title="Product TITLE"
            description="Product DESCRIPTION"
            price={15000}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const initialLayout = { width: Dimensions.get("window").width };

const Orders = ({ navigation }: INavigation) => {
  // const { openDrawer, setOpenDrawer } = useContext(AppContext);
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
    <TabBar
      {...props}
      className="bg-slate-600"
      indicatorStyle={{ backgroundColor: "white" }}
    />
  );

  return (
    <View className="flex-1">
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

export default Orders;
