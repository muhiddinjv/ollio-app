import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { close, search_icon, user_1, user_plus } from "../../../contants/icons";
import { TextInput } from "react-native-gesture-handler";

const AddCustomerScreen = () => {
  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => console.log("Close icon pressed")}>
          <Image source={close} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Add Customer to Ticket</Text>
        <View></View>
      </View>

      <View style={styles.tab}>
        <TouchableOpacity onPress={() => console.log("Search icon pressed")}>
          <Image source={search_icon} style={styles.icon} />
        </TouchableOpacity>
        <TextInput placeholder="Search" style={{ width: 340 }} />
      </View>

      {/* Add Customer Button */}
      <TouchableOpacity
        onPress={() => console.log("Add Customer button pressed")}
      >
        <Text style={styles.addButtonLabel}>ADD NEW CUSTOMER</Text>
      </TouchableOpacity>
      <View style={{ height: 0.5, backgroundColor: "grey" }}></View>
      {/* Recent Customers Title */}
      <Text style={styles.recentCustomersTitle}>Recent customers</Text>

      {/* User Tab */}
      <View style={styles.userTab}>
        <Image source={user_1} style={styles.userIcon} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>
            john.doe@example.com , 123-456-7890
          </Text>
        </View>
      </View>
      <View style={styles.userTab}>
        <Image source={user_1} style={styles.userIcon} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>
            john.doe@example.com , 123-456-7890
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 0.5,
    paddingVertical: 16,
    borderColor: "grey",
  },
  appBarTitle: {
    fontSize: 18,
    marginLeft: 8,
    color: "black",
    fontWeight: "700",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "grey",
  },
  tabText: {
    marginLeft: 8,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "grey",
    marginRight: 16,
    marginHorizontal: 16,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonLabel: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    marginVertical: 16,
  },
  recentCustomersTitle: {
    fontSize: 16,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  userTab: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 8,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: "column",
    borderBottomWidth: 0.5,
    width: '100%',
  },
  userName: {
    fontSize: 16,
  },
  userEmail: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  userNumber: {
    fontSize: 14,
    color: "gray",
  },
});

export default AddCustomerScreen;
