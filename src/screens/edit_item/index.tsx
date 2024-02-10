import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import EditProductAppBar from "../../components/app_bar/edit_screen_appbar";
import { done_green } from "../../contants/icons";

const EditProductScreen = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [soldBy, setSoldBy] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [sku, setSku] = useState("");
  const [barcode, setBarcode] = useState("");
  const [isCompositeItem, setIsCompositeItem] = useState(false);
  const [isTrackStock, setIsTrackStock] = useState(false);
  const [isVariantAvailable, setIsVariantAvailable] = useState(false);
  const [selectedStores, setSelectedStores] = useState([]);
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
    <SafeAreaView className="flex-1">
      <ScrollView>
        <EditProductAppBar navigation={undefined} />
        <View className="p-4">
          <TextInput
            style={styles.inputContainer}
            placeholder="Product Name"
            value={productName}
            onChangeText={(text) => setProductName(text)}
          />

          {/* Picker for Category */}
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.inputContainer}
          >
            {/* Populate categories dynamically */}
            <Picker.Item label="Category 1" value="Category 1" />
            <Picker.Item label="Category 2" value="Category 2" />
            {/* ... */}
          </Picker>

          <TextInput
            style={styles.inputContainer}
            placeholder="Sold By"
            value={soldBy}
            onChangeText={(text) => setSoldBy(text)}
          />

          <TextInput
            style={styles.inputContainer}
            placeholder="Weight"
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.inputContainer}
            placeholder="Price"
            value={price}
            onChangeText={(text) => setPrice(text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.inputContainer}
            placeholder="Cost"
            value={cost}
            onChangeText={(text) => setCost(text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.inputContainer}
            placeholder="SKU"
            value={sku}
            onChangeText={(text) => setSku(text)}
          />

          <TextInput
            style={styles.inputContainer}
            placeholder="Barcode"
            value={barcode}
            onChangeText={(text) => setBarcode(text)}
          />

          <Text className="text-lg font-bold mt-4 mb-2">Inventory</Text>
          <View className="flex-row items-center mb-4">
            <Text>Composite Item</Text>
            <Switch
              value={isCompositeItem}
              onValueChange={() => setIsCompositeItem(!isCompositeItem)}
            />
          </View>

          <View className="flex-row items-center mb-4">
            <Text>Track Stock</Text>
            <Switch
              value={isTrackStock}
              onValueChange={() => setIsTrackStock(!isTrackStock)}
            />
          </View>

          <Text className="text-lg font-bold mt-4 mb-2">Variants</Text>
          <Text className="text-base mb-4">
            Use variant if an item has different sizes, colors or other options
          </Text>
          <TouchableOpacity
            className="buttonContainer mb-4"
            onPress={() => handleAddVariant()}
          >
            {/* <Icon source="add" size={24} color="white" /> */}
            <Text className="buttonText">Add</Text>
          </TouchableOpacity>

          <Text className="text-lg font-bold mt-4 mb-2">Select Stores:</Text>
          <View className="flex-row justify-between mb-4">
            <Image source={done_green} className="w-6 h-6" />

            <Text className="">ewueueun</Text>
            <Text className="text-base">5600</Text>
          </View>

          {/* Rendering selected stores */}
          {selectedStores.map((store, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleToggleStore(store)}
              className="mb-2"
            >
              <Text className="text-base">{store}</Text>
            </TouchableOpacity>
          ))}

          <Text className="text-lg font-bold mt-4 mb-2">Modifiers:</Text>
          {/* Rendering modifiers */}
          {modifiers.map((modifier, index) => (
            <View key={index} className="flex-row items-center mb-2">
              <Text>{`Modifier ${index + 1}`}</Text>
              <Switch
                value={modifier.isEnabled}
                onValueChange={() => handleToggleModifier(index)}
              />
            </View>
          ))}

          <Text className="text-lg font-bold mt-4 mb-2">
            Representation on POS
          </Text>
          <View className="flex-row items-center mb-4">
            <Text className="">Representation on POS</Text>
            <Switch
              value={representation.isSelected}
              onValueChange={handleToggleRepresentation}
            />
          </View>

          <TouchableOpacity
            className="flex-row items-center justify-center bg-green-500 rounded-lg py-3 px-6 shadow-md mb-16"
            onPress={() => console.log("Save button pressed")}
          >
            <Text className="text-white">Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    elevation: 3, // for Android shadow
    shadowColor: "black", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginVertical: 16,
  },
});
export default EditProductScreen;
