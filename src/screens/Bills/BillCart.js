import React from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Button, IconButton, useTheme } from 'react-native-paper';

import Header from '../../components/Header';
import { useGlobalState } from '../../hooks';
import { calculateTotal } from '../../utils';

function Item({ title, price, quantity, onDelete }) {
  const total = calculateTotal([{ price, quantity }]);
  const { colors } = useTheme();

  const renderRightActions = () => {
    return (
      <View className="flex-row items-center justify-center">
        <IconButton icon="delete" iconColor={colors.primary} onPress={onDelete} />
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View className="h-10 flex-row items-center justify-between">
        <Text className="w-10 flex-1 text-base" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text className="mx-3 text-base text-gray-400"> x{quantity}</Text>
        <Text className="pr-2 text-base">{total}</Text>
      </View>
    </Swipeable>
  );
}

export default function BillCart({ navigation }) {
  const { bill, setBill, saveBill } = useGlobalState();
  const total = calculateTotal(bill.products);

  const handleDelete = productId => {
    try {
      setBill(prevBill => ({
        ...prevBill,
        products: prevBill.products.filter(item => item.product_id !== productId),
      }));
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to delete product.');
    }
  };

  const handleSave = () => {
    saveBill();
    navigation.navigate('Cheklar');
  };

  const handleCharge = () => {
    saveBill();
    navigation.navigate('SaleMade');
  };

  return (
    <View className="flex-1">
      <Header
        title="Arava"
        iconRight={bill.client_id ? 'account-check' : 'account-plus'}
        navigation={navigation}
        onPress={() => navigation.navigate('UserList')}
        rightBtn
        backBtn
      />
      <ScrollView className="grow p-4">
        <View className="border-b border-gray-300 pb-2">
          {bill.products.map(item => (
            <Item
              key={item.product_id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onDelete={() => handleDelete(item.product_id)}
            />
          ))}
        </View>
        <View className="flex-row justify-between pt-3">
          <Text className="text-lg font-bold">Jami</Text>
          <Text className="text-lg font-bold">UZS {total}</Text>
        </View>
      </ScrollView>
      <View className="flex-row gap-2 bg-white p-2 dark:bg-slate-800">
        <Button mode="contained" onPress={handleSave} style={{ flex: 1 }} disabled={bill.products.length === 0}>
          <Text>SAQLASH</Text>
        </Button>
        <Button mode="contained" style={{ flex: 1 }} onPress={handleCharge} disabled={bill.products.length === 0}>
          <Text>SAVDO</Text>
        </Button>
      </View>
    </View>
  );
}
