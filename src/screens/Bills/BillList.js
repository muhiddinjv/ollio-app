import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList, Pressable } from "react-native";
import { useGlobalState } from "../../hooks";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { formatDate } from "../../utils";
import { ActivityIndicator, useTheme } from "react-native-paper";

const BillItem = ({ bill, navigate, onDelete }) => {
  const { colors: {primary, backdrop} } = useTheme();
  const billPaid = bill?.status === "paid"

  const handleBillPress = () => {
    navigate("BillDetails", { bill });
  }

  return (
    <Pressable onPress={handleBillPress} className="p-3 flex-row items-center border-b border-b-gray-300">
      <MaterialIcons name="paid" size={24} color={billPaid ? primary : backdrop} />
      <Text className="ml-2 text-sm">{formatDate(bill?.created_at)}</Text>
      <Text className="ml-auto mr-2">UZS {bill?.total_price}</Text>
      <MaterialIcons disabled={billPaid} name="delete" size={24} color={billPaid ? backdrop : primary} onPress={onDelete} />
    </Pressable>
  );
};

export default function BillList({ navigation }) {
  const { bills, loading, deleteBill } = useGlobalState();
  const { colors } = useTheme();

  return (
    <View>
      <Header title="Bills" fontSize={20} navigation={navigation} backBtn />
      {loading && <ActivityIndicator color={colors.primary} />}
      <FlatList
        data={bills}
        removeClippedSubviews={true}
        estimatedItemSize={84}
        renderItem={({ item }) => (
          <BillItem
            bill={item}
            navigate={navigation.navigate}
            onDelete={() => deleteBill(item._id)}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
        LoaderComponent={<Loader />}
        ListEmptyComponent={
          <View className="flex items-center">
            {!loading && <Text>You have no bills yet</Text>}
          </View>
        }
      />
    </View>
  );
}