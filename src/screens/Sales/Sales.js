import { useContext, useState } from "react";
import { RefreshControl, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styled } from "nativewind";
import { ActivityIndicator, IconButton, Text } from "react-native-paper";
import ListItem from "../../components/ListItem";
import SaveCharge from "../../components/SaveCharge";
import Loader from "../../components/Loader";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { GlobalContext } from "../../utils";
import { FlashList } from "@shopify/flash-list";

const StyledPicker = styled(Picker);

const SalesScreen = ({ navigation }) => {
  const { goodId, goodQty } = useContext(GlobalContext);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [filters, setFilters] = useState({ search: "" });
  console.log("sales >> ", goodId, goodQty);

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } =
    useInfiniteScroll({
      url: "products/stock",
      limit: 25,
      filters: filters,
      key: ["goods"],
    });

  return (
    <View className="flex-1 w-full dark:bg-slate-800">
      <SaveCharge navigation={navigation} />
      <View className="flex-row items-center pl-4 h-14 border border-gray-400">
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          className="w-4/5 text-base dark:text-white"
        >
          <Picker.Item label="Category 1" value="category1" />
          <Picker.Item label="Category 2" value="category2" />
          <Picker.Item label="Category 3" value="category3" />
        </StyledPicker>
        <View className="w-1/5 h-full flex items-center justify-center border-l border-gray-400">
          <IconButton
            size={30}
            icon="magnify"
            onPress={() => console.log("magnify clicked")}
          />
        </View>
      </View>
      {Array.isArray(data) ? (
        <FlashList
          data={data}
          onEndReached={onEndReached}
          onEndReachedThreshold={2}
          removeClippedSubviews={true}
          estimatedItemSize={84}
          LoaderComponent={<Loader />}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <ListItem
              onSalesScreen
              key={item._id}
              goodId={item._id}
              title={item.title}
              navigate={navigation.navigate}
              description={item.description}
              price={item.price}
            />
          )}
          ListEmptyComponent={
            <View className="flex items-center">
              <Loader />
            </View>
          }
          ListFooterComponent={() => {
            isFetchingNextPage && <ActivityIndicator />;
          }}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default SalesScreen;
