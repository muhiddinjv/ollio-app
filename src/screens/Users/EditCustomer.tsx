import { View, StyleSheet } from "react-native";
import {
  arrow,
  barcode,
  location,
  mail,
  membership,
  telephone,
  user,
} from "../../utils/icons";
import UserItem from "../../components/user/user_item";
import { ScrollView } from "react-native-gesture-handler";
import { INavigation } from "../../utils/interfaces";

const userData = [
  { title: "Name", icon: user },
  { title: "Email", icon: mail },
  { title: "Phone", icon: telephone },
  { title: "Address", icon: location },
  { title: "City", icon: user },
  { title: "State", icon: user },
  { title: "Zipcode", icon: user },
  { title: "Country", icon: user },
  { title: "Costumer code", icon: barcode },
  { title: "Vip customer", icon: membership },
];

const EditCustomerScreen = ({ navigation }: INavigation) => {
  return (
    <View className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {userData.map(({ title, icon }, index) => (
          <UserItem key={index} title={title} icon={icon} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EditCustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  appBarTitle: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
    marginLeft: 48,
  },

  saveButton: {
    color: "green",
    fontSize: 16,
  },
  userTab: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPlusIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginRight: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "gray",
    flex: 1,
  },
});
