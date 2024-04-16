import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, useTheme, Button as RNButton } from 'react-native-paper';
import { INavigation } from '../../utils/interfaces';
import { signIn } from '../../api/requests';
import { AuthProvider, useAuth } from '.';
import { setToken } from './astorage';

const LogOutButton = () => {
  const { signOut } = useAuth();
  return <Button title="Log Out" onPress={signOut} />;
};

const LogInButton = () => {
  const { signIn } = useAuth();
  return <Button title="Log IN" onPress={() => signIn('my_token')} />;
};

export default function SingIn({ navigation }: INavigation) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const theme = useTheme();

  const handleSignIn = async () => {
    try {
      const {data} = await signIn({phoneNumber, password}); 
      await setToken(data.accessToken);
      navigation.navigate("Sales");
    } catch (error) {
      Alert.alert("Phone or password is wrong!");
      // console.error(333,error);
    }
  };

  return (
    <AuthProvider>
    <View className='flex-1 justify-center bg-gray-200 p-2'>
      {/* <Text style={styles.text}>status : {status}</Text>
      <Text style={styles.text}>
        userToken : {userToken ? userToken : 'null'}
      </Text>
      <View style={styles.actions}>
        <LogInButton />
        <LogOutButton />
      </View> */}
      <SafeAreaView className="flex flex-grow justify-center p-16 dark:bg-slate-800">
      <View className="flex flex-1 items-center justify-center">
        <TextInput
          label="Phone"
          value={phoneNumber}
          keyboardType="number-pad"
          onChangeText={(text) => setPhoneNumber(text)}
          mode="outlined"
          className="mb-5 w-full dark:bg-slate-700"
          textColor={theme.colors.secondary}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          textColor={theme.colors.secondary}
          className="mb-5 w-full dark:bg-slate-700"
        />
        <RNButton mode="contained" onPress={handleSignIn} className="mb-5 w-full p-1" textColor="white">
          Sign In
        </RNButton>
        <Text className="text-blue-500">Forgot Password?</Text>
      </View>
    </SafeAreaView>
    </View>
    </AuthProvider>

  );
};

const styles = {
  button: 'm-6',
  actions: 'flex-row justify-around py-5',
  text: 'text-center',
};
