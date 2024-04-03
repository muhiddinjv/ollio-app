import {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';  
import { TextInput } from 'react-native-gesture-handler';
import { INavigation } from '../../utils/interfaces';

const PinCode = ({ navigation }:INavigation) => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
      <View className="mb-5">
        <Text className="text-lg font-bold text-gray-700">Enter Pin Code</Text>
      </View>
      <View className="mt-5 px-5">
        <TextInput className="border border-gray-300 p-2 rounded-md w-48" />
      </View>
      <TouchableOpacity className="mt-5 px-5 py-3 bg-blue-500 rounded-md w-48" onPress={() => navigation.navigate("Home")}>
        <Text className="text-white text-center text-lg bg-primary">Resend Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PinCode;
