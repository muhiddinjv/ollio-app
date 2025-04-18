import React from "react";
import { View, FlatList, Text } from "react-native";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { useGlobalState } from "../../hooks";
import { formatDate } from "../../utils";

const BillDetails = ({ navigation, route }) => {
  const { downloadBill } = useGlobalState();
  const { bill } = route.params;

  const renderHeader = () => (
    <View className="py-4 my-2 px-4 border-b border-gray-300">
      <Text className="text-4xl text-center font-medium">{bill?.total_price}</Text>
      <Text className="text-gray-600 text-xl text-center mb-4">Jami</Text>
      <Text className="text-lg">Hodim: {bill?.staff}</Text>
      <Text className="text-lg">Mijoz: {bill?.client || "Topilmadi"}</Text>
    </View>
  );

  const renderFooter = () => (
    <View className="py-4 px-4 mt-4 border-t border-gray-300">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg">Jami:</Text>
        <Text className="text-lg">{bill?.total_price}</Text>
      </View>
      <View className="flex-row items-center justify-between py-2">
        <Text className="text-gray-500">{formatDate(bill?.created_at)}</Text>
        <Text className="text-gray-500">#{bill?._id}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1">
      <Header 
        fontSize={20} 
        title="Chek" 
        iconRight="download" 
        iconLeft="arrow-left" 
        navigation={navigation} 
        onRightPress={() => downloadBill(bill)} 
        onLeftPress={() => navigation.navigate("Cheklar")} 
      />
      <FlatList
        data={bill?.products}
        renderItem={({ item }) => (
          <View key={item?.product_id} className="flex-row justify-between py-2 px-4 ">
            <View className="flex-row items-center gap-8">
              <View>
                <Text className="text-lg max-w-[300px]">{item?.title}</Text>
                <Text className="text-gray-500">
                  {item?.quantity} x {item?.price}
                </Text>
              </View>
            </View>
            <Text className="text-lg">{item?.total}</Text>
          </View>
        )}
        keyExtractor={(item) => item?.product_id}
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
