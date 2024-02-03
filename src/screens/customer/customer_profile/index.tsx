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
  star,
  telephone,
  user_1,
} from "../../../contants/icons";
import UserInfoItem from "../../../components/user_info_item";
import { ScrollView } from "react-native-gesture-handler";

const CustomerProfileScreen = () => {
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
        <Text style={styles.appBarTitle}>Customer profile</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>ADD TO TICKET</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={user_1}
            style={{
              height: 80,
              width: 80,
            }}
          />
          <Text style={{
            fontSize: 24,
            color: 'black',
            marginVertical: 8,
          }}>Stive Jobs</Text>
        </View>

        <UserInfoItem title={"ogabekabdijabborov@gmail.com"} icon={mail} />
        <UserInfoItem title={"+998334130333"} icon={telephone} />
        <UserInfoItem title={"Toshkent shahri yunusobod tumani eski yunusobod ko'chasi 23"} icon={location} />
        <UserInfoItem title={"112233"} icon={barcode} />
        <UserInfoItem title={"Vip customer"} icon={membership} />
        <UserInfoItem title={"Name"} icon={star} />
        <UserInfoItem title={"Name"} icon={mail} />
        <UserInfoItem title={"Name"} icon={mail} />

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
    color: "black",
  },
  icon: {
    width: 24,
    height: 24,
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

export default CustomerProfileScreen;
