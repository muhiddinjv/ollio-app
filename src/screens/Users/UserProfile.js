import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button, useTheme, Appbar } from "react-native-paper";
import { useGlobalState } from "../../hooks/index";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const UserProfile = ({ route }) => {
  const { colors } = useTheme();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} iconColor={colors.surface} />
        <Appbar.Content title="Foydalanuvchi profili" titleStyle={{ color: colors.surface }} iconColor={colors.surface} />
        <Appbar.Action icon="account-edit" onPress={() => navigation.navigate("UserEdit")} color={colors.surface} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user?.name.charAt(0)}</Text>
          </View>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.phone}>{user?.phone}</Text>
          <Text style={styles.customerId}>ID: {user?._id}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="account" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Role: {user?.role}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="store" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Store Type: {user?.store_type}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="lock" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>PIN Code: {user?.pin}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Address: {user?.address || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="note" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Note: {user?.note || 'N/A'}</Text>
          </View>
        </View>
        <Button mode="contained" onPress={() => {/* Add to ticket logic */}} style={styles.button}>
          ADD TO BILL
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 16,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 24,
    color: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 16,
    color: "#666",
  },
  customerId: {
    fontSize: 14,
    color: "#999",
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detailsTitle: {
    fontSize: 16,
    marginLeft: 10, // Space between icon and text
  },
  button: {
    marginTop: 20,
  },
});

export default UserProfile;
