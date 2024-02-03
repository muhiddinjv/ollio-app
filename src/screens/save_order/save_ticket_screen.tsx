// SaveTicketScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { remove } from '../../contants/icons';

const SaveTicketScreen = () => {
  const navigation = useNavigation();
  const [productName, setProductName] = useState('');
  const [comment, setComment] = useState('');

  const handleSave = () => {
    // Implement your save logic here
    console.log('Product Name:', productName);
    console.log('Comment:', comment);
    // You can send the data to an API, store it in state, etc.
  };

  return (
    <View style={styles.container}>
     <View style={styles.appBar}>
  
   

        <Text style={styles.saveTicketText}>Save Ticket</Text>


      <TouchableOpacity onPress={{}} style={styles.greenSaveButton}>
        <Text style={styles.greenButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
      
      <TextInput
        label="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
      />

      <TextInput
        label="Comment"
        value={comment}
        onChangeText={(text) => setComment(text)}
        style={styles.input}
        multiline
        numberOfLines={4} // Adjust the number of lines as needed
      />

     
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  saveTicketText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  greenSaveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  greenButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff', // Background color
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#ffffff', // Input background color
  },
  button: {
    marginTop: 16,
  },
});

export default SaveTicketScreen;
