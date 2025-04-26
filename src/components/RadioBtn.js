import { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text, TouchableRipple } from 'react-native-paper';

export function RadioBtn({ title }) {
  const [checked, setChecked] = useState < boolean > false;

  return (
    <TouchableRipple onPress={() => setChecked(!checked)}>
      <View className="flex-row items-center justify-between px-2 py-4">
        <Text>{title}</Text>
        <View pointerEvents="none">
          <RadioButton value="normal" status={checked ? 'checked' : 'unchecked'} />
        </View>
      </View>
    </TouchableRipple>
  );
}
