import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { more_ho, right_arrow } from "../contants";

export class AddToPrivate extends Component {
  render() {
    return (
      <View
        style={{
          height: 100,
          width: "100%",
          flexDirection: "row",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            height: 64,
            width: 64,
            backgroundColor: "#FAFAFA",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            margin: 16,
          }}
        >
          <Image
            source={more_ho}
            style={{ height: 32, width: 32, tintColor: "grey" }}
          />
        </View>
        <View
          style={{
            height: 64,
            width: 292,
            borderWidth: 2,
            margin: 16,
            borderRadius: 32,
            borderColor: "#4CAF50",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 56,
              width: 56,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4CAF50",
              borderRadius: 30,
              marginHorizontal: 2,
            }}
          >
            <Image
              source={right_arrow}
              style={{
                height: 28,
                width: 28,
                tintColor: "#fff",
              }}
            />

          </View>
          <Text style={{
            fontSize: 20,
            fontWeight: '700', 
            color:  '#4CAF50',
            marginHorizontal: 22,
          }}>ADD TO PRIVATE</Text>
        </View>
      </View>
    );
  }
}

export default AddToPrivate;
