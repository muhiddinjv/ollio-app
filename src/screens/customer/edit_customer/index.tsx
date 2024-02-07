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
  user,
} from "../../../contants/icons";
import UserItem from "../../../components/user/user_item";
import { ScrollView } from "react-native-gesture-handler";
import { INavigation } from "../../../utils/interfaces";

const EditCustomerInformationScreen = ({ navigation }:INavigation) => {
  const [customerName, setCustomerName] = useState("");

  const handleSave = () => {
    // Implement save functionality here
    console.log("Customer information saved:", customerName);
  };

  return (
    <View style={styles.container}>
      {/* AppBar */}
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
          <Text style={styles.appBarTitle}>Edit customer</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomerProfileScreen")}
        >
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <UserItem title={"Name"} icon={user} />
        <UserItem title={"Email"} icon={mail} />
        <UserItem title={"Phone"} icon={telephone} />
        <UserItem title={"Address"} icon={location} />
        <UserItem title={"City"} icon={user} />
        <UserItem title={"State"} icon={user} />
        <UserItem title={"Zipcode"} icon={user} />
        <UserItem title={"Country"} icon={user} />
        <UserItem title={"Costumer code"} icon={barcode} />
        <UserItem title={"Vip customer"} icon={membership} />
        <UserItem title={"name"} icon={user} />
        <UserItem title={"name"} icon={user} />
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
    fontSize: 22,
    color: "black",
    fontWeight: "700",
    marginLeft: 48,
  },

  saveButton: {
    color: "green",
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
