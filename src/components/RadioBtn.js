import { useState } from "react";
import { Text, TouchableRipple, RadioButton } from "react-native-paper";
import { View } from "react-native";

export const RadioBtn = ({title}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <TouchableRipple onPress={() => setChecked(!checked)}>
      <View className="flex-row items-center justify-between px-2 py-4">
        <Text>{title}</Text>
        <View pointerEvents="none">
          <RadioButton
            value="normal"
            status={checked ? "checked" : "unchecked"}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};
