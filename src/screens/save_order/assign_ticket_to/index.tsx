// SaveTicketScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { arrow, green_circle, search_icon } from "../../../contants/icons";
import { INavigation } from "../../../utils/interfaces";

const AssignTicketTo = ({ navigation }: INavigation) => {
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
              source={arrow}
              style={{ height: 22, width: 22, tintColor: "grey" }}
            />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Assign ticket to...</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PreTicketScreen')}>
          <Text style={styles.saveButton}>TRANSFER</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          height: 64,
        }}
      >
        <Image
          source={search_icon}
          style={{
            height: 24,
            width: 24,
            tintColor: "grey",
          }}
        />
        <TextInput
          placeholder="Search employee"
          style={{
            backgroundColor: "transparent",
          }}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: "grey",
          height: 64,
        }}
      >
        <TouchableOpacity
          style={{
            height: 24,
            width: 24,
            borderWidth: 3,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#4CAF50",
          }}
        >
          <Image
            source={green_circle}
            style={{
              height: 18,
              width: 18,
              tintColor: "#4CAF50",
            }}
          />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 16, color: "black", fontSize: 18 }}>
          Owner
        </Text>
      </View>
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
    backgroundColor: "#ffffff", // Background color
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    marginLeft: 24,

    // Input background color
  },
  button: {
    marginTop: 16,
  },
  appBarTitle: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
    marginLeft: 24,
  },

  saveButton: {
    color: "green",
    fontSize: 16,
  },
});

export default AssignTicketTo;
