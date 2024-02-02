import React, { useState } from 'react';
import { View, StyleSheet ,SafeAreaView, Alert} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useFocusNotifyOnChangeProps } from '../../hooks/useFocusNotifyOnChangeProps';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useMe } from '../../api/data.service';
import { getMe, login } from '../../api/data.fn';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignInScreen =({ navigation }: any) => {
  const user = useMe()
  // const notifyOnChangeProps = useFocusNotifyOnChangeProps();
  // const { dataUpdatedAt } = useQuery({
    //   queryKey: ['myKey'],
    //   queryFn: getMe,
    //   notifyOnChangeProps,
    // });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { mutate } = useMutation({
  //   mutationFn: getMe, 
  //   onSuccess: (data) => {
  //     console.log('succsess')
  //   },
  // });
  console.log(user, 'user')
  const handleLogin = async() => {
    console.log(email, password)
    if((email.length > 5 && password.length > 5)){
      let res = await login({password,email})
      console.log(res)
      if(res){
        await AsyncStorage.setItem('token', res.access_token)
        navigation.navigate('SelectStore')
      }else{
        Alert.alert('Password or Email is wrong...')
      }
    }else{
      Alert.alert('Password or Email is wrong...')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'blue',
  },
});

export default SignInScreen;