// SaveTicketScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { cancel, remove } from "../../../contants/icons";

const SaveTicketScreen = () => {
  const navigation = useNavigation();
  const [productName, setProductName] = useState("");
  const [comment, setComment] = useState("");

  const handleSave = () => {
    // Implement your save logic here
    console.log("Product Name:", productName);
    console.log("Comment:", comment);
    // You can send the data to an API, store it in state, etc.
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={cancel}
              style={{ height: 22, width: 22, tintColor: "grey" }}
            />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Edit customer</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerProfileScreen")}
        >
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        label="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
      />

      <TextInput
        label="Comment"
        value={comment}
        onChangeText={(text) => setComment(text)}
        style={styles.input}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  saveTicketText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff", // Background color
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#ffffff", // Input background color
  },
  button: {
    marginTop: 16,
  },
  appBarTitle: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
    marginLeft: 48,
  },

  saveButton: {
    color: "green",
    fontSize: 16,
  },
});

export default SaveTicketScreen;
