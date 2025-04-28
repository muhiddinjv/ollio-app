import React from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { LinearTransition } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { useGlobalState, useInfiniteScroll } from '../../hooks';
import { formatDate } from '../../utils';

function BillItem({ bill, navigate, onDelete }) {
  const {
    colors: { primary, backdrop },
  } = useTheme();
  const billPaid = bill?.status === 'paid';

  const handleBillPress = () => {
    navigate('BillDetails', { bill });
  };

  return (
    <Pressable onPress={handleBillPress} className="flex-row items-center border-b border-b-gray-300 p-3">
      <MaterialIcons name="paid" size={24} color={billPaid ? primary : backdrop} />
      <Text className="ml-2 text-sm">{formatDate(bill?.created_at)}</Text>
      <Text className="ml-auto mr-2">UZS {bill?.total_price}</Text>
      <MaterialIcons
        disabled={billPaid}
        name="delete"
        size={24}
        color={billPaid ? backdrop : primary}
        onPress={onDelete}
      />
    </Pressable>
  );
}
// 998935399093
// johndoe
export default function BillList({ navigation }) {
  const { loading, deleteBill } = useGlobalState();
  const { data, isRefreshing, onRefresh, isFetchingNextPage } = useInfiniteScroll({
    url: 'bills',
    limit: 25,
    key: ['bills'],
  });
  const { colors } = useTheme();

  return (
    <View>
      <Header title="Cheklar" fontSize={20} navigation={navigation} backBtn />
      {loading && <ActivityIndicator color={colors.primary} />}
      <Animated.FlatList
        data={data || []}
        removeClippedSubviews
        estimatedItemSize={84}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <BillItem bill={item} navigate={navigation.navigate} onDelete={() => deleteBill(item._id)} />
        )}
        keyExtractor={item => item?._id?.toString()}
        itemLayoutAnimation={LinearTransition}
        LoaderComponent={<Loader />}
        ListEmptyComponent={
          <View className="flex items-center">
            <Text className="p-2 text-gray-600">Sizda hozircha cheklar yo&apos;q.</Text>
          </View>
        }
        ListFooterComponent={() => {
          // eslint-disable-next-line no-unused-expressions
          isFetchingNextPage && <ActivityIndicator />;
        }}
      />
    </View>
  );
}
