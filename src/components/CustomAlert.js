import React from 'react';
import { Modal, View, Text, Button, ScrollView } from 'react-native';

const CustomAlert = ({ visible, message, onClose }) => (
  <Modal transparent={true} visible={visible}>
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

export default CustomAlert;