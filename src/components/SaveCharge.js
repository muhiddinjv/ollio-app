import { View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const SaveCharge = ({ navigation }) => {
  return (
    <View className="p-2 bg-white dark:bg-slate-800 flex-row">
      <Button textColor="white" className="p-2 bg-violet-800 font-semibold rounded flex-1" onPress={() => {}}>SAVE</Button>
      <Button textColor="white" className="ml-2 p-2 bg-violet-800 font-semibold rounded flex-1" onPress={() => {}}>CHARGE</Button>
    </View>
  );
};

export default SaveCharge;
