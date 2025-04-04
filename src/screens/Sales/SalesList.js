import { useState } from "react";
import { ActivityIndicator, Appbar, Button, IconButton, useTheme } from "react-native-paper";
import { Platform, RefreshControl, View } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { FlashList } from "@shopify/flash-list";
import { styled } from "nativewind";
import Loader from "../../components/Loader";
import ListItem from "../../components/ListItem";
import { useInfiniteScroll } from "../../hooks";
import GoodQtyModal from "../Goods/GoodQtyModal";
import { useGlobalState } from "../../hooks";
import Numpad from "../../components/Numpad";

const StyledPicker = styled(Picker);
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const calculateTotal = (products) => {
  return products.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const SalesList = ({ navigation }) => {
  const { colors } = useTheme();
  const { bill, saveBill, openBills, addProductToBill, getTotalQuantity } = useGlobalState();
  const [selectedValue, setSelectedValue] = useState("option1");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({ search: "" });
  const [quantity, setQuantity] = useState(0);

  const isButtonDisabled = bill.client_id === null && bill.products.length === 0 && openBills.length === 0;
  console.log(isButtonDisabled);

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } =
    useInfiniteScroll({
      url: "stock",
      limit: 25,
      filters: filters,
      key: ["goods"],
    });

  const handleProductPress = (product) => {
    setQuantity(0);
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleSaveQuantity = () => {
    const { _id, title, price } = selectedProduct;
    if (quantity > 0 && _id) {
      addProductToBill(_id, quantity, title, price);
      setIsModalVisible(false);
      setQuantity(0);
    }
  };

  const handlePress = (IsOpenBills) => {
    if (IsOpenBills) {
      navigation.navigate("BillOpen")
    } else {
      saveBill();
      navigation.navigate("BillOpen")
    }
  };
  
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
          onPress={() => navigation.navigate("BillCart")}
        >
          {getTotalQuantity() || ""}
        </Button>
        <Appbar.Action icon={bill.client_id ? "account-check" : "account-plus"} onPress={() => navigation.navigate("UserList")} color={colors.surface} />
        <Appbar.Action icon={MORE_ICON} onPress={() => console.log("more")} color={colors.surface} />
      </Appbar.Header>
      {/* <GoodQtyModal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          setQuantity(0);
        }}
        value={quantity.toString()}
        onChangeText={(text) => setQuantity(Number(text))}
        onSave={handleSaveQuantity}
      /> */}
      <Numpad
        visible={isModalVisible}
        onClose={() => {
          setQuantity(0);
          setIsModalVisible(false);
        }}
        onConfirm={(value) => setQuantity(value)}
        onSave={handleSaveQuantity}
      />
      <View className="pb-2 px-2 bg-white dark:bg-slate-800 flex-row gap-2">
        <Button
          mode="contained"
          onPress={()=>handlePress(bill.products.length === 0)}
          style={{ flex: 1 }} 
          disabled={bill.client_id === null && bill.products.length === 0 && openBills.length === 0}
        >
          {bill.products.length === 0 ? "Open Bills" : "Save Bill"}
        </Button>
        <Button
          mode="contained"
          style={{ flex: 1 }} 
          onPress={() => navigation.navigate("Payment")}
          disabled={bill.client_id === null || bill.products.length === 0}
        >
          Charge
        </Button>
      </View>

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
              setIsModalVisible={() => handleProductPress(item)}
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

export default SalesList;
