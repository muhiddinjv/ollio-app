import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import ControlledInput from '../../components/ControlledInput';

function Signup() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignup = data => {
    console.log('Signup pressed', data);
  };

  return (
    <SafeAreaView className="grow justify-center p-4">
      <View className="grow justify-center p-4">
        <ControlledInput
          control={control}
          name="username"
          error={errors?.username?.message}
          label="Username"
          mode="outlined"
          className="mb-5 w-full text-white dark:bg-slate-700"
        />
        <ControlledInput
          control={control}
          name="phoneNumber"
          error={errors?.phoneNumber?.message}
          keyboardType="number-pad"
          label="Phone number"
          mode="outlined"
          className="mb-5 w-full text-white dark:bg-slate-700"
        />
        <ControlledInput
          name="password"
          control={control}
          error={errors?.password?.message}
          label="Password"
          mode="outlined"
          className="mb-5 w-full text-white dark:bg-slate-700"
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
        <Button mode="contained" onPress={handleSubmit(handleSignup)} className="my-4 p-1">
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Text>Signup</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Signup;
