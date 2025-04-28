import { useState, useEffect } from "react";
import { View, SafeAreaView, Alert } from "react-native";
import { Switch, Text, IconButton, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useQueryClient } from "@tanstack/react-query";
import { CardElevated } from "../../components/CardElevated";
import { getTokens } from "../../api/astorage";
import axiosInstance from "../../api/axiostance";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { Controller, useForm } from "react-hook-form";
import ControlledInputCustom from "../../components/ControlledInputCustom";

import { getAccessToken } from '../../api/astorage';
import { axiosInstance } from '../../api/axiostance';
import { CardElevated } from '../../components/CardElevated';
import ControlledInputCustom from '../../components/ControlledInputCustom';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';

function GoodEdit({ navigation, route }) {
  const queryClient = useQueryClient();
  const [category, setCategory] = useState('');
  const { good } = route.params;

  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (good) {
      reset({
        cost: String(good.cost),
        quantity: String(good.quantity),
        price: String(good.price),
        title: good.title,
        group: good?.group,
        available: good?.available,
        order: String(good?.order),
        product_id: good?.product_id,
      });
    }
  }, [good]);

  const saveGood = async (good) => {
    const tokens = await getTokens();
    try {
      await axiosInstance.patch(
        'stock/update',
        {
          product_id: good?.product_id,
          price: Number(good?.price),
          order: Number(good?.order),
          available: good?.available,
          group: good?.group,
          // track: good?.track,
        },
        {
          headers: { Authorization: `Bearer ${tokens.access}` },
        }
      );
      navigation.navigate('GoodTabs', { screen: 'Dokon' });
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      queryClient.invalidateQueries(['good', 'goods']);
    }
  };

  const deleteGood = () => {
    Alert.alert(
      'Delete Good',
      `Are you sure you want to delete "${good.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            const tokens = await getTokens();
            try {
              await axiosInstance.delete("stock/delete", {
                headers: { Authorization: `Bearer ${tokens.access}` },
                data: { product_id: good?.product_id },
              });
              navigation.navigate('GoodTabs', { screen: 'Dokon' });
            } catch (error) {
              console.error('Error deleting good:', error);
            } finally {
              queryClient.invalidateQueries(['good', 'goods']);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <Header
        title="Tovar yangilash"
        iconRight="content-save"
        navigation={navigation}
        onRightPress={handleSubmit(saveGood)}
        backBtn
      />
      <Wrapper>
        <SafeAreaView className="flex-1 dark:bg-gray-900">
          <CardElevated>
            <ControlledInputCustom
              inputLabel="Nomi"
              control={control}
              editable={false}
              name="title"
              className="mb-0 w-full border-b border-b-gray-600 bg-transparent pb-0"
            />
            <View className="flex w-full flex-row gap-4">
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Ol narxi"
                  control={control}
                  editable={false}
                  name="cost"
                  className="mb-0 w-full border-b border-b-gray-600 bg-transparent pb-0"
                />
              </View>
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Sot narxi"
                  control={control}
                  name="price"
                  className="mb-0 w-full border-b border-b-gray-600 bg-transparent pb-0"
                />
              </View>
            </View>
            <View className="flex flex-row gap-2">
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Soni"
                  control={control}
                  editable={false}
                  name="quantity"
                  className="mb-0 grow border-b border-b-gray-600 bg-transparent pb-0"
                />
              </View>
              <View className="w-1/2">
                <ControlledInputCustom
                  inputLabel="Tartibi"
                  control={control}
                  name="order"
                  className="mb-0 grow border-b border-b-gray-600 bg-transparent pb-0"
                />
              </View>
            </View>
            <View className="border-b border-slate-400">
              <Picker
                style={{ marginLeft: -15 }}
                mode="dropdown"
                selectedValue={category}
                onValueChange={itemValue => setCategory(itemValue)}
              >
                <Picker.Item label="Category 1" value="Category 1" />
                <Picker.Item label="Category 2" value="Category 2" />
              </Picker>
            </View>
          </CardElevated>

          <CardElevated title="Inventory">
            <View className=" flex-row">
              <View className="mr-10 flex-row items-center">
                <Text>Guruh tovar</Text>
                <Controller
                  control={control}
                  name="group"
                  rules={{ required: 'This field is required' }}
                  render={({ field: { onChange, value } }) => <Switch value={value} onValueChange={onChange} />}
                />
              </View>
              <View className="flex-row items-center">
                <Text>Sotiladi</Text>
                <Controller
                  control={control}
                  name="available"
                  render={({ field: { onChange, value } }) => <Switch value={value} onValueChange={onChange} />}
                />
              </View>
            </View>
          </CardElevated>

          <CardElevated title="Variants">
            <Text>Variantlar mavjud bo&apos;lsa, variantlar yaratish</Text>
            <View className="flex-row items-center text-purple-800">
              <IconButton
                icon="plus-circle-outline"
                size={30}
                onPress={() => {
                  alert("variant qo'shish bosildi");
                }}
              />
              <Text className="buttonText">Variant qo&apos;shish</Text>
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
              className="rounded bg-red-500 py-2"
              labelStyle={{ fontSize: 20 }}
            >
              <Text>DELETE</Text>
            </Button>
          </CardElevated>
        </SafeAreaView>
      </Wrapper>
    </>
  );
}

export default GoodEdit;
