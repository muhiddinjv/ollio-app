import { Text, View, Image, TouchableOpacity } from "react-native";
import { arrow } from "../../constants/icons";
import { INavigation } from "../../utils/interfaces";

const EditItemAppBar = ({ navigation }: INavigation) => {
  return (
    <View className="bg-green-600 p-4 md:p-6 flex-row justify-between items-center shadow-md">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrow} className="h-8 w-8 md:h-10 md:w-10" style={{tintColor:'white'}} />
        </TouchableOpacity>
        <Text className="text-white text-xl md:text-2xl ml-6">Edit Item</Text>
      </View>

      <Text className="text-white text-xl">Save</Text>
    </View>
  );
};

export default EditItemAppBar;
