import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import axiosInstance from "../../screens/Auth/axiostance";
import { Picker } from "@react-native-picker/picker";
import { useGlobalState } from "../../hooks/index";

const UserAdd = ({ navigation }) => {
  const { colors } = useTheme();
  const { user } = useGlobalState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [store_type, setStoreType] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [note, setNote] = useState("");
  const [pin, setPin] = useState("");
  
  const handleSave = async () => {
    const userData = {
      phone,
      name,
      password,
      address,
      pin,
      note,
      role,
      store_type,
      owner_id: user?._id,
    };

    console.log("User Data to be sent:", userData);

    try {
      await axiosInstance.post("/users", userData);
      navigation.goBack();
    } catch (error) {
      console.error("Error saving user:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <View className="flex-1">
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
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
          <TextInput
            label="Ism sharifi"
            placeholder="Abdulla Qurbonov"
            value={name}
            onChangeText={setName}
            style={styles.input}
            left={<TextInput.Icon icon="account" />}
            required={true}
          />
          <TextInput
            label="Paroli"
            placeholder="Ju94q1yiN_P@r0L"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            left={<TextInput.Icon icon="lock" />}
            secureTextEntry={true}
            required={true}
          />
          <TextInput
            label="PIN kod"
            placeholder="123456"
            value={pin}
            keyboardType="numeric"
            onChangeText={setPin}
            style={styles.input}
            left={<TextInput.Icon icon="lock" />}
            required={true}
          />
          <TextInput
            label="Telefoni"
            placeholder="998991234567"
            value={phone}
            keyboardType="numeric"
            onChangeText={setPhone}
            style={styles.input}
            left={<TextInput.Icon icon="phone" />}
            required={true}
          />
          <TextInput
            label="Manzili"
            placeholder="Toshkent, Uzbekistan"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
            left={<TextInput.Icon icon="map-marker" />}
          />

          <TextInput
            label="Izoh"
            placeholder="Mijoz haqida qo'shimcha ma'lumot"
            value={note}
            onChangeText={setNote}
            style={styles.input}
            multiline
            left={<TextInput.Icon icon="note" />}
          />  
          <Button
            mode="contained"
            onPress={handleSave}
            style={styles.saveButton}
          >
            SAQLASH
          </Button>
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
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    // borderTopLeftRadius: 10,
    // backgroundColor: '#f0f0f0',
    marginBottom: 12,
  },
  saveButton: {
    marginTop: 20,
  },
});

export default UserAdd;
