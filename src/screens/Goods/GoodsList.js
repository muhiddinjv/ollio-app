import { useState } from "react";
import { Text, View } from "react-native";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { useGlobalState, useInfiniteScroll } from "../../hooks";
import ListItem from "../../components/ListItem";
import Loader from "../../components/Loader";

const GoodsList = () => {
  const { selectedGoods } = useGlobalState();

  const [goodId, setGoodId] = useState([]);
  const [filters, setFilters] = useState({ search: "" });
  const navigation = useNavigation();
  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } =
    useInfiniteScroll({
      url: "stock",
      filters: filters,
      key: ["stock"],
    });

  const handleItemPress = (good) => {
    navigation.navigate("GoodEdit", { good });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={data}
        extraData={selectedGoods}
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
          <View className="flex-1 items-center">
            <Text className="text-base p-5 text-gray-600">
              Sizda hozircha maxsulotlar yo'q.
            </Text>
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
