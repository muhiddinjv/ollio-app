import { useState } from "react";
import { Checkbox, TouchableRipple } from "react-native-paper";

export const CenteredCheckbox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <TouchableRipple
      className="justify-center"
      onPress={() => setChecked(!checked)}
    >
      <Checkbox status={checked ? "checked" : "unchecked"} />
    </TouchableRipple>
  );
};
