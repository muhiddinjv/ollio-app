import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { sales } from '../../contants/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IBottomItem { title: string; icon: any; iconColor?: string }

const BottomItem = ({title, icon, iconColor}:IBottomItem) => {
    return (
      <TouchableOpacity style={{height: 48, width: '100%', flexDirection: 'row', paddingHorizontal: 8, alignItems: 'center', marginVertical: 8, marginHorizontal: 8 }}>
        <Image source={icon}  style={{
            height: 24,
            width: 24,
            tintColor: iconColor,
        }}/>
        <Text style={{
            fontSize: 18,
            marginHorizontal: 16,
            fontWeight: '600',
            color: '#000    '
        }}> {title} </Text>
      </TouchableOpacity>
    )
  
}

export default BottomItem;
