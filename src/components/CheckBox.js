import React from 'react';
import { Checkbox, TouchableRipple } from 'react-native-paper';

export function CheckBox({ checked, onChange }) {
  return (
    <TouchableRipple onPress={onChange}>
      <Checkbox status={checked ? 'checked' : 'unchecked'} />
    </TouchableRipple>
  );
}
