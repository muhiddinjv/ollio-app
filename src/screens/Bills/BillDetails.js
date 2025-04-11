import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "react-native";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks";

const Item = ({ name, quantity, price }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>x {quantity}</Text>
      <Text>{price} UZS</Text>
    </View>
  );
};
const BillDetails = ({navigation}) => {
  const { billItem } = useGlobalState();
  console.log(billItem);

  const items = [
    { name: "a74 cola 1.5L (1bl*6ta)", quantity: 1, price: "15,000", id: 0 },
    { name: "a75 cola 1.5L (1bl*6ta)", quantity: 2, price: "32,000", id: 1 },
    { name: "a76 fanta 1.5L (1bl*6ta)", quantity: 3, price: "51,000", id: 2 },
    { name: "a77 sprite 1.5L (1bl*6ta)", quantity: 4, price: "70,000", id: 3 },
    { name: "a78 pepsi 1.5L (1bl*6ta)", quantity: 5, price: "89,000", id: 4 },
    {
      name: "a79 redbull 1.5L (1bl*6ta)",
      quantity: 6,
      price: "108,000",
      id: 5,
    },
    { name: "a80 water 1.5L (1bl*6ta)", quantity: 7, price: "127,000", id: 6 },
    { name: "a81 water 1.5L (1bl*6ta)", quantity: 8, price: "146,000", id: 7 },
    { name: "a82 water 1.5L (1bl*6ta)", quantity: 9, price: "165,000", id: 8 },
    { name: "a83 water 1.5L (1bl*6ta)", quantity: 10, price: "184,000", id: 9 },
    {
      name: "a84 water 1.5L (1bl*6ta)",
      quantity: 11,
      price: "203,000",
      id: 10,
    },
    {
      name: "a85 water 1.5L (1bl*6ta)",
      quantity: 12,
      price: "222,000",
      id: 11,
    },
    {
      name: "a86 water 1.5L (1bl*6ta)",
      quantity: 13,
      price: "241,000",
      id: 12,
    },
  ];

  return (
    <ScrollView className="relative">
      <Header title="Bills" navigation={navigation} fontSize={20} backBtn/>
      <View className="p-4">
      <View className="py-4 border-b border-gray-300">
        <Text className="text-4xl text-center font-medium">UZS 150 000</Text>
        <Text className="text-gray-600 text-xl text-center">Total</Text>
      </View>
      <View className="py-4 border-b border-gray-300">
        <Text className="text-lg">Employee: muhidding001@gmail.com</Text>
        <Text className="text-lg">POS: Mega planet POS</Text>
        <Text className="text-lg">Customer: Bill Gates</Text>
      </View>

      <View className="py-4 border-b border-gray-300">
        {items.map((item) => (
          <View key={item.id} className="flex-row justify-between py-4">
            <View className="flex-row items-center gap-8">
              <View>
                <Text className="text-lg">UZS {item.name}</Text>
                <Text className="text-gray-500">
                  {item.quantity} x {item.price}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 text-lg">#{item.price}</Text>
          </View>
        ))}
      </View>
      <View className="flex-row justify-between items-center py-4 border-b border-gray-300">
        <Text className="font-semibold text-xl">Total:</Text>
        <Text className="font-semibold text-lg">UZS 150 000</Text>
      </View>
      <View className="flex-row items-center justify-between py-4">
        <Text className="text-lg text-gray-500">12/11/23 10:44</Text>
        <Text className="text-lg text-gray-500">#2-1001</Text>
      </View>
      <View className="pb-24">
        <Pressable className="py-3 bg-primary rounded">
          <Text className="text-xl text-center text-white">Download</Text>
        </Pressable>
      </View>
      {/* <FlatList
        data={items}
        onEndReachedThreshold={2}
        removeClippedSubviews={true}
        estimatedItemSize={84}
        renderItem={({ item }) => (
          <View className="flex-row justify-between border-b border-gray-200 py-4">
            <View className="flex-row items-center gap-8">
              <View>
                <Text className="text-lg">UZS {item.price}</Text>
                <Text className="text-gray-500">{item.time}</Text>
              </View>
            </View>
            <Text className="text-gray-500 text-lg">#{item.id}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        LoaderComponent={<Loader />}
        ListEmptyComponent={
          <View className="flex items-center">
            <Loader />
          </View>
        }
      /> */}
      </View>

    </ScrollView>
  );
};

export default BillDetails;
