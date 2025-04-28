import React from 'react';
import { View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import { useColorScheme } from 'nativewind';

import { useGlobalState } from '../hooks';
import { MainColors } from '../theme';

import { CheckBox } from './CheckBox';

function ListItem({
  goodId,
  title,
  description,
  variant,
  price,
  editable,
  onSalesScreen,
  checked,
  onChange,
  setIsModalVisible,
  onPress,
}) {
  const { colorScheme } = useColorScheme();
  const { setGoodId } = useGlobalState();

  return (
    <List.Section className="m-0">
      <List.Item
        title={title}
        titleStyle={{
          color: MainColors.icon[colorScheme],
          fontWeight: 'bold',
        }}
        description={description}
        descriptionStyle={{
          color: MainColors.icon[colorScheme],
        }}
        onPress={() => {
          setGoodId(goodId);
          if (editable) {
            onPress();
          }
          if (onSalesScreen) {
            setIsModalVisible(true);
          }
        }}
        left={props => <List.Image style={props.style} source={require('../../assets/product.png')} />}
        right={() => {
          if (variant === 'CheckBox') {
            return <CheckBox checked={checked} onChange={onChange} />;
          }
          return (
            <View className="justify-center">
              <Text className="text-lg dark:text-white">{price}</Text>
            </View>
          );
        }}
      />
      <Divider />
    </List.Section>
  );
}

export default ListItem;
