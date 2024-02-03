import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, Button,  Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { arrow, cancel } from '../../contants/icons';

const SaveItemScreen = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [productItems, setProductItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more product items as needed
  ]);

  const handleSave = () => {
    // Implement your save logic here
    console.log('Item Saved:', selectedItem);
  };

  const handleCharge = () => {
    // Implement your charge logic here
    console.log('Charge button pressed');
  };

  return (
    <View style={styles.container}>
        <View style={styles.appBar}>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>

          <Image
            source={arrow}
            style={{
              height: 32,
              width: 32,
              tintColor: "#FFF",
            }}
          />
          
       
        </View>
       
        <Image
          source={cancel}
          style={{
            height: 24,
            width: 24,
            tintColor: "#FFF",
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            Save
          </Button>

          <Button mode="contained" onPress={handleCharge} style={styles.button}>
            Charge
          </Button>
        </View>

        <Picker
          label="Choose Item"
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select an Item" value="" />
          <Picker.Item label="Item 1" value="item1" />
          <Picker.Item label="Item 2" value="item2" />
          {/* Add more items to the Picker as needed */}
        </Picker>

        <View style={styles.productItemsContainer}>
          {productItems.map((item) => (
            <View style={styles.productItem} key={item.id}>
              <View style={styles.circleIndicator} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{`$${item.price.toFixed(2)}`}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
  picker: {
    marginTop: 10,
  },
  productItemsContainer: {
    marginTop: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  circleIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  appBar: {
    backgroundColor: "#4CB050",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    flexDirection: "row",
  },
});

export default SaveItemScreen;
