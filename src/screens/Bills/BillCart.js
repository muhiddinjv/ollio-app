import { View, ScrollView, Text, Alert } from "react-native";
import { Button, IconButton, useTheme } from "react-native-paper";
import { Swipeable } from "react-native-gesture-handler";
import React from "react";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks";
import { calculateTotal } from "../../utils";

const Item = ({ title, price, quantity, onDelete }) => {
  const total = calculateTotal([{ price, quantity }]);
  const { colors } = useTheme();

  const renderRightActions = () => {
    return (
      <View className="flex-row items-center justify-center">
        <IconButton icon="delete" iconColor={colors.primary} onPress={onDelete} />
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
  const { bill, setBill, saveBill } = useGlobalState();
  const total = calculateTotal(bill.products);

  const handleDelete = (productId) => {
    try {
      setBill((prevBill) => ({
        ...prevBill,
        products: prevBill.products.filter((item) => item.product_id !== productId),
      }));
    } catch (error) {
      Alert.alert("Error", "Failed to delete product.");
    }
  };

  const handleSave = () => {
    saveBill();
    navigation.navigate("Cheklar")
  };

  const handleCharge = () => {
    saveBill();
    navigation.navigate("SaleMade");
  }

  return (
    <View className="flex-1">
      <Header
        title="Arava"
        iconRight={bill.client_id ? "account-check" : "account-plus"}
        navigation={navigation}
        onPress={() => navigation.navigate("UserList")} 
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
          <Text className="text-lg font-bold">Jami</Text>
          <Text className="text-lg font-bold">UZS {total}</Text>
        </View>
      </ScrollView>
      <View className="p-2 bg-white dark:bg-slate-800 flex-row gap-2">
        <Button
          mode="contained"
          onPress={handleSave}
          style={{ flex: 1 }} 
          disabled={bill.products.length === 0}
        >
          SAQLASH
        </Button>
        <Button
          mode="contained"
          style={{ flex: 1 }} 
          onPress={handleCharge}
          disabled={bill.products.length === 0}
        >
          SAVDO
        </Button>
      </View>
    </View>
  );
};
