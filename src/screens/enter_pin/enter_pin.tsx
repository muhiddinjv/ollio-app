import {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';  
import { TextInput } from 'react-native-gesture-handler';


const Confirmation = ({navigation}:any) => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enter Verification Code</Text>
      </View>
      <View style={styles.codeFieldContainer}>
        <TextInput />
      </View>
      <TouchableOpacity style={styles.resendButton} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.resendButtonText}>Resend Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  codeFieldContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 8,
    textAlign: 'center',
    color: '#333',
    backgroundColor: 'white',
  },
  resendButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  resendButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Confirmation;