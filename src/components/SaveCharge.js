import React from 'react';
import { Pressable, Text, View } from 'react-native';

function SaveCharge({ saveBill, navigation, isSaved }) {
  return (
    <View className="flex-row gap-2 bg-white p-2 dark:bg-slate-800">
      <Pressable
        className="flex-1 rounded bg-primary p-2"
        onPress={() => {
          if (isSaved) {
            navigation.navigate('BillList');
          } else {
            saveBill();
            navigation.navigate('SaveBill');
          }
        }}
      >
        <Text className="text-center text-xl font-medium text-white ">{isSaved ? 'Open Bills' : 'Save Bill'}</Text>
      </Pressable>
      <Pressable className="flex-1 rounded bg-primary p-2" onPress={() => navigation.navigate('Payment')}>
        <Text className="text-center text-xl font-medium capitalize text-white">Charge</Text>
      </Pressable>
    </View>
  );
}

export default SaveCharge;
