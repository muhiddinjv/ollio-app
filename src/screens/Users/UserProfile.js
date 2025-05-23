import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, Text, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { useGlobalState } from '../../hooks';

function UserProfile({ navigation }) {
  const { colors } = useTheme();
  const { client, addClientToBill } = useGlobalState();

  const handleAddToBill = () => {
    addClientToBill(client._id);
    navigation.navigate('Savdo');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.BackAction onPress={() => navigation.navigate('UserList')} iconColor={colors.surface} />
        <Appbar.Content title="Foydalanuvchi profili" titleStyle={{ color: colors.surface }} />
        <Appbar.Action
          icon="account-edit"
          onPress={() => navigation.navigate('UserEdit', { user: client })}
          color={colors.surface}
        />
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
            <Text style={styles.detailsTitle}>Lavozim: {client?.role}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="store" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Do&apos;kon turi: {client?.store_type}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="lock" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>PIN kod: {client?.pin}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Manzil: {client?.address || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="note" size={20} color={colors.primary} />
            <Text style={styles.detailsTitle}>Izoh: {client?.note || 'N/A'}</Text>
          </View>
        </View>
        <Button mode="contained" onPress={handleAddToBill} style={styles.button}>
          CHEKGA QO&apos;SHISH
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginBottom: 10,
    width: 80,
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    marginTop: 20,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  customerId: {
    color: '#999',
    fontSize: 14,
  },
  detailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
  },
  detailsTitle: {
    fontSize: 16,
    marginLeft: 10, // Space between icon and text
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phone: {
    color: '#666',
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollView: {
    padding: 16,
  },
});

export default UserProfile;
