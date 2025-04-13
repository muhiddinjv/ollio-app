import React from "react";
import { View, FlatList, Text } from "react-native";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { formatDate } from "../../utils";

const BillDetails = ({ navigation, route }) => {
  const { bill } = route.params;

  const renderHeader = () => (
    <View className="py-4 my-2 px-4 border-b border-gray-300">
      <Text className="text-4xl text-center font-medium">UZS {bill?.total_price}</Text>
      <Text className="text-gray-600 text-xl text-center mb-4">Total</Text>
      <Text className="text-lg">Sotuvchi: {bill?.owner}</Text>
      <Text className="text-lg">Haridor: {bill?.client}</Text>
    </View>
  );

  const renderFooter = () => (
    <View className="py-4 px-4 mt-4 border-t border-gray-300">
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-lg">Total:</Text>
        <Text className="font-semibold text-lg">{bill?.total_price}</Text>
      </View>
      <View className="flex-row items-center justify-between py-2">
        <Text className="text-lg text-gray-500">{formatDate(bill?.created_at)}</Text>
        <Text className="text-lg text-gray-500">#2-1001</Text>
      </View>
    </View>
  );

  const downloadBill = () => {
    alert("download bill");
  }

  return (
    <View className="flex-1">
      <Header title="Bill Details" navigation={navigation} fontSize={20} leftBtn iconLeft="arrow-left" onPress={() => navigation.navigate("Bills")} rightBtn iconRight="download" onRightPress={downloadBill} />
      <FlatList
        data={bill?.products}
        renderItem={({ item }) => (
          <View key={item._id} className="flex-row justify-between py-2 px-4 ">
            <View className="flex-row items-center gap-8">
              <View>
                <Text className="text-lg">{item.title}</Text>
                <Text className="text-gray-500">
                  {item.quantity} x {item.price}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 text-lg">{item.total}</Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
        LoaderComponent={<Loader />}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={
          <View className="items-center">
            <Text>No products</Text>
          </View>
        }
      />
    </View>
  );
};

export default BillDetails;
