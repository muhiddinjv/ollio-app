import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { arrow } from '../../contants/icons';
import { INavigation } from '../../utils/interfaces';

const EditProductAppBar = ({navigation}:INavigation) => {
    return (
        <View style={styles.appBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Image
              source={arrow}
              style={{
                height: 32,
                width: 32,
                tintColor: "#FFF",
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: "#FFF", fontSize: 24, marginHorizontal: 24 }}>
            Edit Item
          </Text>
        </View>

        <Text
          style={{
            fontSize: 20,
            color: "#FFF",
          }}
        >
          SAVE
        </Text>
      </View>
    )
  }



const styles = StyleSheet.create({
    appBar: {
        backgroundColor: "#4CB050",
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 4,
        flexDirection: "row",
      },
})
export default EditProductAppBar;