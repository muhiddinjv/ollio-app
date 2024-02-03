import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import {
  arrow,
  barcode,
  location,
  mail,
  membership,
  telephone,
  user_1,
} from "../../../contants/icons";
import UserItem from "../../../components/user_item";
import { ScrollView } from "react-native-gesture-handler";

const EditCustomerInformationScreen = () => {
  const [customerName, setCustomerName] = useState("");

  const handleSave = () => {
    // Implement save functionality here
    console.log("Customer information saved:", customerName);
  };

  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => console.log("Back arrow pressed")}>
          <Image source={arrow} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Edit Customer</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <UserItem title={"Name"} icon={user_1} />
        <UserItem title={"Email"} icon={mail} />
        <UserItem title={"Phone"} icon={telephone} />
        <UserItem title={"Address"} icon={location} />
        <UserItem title={"City"} icon={user_1} />
        <UserItem title={"State"} icon={user_1} />
        <UserItem title={"Zipcode"} icon={user_1} />
        <UserItem title={"Country"} icon={user_1} />
        <UserItem title={"Costumer code"} icon={barcode} />
        <UserItem title={"Vip customer"} icon={membership} />
        <UserItem title={"name"} icon={user_1} />
        <UserItem title={"name"} icon={user_1} />
      </ScrollView>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  appBarTitle: {
    fontSize: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
  saveButton: {
    color: "blue",
    fontSize: 16,
  },
  userTab: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginRight: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "gray",
    flex: 1,
  },
});

export default EditCustomerInformationScreen;
