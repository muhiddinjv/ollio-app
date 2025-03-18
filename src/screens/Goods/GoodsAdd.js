import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, Alert } from "react-native";
import { DataTable, TextInput, Button, Text } from "react-native-paper";
import { useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/instance";
import { getAccessToken } from "../Auth/astorage";
import Wrapper from "../../components/Wrapper";
import { useGlobalState } from "../../hooks/useGlobalState";

const GoodsAdd = ({ navigation }) => {
  console.log('goodsadd2');
  const queryClient = useQueryClient();
  const { selectedGoods, setSelectedGoods } = useGlobalState();
  console.log({selectedGoods});

  const handleChange = (index, field, value) => {
    const updatedGoods = [...selectedGoods];
    updatedGoods[index] = { ...updatedGoods[index], [field]: value };
    setSelectedGoods(updatedGoods);
  };

  const validateGoods = () => {
    return selectedGoods.every(good => good.cost > 0 && good.price > 0 && good.quantity > 0);
  };

  const submitGoods = async () => {
    if (!validateGoods()) {
      Alert.alert("Validation Error", "Cost, price, and quantity must be greater than zero.");
      return;
    }

    try {
      const accessToken = await getAccessToken();
      await axiosInstance.post("/stock/receive", selectedGoods, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      await AsyncStorage.removeItem("selectedGoods");
      queryClient.invalidateQueries(["goods"]);
      navigation.navigate("GoodsList");
    } catch (error) {
      Alert.alert("Error", "Failed to add goods.");
    }
  };

  return (
    <Wrapper>
      <SafeAreaView>
        <ScrollView>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 1 }}>Tovar nomi</DataTable.Title>
              <DataTable.Title numeric>Ol narx</DataTable.Title>
              <DataTable.Title numeric>Sot narx</DataTable.Title>
              <DataTable.Title numeric>Soni</DataTable.Title>
            </DataTable.Header>
            {selectedGoods.map((good, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{ flex: 2, backgroundColor: "transparent", fontSize: 12 }} disabled={Boolean(good.title)}>{good.title}</DataTable.Cell>
                <DataTable.Cell>
                  <TextInput
                    value={String(good.cost)}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange(index, "cost", value)}
                    style={{ flex: 2, backgroundColor: "transparent", fontSize: 12 }}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  <TextInput
                    value={String(good.price)}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange(index, "price", value)}
                    style={{ flex: 2, backgroundColor: "transparent", fontSize: 12 }}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  <TextInput
                    value={String(good.quantity)}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange(index, "quantity", value)}
                    style={{ flex: 2, backgroundColor: "transparent", fontSize: 12 }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <Button mode="contained" onPress={submitGoods} disabled={!validateGoods()}>
            Add to Goods
          </Button>
        </ScrollView>
      </SafeAreaView>
    </Wrapper>
  );
};

export default GoodsAdd;
