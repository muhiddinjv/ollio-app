import { StyleSheet, Text, View, Image } from "react-native";
import { Height } from "../../utils/responsive";
import {
  arrow,
  burger_icon,
  more,
  search_icon,
  user_plus,
} from "../../contants/icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentAppBar = () => {
  return (
    <View
      style={{
        height: Height(56),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#4CAF50",
        justifyContent: "space-between",
        elevation: 5,
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={arrow}
          style={{
            height: 32,
            width: 32,
            tintColor: "#FFFFFF",
          }}
        />
      </View>

      <TouchableOpacity>
        <Text
          style={{
            color: "white",
          }}
        >
          SPLIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentAppBar;

const styles = StyleSheet.create({});
