import { Text, View } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { FlashList } from '@shopify/flash-list';

import ListItem from '../../components/ListItem';
import Loader from '../../components/Loader';
import { useGlobalState, useInfiniteScroll } from '../../hooks';

function Catalog() {
  const { selectedGoods, setSelectedGoods } = useGlobalState();
  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } = useInfiniteScroll({
    url: 'catalog',
    key: ['catalog'],
  });

  const handleToggleItem = item => {
    setSelectedGoods(prev => {
      const isSelected = prev.find(p => p.product_id === item._id);
      if (isSelected) {
        return prev.filter(p => p.product_id !== item._id);
      }
      return [...prev, { product_id: item._id, title: item.title, price: 0, cost: 0, quantity: 0 }];
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={data}
        extraData={selectedGoods}
        keyExtractor={item => item._id.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
        removeClippedSubviews
        estimatedItemSize={84}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <ListItem
            key={item._id}
            goodId={item._id}
            title={item.title}
            description="Tovar haqida qisqacha ma'lumot"
            variant="CheckBox"
            checked={selectedGoods.some(p => p.product_id === item._id)}
            onChange={() => handleToggleItem(item)}
          />
        )}
        LoaderComponent={<Loader />}
        ListEmptyComponent={
          <View className="flex-1 items-center">
            <Text className="p-5 text-base text-gray-600">Sizda hozircha maxsulotlar yo&apos;q.</Text>
          </View>
        }
        ListFooterComponent={() => {
          return isFetchingNextPage ? <ActivityIndicator /> : null;
        }}
      />
    </View>
  );
}
export default Catalog;
