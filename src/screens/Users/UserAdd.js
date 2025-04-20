import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import axiosInstance from "../../api/axiostance";
import { Picker } from "@react-native-picker/picker";
import { useGlobalState } from "../../hooks/index";
import Header from "../../components/Header";

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
  
  const [errors, setErrors] = useState({});

  const handleSave = async () => {
    // Reset errors
    setErrors({});

    // Validate inputs
    const newErrors = {};
    if (!name) newErrors.name = "Ism sharifi bo'lishi shart.";
    if (!phone) newErrors.phone = "Telefoni bo'lishi shart.";
    if (!address) newErrors.address = "Manzili bo'lishi shart.";
    if (!store_type) newErrors.store_type = "Dokon turi bo'lishi shart.";
    if (!role) newErrors.role = "Rol bo'lishi shart.";
    if (!password) newErrors.password = "Paroli bo'lishi shart.";
    if (!pin) newErrors.pin = "PIN kod bo'lishi shart.";
    if (!note) newErrors.note = "Izoh bo'lishi shart.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop execution if there are errors
    }

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

    try {
      await axiosInstance.post("/users", userData);
      navigation.goBack();
    } catch (error) {
      console.error("Error saving user:", error.response ? error.response.data : error.message);
    }
  };

  const dynamicStyles = {
    picker: {
      borderBottomWidth: 1,
      borderBottomColor: errors.role || errors.store_type ? 'red' : '#aaa',
      marginBottom: 12,
    },
  }

  return (
    <View className="flex-1">
      <Header
        title="Foydalanuvchi qo'shish"
        iconLeft="arrow-left"
        onLeftPress={() => navigation.navigate("UserList")}
        onRightPress={handleSave}
        iconRight="content-save"
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInput
            label="Ism sharifi"
            placeholder="Abdulla Qurbonov"
            value={name}
            onChangeText={setName}
            style={styles.input}
            left={<TextInput.Icon icon="account" />}
            error={errors.name}
          />
          <TextInput
            label="Paroli"
            placeholder="Ju94q1yiN_P@r0L"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            left={<TextInput.Icon icon="lock" />}
            secureTextEntry={true}
            error={errors.password}
          />
          <TextInput
            label="PIN kod"
            placeholder="123456"
            value={pin}
            keyboardType="numeric"
            onChangeText={setPin}
            style={styles.input}
            left={<TextInput.Icon icon="lock" />}
            error={errors.pin}
          />
          <TextInput
            label="Telefoni"
            placeholder="998991234567"
            value={phone}
            keyboardType="numeric"
            onChangeText={setPhone}
            style={styles.input}
            left={<TextInput.Icon icon="phone" />}
            error={errors.phone}
          />
          <TextInput
            label="Manzili"
            placeholder="Toshkent, Uzbekistan"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
            left={<TextInput.Icon icon="map-marker" />}
            error={errors.address}
          />
          <TextInput
            label="Izoh"
            placeholder="Mijoz haqida qo'shimcha ma'lumot"
            value={note}
            onChangeText={setNote}
            style={styles.input}
            left={<TextInput.Icon icon="note" />}
            error={errors.note}
          />
          <View style={dynamicStyles.picker}>
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
          <View style={dynamicStyles.picker}>
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
});

export default UserAdd;
