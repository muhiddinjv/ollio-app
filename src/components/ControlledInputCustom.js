import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
// import { TextInput } from "react-native-paper";

const ControlledInputCustom = ({
  name,
  control,
  rules,
  className,
  error,
  inputLabelClass,
  inputLabel,
  ...props
}) => {
  console.log("error", error);
  return (
    <View className="flex-col">
      {inputLabel ? (
        <Text className={`text-gray-500 ${inputLabelClass}`}>{inputLabel}</Text>
      ) : null}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
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
      <Text className="text-red-500">{error ? error : null}</Text>
    </View>
  );
};

export default ControlledInputCustom;
