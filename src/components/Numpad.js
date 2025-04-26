import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Dialog, IconButton, Portal } from 'react-native-paper';

function Numpad({ visible, onClose, onConfirm, quantity, setQuantity, selectedProduct }) {
  const handlePress = async value => {
    if (value === 'OK') {
      if (quantity) {
        onConfirm(quantity);
        onClose();
      }
    } else if (value === 'DEL') {
      setQuantity(prev => prev.slice(0, -1));
    } else {
      const newQuantity = quantity + value;
      if (parseFloat(newQuantity) <= 9999) {
        setQuantity(newQuantity);
      }
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onClose} style={styles.dialog}>
        <View style={styles.header}>
          <IconButton icon="close" size={30} onPress={onClose} style={{ marginLeft: 15 }} />
          <Text style={styles.title}>{selectedProduct?.title}</Text>
        </View>
        <Dialog.Content>
          <View style={styles.quantityDisplay}>
            <Text style={styles.quantityText}>{quantity}</Text>
            <IconButton icon="backspace-outline" size={30} onPress={() => handlePress('DEL')} />
          </View>

          <View style={styles.keyboard}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'OK'].map(key => (
              <Button
                key={key}
                mode="text"
                onPress={() => handlePress(key === 'OK' ? 'OK' : key)}
                style={styles.button}
                labelStyle={styles.buttonText}
              >
                {key}
              </Button>
            ))}
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  buttonText: {
    color: '#333',
    display: 'flex',
    fontSize: 42,
    justifyContent: 'center',
    lineHeight: 50,
    textAlign: 'center',
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-around',
  },
  quantityDisplay: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quantityText: {
    flex: 1,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '80%',
  },
});

export default Numpad;
