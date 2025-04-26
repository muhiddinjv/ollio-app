import * as React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button as RNButton, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';

import ControlledInput from '../../components/ControlledInput';
import { MainColors } from '../../theme';

import { useAuth } from './AuthPro';

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const { colorScheme } = useColorScheme();
  const { signIn } = useAuth();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => setErrorMessage(''), 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [errorMessage]);

  const handleSignIn = async ({ phone, password }) => {
    signIn({ phone, password });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="w-full flex-1">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="w-full">
        <View className="flex-1 justify-center bg-gray-200">
          <SafeAreaView className="flex flex-1 grow justify-center p-16 dark:bg-slate-800">
            <View className="flex flex-1 items-center justify-center">
              {errorMessage ? <Text className="mb-3 text-red-500">{errorMessage}</Text> : null}

              <ControlledInput
                name="phone"
                control={control}
                error={errors?.phone?.message}
                label="Phone number"
                mode="outlined"
                className="w-full text-white dark:bg-slate-700"
                textColor={MainColors.icon[colorScheme]}
                rules={{ required: 'Phone number is required' }}
              />
              <ControlledInput
                name="password"
                control={control}
                error={errors?.password?.message}
                label="Password"
                mode="outlined"
                className="w-full text-white dark:bg-slate-700"
                textColor={MainColors.icon[colorScheme]}
                rules={{ required: 'Password is required' }}
                secureTextEntry={!showPassword}
                right={
                  <TextInput.Icon
                    color={MainColors.icon[colorScheme]}
                    icon={`${showPassword ? 'eye-off' : 'eye'}`}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
              <RNButton
                mode="contained"
                onPress={handleSubmit(handleSignIn)}
                className="mb-5 w-full rounded p-1"
                textColor="white"
              >
                <Text>Sign In</Text>
              </RNButton>
              <Text className="text-blue-500">Forgot Password?</Text>
            </View>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
