import React from "react";
import { Checkbox, TouchableRipple } from "react-native-paper";

export const CheckBox = ({ checked, onChange }) => {
  return (
    <TouchableRipple onPress={onChange}>
      <Checkbox status={checked ? "checked" : "unchecked"} />
    </TouchableRipple>
  );
};