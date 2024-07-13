import { View, Text, FlatList } from "react-native";
import React from "react";
import { CheckBox } from "../../components/CheckBox";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const openTicketsData = [
  {
    title: "Ticket 11:46",
    date: "9 days, 5 hours, 4 minutes ago",
    price: "20000",
    id: 0,
  },
  {
    title: "Ticket 12:46",
    date: "9 days, 5 hours, 4 minutes ago",
    price: "20000",
    id: 1,
  },
  {
    title: "Ticket 01:46",
    date: "9 days, 5 hours, 4 minutes ago",
    price: "20000",
    id: 2,
  },
  {
    title: "Ticket 14:46",
    date: "9 days, 5 hours, 4 minutes ago",
    price: "20000",
    id: 3,
  },
  {
    title: "Ticket 18:46",
    date: "9 days, 5 hours, 4 minutes ago",
    price: "20000",
    id: 4,
  },
];

const TicketItem = ({ title, date, price }) => {
  return (
    <View className="py-3 flex-row border-b border-b-gray-300">
      <CheckBox />
      <View className="justify-between">
        <Text className="text-sm">{title}</Text>
        <Text className="text-xs text-gray-500">{date}</Text>
      </View>
      <Text className="ml-auto">UZS {price}</Text>
    </View>
  );
};
export default function OpenTickets({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <View className="pr-2.5">
        <MaterialIcons name="delete" size={24} color="gray" />
      </View>
    ),
  });
  return (
    <View>
      <View className="flex-row p-2 justify-between items-center border-b border-b-gray-300">
        <CheckBox />
        <View className="flex-row gap-4 items-center">
          <FontAwesome5 name="sort-amount-down" size={18} color="black" />
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>
      <View className="p-2">
        <Text className="pl-2 text-green-600 font-medium pb-3">My tickets</Text>
        <FlatList
          data={openTicketsData}
          renderItem={({ item }) => (
            <TicketItem
              title={item.title}
              date={item.date}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
