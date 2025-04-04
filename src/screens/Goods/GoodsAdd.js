import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, Alert, View, Dimensions } from "react-native";
import { DataTable, TextInput, Button, Text } from "react-native-paper";
import { useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../Auth/axiostance";
import { getAccessToken } from "../Auth/astorage";
import Wrapper from "../../components/Wrapper";
import { useGlobalState } from "../../hooks";
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
      const formattedGoods = selectedGoods.map((good) => ({
        product_id: good.product_id,
        quantity: Number(good.quantity),
        cost: Number(good.cost),        
        price: Number(good.price)       
      }));
      await axiosInstance.post("/stock/receive", formattedGoods, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      await AsyncStorage.removeItem("selectedGoods");
      queryClient.invalidateQueries(["goods"]);
      setSelectedGoods([]);
      navigation.navigate("GoodsList");
    } catch (error) {
      Alert.alert("Error", `${error}`);
    }
  };

  return (
    <Wrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1,  backgroundColor: "white", height: height * 0.89 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={{ fontWeight: "bold" }}>Tovar nomi</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={{ fontWeight: "bold" }}>Ol narx</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={{ fontWeight: "bold" }}>Sot narx</Text>
                </DataTable.Title>
                <DataTable.Title numeric style={{ justifyContent: "center" }}>
                  <Text style={{ fontWeight: "bold", textAlign: 'center' }}>Soni</Text>
                </DataTable.Title>
              </DataTable.Header>

              {selectedGoods.map((good, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell style={{ flex: 2, paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: 'gray' }} disabled={Boolean(good.title)}>
                    <ScrollView horizontal>
                      <Text style={{ fontSize: 12 }}>{good.title}</Text>
                    </ScrollView>
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
