import { Text, View, Image } from "react-native";
import { arrow } from "../../constants/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { INavigation } from "../../utils/interfaces";

const PaymentAppBar = ({ navigation, route }: INavigation) => {
  return (
    <View className="h-14 flex-row items-center bg-green-500 justify-between shadow-md px-4">
      <View className="flex-row">
        <Image
          source={arrow}
          tintColor='white'
          className="h-7 w-7"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Text className="text-white text-lg">SPLIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentAppBar;
