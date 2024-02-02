import  { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useShops } from '../../api/data.service';
import { getShops } from '../../api/data.fn';
const SelectScreen = ({navigation}: any) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const shops = useShops() || []
  console.log(shops, 'shops')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Do'konni tanlang</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Do'konni tanlang" value={null} />
{/*         
        {shops?.map((item: any) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))} */}
      </Picker>
      {selectedValue && (
        <Text style={styles.selectedValue}>Selected Option: {selectedValue}</Text>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.8}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Continue</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  picker: {
    height: 40,
    width: 350,
    backgroundColor: '#ecf0f1',
    borderColor: '#3498db',
    borderWidth: 1,
  },
  selectedValue: {
    marginTop: 21,
    fontSize: 18,
    color: '#27ae60',
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    width: 350,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SelectScreen;