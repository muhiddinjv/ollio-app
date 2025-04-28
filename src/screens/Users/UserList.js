import React from 'react';
import { FlatList, Pressable, RefreshControl, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';

import Header from '../../components/Header';
import { useGlobalState, useInfiniteScroll } from '../../hooks';

function UserList({ navigation }) {
  const { setClient } = useGlobalState();

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } = useInfiniteScroll({
    url: 'users',
    filters: { role: 'client' },
    key: ['users'],
  });

  const handleItemPress = user => {
    setClient(user);
    navigation.navigate('UserProfile', { user });
  };

  return (
    <View style={styles.container}>
      <Header title="Foydalanuvchilar" iconRight="content-save" navigation={navigation} backBtn />
      <View style={styles.searchContainer}>
        <TextInput label="Izlash" mode="outlined" style={styles.searchInput} />
        <Button mode="contained" onPress={() => navigation.navigate('UserAdd')} style={styles.addButton}>
          <Text>FOYDALANUVCHI QO&apos;SHISH</Text>
        </Button>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.userItem} onPress={() => handleItemPress(item)}>
            <View style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userDetails}>
                {item?.role?.toUpperCase()}, {item.phone}
              </Text>
            </View>
          </Pressable>
        )}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Sizda hozircha foydalanuvchilar yo&apos;q</Text>
          </View>
        }
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    height: 40,
    marginRight: 12,
    width: 40,
  },
  container: {
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    marginBottom: 16,
  },
  userDetails: {
    color: '#666',
  },
  userInfo: {
    flex: 1,
  },
  userItem: {
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserList;
