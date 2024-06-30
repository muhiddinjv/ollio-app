import React from "react";
import { Controller } from "react-hook-form";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";

const ControlledInput = ({
  name,
  control,
  rules,
  className,
  error,
  ...props
}) => {
  console.log("error", error);
  return (
    <>
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
    </>
  );
};

export default ControlledInput;
