import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import ListItem from '../../components/ListItem';

function SearchScreen({ navigation }) {
  return (
    <View className="flex-1">
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('EditItem')}>
          <ListItem title="Click this" description="1 tonna" price={20000} />
        </TouchableOpacity>
        {[...Array(20)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem key={index} title="Olma" description="1 tonna" price={10000 + index} />
        ))}
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
