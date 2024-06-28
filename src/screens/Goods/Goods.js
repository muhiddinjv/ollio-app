import { FlatList, RefreshControl } from "react-native";
import ListItem from "../../components/ListItem";
import { useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

const Goods = ({ keyProp, navigation }) => {
  const [goodId, setGoodId] = useState([]);
  const [products, setProducts] = useState();
  const [filters, setFilters] = useState({
    search: '',
  });
 
  const {
    data,
    isRefreshing,
    onRefresh,
    onEndReached,
    isFetchingNextPage
  } = useInfiniteScroll({
    url: "goods",
    limit: 25,
    filters: filters,
    key: ['goods', keyProp],
  })

  return (
    <FlatList
      data={data}
      onEndReached={onEndReached}
      removeClippedSubviews={true}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      renderItem={({ item }) => (
        <ListItem
          key={item._id}
          goodId={item._id}
          title={item.title}
          description={item.description}
          editable
          navigate={navigation}
          price={item.price} 
          checked={goodId.includes(item._id)}
        />
      )}
      ListEmptyComponent={
        <View className='flex items-center'>
          <Text>No result</Text>
        </View>
      }
      ListFooterComponent={() =>
        {isFetchingNextPage && <ActivityIndicator />}
      }
    />
  );
};

export default Goods;