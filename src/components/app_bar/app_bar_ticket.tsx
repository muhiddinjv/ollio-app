import { Text, View, Image } from "react-native";
import { burger_icon, more, user_plus } from "../../constants/icons";
import { IBase } from "../../utils/interfaces";

const AppBarHome = ({ title }: IBase) => {
  return (
    <View className="flex-row items-center justify-between bg-green-500 p-4 pt-6 shadow-md">
      <View className="flex-row items-center">
        <Image source={burger_icon} className="h-8 w-8 mr-4" tintColor='white'/>
        <Text className="text-white text-lg font-semibold">{title}</Text>
      </View>
      <View className="flex-row">
        <Image source={user_plus} className="h-7 w-7 m-1" tintColor='white'/>
        <Image source={more} className="h-7 w-7 ml-1" tintColor='white'/>
      </View>
    </View>
  );
};

export default AppBarHome;
