import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

const Header = ({ name, openDrawer }: any) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => openDrawer()}>
      <Ionicons label="account" size={32} />
    </TouchableOpacity>
    <Text>{name}</Text>
    <Text style={{ width: 50 }}></Text>
  </View>
);

const Home = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header name="Home" openDrawer={navigation.openDrawer} />
    <Text style={{ padding: 20 }}>
      This is the Home screen view that displays the Home screen
    </Text>
  </View>
);

const Profile = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header name="Profile" openDrawer={navigation.openDrawer} />
    <Text style={{ padding: 20 }}>
      This is the Profile screen view that displays the Profile screen
    </Text>
  </View>
);

const Settings = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header name="Settings" openDrawer={navigation.openDrawer} />
    <Text style={{ padding: 20 }}>
      This is the Settings screen view that displays the Settings screen
    </Text>
  </View>
);

function Item({ item, navigate }: any) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigate(item.name)}
    >
      <Ionicons name={item.icon} size={32} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const Sidebar = ({ navigation }: any) => {
  const routes = [
    {
      name: "Home",
      icon: "account",
    },
    {
      name: "Profile",
      icon: "ios-contact",
    },
    {
      name: "Settings",
      icon: "ios-settings",
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={styles.profileImg}
      />
      <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
        Janna Doe
      </Text>
      <Text style={{ color: "gray", marginBottom: 10 }}>janna@doe.com</Text>
      <View style={styles.sidebarDivider}></View>
      <FlatList
        style={{ width: "100%", marginLeft: 30 }}
        data={routes}
        renderItem={({ item }) => (
          <Item item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
const Drawer = createDrawerNavigator();

const TestApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <Sidebar {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} options={{
          headerTitle: (props) => <Text>New header</Text>,
          headerRight: () => (
            <Button
              title="Settings"
              onPress={() => alert('This is a button!')}
            />
          ),
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default TestApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  sidebarDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
});
