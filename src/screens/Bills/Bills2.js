import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, List, Text } from 'react-native-paper';

const Item = ({ name, quantity, price }) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>x {quantity}</Text>
            <Text>{price} UZS</Text>
        </View>
        );
};
const Bills2 = () => {
    const items = [
        { name: 'a74 cola 1.5L (1bl*6ta)', quantity: 1, price: '15,000' },
        { name: 'a75 cola 1.5L (1bl*6ta)', quantity: 2, price: '32,000' },
        { name: 'a76 fanta 1.5L (1bl*6ta)', quantity: 3, price: '51,000' },
    ];

  return (
    <List.Section>
      {items.map((item, index) => {
        //   return <Text>{item.name}</Text>
        return <List.Item key={index}>
          <Item {...item}/>
        </List.Item>
        }
      )}
      <List.Item>
        <Card>
          <Card.Content>
            <Title>Total</Title>
            <Paragraph>UZS 98,000</Paragraph>
          </Card.Content>
        </Card>
      </List.Item>
    </List.Section>
  );
};

export default Bills2;