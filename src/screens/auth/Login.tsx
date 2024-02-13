import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, Linking } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DefaultTheme } from '@react-navigation/native';
import { AUTH_BACKGROUND, LOGIN_LOGO, LOG_IN, SITE_LOGO } from '../../constants/icons';
import { Link } from '@react-navigation/native';
import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INITIAL, LOGIN } from '../../app/slices/authentication';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import instance from '../../utils/axios';
import { ActivityIndicator } from 'react-native'
import { Height, Width } from '../../utils/responsive';
import { INavigation } from '../../utils/interfaces';

export const LoginPage = ({ navigation, route }: INavigation) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  
  const onLogin = () => {
    if (userName && password) {
      setIsLoading(true)
      setIsDisable(true);
      axios.post(`users/login`, {
        register_id: userName,
        password
      }).then(async (res) => {
        await AsyncStorage.setItem("token", res.data.data.token);
        instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.token}`;

        const response = await axios.get('users/me', {
            headers: {
              Authorization: `Bearer ${res.data.data.token}`
            }
          });
          
        const user = response.data.data;
        dispatch(LOGIN(user)) 
        setIsLoading(false)
        // dispatch(LOGIN(res.data.data))
        dispatch(INITIAL("init"))
        setIsDisable(false)
      }).catch((err:any) => {
        console.log(err)
        Alert.alert("Хатолик", "Парол ёки ид хато")
        setIsLoading(false)
        setIsDisable(false)
      })
    } else {
      Alert.alert("Хатолик", "Парол ёки ид хато")
      setIsLoading(false)
    }
  };
  const handleRegister = () => {
    let url = "https://www.xj-business.com/uz"
      Linking.openURL(url).catch((err) => console.error('An error occurred: ', err));
  }
  return (
    <View style={{display: "flex", justifyContent: "center", flex: 1, width: "100%", backgroundColor: "#fff"}}>
      <ImageBackground source={AUTH_BACKGROUND} resizeMode='cover' style={{
        flex: 1,
        width: null,
        height: null,
      }}>
          <Image
            source={SITE_LOGO}    
              style={{
                justifyContent: 'space-around',
                width: Width(257),
                height: Height(55),
                alignSelf: 'center',
                marginTop: Height(76),
                marginBottom: Height(32),
              }}
          />
        <View style={{ borderRadius: 32, overflow: "hidden"}}>
          <View style={{ backgroundColor: "white", height: "100%" }}>
          {/* <View style={{ display: "flex", justifyContent: "center", height: Height(100), borderRadius: 12, overflow: "hidden", width: "100%" }}> */}
              <Text
                style={{ textAlign: "center", fontFamily: "Inter-Bold", marginVertical: Height(62), fontWeight: "600", fontSize: Height(30), color: "#222" }}
              >Кириш</Text>
            {/* </View> */}
          <KeyboardAvoidingView behavior={'position'}>
          <TextInput
            label="ID рақам"
            outlineColor="#222"
            cursorColor='#222'
            placeholder='0000000'
            theme={{colors: {primary: 'red'}}}
            outlineStyle={{
              borderRadius: 16,
              borderColor: "#8D8D8D"
            }}
            activeOutlineColor="#222"
            mode="outlined"
            value={userName}
            onChangeText={text => setUserName(text)}
            style={{ marginHorizontal: Width(25), width: Width(335), height: Height(60), marginBottom: Height(36), fontFamily: "Inter-Regular", borderRadius: 16, color: "#222", fontSize: Height(16), fontWeight: '500' }}
          />
            </KeyboardAvoidingView>
          
          <TextInput
            value={password}
            label={"Парол"}
            outlineColor="#222"
            cursorColor='#222'
            placeholder='Паролингизни киритинг'
            outlineStyle={{
              borderRadius: 16,
              borderColor: "#8D8D8D",
              // fontFamily: "Inter-Regular",
            }}
            activeOutlineColor="#222"
            mode="outlined"
            onChangeText={text => setPassword(text)}
            style={{ marginHorizontal: Width(25), width: Width(335), height: Height(60), marginBottom: Height(36), fontFamily: "Inter-Regular", borderRadius: 16, color: "#222", fontSize: Height(16), fontWeight: '500' }}
            />
            
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", paddingHorizontal: 5, marginBottom: 40}}>
            <Link to={{ screen: 'RecoverPassword' }} style={{textDecorationLine: "underline", color: "#1e40af"}}>
              <Text style={{ textAlign: "center", fontFamily: "Inter-Regular", fontSize: Height(16) }}>{"Паролни унутдингизми?"}</Text>
            </Link>
          </View>
          <View style={{ margin: 5}}>
          
          <TouchableOpacity onPress={() => {onLogin()}} disabled={isDisable} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <View style={{
              backgroundColor: '#FFBA04',
              alignItems: 'center', 
              width: Width(250),
              justifyContent: 'center',
              borderRadius: 32,
              paddingVertical: 12
            }}>{isLoading ? (
                <ActivityIndicator color={"white"} size="large" />
                  ) : (
                  <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Image source={LOG_IN} style={{ marginRight: 5 }} />      
                    <Text style={{ color: 'white', fontFamily: "Inter-Regular",fontSize: 24 }}>Кириш</Text>
                  </View>
                )
            }
                </View>
              </TouchableOpacity>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: Height(32) }}>
                <Text style={{ fontFamily: "Inter-Regular", color: "#787878"}}>Аккоунтингиз йукми?</Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text style={{textDecorationLine: "underline", color: "#1e40af", marginLeft: 4, fontFamily: "Inter-Regular"}}>Руйхатдан утиш</Text>
                </TouchableOpacity>
            </View>  
          </View> 
        </View>
        </View>
    </ImageBackground>
  </View>
 );
};