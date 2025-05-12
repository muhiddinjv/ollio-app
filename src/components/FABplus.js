import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Modal, Portal, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import { useGlobalState } from '../hooks';
import { MainColors } from '../theme';
import { getItem } from '../api/astorage';

function FABplus({ visible }) {
  const { selectedGoods, setSelectedGoods } = useGlobalState();
  const { colorScheme } = useColorScheme();
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage] = useState(null);
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleManagePress = async () => {
    const storedGoods = await getItem('selectedGoods');
    const parsedGoods = storedGoods ? JSON.parse(storedGoods) : [];

    if (parsedGoods.length === 0) {
      alert('No products selected.');
      return;
    }

    setSelectedGoods(parsedGoods);
    navigation.navigate('GoodsAdd');
  };

  return (
    <>
      {errorMessage && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white' }}>{errorMessage}</Text>
        </View>
      )}
      <FAB.Group
        color={MainColors.text[colorScheme]}
        fabStyle={{ backgroundColor: colors.primary }}
        backdropColor="#00000090"
        open={open}
        icon={open ? 'close' : 'plus'}
        actions={[
          {
            icon: 'check-bold',
            label: 'Check all',
            labelTextColor: 'white',
            onPress: () => {
              alert('check all clicked');
            },
          },
          {
            icon: 'plus-box',
            label: 'Add a good',
            labelTextColor: 'white',
            onPress: () => setModalVisible(true),
          },
          {
            icon: 'clipboard-edit-outline',
            label: 'Prixod',
            labelTextColor: 'white',
            onPress: handleManagePress,
            disabled: selectedGoods.length === 0,
          },
        ]}
        onStateChange={({ open }) => setOpen(open)}
        visible={visible}
      />

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <Text style={styles.modalTitle}>Add a Good</Text>
          <Text>This is a simple bottom sheet modal.</Text>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    bottom: 20,
    marginHorizontal: 20,
    padding: 20,
    position: 'absolute',
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FABplus;
