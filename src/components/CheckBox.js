import React from "react";
import { Checkbox, TouchableRipple } from "react-native-paper";

export const CheckBox = ({ checked, onChange }) => {
  // console.log('checked :>> ', checked);
  return (
    <TouchableRipple onPress={onChange}>
      <Checkbox status={checked ? "checked" : "unchecked"} />
    </TouchableRipple>
  );
};