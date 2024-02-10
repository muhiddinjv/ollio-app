import { Text, View, Image } from "react-native";
import { arrow, search_icon } from "../../contants/icons";
import { IBase } from "../../utils/interfaces";

const AppBarUniversal = ({ title }: IBase) => {
  return (
    <View className="pt-4 h-14 flex-row items-center bg-green-500 justify-between shadow-md w-full px-2">
      <Image source={arrow} className="h-9 w-9 text-white" />
      <Text className="text-lg font-semibold text-white">{title}</Text>
      <Image source={search_icon} className="h-9 w-9 text-white" />
    </View>
  );
};

export default AppBarUniversal;