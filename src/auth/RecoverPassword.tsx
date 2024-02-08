import React, { useState } from 'react';
import { View, Button, Text, Image, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DefaultTheme } from '@react-navigation/native';
import { LOGIN_LOGO } from '../contants/icons';
import { Link } from '@react-navigation/native';
import axios from '../utils/axios';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from '../app/slices/authentication';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { INavigation } from '../utils/interfaces';

const RecoverPassowrd = ({ navigation, route }: INavigation) => {
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const dispatch = useDispatch()
  const onLogin = () => {
    if (password) {
      setIsDisable(true);
      axios.post(`users/password/forget`, {
        register_id: password
      }).then(async (res) => {
        // await AsyncStorage.setItem("token", res.data.data.token);
        // dispatch(LOGIN(res.data.data))
        navigation.navigate('/login')
        setIsDisable(false)
      }).catch((err) => {
        Alert.alert("Хатолик", "Парол ёки ид хато")
        setIsDisable(false)
      })
    } else {
        Alert.alert("Хатолик", "Парол ёки ид хато")
    }
 };
  return (
  <View style={{display: "flex", justifyContent: "center", paddingHorizontal: 10, flex: 1, width: "100%", backgroundColor: "#fff"}}>
    <View>
      <Image
       source={LOGIN_LOGO}    
        style={{
          justifyContent: 'space-around',
          alignSelf: 'center',
          marginBottom: 50,
        }}
      />

    <TextInput
      value={password}
      label={"Регистрация ид рақамингизни киритинг"}
      outlineColor="rgb(99 102 241)"
      cursorColor='rgb(99 102 241)'
      activeOutlineColor="rgb(99 102 241)"
      mode="outlined"
      onChangeText={text => setPassword(text)}
      style={{ margin: 5, borderRadius: 6 }}
    />
    
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 2, paddingVertical: 2 }}>
      <Text></Text>      
      {/* <Link to={{ screen: 'RecoverPassword' }} style={{textDecorationLine: "underline", color: "#1e40af"}}>
      {"Паролни унутдингизми?"}
      </Link> */}
    </View>
        <View style={{ margin: 5 }}>
        <TouchableOpacity onPress={() => { onLogin() }}>
          <View style={{
            backgroundColor: 'rgb(99 102 241)',
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 5,
            paddingVertical: 12
          }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Кириш</Text>
          </View>
        </TouchableOpacity>
{/*     
    <Button
      title={'Кириш'}
      disabled={isDisable}      
      onPress={() => {
        onLogin();
      }}
    /> */}
   </View>
    </View>
  </View>
 );
};

export default RecoverPassowrd