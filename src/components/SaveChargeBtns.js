import { View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const SaveChargeBtns = ({ navigation }) => {
  return (
    <View className="p-2 bg-white flex-row">
      <Button textColor="white" className="p-2 bg-purple-800 font-semibold rounded-none flex-1" onPress={() => {}}>SAVE</Button>
      <Button textColor="white" className="ml-2 p-2 bg-purple-800 font-semibold rounded-none flex-1" onPress={() => {}}>CHARGE</Button>
    </View>
  );
};

export default SaveChargeBtns;
