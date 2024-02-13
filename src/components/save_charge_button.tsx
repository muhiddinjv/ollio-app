import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { INavigation } from "../utils/interfaces";

const SaveChargeButton = ({ navigation }:INavigation) => {
    return (
        <View className="flex-row items-center justify-around h-20 w-full bg-green-600 rounded-lg">
            <TouchableOpacity onPress={() => navigation.navigate("SaveTicketScreen")}>
                <Text className="text-white text-lg text-center">OPEN TICKETS</Text>
            </TouchableOpacity>
            <View className="w-0.5 h-full bg-slate-900" />
            <TouchableOpacity onPress={() => navigation.navigate("OpenTicketScreen")} className="flex items-center justify-center">
                <Text className="text-white text-lg text-center mr-12">CHARGE</Text>
                <Text className="text-white text-lg text-center mr-12">UZS 0</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SaveChargeButton;
