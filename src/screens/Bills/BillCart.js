import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const billsData = [  
  {
    name: "a74 Cola 1.5 (1bl*6ta)",
    price: "15,000",
    quantity: 1,
    id: 0,
  },
  {
    name: "a75 Cola 1.5 (1bl*6ta)",
    price: "32,000",
    quantity: 2,
    id: 1,
  },
  {
    name: "a76 Fanta 1.5 (1bl*6ta)",
    price: "51,000",
    quantity: 3,
    id: 2,
  },
  {
    name: "a77 Sprite 1.5 (1bl*6ta)",
    price: "70,000",
    quantity: 4,
    id: 3,
  },
];

const Item = ({ name, price, quantity }) => {
  return (
    <View className="flex-row items-center">
      <Pressable className="flex-row justify-between items-center my-3 flex-1">
        <View className="flex-row items-center gap-1">
          <Text className="text-base font-medium">{name}</Text>
          <Text className="text-base text-gray-400">x {quantity}</Text>
        </View>
        <Text className="text-base font-medium pr-2">UZS {price}</Text>
      </Pressable>
      <Pressable className="ml-auto">
        <AntDesign name="delete" size={24} color="red" />
      </Pressable>
    </View>
  );
};

export default function BillCart() {
  return (
    <ScrollView className="p-4">
      <View className="border-b border-gray-300 pb-2">
        {billsData.map((item) => (   
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </View>
      <View className="flex-row justify-between pt-3  ">
        <Text className="text-lg font-bold">Total</Text>
        <Text className="text-lg font-bold">UZS 98,000</Text>
      </View>
    </ScrollView>
  );
}
