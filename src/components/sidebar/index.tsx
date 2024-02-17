import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { screens } from "../../data";
import { Icon, MD3Colors } from "react-native-paper";

function SidebarItem({ item, navigate }: any) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigate(item.name)}
    >
      <Icon source={item.icon} color={MD3Colors.primary40} size={30} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const Sidebar = ({ navigation }: any) => {
  const [active, setActive] = useState(0);

  return (
    <View>
      <View className="flex-row items-center justify-between p-4 py-10 bg-violet-600">
        <View>
          <Text className="mt-2 text-2xl text-white font-bold">Owner</Text>
          <Text className="mt-2 text-lg text-white">POS 1</Text>
          <Text className="mt-2 text-lg text-white">Koriznka</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.closeDrawer()}
          className="bg-white h-12 w-12 rounded-full items-center justify-center"
        >
          <Icon source="lock" size={35} color={MD3Colors.primary40} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={screens}
        renderItem={({ item }: any) => (
          <SidebarItem item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  listItem: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
});
