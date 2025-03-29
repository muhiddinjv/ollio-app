import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, TextInput, Button, useTheme, Appbar } from "react-native-paper";
import axiosInstance from "../../screens/Auth/axiostance"; // Adjust the import as necessary

const UserAdd = ({ navigation }) => {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [note, setNote] = useState("");

  const handleSave = async () => {
    const userData = {
      phone,
      name,
      address,
      pin: pinCode,
      note,
    };

    try {
      await axiosInstance.post("/users", userData);
      navigation.goBack();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <View className="flex-1">
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          iconColor={colors.surface}
        />
        <Appbar.Content
          title="Add Client to Bill"
          titleStyle={{ color: colors.surface }}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
          <TextInput
            label="Address"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
          />
          <TextInput
            label="Client Code"
            value={pinCode}
            onChangeText={setPinCode}
            style={styles.input}
          />
          <TextInput
            label="Note"
            value={note}
            onChangeText={setNote}
            style={styles.input}
            multiline
          />
          <Button
            mode="contained"
            onPress={handleSave}
            style={styles.saveButton}
          >
            SAVE
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
  saveButton: {
    marginTop: 20,
  },
});

export default UserAdd;
