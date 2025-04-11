import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList, Pressable } from "react-native";
import { useGlobalState } from "../../hooks";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { formatDate } from "../../utils";
import { useTheme } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";

const BillItem = ({ date, status, navigate, totalPrice, onDelete }) => {
  const { colors: {primary, backdrop} } = useTheme();
  const billPaid = status === "paid"

  return (
    <Pressable onPress={() => navigate("BillDetails")} className="p-2 flex-row items-center border-b border-b-gray-300">
      <MaterialIcons name="paid" size={24} color={billPaid ? primary : backdrop} />
      <Text className="ml-2 text-sm">{date}</Text>
      <Text className="ml-auto mr-2">UZS {totalPrice}</Text>
      <MaterialIcons disabled={billPaid} name="delete" size={24} color={billPaid ? backdrop : primary} onPress={onDelete} />
    </Pressable>
  );
};

export default function BillList({ navigation }) {
  const { bills, setBills, deleteBill } = useGlobalState();
  
  const handleDeleteBill = (billId) => {
    deleteBill(billId, setBills);
  };

  return (
    <View>
      <Header
        title="Bills"
        fontSize={20}
        iconLeft="menu"
        navigation={navigation}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        leftBtn
      />
      <View className="p-2 flex">
        <FlatList
          data={bills}
          onEndReachedThreshold={2}
          removeClippedSubviews={true}
          estimatedItemSize={84}
          renderItem={({ item }) => (
            <BillItem
              date={formatDate(item.created_at)}
              status={item.status}
              navigate={navigation.navigate}
              totalPrice={item.total_price}
              onDelete={() => handleDeleteBill(item._id)}
            />
          )}
          keyExtractor={(item) => item._id.toString()}
          LoaderComponent={<Loader />}
          ListEmptyComponent={
            <View className="flex items-center">
              <Loader />
            </View>
          }
        />
      </View>
    </View>
  );
}