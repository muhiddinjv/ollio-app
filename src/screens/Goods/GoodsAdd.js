import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, Alert, View, Dimensions } from "react-native";
import { DataTable, TextInput, Button } from "react-native-paper";
import { useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/instance";
import { getAccessToken } from "../Auth/astorage";
import Wrapper from "../../components/Wrapper";
import { useGlobalState } from "../../hooks/useGlobalState";
const { height } = Dimensions.get('window');

const GoodsAdd = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { selectedGoods, setSelectedGoods } = useGlobalState();

  const handleChange = (index, field, value) => {
    const updatedGoods = [...selectedGoods];
    updatedGoods[index] = { ...updatedGoods[index], [field]: value };
    setSelectedGoods(updatedGoods);
  };

  const validateGoods = () => {
    return selectedGoods.every(
      (good) => good.cost > 0 && good.price > 0 && good.quantity > 0
    );
  };

  const submitGoods = async () => {
    try {
      const accessToken = await getAccessToken();
      await axiosInstance.post("/stock/receive", selectedGoods, {
        headers: { Authorization: `Bearer ${accessToken}` },
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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1,  backgroundColor: "white", height: height * 0.89 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{ flex: 1 }}>Tovar nomi</DataTable.Title>
                <DataTable.Title numeric>Ol narx</DataTable.Title>
                <DataTable.Title numeric>Sot narx</DataTable.Title>
                <DataTable.Title numeric>Soni</DataTable.Title>
              </DataTable.Header>
              {selectedGoods.map((good, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell
                    style={{ flex: 2, backgroundColor: "transparent", fontSize: 12 }}
                    disabled={Boolean(good.title)}
                  >
                    {good.title}
                  </DataTable.Cell>
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
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
             
              padding: 10,
              borderTopWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Button mode="contained" onPress={submitGoods} disabled={!validateGoods()}>
              Add to Goods
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </Wrapper>
  );
};

export default GoodsAdd;
