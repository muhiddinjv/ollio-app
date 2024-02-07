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
import { Icon } from "react-native-paper";
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

  const handleToggleStore = (store:any) => {
    // Implement logic to toggle the store selection
  };

  const handleToggleModifier = (index:number) => {
    // Implement logic to toggle the modifier selection
  };

  const handleToggleRepresentation = () => {
    // Implement logic to toggle the representation selection
  };

  return (
    <SafeAreaView>
      <EditProductAppBar navigation={undefined} />
      <ScrollView style={{ padding: 16 }}>
        {/* Text Input for Product Name */}
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
        >
          {/* Populate categories dynamically */}
          <Picker.Item label="Category 1" value="Category 1" />
          <Picker.Item label="Category 2" value="Category 2" />
          {/* ... */}
        </Picker>

        {/* Text Input for Sold By */}
        <TextInput
          style={styles.inputContainer}
          placeholder="Sold By"
          value={soldBy}
          onChangeText={(text) => setSoldBy(text)}
        />

        {/* Text Input for Weight */}
        <TextInput
          style={styles.inputContainer}
          placeholder="Weight"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
        />

        {/* Text Input for Price */}
        <TextInput
          style={styles.inputContainer}
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />

        {/* Text Input for Cost */}
        <TextInput
          style={styles.inputContainer}
          placeholder="Cost"
          value={cost}
          onChangeText={(text) => setCost(text)}
          keyboardType="numeric"
        />

        {/* Text Input for SKU */}
        <TextInput
          style={styles.inputContainer}
          placeholder="SKU"
          value={sku}
          onChangeText={(text) => setSku(text)}
        />

        {/* Text Input for Barcode */}
        <TextInput
          style={styles.inputContainer}
          placeholder="Barcode"
          value={barcode}
          onChangeText={(text) => setBarcode(text)}
        />

        <Text style={styles.title}>Inventory</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Composite Item</Text>
          <Switch
            value={isCompositeItem}
            onValueChange={() => setIsCompositeItem(!isCompositeItem)}
          />
        </View>

        {/* Switch for Track Stock */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Track Stock</Text>
          <Switch
            value={isTrackStock}
            onValueChange={() => setIsTrackStock(!isTrackStock)}
          />
        </View>

        <Text style={styles.title}>Variants</Text>
        <Text style={styles.subtitle}>
          Use variant if an item has different sizes, colors or other options
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>alert('buttonContainer')}>
          <Icon source="add" size={24} color="white" />
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        {/* Store Selection */}
        <Text style={styles.title}>Select Stores:</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 16
          }}
        >
          <Image source={done_green} style={{ height: 24, width: 24 }} />

          <Text style={{}}>ewueueun</Text>
          <Text style={styles.price}>5600</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image source={done_green} style={{ height: 24, width: 24 }} />

          <Text style={{}}>ewueueun</Text>
          <Text style={styles.price}>5600</Text>
        </View>
        {selectedStores.map((store) => (
          <TouchableOpacity
            key={store}
            onPress={() => handleToggleStore(store)}
          >
            <Text>{store}</Text>
          </TouchableOpacity>
        ))}

        
        <Text style={styles.title}>Modifiers:</Text>
        {modifiers.map((modifier, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}
          >
            <Text>{`Modifier ${index + 1}`}</Text>
            <Switch
              value={modifier.isEnabled}
              onValueChange={() => handleToggleModifier(index)}
            />
          </View>
          
        ))}
          {modifiers.map((modifier, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center", marginVertical: 8, }}
          >
            <Text>{`Modifier ${index + 1}`}</Text>
            <Switch
              value={modifier.isEnabled}
              onValueChange={() => handleToggleModifier(index)}
            />
          </View>
          
        ))}

        {/* Representation on POS */}
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 8, }}>
          <Text >Representation on POS</Text>
          <Switch
            value={representation.isSelected}
            onValueChange={handleToggleRepresentation}
          />
        </View>

   
        <TouchableOpacity style={{
          marginBottom: 200,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4CAF50',
          borderRadius: 10,
          paddingVertical: 12,
          paddingHorizontal: 20,
          elevation: 3, // for Android shadow
          shadowColor: 'black', // for iOS shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }} onPress={() => console.log("Save button pressed")}>
          <Text>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3, // for Android shadow
    shadowColor: "black", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 18,
  },
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
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0.5,
  },
});
export default EditProductScreen;
