import { StyleSheet, Text, View, Image } from "react-native";
import { Height } from "../../utils/responsive";
import {
  arrow,
  burger_icon,
  more,
  search_icon,
  user_plus,
} from "../../contants/icons";
import { IBase } from "../../utils/interfaces";

const AppBarHome = ({ title }: IBase) => {
  return (
    <View className="flex-row items-center justify-between bg-green-500 p-4 pt-6 shadow-md">
      <View className="flex-row items-center">
        <Image source={burger_icon} className="h-8 w-8 mr-4" />
        <Text className="text-white text-lg font-semibold">{title}</Text>
      </View>
      <View className="flex-row">
        <Image source={user_plus} className="h-7 w-7 m-1" />
        <Image source={more} className="h-7 w-7 ml-1" />
      </View>
    </View>
  );
};

export default AppBarHome;
