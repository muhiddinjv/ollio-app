import { useState, useContext, useEffect } from "react";
import { View, SafeAreaView, Alert, Platform } from "react-native";
import { Switch, Text, IconButton, Button, Appbar, useTheme } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { CardElevated } from "../../components/CardElevated";
import { TxtInput } from "../../components/TxtInput";

import { getAccessToken } from "../Auth/astorage";
import { GlobalContext } from "../../utils";

import axiosInstance from "../../api/instance";
import Wrapper from "../../components/Wrapper";

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

const GoodEdit = ({ navigation }) => {
  const queryClient = useQueryClient();

  const { goodId } = useContext(GlobalContext);
  const { colors } = useTheme();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [groupItem, setGroupItem] = useState(false);
  const [trackStock, setTrackStock] = useState(false);

  const [modifiera, setModifierA] = useState(false);
  const [modifierb, setModifierB] = useState(false);
  const [modifiers, setModifiers] = useState([
    { title: "", subtitle: "", isEnabled: false },
    { title: "", subtitle: "", isEnabled: false },
  ]);
  const [representation, setRepresentation] = useState({
    color: "",
    shape: "",
    isSelected: false,
  });

  const goodsQuery = useQuery({
    queryKey: ["good"], queryFn: async () => {
      const accessToken = await getAccessToken()
      const response = await axiosInstance.get(`goods/${goodId}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      return response.data
    }
  })

  console.log(goodsQuery.data);

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

  const handleAddVariant = () => {
    // Implement logic to add a new variant
  };

  const saveGood = async () => {
    const accessToken = await getAccessToken();
    try {
      await axiosInstance.patch(`goods/${goodId}`, {
        title,
        // category,
        quantity,
        price: parseFloat(price),
        cost: parseFloat(cost),
        groupItem,
        trackStock,
        // modifiers,
        // representation
      }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      // Alert.alert("Good updated successfully");
      navigation.navigate("DrawerNav")
    } catch (error) {
      console.error("Error updating good:", error);
    } finally {
      queryClient.invalidateQueries(["good", "goods"]);
    }
  };

  const deleteGood = async () => {
    const accessToken = await getAccessToken();
    try {
      await axiosInstance.delete(`goods/${goodId}`,
        { headers: { Authorization: `Bearer ${accessToken}` } });
      // Alert.alert("Good updated successfully");
      navigation.navigate("DrawerNav")
    } catch (error) {
      console.error("Error deleting good:", error);
    } finally {
      queryClient.invalidateQueries(["good", "goods"]);
    }
  };


  return (
    <>
      <Appbar.Header
        style={{ backgroundColor: colors.primary }}
        theme={{ mode: 'adaptive' }}
      // elevated={true}
      >
        <Appbar.BackAction iconColor="white" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Edit Good" titleStyle={{ color: 'white' }} />
        <Appbar.Action icon="content-save" size={28} color="white" onPress={saveGood} />
      </Appbar.Header>
      <Wrapper>

        <SafeAreaView className="flex-1 dark:bg-gray-900">
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
              <TxtInput value={0} marginLeft={2} onChangeText={() => { }} label="SKU" />
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

          {/* <TableCard title="Stores" data={tableData} /> */}

          {/* 
              <CardElevated title="Modifiers">
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
              </CardElevated> 
            */}

          <CardElevated>
            <Button
              textColor="white"
              icon="trash-can-outline"
              onPress={deleteGood}
              className="bg-red-500 py-2 rounded"
              labelStyle={{ fontSize: 20 }}
            >
              DELETE
            </Button>
          </CardElevated>
        </SafeAreaView>
      </Wrapper>
    </>
  );
};

export default GoodEdit;
/*
    <Appbar.Header
          // theme={{ mode: 'adaptive' }}
          elevated={true}
        >
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Edit Good" />
<Appbar.Action icon="calendar" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> 
          <Button onPress={saveGood} labelStyle={{ fontSize: 15, color: 'black' }}>
            SAVE
          </Button>
        </Appbar.Header>
*/