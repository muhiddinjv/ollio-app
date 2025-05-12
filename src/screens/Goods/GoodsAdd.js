import React from 'react';
import { Alert, Dimensions, ScrollView, View } from 'react-native';
import { Button, DataTable, Text, TextInput } from 'react-native-paper';
import { useQueryClient } from '@tanstack/react-query';

import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import { useGlobalState, usePostGoods } from '../../hooks';
import { removeItem } from '../../api/astorage';

const { height } = Dimensions.get('window');

function GoodsAdd({ navigation }) {
  const queryClient = useQueryClient();
  const { selectedGoods, setSelectedGoods } = useGlobalState();
  const { mutate: postGoods, isLoading } = usePostGoods();

  const handleChange = (index, field, value) => {
    const updatedGoods = [...selectedGoods];
    updatedGoods[index] = { ...updatedGoods[index], [field]: value };
    setSelectedGoods(updatedGoods);
  };

  const validateGoods = () => {
    return selectedGoods.every(good => good.cost > 0 && good.price > 0 && good.quantity > 0);
  };

  const submitGoods = async () => {
    const formattedGoods = selectedGoods.map(good => ({
      product_id: good.product_id,
      quantity: Number(good.quantity),
      order: Number(good.order),
      cost: Number(good.cost),
      price: Number(good.price),
    }));

    postGoods(formattedGoods, {
      onSuccess: () => {
        removeItem('selectedGoods');
        queryClient.invalidateQueries(['stock']);
        setSelectedGoods([]);
        navigation.navigate('GoodTabs', { screen: 'Dokon' });
      },
      onError: error => {
        Alert.alert('Hatolik', `${error}`);
      },
    });
  };

  return (
    <Wrapper>
      <Header
        title="Prixod"
        iconLeft="arrow-left"
        onLeftPress={() => navigation.navigate('GoodTabs', { screen: 'Dokon' })}
      />
      <View style={{ flex: 1, backgroundColor: 'white', height: height * 0.89 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>Tovar nomi</Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text style={{ fontWeight: 'bold' }}>Ol narx</Text>
              </DataTable.Title>
              <DataTable.Title numeric>
                <Text style={{ fontWeight: 'bold' }}>Sot narx</Text>
              </DataTable.Title>
              <DataTable.Title numeric style={{ justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Soni</Text>
              </DataTable.Title>
            </DataTable.Header>

            {selectedGoods.map((good, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <DataTable.Row key={index}>
                <DataTable.Cell
                  style={{ flex: 2, paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                  disabled={Boolean(good.title)}
                >
                  <ScrollView horizontal>
                    <Text style={{ fontSize: 12 }}>{good.title}</Text>
                  </ScrollView>
                </DataTable.Cell>
                <DataTable.Cell>
                  <TextInput
                    value={String(good.cost)}
                    keyboardType="numeric"
                    onChangeText={value => handleChange(index, 'cost', value)}
                    style={{ flex: 2, backgroundColor: 'transparent', fontSize: 12 }}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  <TextInput
                    value={String(good.price)}
                    keyboardType="numeric"
                    onChangeText={value => handleChange(index, 'price', value)}
                    style={{ flex: 2, backgroundColor: 'transparent', fontSize: 12 }}
                  />
                </DataTable.Cell>
                <DataTable.Cell>
                  <TextInput
                    value={String(good.quantity)}
                    keyboardType="numeric"
                    onChangeText={value => handleChange(index, 'quantity', value)}
                    style={{ flex: 2, backgroundColor: 'transparent', fontSize: 12 }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
        <View className="absolute inset-x-0 bottom-0 border-t border-gray-300 p-2">
          <Button mode="contained" onPress={submitGoods} disabled={!validateGoods() || isLoading}>
            {isLoading ? 'Loading...' : 'Add to Goods'}
          </Button>
        </View>
      </View>
    </Wrapper>
  );
}

export default GoodsAdd;
