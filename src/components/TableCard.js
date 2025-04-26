import * as React from 'react';
import { View } from 'react-native';
import { Card, DataTable, Text } from 'react-native-paper';

import { CheckBox } from './CheckBox';

export function TableCard({ data, title }) {
  return (
    <Card className="mb-4 rounded-none bg-white px-2 py-4 dark:bg-slate-700">
      <Card.Title title={title} titleVariant="titleLarge" />
      <View className="ml-4 flex-row items-center">
        <CheckBox />
        <Text className="ml-2">The item is available for sale in all stores</Text>
      </View>
      <DataTable>
        <DataTable.Header>
          {/* eslint-disable-next-line react-native/no-raw-text */}
          <DataTable.Title>Available</DataTable.Title>
          {/* eslint-disable-next-line react-native/no-raw-text */}
          <DataTable.Title numeric>Store</DataTable.Title>
          {/* eslint-disable-next-line react-native/no-raw-text */}
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DataTable.Row key={index}>
            <DataTable.Cell style={{ flex: 2 }}>
              <CheckBox />
            </DataTable.Cell>
            <DataTable.Cell>{item.shop}</DataTable.Cell>
            <DataTable.Cell numeric>{item.price}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
}
