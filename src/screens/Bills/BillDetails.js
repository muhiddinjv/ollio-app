import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { useGlobalState } from '../../hooks';
import { formatDate } from '../../utils';

function BillDetails({ navigation, route }) {
  const { downloadBill } = useGlobalState();
  const { bill } = route.params;

  const renderHeader = () => (
    <View className="my-2 border-b border-gray-300 p-4">
      <Text className="text-center text-4xl font-medium">{bill?.total_price}</Text>
      <Text className="mb-4 text-center text-xl text-gray-600">Jami</Text>
      <Text className="text-lg">Hodim: {bill?.staff}</Text>
      <Text className="text-lg">Mijoz: {bill?.client || 'Nomalum'}</Text>
    </View>
  );

  const renderFooter = () => (
    <View className="mt-4 border-t border-gray-300 p-4">
      <View className="flex-row items-center justify-between">
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
        onLeftPress={() => navigation.navigate('Cheklar')}
      />
      <FlatList
        data={bill?.products}
        renderItem={({ item }) => (
          <View key={item?.product_id} className="flex-row justify-between px-4 py-2 ">
            <View className="flex-row items-center gap-8">
              <View>
                <Text className="max-w-[300px] text-lg">{item?.title}</Text>
                <Text className="text-gray-500">
                  {item?.quantity} x {item?.price}
                </Text>
              </View>
            </View>
            <Text className="text-lg">{item?.total}</Text>
          </View>
        )}
        keyExtractor={item => item?.product_id}
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
}

export default BillDetails;
