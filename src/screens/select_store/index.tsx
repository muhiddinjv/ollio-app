import  { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useShops } from '../../api/data.service';
import { INavigation } from '../../utils/interfaces';
import { styled } from 'nativewind';

const StyledPicker = styled(Picker)

const SelectScreen = ({navigation}: INavigation) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const shops = useShops() || []
  console.log(shops, 'shops')
  return (
    <View className="flex flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-5 text-gray-800">Do'konni tanlang</Text>
      <StyledPicker
        className="h-10 w-80 bg-gray-200 border border-blue-500"
        selectedValue={selectedValue}
        onValueChange={(itemValue:any) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Do'konni tanlang" value={null} />
                
        {/* {shops?.map((item: any) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))} */}
      </StyledPicker>
      {selectedValue && (
        <Text className="mt-3 text-lg text-green-600">Selected Option: {selectedValue}</Text>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Splash')} activeOpacity={0.8}>
        <View className="bg-blue-500 py-4 px-5 mx-5 my-3 w-80 rounded-md">
          <Text className="text-white text-lg font-bold text-center">Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectScreen;