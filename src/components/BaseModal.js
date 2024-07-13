import { View, Text, Modal } from "react-native";
import React from "react";

export default function BaseModal({ visible, onClose, onSave, children }) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      backgroundColor="rgba(0, 0, 0, 0.3)"
      onRequestClose={() => onClose()}
      onLayout={() => onSave()}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: visible ? "rgba(0, 0, 0, 0.3)" : "",
        }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="justify-center items-center bg-white dark:bg-gray-dark-900 border border-solid border-gray-300 dark:border-gray-800 rounded-lg p-6 shadow-md w-11/12">
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}
