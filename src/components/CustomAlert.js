import React from 'react';
import { Button, Modal, ScrollView, Text, View } from 'react-native';

function CustomAlert({ visible, message, onClose }) {
  return (
    <Modal transparent visible={visible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '80%', padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
          <ScrollView>
            <Text>{message}</Text>
          </ScrollView>
          <Button title="OK" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

export default CustomAlert;
