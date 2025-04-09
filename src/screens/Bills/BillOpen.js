import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList, Alert } from "react-native";
import { useGlobalState } from "../../hooks";
import Header from "../../components/Header";

const BillItem = ({ title, status, totalPrice, index, setBills }) => {
  const billPaid = status === "paid";

  const handleDeleteBill = (index) => {
    Alert.alert(
      "Delete Bill",
      "Are you sure you want to delete this bill?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            // setOpenBills((prevBills) => prevBills.filter((_, i) => i !== index));
            setBills((prevBills) => prevBills.filter((_, i) => i !== index));
          },
        },
      ],
      { cancelable: true }
    );
  };
  
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
  const {bills, setBills} = useGlobalState();
  
  return (
    <View>
      <Header title="Ochiq Cheklar" navigation={navigation} backBtn />
      <View className="p-2 flex">
        <FlatList
          data={bills}
          renderItem={({ item, index }) => (
            <BillItem
              title={item.created_at}
              status={item.status}
              totalPrice={item.total_price}
              index={index}
              onDelete={() => handleDeleteBill(index)}
              setBills={setBills}
            />
          )}
          // keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
