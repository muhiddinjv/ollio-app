import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, useTheme, Button as RNButton } from 'react-native-paper';
import { INavigation } from '../../utils/interfaces';
import { signIn } from '../../api/requests';
import { AuthProvider, useAuth } from '.';
import { setToken } from './astorage';
import axios from 'axios';

const LogOutButton = () => {
  const { signOut } = useAuth();
  return <Button title="Log Out" onPress={signOut} />;
};

const LogInButton = () => {
  const { signIn } = useAuth();
  return <Button title="Log IN" onPress={() => signIn('my_token')} />;
};

export default function SignIn({ navigation }: INavigation) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<any>(); // Keep using the array of errors
  const { status, userToken } = useAuth();
  const theme = useTheme();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:4000/auth/signin', { phoneNumber, password });
      setError([]); // Clear errors on successful response
      setToken(response.data.token);
      navigation.navigate('Sales');
      return response.data;
    } catch (error: any) {
      setError(error?.response?.data?.message || []);
    }
  };

  // Function to find an error for a specific field
  const findErrorForField = (fieldName: string) => {
    const fieldError = error?.find((err: any) => err.field === fieldName);
    return fieldError ? fieldError.text : null;
  };

  return (
    <AuthProvider>
      <View className='flex-1 justify-center bg-gray-200 p-2'>
        <SafeAreaView className="flex flex-grow justify-center p-16 dark:bg-slate-800">
          <View className="flex flex-1 items-center justify-center">
            {findErrorForField("phoneNumber") && (
              <Text className="text-red-500">{findErrorForField("phoneNumber")}</Text>
            )}
            <TextInput
              label="Phone"
              value={phoneNumber}
              keyboardType="number-pad"
              onChangeText={(text) => setPhoneNumber(text)}
              mode="outlined"
              className="mb-5 w-full dark:bg-slate-700"
              textColor={theme.colors.secondary}
            />
            {findErrorForField("password") && (
              <Text className="text-red-500">{findErrorForField("password")}</Text>
            )}
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