import { View, ScrollView, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import React from "react";
import SaveCharge from "../../components/SaveCharge";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks";
import { IconButton } from "react-native-paper";

const calculateTotal = (products) => {
  return products.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const Item = ({ title, price, quantity, onDelete }) => {
  const total = calculateTotal([{ price, quantity }]);

  const renderRightActions = () => {
    return (
      <View className="flex-row items-center justify-center w-6">
        <IconButton icon="delete" onPress={onDelete} iconColor="red" />
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
  const { bill, setBill } = useGlobalState();
  const total = calculateTotal(bill.products);

  const handleDelete = (productId) => {
    setBill((prevBill) => ({
      ...prevBill,
      products: prevBill.products.filter((item) => item.product_id !== productId),
    }));
  };
  return (
    <View className="flex-1">
      <Header
        title="Bill Cart"
        iconRight="content-save"
        navigation={navigation}
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
        <View className="flex-row justify-between pt-3  ">
          <Text className="text-lg font-bold">Total</Text>
          <Text className="text-lg font-bold">{total}</Text>
        </View>
      </ScrollView>
      <View className="pb-6 bg-transparent">
        <SaveCharge isSaved navigation={navigation} />
      </View>
    </View>
  );
}
