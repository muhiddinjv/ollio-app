import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { close, delete1 } from "../../../contants/icons";
import { INavigation } from "../../../utils/interfaces";

const QuantityScreen = ({ navigation }:INavigation) => {
  const [quantity, setQuantity] = useState("");

  const handleSave = () => {
    console.log("Quantity saved:", quantity);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={close} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>A74 cola 1.5 sunny gold</Text>
      </View>
      <Text style={styles.quantityLabel}>Quantity:</Text>

      {/* Quantity Section */}
      <View style={styles.quantitySection}>
        <TextInput
          style={styles.quantityInput}
          value={quantity}
          keyboardType="numeric"
          onChangeText={(text) => setQuantity(text.replace(/[^0-9]/g, ""))}
        />
        <TouchableOpacity onPress={()=> navigation.navigate('TicketScreen')}>
          <Image
            source={delete1}
            style={{
              height: 36,
              width: 36,
            }}
          />
        </TouchableOpacity>
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  appBarTitle: {
    fontSize: 20,
    marginLeft: 16,
    color: 'black'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  quantitySection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  quantityInput: {
    flex: 1,
    height: 60,
    padding: 8,
    fontSize: 32,
  },
  saveButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default QuantityScreen;
