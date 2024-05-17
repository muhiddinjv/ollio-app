import React, { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Switch, Text, IconButton, Divider, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import { CardElevated } from "../../components/CardElevated";
import { INavigation } from "../../utils/interfaces";
import { TxtInput } from "../../components/TxtInput";
import TableCard from "../../components/TableCard";

type TableTypes = Array<{
  key: number;
  shop: string;
  price: number;
}>;

const tableData: TableTypes = [
  {
    key: 1,
    shop: "Mega Planet",
    price: 5600,
  },
  {
    key: 2,
    shop: "Korzinka",
    price: 7200,
  },
  {
    key: 3,
    shop: "Havas",
    price: 3400,
  },
];

const EditGood = ({ navigation }: INavigation) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [sku, setSku] = useState("");
  const [modifiera, setModifierA] = useState(false);
  const [modifierb, setModifierB] = useState(false);
  const [groupItem, setGroupItem] = useState(false);
  const [trackStock, setTrackStock] = useState(false);
  const [modifiers, setModifiers] = useState([
    { title: "", subtitle: "", isEnabled: false },
    { title: "", subtitle: "", isEnabled: false },
  ]);
  const [representation, setRepresentation] = useState({
    color: "",
    shape: "",
    isSelected: false,
  });

  const handleAddVariant = () => {
    // Implement logic to add a new variant
  };

  const handleToggleStore = (store: any) => {
    // Implement logic to toggle the store selection
  };

  const handleToggleModifier = (index: number) => {
    // Implement logic to toggle the modifier selection
  };

  const handleToggleRepresentation = () => {
    // Implement logic to toggle the representation selection
  };

  return (
    <SafeAreaView className="flex-1 dark:bg-gray-900">
      {/* <AppBar title="Edit Items" backButton={{ onPress: ()=> alert('back button was clicked!') }} saveButton={{ onPress: ()=> alert('save button was clicked!'), label: 'save' }}/> */}
      <ScrollView>
        <CardElevated>
          <TxtInput value={name} onChangeText={setName} label="Name" />
          <View className="flex flex-row">
            <TxtInput
              value={cost}
              onChangeText={setCost}
              label="Cost"
              marginRight={2}
              keyboardType="phone-pad"
            />
            <TxtInput
              value={price}
              onChangeText={setPrice}
              label="Price"
              marginLeft={2}
              keyboardType="phone-pad"
            />
          </View>
          <TxtInput value={sku} onChangeText={setSku} label="SKU" />
          <View className="border-b border-slate-400">
            <Picker
              style={{ marginLeft: -15 }}
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Category 1" value="Category 1" />
              <Picker.Item label="Category 2" value="Category 2" />
            </Picker>
          </View>
        </CardElevated>

        <CardElevated title="Inventory">
          <View className=" flex-row">
            <View className="flex-row items-center mr-10">
              <Text>Group Item</Text>
              <Switch
                value={groupItem}
                onValueChange={() => setGroupItem(!groupItem)}
              />
            </View>
            <View className="flex-row items-center">
              <Text>Track Stock</Text>
              <Switch
                value={trackStock}
                onValueChange={() => setTrackStock(!trackStock)}
              />
            </View>
          </View>
        </CardElevated>

        <CardElevated title="Variants">
          <Text>
            Use variant if an item has different sizes, colors or other options
          </Text>
          <View className="flex-row items-center text-purple-800">
            <IconButton
              icon="plus-circle-outline"
              size={30}
              onPress={() => handleAddVariant()}
            />
            <Text className="buttonText">Add Variants</Text>
          </View>
        </CardElevated>

        <TableCard title="Stores" data={tableData} />

        <CardElevated title="Modifiers">
          <View className="flex-row items-center justify-between my-2">
            <View>
              <Text className="text-lg text-black font-semibold">Addon</Text>
              <Text>Available in all stores</Text>
            </View>

            <Switch
              value={modifiera}
              onValueChange={() => setModifierA(!modifiera)}
            />
          </View>
          <Divider />
          <View className="flex-row items-center justify-between my-2">
            <View>
              <Text className="text-lg text-black font-semibold">Fillers</Text>
              <Text>Available in all stores</Text>
            </View>

            <Switch
              value={modifierb}
              onValueChange={() => setModifierB(!modifierb)}
            />
          </View>
        </CardElevated>

        <CardElevated>
          <Button
            icon="delete"
            textColor="white"
            onPress={() => console.log("Save button pressed")}
            className="bg-red-400 py-3 rounded-md"
            labelStyle={{ fontSize: 20 }}
          >
            DELETE
          </Button>
        </CardElevated>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditGood;
