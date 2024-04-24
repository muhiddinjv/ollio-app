import React from "react";
import { Checkbox, TouchableRipple } from "react-native-paper";

interface CenteredCheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

export const CenteredCheckbox = ({ checked, onChange }: CenteredCheckboxProps) => {
  return (
    <TouchableRipple onPress={onChange}>
      <Checkbox status={checked ? "checked" : "unchecked"} />
    </TouchableRipple>
  );
};