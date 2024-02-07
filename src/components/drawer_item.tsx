import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { sales } from '../contants/icons';
import { IBase } from '../utils/interfaces';

const DrawerItem = ({title, icon}:IBase) => {
    return (
      <View style={{height: 48, width: '100%', flexDirection: 'row', paddingHorizontal: 8, alignItems: 'center', marginVertical: 8, marginHorizontal: 8 }}>
        <Image source={icon}  style={{
            height: 36,
            width: 36,
        }}/>
        <Text style={{
            fontSize: 24,
            marginHorizontal: 16,
            fontWeight: '600',
            color: 'black'
        }}> {title} </Text>
      </View>
    )
  
}

export default DrawerItem;
