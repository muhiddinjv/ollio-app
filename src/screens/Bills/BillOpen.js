import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList, Alert } from "react-native";
import { Checkbox, TouchableRipple } from "react-native-paper";
import { useGlobalState } from "../../hooks";
import Header from "../../components/Header";

const TicketItem = ({ title, totalPrice, index }) => {
  const { setOpenBills } = useGlobalState();
  const [checked, setChecked] = useState(false);

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
            setOpenBills((prevBills) => prevBills.filter((_, i) => i !== index));
          },
        },
      ],
      { cancelable: true }
    );
  };
  
  return (
    <View className="py-3 flex-row items-center border-b border-b-gray-300">
      <TouchableRipple onPress={() => setChecked(!checked)}>
        <Checkbox status={checked ? "checked" : "unchecked"} />
      </TouchableRipple>
      <Text className="text-sm">{title}</Text>
      <Text className="ml-auto">UZS {totalPrice}</Text>
      <MaterialIcons
        name="delete"
        size={24}
        color="grey"
        onPress={() => handleDeleteBill(index)}
      />
    </View>
  );
};

export default function BillOpen({ navigation }) {
  const { openBills } = useGlobalState();
  // navigation.setOptions({
  //   headerRight: () => (
  //     <View className="pr-2.5">
  //       <MaterialIcons name="delete" size={24} color="gray" />
  //     </View>
  //   ),
  // });

  
  return (
    <View>
      <Header title="Ochiq Cheklar" navigation={navigation} backBtn />
      <View className="p-2 flex">
        <FlatList
          data={openBills}
          renderItem={({ item, index }) => (
            <TicketItem
              title={item.title}
              totalPrice={item.total_price}
              index={index}
            />
          )}
          // keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
