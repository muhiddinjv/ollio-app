import { useState } from "react";
import { View } from "react-native";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { useInfiniteScroll } from "../../hooks";
import ListItem from "../../components/ListItem";
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

  const handleItemPress = (good) => {
    navigation.navigate("GoodEdit", { good });
  };

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
