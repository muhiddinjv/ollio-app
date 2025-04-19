import React, { useState } from "react";
import { TextInput, useTheme } from "react-native-paper";
import { View, ScrollView, StyleSheet } from "react-native";
import axiosInstance from "../../api/axiostance";
import { useGlobalState } from "../../hooks/index";
import { Picker } from "@react-native-picker/picker";
import Header from "../../components/Header";

const UserEdit = ({ navigation }) => {
  const { client, setClient } = useGlobalState();
  const { colors } = useTheme();
  const [name, setName] = useState(client.name);
  const [phone, setPhone] = useState(client.phone);
  const [address, setAddress] = useState(client.address);
  const [store_type, setStoreType] = useState(client.store_type);
  const [role, setRole] = useState(client.role);
  const [note, setNote] = useState(client.note);
  const [pin, setPin] = useState(client.pin);

  const handleSave = async () => {
    const updatedUserData = {
      name,
      phone,
      address,
      store_type,
      role,
      pin,
      note,
    };

    try {
      const response = await axiosInstance.put(`/users/${client._id}`, updatedUserData);
      setClient(response.data);
      navigation.navigate("UserProfile");
    } catch (error) {
      console.error("Error updating user:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <View className="flex-1">
      <Header
        title="Foydalanuvchi yangilash"
        iconLeft="arrow-left"
        onLeftPress={() => navigation.navigate("UserList")}
        onRightPress={handleSave}
        iconRight="content-save"
      />
      <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          label="Ism sharifi"
          value={name}
          onChangeText={setName}
          style={styles.input}
          left={<TextInput.Icon icon="account" />}
          required={true}
        />
        <TextInput
          label="Telefoni"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="numeric"
          left={<TextInput.Icon icon="phone" />}
          required={true}
        />
        <TextInput
          label="Manzili"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
          left={<TextInput.Icon icon="map-marker" />}
        />
        <TextInput
          label="PIN kod"
          value={pin}
          onChangeText={setPin}
          style={styles.input}
          keyboardType="numeric"
          left={<TextInput.Icon icon="lock" />}
        />
        <TextInput
          label="Izoh"
          value={note}
          onChangeText={setNote}
          style={styles.input}
          multiline
          left={<TextInput.Icon icon="note" />}
        />
        <View style={styles.picker}>
          <Picker
            mode="dropdown"
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={{ backgroundColor: colors.secondaryContainer }}
          >
            <Picker.Item label="Klient" value="client" />
            <Picker.Item label="Kassir" value="staff" />
            <Picker.Item label="Hojayin" value="owner" />
          </Picker>
        </View>
        <View style={styles.picker}>
          <Picker
            mode="dropdown"
            selectedValue={store_type}
            onValueChange={(itemValue) => setStoreType(itemValue)}
            style={{ backgroundColor: colors.secondaryContainer }}
          >
            <Picker.Item label="Optovik" value="wholesale" />
            <Picker.Item label="Do'kon" value="retail" />
          </Picker>
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
  saveButton: {
    marginTop: 20,
  },
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 12,
  },
});

export default UserEdit;