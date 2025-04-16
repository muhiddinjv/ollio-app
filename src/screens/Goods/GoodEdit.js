import { useState, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { Switch, Text, IconButton, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useQueryClient } from "@tanstack/react-query";
import { CardElevated } from "../../components/CardElevated";
import { getAccessToken } from "../Auth/astorage";
import axiosInstance from "../Auth/axiostance";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { Controller, useForm } from "react-hook-form";
import ControlledInputCustom from "../../components/ControlledInputCustom";
import { useGlobalState, useGetGood } from "../../hooks";


const GoodEdit = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { goodId } = useGlobalState();
  const [category, setCategory] = useState("");

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();

  const goodsQuery = useGetGood(goodId);

  useEffect(() => {
    if (goodsQuery?.data) {
      reset({
        cost: String(goodsQuery?.data.cost),
        quantity: String(goodsQuery?.data.quantity),
        price: String(goodsQuery?.data.price),
        title: goodsQuery?.data.title,
        groupItem: goodsQuery?.data?.groupItem,
        trackStock: goodsQuery?.data?.trackStock,
      });
    }
  }, [goodsQuery?.data, goodId]);

  const saveGood = async (data) => {
    const accessToken = await getAccessToken();
    try {
      await axiosInstance.patch(
        `stock/${goodId}`,
        {
          title: data?.title,
          quantity: data?.quantity,
          price: parseFloat(data?.price),
          cost: parseFloat(data?.cost),
          groupItem: data?.groupItem,
          trackStock: data?.trackStock,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      navigation.navigate("DrawerNav");
    } catch (error) {
      console.error("Error updating good:", error);
    } finally {
      queryClient.invalidateQueries(["good", "goods"]);
    }
  };

  const deleteGood = async () => {
    const accessToken = await getAccessToken();
    try {
      await axiosInstance.delete(`stock/${goodId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      navigation.navigate("DrawerNav");
    } catch (error) {
      console.error("Error deleting good:", error);
    } finally {
      queryClient.invalidateQueries(["good", "goods"]);
    }
  };

  return (
    <>
      <Header
        title="Edit Good"
        iconRight="content-save"
        navigation={navigation}
        onPress={handleSubmit(saveGood)}
        backBtn
        rightBtn
      />
      <Wrapper>
        <SafeAreaView className="flex-1 dark:bg-gray-900">
          <CardElevated>
            <ControlledInputCustom
              inputLabel="Title"
              control={control}
              name="title"
              className="bg-transparent w-full mb-0 pb-0 border-b-gray-600 border-b"
            />
            <View className="flex flex-row w-full gap-4">
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Cost"
                  control={control}
                  name="cost"
                  label="Cost"
                  className="bg-transparent w-full mb-0 pb-0 border-b-gray-600 border-b"
                />
              </View>
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Price"
                  control={control}
                  name="price"
                  label="Cost"
                  className="bg-transparent w-full mb-0 pb-0 border-b-gray-600 border-b"
                />
              </View>
            </View>
            <View className="flex flex-row gap-2">
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Quantity"
                  control={control}
                  name="quantity"
                  className="bg-transparent flex-grow mb-0 pb-0 border-b-gray-600 border-b"
                />
              </View>
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="SKU"
                  control={control}
                  name="sku"
                  className="bg-transparent flex-grow mb-0 pb-0 border-b-gray-600 border-b"
                />
              </View>
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
                <Controller
                  control={control}
                  name="groupItem"
                  rules={{ required: "This field is required" }}
                  render={({ field: { onChange, value } }) => (
                    <Switch value={value} onValueChange={onChange} />
                  )}
                />
              </View>
              <View className="flex-row items-center">
                <Text>Track Stock</Text>
                <Controller
                  control={control}
                  name="trackStock"
                  render={({ field: { onChange, value } }) => (
                    <Switch value={value} onValueChange={onChange} />
                  )}
                />
                {/* <Switch
                  value={trackStock}
                  onValueChange={() => setTrackStock(!trackStock)}
                /> */}
              </View>
            </View>
          </CardElevated>

          <CardElevated title="Variants">
            <Text>
              Use variant if an item has different sizes, colors or other
              options
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
