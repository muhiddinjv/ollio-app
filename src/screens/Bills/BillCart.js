import { View, ScrollView, Text, Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import React from "react";
import SaveCharge from "../../components/SaveCharge";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks";
import { Button, IconButton } from "react-native-paper";
import { calculateTotal } from "../../utils";

const Item = ({ title, price, quantity, onDelete }) => {
  const total = calculateTotal([{ price, quantity }]);

  const renderRightActions = () => {
    return (
      <View className="flex-row items-center justify-center">
        <IconButton icon="delete" onPress={onDelete} />
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View className="flex-row justify-between items-center h-10">
        <Text className="text-base flex-1 w-10" numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <Text className="text-base text-gray-400 mx-3"> x{quantity}</Text>
        <Text className="text-base pr-2">{total}</Text>
      </View>
    </Swipeable>
  );
};

export default function BillCart({ navigation }) {
  const { bill, setBill, saveBill, openBills } = useGlobalState();
  const total = calculateTotal(bill.products);

  const handleDelete = (productId) => {
    setBill((prevBill) => ({
      ...prevBill,
      products: prevBill.products.filter((item) => item.product_id !== productId),
    }));
  };

  const handleSave = () => {
    saveBill();
    navigation.navigate("Sales", { screen: "SalesList" });
  };

  return (
    <View className="flex-1">
      <Header
        title="Bill Cart"
        iconRight={bill.client_id ? "account-check" : "account-plus"}
        navigation={navigation}
        onPress={() => navigation.navigate("Users",{screen: "UserList"})} 
        rightBtn
        backBtn
      />
      <ScrollView className="p-4 flex-grow">
        <View className="border-b border-gray-300 pb-2">
          {bill.products.map((item) => (
            <Item
              key={item.product_id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onDelete={() => handleDelete(item.product_id)}
            />
          ))}
        </View>
        <View className="flex-row justify-between pt-3">
          <Text className="text-lg font-bold">Total</Text>
          <Text className="text-lg font-bold">UZS {total}</Text>
        </View>
      </ScrollView>
      <View className="p-2 bg-white dark:bg-slate-800 flex-row gap-2">
        <Button
          mode="contained"
          onPress={handleSave}
          style={{ flex: 1 }} 
          disabled={bill.products.length === 0 || openBills.length === 0 || bill.client_id === null}
        >
          Save Bill
        </Button>
        <Button
          mode="contained"
          style={{ flex: 1 }} 
          onPress={() => navigation.navigate("Payment")}
          disabled={bill.products.length === 0}
        >
          Charge
        </Button>
      </View>
    </View>
  );
};
