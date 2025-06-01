import { useState } from 'react';
import { RefreshControl, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import ListItem from '../../components/ListItem';
import Loader from '../../components/Loader';
import { useGlobalState } from '../../hooks';
import { useInfiniteScroll } from '../../api/queries';

function GoodsList() {
  const { selectedGoods } = useGlobalState();

  const [goodId] = useState([]);
  const [filters] = useState({ search: '' });
  const navigation = useNavigation();
  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } = useInfiniteScroll({
    url: 'stock',
    filters,
    key: ['stock'],
  });

  const handleItemPress = good => {
    navigation.navigate('GoodEdit', { good });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={data}
        extraData={selectedGoods}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
        removeClippedSubviews
        estimatedItemSize={84}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <ListItem
            editable
            key={item._id}
            goodId={item._id}
            title={item.title}
            description={item.description}
            price={item.price}
            checked={goodId.includes(item._id)}
            onPress={() => handleItemPress(item)}
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

export default GoodsList;
