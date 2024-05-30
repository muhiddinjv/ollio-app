import * as React from "react";
import { View } from "react-native";
import { DataTable, Card, Text } from "react-native-paper";
import { CenteredCheckbox } from "./CenteredCheckbox";

export const TableCard = ({ data, title }) => {
  return (
    <Card className="px-2 py-4 mb-4 rounded-none">
      <Card.Title title={title} titleVariant="titleLarge" />
      <View className="flex-row items-center ml-4">
        <CenteredCheckbox />
        <Text className="ml-2">
          The item is available for sale in all stores
        </Text>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Available</DataTable.Title>
          <DataTable.Title numeric>Store</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>
        {data.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell style={{ flex: 2 }}>
              <CenteredCheckbox />
            </DataTable.Cell>
            <DataTable.Cell>{item.shop}</DataTable.Cell>
            <DataTable.Cell numeric>{item.price}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
};

