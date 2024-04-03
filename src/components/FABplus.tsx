import { FAB } from "react-native-paper";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { MainColors } from "../theme";

export const FABplus = ({visible}:{visible:boolean}) => {
  const { colorScheme } = useColorScheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <FAB.Group
      color={MainColors.plusText[colorScheme]}
      fabStyle={{backgroundColor: MainColors.plus[colorScheme]}}
      backdropColor="#00000090"
      open={open}
      icon={open ? "close" : "plus"}
      actions={[
        { icon: "check-bold", label: "Check all", labelTextColor: "white", onPress: () => {} },
        { icon: "plus-box", label: "Add item", labelTextColor: "white", onPress: () => {} },
        { icon: "arrow-right-bold", label: "Add to private", labelTextColor: "white", onPress: () => {alert('add to private clicked')} },
      ]}
      onStateChange={({ open }: { open: boolean }) => setOpen(open)}
      visible={visible}
    />
  );
};