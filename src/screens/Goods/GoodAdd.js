import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, SafeAreaView, Alert } from "react-native";
import { Switch, Text, IconButton, Divider, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CardElevated } from "../../components/CardElevated";
import { TableCard } from "../../components/TableCard";
import { TxtInput } from "../../components/TxtInput";

import { getAccessToken } from "../Auth/astorage";
import axiosInstance from "../../api/instance";

const tableData = [
  {
    key: 1,
    shop: "Mega Planet",
    price: 5600,
  },
  {
    key: 2,
    shop: "Korzinka",
    price: 7200,
  },
  {
    key: 3,
    shop: "Havas",
    price: 3400,
  },
];

const GoodAdd = ({ navigation }) => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [groupItem, setGroupItem] = useState(false);
  const [trackStock, setTrackStock] = useState(false);

  useEffect(() => {
    if (goodsQuery?.data) {
      setTitle(goodsQuery?.data.title);
      setPrice(String(goodsQuery?.data.price));
      setCost(String(goodsQuery?.data.cost));
      setQuantity(String(goodsQuery?.data.quantity));
      setGroupItem(goodsQuery?.data.groupItem);
      setTrackStock(goodsQuery?.data.trackStock);
      // setCategory(goods.category);
    }
  }, [goodsQuery?.data]);

  const newGood = {
    title,
    quantity,
    price: parseFloat(price),
    cost: parseFloat(cost),
    groupItem,
    trackStock
  }

  const addGoodMutation = useMutation({
    mutationFn: async () => {
      const accessToken = await getAccessToken();
      await axiosInstance.post('goods', newGood, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
    },
    onSuccess: () => {
      changeTabIndex(1);
      queryClient.invalidateQueries(['goods']);
      setErrorMessage(null);
    },
    onError: (error) => {
      setErrorMessage(error.response.data.message[0].text);
      setTimeout(() => setErrorMessage(null), 5000);
    }
  });

  return (
    <SafeAreaView className="flex-1 dark:bg-gray-900">
      {/* <AppBar title="Edit Items" backButton={{ onPress: ()=> alert('back button was clicked!') }} saveButton={{ onPress: ()=> alert('save button was clicked!'), label: 'save' }}/> */}
      <ScrollView>
        <CardElevated>
          <TxtInput value={title} onChangeText={setTitle} label="Title" />
          <View className="flex flex-row">
            <TxtInput
              value={cost}
              label="Cost"
              marginRight={2}
              onChangeText={setCost}
              keyboardType="phone-pad"
            />
            <TxtInput
              value={price}
              label="Price"
              marginLeft={2}
              onChangeText={setPrice}
              keyboardType="phone-pad"
            />
          </View>
          <View className='flex flex-row'>
            <TxtInput value={quantity} marginRight={2} onChangeText={setQuantity} label="Quantity" />
            <TxtInput value={0} marginLeft={2} onChangeText={()=>{}} label="SKU" />
          </View>
          <View className="border-b border-slate-400">
            <Picker
              style={{ marginLeft: -15 }}
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Category 1" value="Category 1" />
              <Picker.Item label="Category 2" value="Category 2" />
            </Picker>
          </View>
        </CardElevated>

        <CardElevated title="Inventory">
          <View className=" flex-row">
            <View className="flex-row items-center mr-10">
              <Text>Group Item</Text>
              <Switch
                value={groupItem}
                onValueChange={() => setGroupItem(!groupItem)}
              />
            </View>
            <View className="flex-row items-center">
              <Text>Track Stock</Text>
              <Switch
                value={trackStock}
                onValueChange={() => setTrackStock(!trackStock)}
              />
            </View>
          </View>
        </CardElevated>

        <CardElevated title="Variants">
          <Text>
            Use variant if an item has different sizes, colors or other options
          </Text>
          <View className="flex-row items-center text-purple-800">
            <IconButton
              icon="plus-circle-outline"
              size={30}
              onPress={() => handleAddVariant()}
            />
            <Text className="buttonText">Add Variants</Text>
          </View>
        </CardElevated>

        <TableCard title="Stores" data={tableData} />

        {/* <CardElevated title="Modifiers">
          <View className="flex-row items-center justify-between my-2">
            <View>
              <Text className="text-lg text-black font-semibold">Addon</Text>
              <Text>Available in all stores</Text>
            </View>

            <Switch
              value={modifiera}
              onValueChange={() => setModifierA(!modifiera)}
            />
          </View>
          <Divider />
          <View className="flex-row items-center justify-between my-2">
            <View>
              <Text className="text-lg text-black font-semibold">Fillers</Text>
              <Text>Available in all stores</Text>
            </View>

            <Switch
              value={modifierb}
              onValueChange={() => setModifierB(!modifierb)}
            />
          </View>
        </CardElevated> */}

        <CardElevated>
          <Button
            icon="recycle"
            textColor="white"
            onPress={() => addGoodMutation.mutate()}
            className="bg-green-500 py-3 rounded-md"
            labelStyle={{ fontSize: 20 }}
          >
            UPDATE
          </Button>
        </CardElevated>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GoodAdd;
