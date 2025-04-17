import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

const ControlledInputCustom = ({
  name,
  control,
  rules,
  className,
  error,
  inputLabelClass,
  inputLabel,
  editable,
  ...props
}) => {
  return (
    <View className="flex-col w-full">
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
            editable={editable}
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
