import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

function ControlledInput({ name, control, rules, className, error, inputLabel, ...props }) {
  return (
    <View className="w-full flex-col">
      {inputLabel ? <Text className="text-gray-500">{inputLabel}</Text> : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <TextInput
            className={className}
            mode="outlined"
            label={props.label}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={error}
            {...props}
          />
        )}
      />
      <Text className="text-red-500">{error || null}</Text>
    </View>
  );
}

export default ControlledInput;
