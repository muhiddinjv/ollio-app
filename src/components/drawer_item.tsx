import { Text, View, Image } from "react-native";
import { IBase } from "../utils/interfaces";

const DrawerItem = ({ title, icon }: IBase) => {
  return (
    <View className="flex-row items-center my-2 mx-6">
      <Image source={icon} className="h-6 w-6 mr-4" />
      <Text className="text-xl mx-4 font-semibold text-slate-900">{title}</Text>
    </View>
  );
};

export default DrawerItem;
