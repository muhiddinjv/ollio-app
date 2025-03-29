import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Appbar, Button, useTheme, ActivityIndicator } from "react-native-paper";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import axiosInstance from "../../screens/Auth/axiostance"; // Assuming you have an axios instance
import { getAccessToken } from "../../screens/Auth/astorage"; // Assuming you have a function to get access token

const Users = ({ navigation }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        const response = await axiosInstance.get("users?role=client", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} iconColor={colors.surface} />
        <Appbar.Content title="Clients" titleStyle={{ color: colors.surface }} />
      </Appbar.Header>
      <View style={styles.searchContainer}>
        <TextInput label="Search" mode="outlined" style={styles.searchInput} />
        <Button mode="contained" onPress={() => navigation.navigate("UserAdd")} style={styles.addButton}>
          ADD NEW CLIENT
        </Button>
        <Text style={styles.recentClientsTitle}>Recent Clients</Text>
      </View>

      <ScrollView>
        <View style={styles.userList}>
          {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
          {!loading ? users.map((user) => (
            <View key={user._id} style={styles.userItem}>
              <View style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userDetails}>{user.role.toUpperCase()}, {user.phone}</Text>
              </View>
            </View>
          )) : <ActivityIndicator size="large" color={colors.primary} />}
        </View>
      </ScrollView>
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
  recentClientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userList: {
    paddingHorizontal: 16,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
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
});

export default Users;
