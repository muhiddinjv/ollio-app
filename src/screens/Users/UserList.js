import React from "react";
import { View, StyleSheet, Pressable, FlatList, RefreshControl } from "react-native";
import { Text, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { useGlobalState, useInfiniteScroll } from "../../hooks";
import Header from "../../components/Header";

const UserList = ({ navigation }) => {
  const { setClient } = useGlobalState();

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } =
    useInfiniteScroll({
      url: "users",
      filters: { role: "client" },
      key: ["users"],
    });

  const handleItemPress = (user) => {
    setClient(user);
    navigation.navigate("UserProfile", { user });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Foydalanuvchilar"
        iconRight="content-save"
        navigation={navigation}
        backBtn
      />
      <View style={styles.searchContainer}>
        <TextInput label="Izlash" mode="outlined" style={styles.searchInput} />
        <Button mode="contained" onPress={() => navigation.navigate("UserAdd")} style={styles.addButton}>
          FOYDALANUVCHI QO'SHISH
        </Button>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.userItem} onPress={() => handleItemPress(item)}>
            <View style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userDetails}>{item?.role?.toUpperCase()}, {item.phone}</Text>
            </View>
          </Pressable>
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Sizda hozircha foydalanuvchilar yo'q</Text>
          </View>
        }
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    marginBottom: 16,
  },
  addButton: {
    marginBottom: 16,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDetails: {
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default UserList;
