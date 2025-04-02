import { useState } from "react";
import { Platform, RefreshControl, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styled } from "nativewind";
import { ActivityIndicator, Appbar, Button, IconButton, useTheme } from "react-native-paper";
import ListItem from "../../components/ListItem";
import SaveCharge from "../../components/SaveCharge";
import Loader from "../../components/Loader";
import { useInfiniteScroll, useNavigate } from "../../hooks";
import { FlashList } from "@shopify/flash-list";
import GoodQtyModal from "../Goods/GoodQtyModal";
import { useGlobalState } from "../../hooks";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const StyledPicker = styled(Picker);
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const SalesScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const { colors } = useTheme();
  const { goodId, goodQty, client } = useGlobalState();
  const [selectedValue, setSelectedValue] = useState("option1");
  const [filters, setFilters] = useState({ search: "" });
  const [quantity, setQuantity] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } =
    useInfiniteScroll({
      url: "stock",
      limit: 25,
      filters: filters,
      key: ["goods"],
    });

  // const makeBill = async () => {
  //   try {
  //     const response = await axiosInstance.post("/bills", {
  //       client_id: client._id,
  //       products: [] // You can add products here if needed
  //     });
  //     console.log("Bill created:", response.data);
  //   } catch (error) {
  //     console.error("Error making bill:", error.response ? error.response.data : error.message);
  //   }
  // };

  return (
    <View className="flex-1 w-full dark:bg-slate-800">
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} color={colors.surface} />
        <Appbar.Content title="Savdo" titleStyle={{ color: colors.surface }} />
        <Button
          icon="cart"
          mode="contained"
          labelStyle={{ fontSize: 19 }}
          onPress={() => navigation.navigate("Bills", {screen: "BillCart"})}
        >
          {goodQty}
        </Button>
        <Appbar.Action icon="account-plus" onPress={() => navigation.navigate("Users",{screen: "UserList"})} color={colors.surface} />
        <Appbar.Action icon={MORE_ICON} onPress={() => console.log("more")} color={colors.surface} />
      </Appbar.Header>
      <GoodQtyModal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          setQuantity(0);
        }}
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />
      <SaveCharge navigation={navigation} isSaved={false} />

      <View className="flex-row items-center pl-4 h-14 border border-gray-400">
        <StyledPicker
          mode="dropdown"
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
              setIsModalVisible={setIsModalVisible}
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
