import { Text, View, Image } from "react-native";
import { more_1 } from "../../constants/icons";
import { IBase } from "../../utils/interfaces";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppBarItem = ({ title, toggleDrawer }: any) => {
  return (
    <View className="h-14 flex-row items-center bg-green-600 justify-start shadow-md p-4 md:p-6">
      <TouchableOpacity onPress={toggleDrawer}>
        <Image source={more_1} className="h-8 w-8 md:h-10 md:w-10" tintColor='white' />
      </TouchableOpacity>
      <Text className="text-white text-xl md:text-2xl font-semibold mx-8">
        {title}
      </Text>
    </View>
  );
};

export default AppBarItem;
