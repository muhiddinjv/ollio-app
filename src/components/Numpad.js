import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Portal, Dialog, Button, IconButton } from 'react-native-paper';

const Numpad = ({ visible, onClose, onConfirm, quantity, setQuantity }) => {
  const handlePress = (value) => {
    if (value === 'OK') {
      if (quantity) {
        onConfirm(quantity);
        onClose();
      }
    } else if (value === 'DEL') {
      setQuantity((prev) => prev.slice(0, -1));
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
          <IconButton icon="close" size={30} onPress={onClose} />
          <Text style={styles.title}>Quantity</Text>
        </View>
        <Dialog.Content>
          <View style={styles.quantityDisplay}>
            <Text style={styles.quantityText}>{quantity}</Text>
            <IconButton icon="backspace-outline" size={30} onPress={() => handlePress('DEL')} />
          </View>

          <View style={styles.keyboard}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'OK'].map((key) => (
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
};

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quantityText: {
    fontSize: 48,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  keyboard: {
    gap: 20,
    // borderWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 42,
    color: '#333',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    lineHeight: 50,
  },
});

export default Numpad;
