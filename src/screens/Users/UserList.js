import React from 'react';
import { FlatList, Pressable, RefreshControl, View } from 'react-native';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';

import Header from '../../components/Header';
import { useGlobalState } from '../../hooks';
import { useInfiniteScroll } from '../../api/queries';

function UserList({ navigation }) {
  const { setClient } = useGlobalState();

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } = useInfiniteScroll({
    url: 'users',
    // filters: { role: 'client' },
    key: ['users'],
  });

  const handleItemPress = user => {
    setClient(user);
    navigation.navigate('UserProfile', { user });
  };

  return (
    <View className="flex-1">
      <Header title="Foydalanuvchilar" iconRight="content-save" navigation={navigation} backBtn />
      <View className="p-4">
        <TextInput label="Izlash" mode="outlined" className="mb-4" />
        <Button mode="contained" onPress={() => navigation.navigate('UserAdd')} className="mb-4">
          FOYDALANUVCHI QO&apos;SHISH
        </Button>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <Pressable className="flex-row items-center border-b border-gray-300 p-3" onPress={() => handleItemPress(item)}>
            <View className="bg-gray-300 rounded-full h-10 w-10 mr-3" />
            <View className="flex-1">
              <Text className="text-lg">{item.name}</Text>
              <Text className="text-gray-600">
                {item?.role?.toUpperCase()}, {item.phone}
              </Text>
            </View>
          </Pressable>
        )}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-600 text-lg">Sizda hozircha foydalanuvchilar yo&apos;q</Text>
          </View>
        }
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
}

export default UserList;
