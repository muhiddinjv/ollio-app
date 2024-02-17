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
import {
  add,
  delete_2,
  green_circle,
  unselect_icon,
} from "../../constants/icons";
import { INavigation } from "../../utils/interfaces";
import AppBar from "../../components/appbar";

const renderInput = (
  placeholder: string,
  value: string,
  onChangeText: any,
  keyboardType: any
) => {
  return (
    <TextInput
      style={styles.inputContainer}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

const EditItemScreen = ({ navigation }: INavigation) => {
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
    <SafeAreaView className=" flex-1">
        {/* <AppBar title="Edit Items" backButton={{ onPress: ()=> alert('back button was clicked!') }} saveButton={{ onPress: ()=> alert('save button was clicked!'), label: 'save' }}/> */}
      <ScrollView>

        <View className="p-4">
          {renderInput("Product Name", productName, setProductName, "text")}

          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.inputContainer}
          >
            <Picker.Item label="Category 1" value="Category 1" />
            <Picker.Item label="Category 2" value="Category 2" />
          </Picker>

          <View>
            {renderInput("Sold By", soldBy, setSoldBy, "numeric")}
            {renderInput("Weight", weight, setWeight, "numeric")}
            {renderInput("Price", price, setPrice, "numeric")}
            {renderInput("Cost", cost, setCost, "numeric")}
            {renderInput("SKU", sku, setSku, "numeric")}
            {renderInput("Barcode", barcode, setBarcode, "numeric")}
          </View>

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
          <TouchableOpacity className="mb-4" onPress={() => handleAddVariant()}>
            <Image source={add} className="h-6 w-6 text-green-600" />
            <Text className="buttonText">Add Variants</Text>
          </TouchableOpacity>

          <Text className="text-lg text-black font-semibold my-4">Stores</Text>
          <View className="flex-row items-center justify-start my-4">
            <TouchableOpacity>
              <Image source={unselect_icon} className="h-6 w-6" />
            </TouchableOpacity>

            <Text className="mx-2">
              The item is available for sale in all stores
            </Text>
          </View>
          <View className="flex-row items-center justify-between my-4">
            <View className="flex-row items-center">
              <Text className="text-base text-gray-600 font-semibold">
                Available
              </Text>
              <Text className="text-base text-gray-600 font-semibold mx-4">
                Store
              </Text>
            </View>

            <Text className="text-base text-gray-600 font-semibold mx-4">
              Price
            </Text>
          </View>
          <View className="flex-row items-center justify-between my-4">
            <View className="flex-row items-center">
              <Image source={unselect_icon} className="h-6 w-6 mx-4" />
              <Text className="text-base text-black font-semibold">
                My Shop
              </Text>
            </View>

            <Text className="text-base text-black font-semibold mx-4">
              UZS 5600
            </Text>
          </View>
          <View className="flex-row items-center justify-between my-4">
            <View className="flex-row items-center">
              <Image source={unselect_icon} className="h-6 w-6 mx-4" />
              <Text className="text-base text-black font-semibold">
                Mega planet
              </Text>
            </View>

            <Text className="text-base text-black font-semibold mx-4">
              UZS 5600
            </Text>
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

          <Text className="text-lg text-black font-semibold my-4">
            Modifiers:
          </Text>
          <View className="flex-row items-center justify-between my-2">
            <View>
              <Text className="text-lg text-black font-semibold">
                Modifier Name
              </Text>
              <Text>Modifier Text</Text>
            </View>

            <Switch
              value={isCompositeItem}
              onValueChange={() => setIsCompositeItem(!isCompositeItem)}
            />
          </View>

          <View className="flex-row items-center justify-between my-2">
            <View>
              <Text className="text-lg text-black font-semibold">Brand</Text>
              <Text>brand</Text>
            </View>

            <Switch
              value={isCompositeItem}
              onValueChange={() => setIsCompositeItem(!isCompositeItem)}
            />
          </View>

          <Text className="text-lg font-bold mt-4 mb-2">
            Representation on POS
          </Text>
          <View className="flex-row items-center">
            <View className="h-6 w-6 rounded-full border-2 border-green-600 flex items-center justify-center">
              <Image source={green_circle} className="h-4 w-4" />
            </View>
            <Text className="text-black text-base mx-2">Color and shape</Text>
          </View>

          <View className="flex-row items-center my-4">
            <View className="h-6 w-6 rounded-full border-2 border-black flex items-center justify-center">
              <Image source={green_circle} className="h-4 w-4" />
            </View>
            <Text className="text-black text-base mx-2">Image</Text>
          </View>
          <TouchableOpacity
            className="flex-row items-center justify-center bg-red-400 rounded-lg py-3 px-6 shadow-md mb-16"
            onPress={() => console.log("Save button pressed")}
          >
            <Image source={delete_2} className="h-6 w-6 mr-4" style={{tintColor: "#FFFFFF"}} />
            <Text className="text-white text-xl">DELETE</Text>
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
export default EditItemScreen;
