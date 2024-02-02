import { StyleSheet, Text, View, Image } from "react-native";
import { Height } from "../../utils/responsive";
import {
  arrow,
  burger_icon,
  more,
  search_icon,
  user_plus,
} from "../../contants";

const AppBarHome = ({ title }) => {
  return (
    <View
      style={{
        height: Height(56),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4CAF50",
        justifyContent: 'space-between',
        elevation: 5,
        paddingHorizontal: 16,
      }}
    >
      <View style={{flexDirection: 'row'}}>
        
        <Image
          source={burger_icon}
          style={{
            height: 32,
            width: 32,
            tintColor: "#FFFFFF",
          }}
        />
        <Text
          style={{
            fontSize: Height(24),
            fontWeight: "600",
            color: "#FFF",
            marginHorizontal: 32,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={user_plus}
          style={{ height: 28, width: 28, tintColor: "#fff", marginHorizontal: 8, }}
        />
        <Image
          source={more}
          style={{ height: 28, width: 28, tintColor: "#fff", marginLeft: 8, }}
        />
      </View>
    </View>
  );
};

export default AppBarHome;

const styles = StyleSheet.create({});
