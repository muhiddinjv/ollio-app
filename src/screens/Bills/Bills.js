import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../Auth/astorage";
import axiosInstance from "../Auth/axiostance";
import { FlashList } from "@shopify/flash-list";
import Loader from "../../components/Loader";
import { FontAwesome6 } from "@expo/vector-icons";
import { useGlobalState } from "../../hooks";
import Header from "../../components/Header";
import { DrawerActions } from "@react-navigation/native";
const billsData = [
  {
    price: "3000",
    time: "21:04",
    id: 1,
  },
  {
    price: "4000",
    time: "10:04",
    id: 2,
  },
  {
    price: "5000",
    time: "11:04",
    id: 3,
  },
  {
    price: "8000",
    time: "19:04",
    id: 4,
  },
  {
    price: "9000",
    time: "20:04",
    id: 5,
  },
  {
    price: "10000",
    time: "21:04",
    id: 6,
  },
  {
    price: "20000",
    time: "22:04",
    id: 7,
  },
];

const Bills = ({ navigation }) => {
  const { goodId, goodQty } = useGlobalState();

  const billsQuery = useQuery({
    queryKey: ["bills"],
    queryFn: async () => {
      const accessToken = await getAccessToken();
      const response = await axiosInstance.post(
        "bills",
        {
          buyer: "66366f44d06d804edde49493",
          goods: [
            {
              _id: "665eee37cd18d7e147b8baaf",
              quantity: 3,
            },
            {
              _id: "665eee37cd18d7e147b8bab2",
              quantity: 4,
            },
          ],
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return response.data;
    },
  });

  return (
    <View className="flex-1">
      <Header
        title="Bills"
        fontSize={20}
        iconLeft="menu"
        navigation={navigation}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        leftBtn
      />
      <View className="border-b border-gray-200 px-4 py-2">
        <Text className="text-primary font-medium text-lg">
          Wednesday, December 13, 2024
        </Text>
      </View>
      <View className="p-4 flex-1">
      <FlashList
        data={billsData}
        onEndReachedThreshold={2}
        removeClippedSubviews={true}
        estimatedItemSize={84}
        renderItem={({ item }) => (
          <Pressable
            className="flex-row justify-between border-b border-gray-200 py-4"
            onPress={() => navigation.navigate("BillDetails")}
          >
            <View className="flex-row items-center gap-8">
              <FontAwesome6 name="money-bills" size={24} color="black" />
              <View>
                <Text className="text-lg">UZS {item.price}</Text>
                <Text className="text-gray-500">{item.time}</Text>
              </View>
            </View>
            <Text className="text-gray-500 text-lg">#{item.id}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        LoaderComponent={<Loader />}
        ListEmptyComponent={
          <View className="flex items-center">
            <Loader />
          </View>
        }
      />
      {/* <Text>title + quantity</Text>
      <Text>total price per product</Text>
      <Text>total price of all products</Text> */}
      </View>

    </View>
  );
};

export default Bills;
