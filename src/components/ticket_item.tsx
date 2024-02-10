import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { unselect_icon } from "../contants/icons";

const TicketItem = () => {
  return (
    <View
      style={{
        height: 64,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={unselect_icon}
          style={{ height: 24, width: 24, marginHorizontal: 16 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 18, color: "black" }}>Ticket - 11:46 </Text>
          <Text style={{ fontSize: 14, color: "grey" }}>
            9 days 5 hours 4 minutes ago
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 18, color: "black" }}>UZS 20,000 </Text>
        <Text style={{ fontSize: 14, color: "grey" }}></Text>
      </View>
    </View>
  );
};

export default TicketItem;
