import { FAB } from "react-native-paper";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { MainColors } from "../theme";
import axios from "axios";
import { getToken } from "../screens/Auth/astorage";

export const FABplus = ({ visible, itemIds, navigate }: { visible: boolean; itemIds: string[]; navigate: any }) => {
  const { colorScheme } = useColorScheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleAddToGoods = async () => {
    const accessToken = await getToken();
    try {
      await axios.post('http://10.0.2.2:4000/goods', { catalogIds: itemIds }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      navigate('Goods');
    } catch (error) {
      console.error('Failed to add to goods:', error);
    }
  };

  return (
    <FAB.Group
      color={MainColors.plusText[colorScheme]}
      fabStyle={{ backgroundColor: MainColors.plus[colorScheme] }}
      backdropColor="#00000090"
      open={open}
      icon={open ? "close" : "plus"}
      actions={[
        { icon: "check-bold", label: "Check all", labelTextColor: "white", onPress: () => {} },
        { icon: "plus-box", label: "Add item", labelTextColor: "white", onPress: () => {} },
        { icon: "arrow-right-bold", label: "Add to goods", labelTextColor: "white", onPress: handleAddToGoods },
      ]}
      onStateChange={({ open }: { open: boolean }) => setOpen(open)}
      visible={visible}
    />
  );
};