import { RefreshControl } from "react-native";
import ListItem from "../../components/ListItem";
import { useState } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useInfiniteScroll } from "../../hooks";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import Loader from "../../components/Loader";

const GoodsList = ({ keyProp }) => {
  const [goodId, setGoodId] = useState([]);
  const [filters, setFilters] = useState({ search: "" });
  const navigation = useNavigation();

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } =
    useInfiniteScroll({
      url: "stock",
      limit: 25,
      filters: filters,
      key: ["goods", keyProp],
    });

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={data}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
        removeClippedSubviews={true}
        estimatedItemSize={84}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
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
        LoaderComponent={<Loader />}
        ListEmptyComponent={
          <View className="flex items-center">
            <Loader />
          </View>
        }
        ListFooterComponent={() => {
          return isFetchingNextPage ? <ActivityIndicator /> : null;
        }}
      />
    </View>
  );
};

export default GoodsList;
