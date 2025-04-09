import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList, Alert } from "react-native";
import { useGlobalState } from "../../hooks";
import Header from "../../components/Header";

const BillItem = ({ title, status, totalPrice, onDelete }) => {
  const billPaid = status === "paid"
  return (
    <View className="py-2 flex-row items-center border-b border-b-gray-300">
      <MaterialIcons name={billPaid ? "paid" : "check-circle-outline"} size={24} color="grey" />
      <Text className="ml-2 text-sm">{title}</Text>
      <Text className="ml-auto mr-2">UZS {totalPrice}</Text>
      <MaterialIcons disabled={billPaid} name="delete" size={24} color={billPaid ? "lightgray" : "grey"} onPress={onDelete} />
    </View>
  );
};

export default function BillOpen({ navigation }) {
  const { bills, setBills, deleteBill } = useGlobalState();

  const handleDeleteBill = (billId) => {
    deleteBill(billId, setBills);
  };

  return (
    <View>
      <Header title="Ochiq Cheklar" navigation={navigation} backBtn />
      <View className="p-2 flex">
        <FlatList
          data={bills}
          renderItem={({ item }) => (
            <BillItem
              title={item.created_at}
              status={item.status}
              totalPrice={item.total_price}
              onDelete={() => handleDeleteBill(item._id)}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}
/*
  
  return (
    <View className="py-2 flex-row items-center border-b border-b-gray-300">
      <MaterialIcons name={billPaid ? "check-circle" : "check-circle-outline"} size={24} color="grey" />
      <Text className="ml-2 text-sm">{title}</Text>
      <Text className="ml-auto mr-2">UZS {totalPrice}</Text>
      <MaterialIcons disabled={billPaid} name="delete" size={24} color={billPaid ? "lightgray" : "grey"} onPress={() => handleDeleteBill(index)} />
    </View>
  );
};

export default function BillOpen({ navigation }) {
  const {bills, setBills, deleteBill} = useGlobalState();

  const handleDeleteBill = (billId) => {
    deleteBill(billId, setBills);
  };
  


*/