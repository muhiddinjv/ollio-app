import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button, useTheme, Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useGlobalState } from "../../hooks";

const UserProfile = ({ navigation }) => {
  const { colors } = useTheme();
  const { client } = useGlobalState();

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
            <Text style={styles.avatarText}>{client?.name.charAt(0)}</Text>
          </View>
          <Text style={styles.name}>{client?.name}</Text>
          <Text style={styles.phone}>{client?.phone}</Text>
          <Text style={styles.customerId}>ID: {client?._id}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="account" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Role: {client?.role}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="store" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Store Type: {client?.store_type}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="lock" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>PIN Code: {client?.pin}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Address: {client?.address || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="note" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Note: {client?.note || 'N/A'}</Text>
          </View>
        </View>
        <Button mode="contained" onPress={() => {/* Add to ticket logic */}} style={styles.button}>
          CHECKGA QO'SHISH
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
