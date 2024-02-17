import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  arrow,
  barcode,
  calendar,
  location,
  mail,
  map,
  membership,
  star,
  telephone,
  user_1,
} from "../../../constants/icons";
import UserInfo from "../../../components/user/user_info";
import { ScrollView } from "react-native-gesture-handler";
import UserInfo2 from "../../../components/user/user_info_2";
import { INavigation } from "../../../utils/interfaces";

const userInfoData = [
  { title: "ogabekabdijabborov@gmail.com", icon: mail },
  { title: "+998334130333", icon: telephone },
  {
    title: "Toshkent shahri yunusobod tumani eski yunusobod ko'chasi 23",
    icon: location,
  },
  { title: "112233", icon: barcode },
  { title: "Vip customer", icon: membership },
];

const CustomerProfileScreen = ({ navigation }: INavigation) => {
  const [customerName, setCustomerName] = useState("");

  const handleSave = () => {
    console.log("Customer information saved:", customerName);
  };

  return (
    <View className="flex-1 p-4">
      {/* AppBar */}
      {/* <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrow} className="w-6 h-6 text-gray-500" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">Customer profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddToCartScreen")}
        >
          <Text className="text-green-600 font-semibold">ADD TO TICKET</Text>
        </TouchableOpacity>
      </View> */}

      <ScrollView>
        <View className="items-center">
          <Image source={user_1} className="w-20 h-20" />
          <Text className="text-xl font-semibold mt-2">Stive Jobs</Text>
        </View>

        <ScrollView>
          {userInfoData.map((userInfo, index) => (
            <UserInfo key={index} title={userInfo.title} icon={userInfo.icon} />
          ))}
          <UserInfo2 title={"0"} icon={star} subtitle={"Points"} />
          <UserInfo2 title={"1"} icon={map} subtitle={"Visits"} />
          <UserInfo2
            title={"08.10.2002"}
            icon={calendar}
            subtitle={"Last visit"}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditCustomerScreen")}
        >
          <Text className="text-lg text-green-700 font-semibold mt-4">
            EDIT PROFILE
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CustomerProfileScreen;
