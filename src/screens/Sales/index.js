import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styled } from "nativewind";
import { ActivityIndicator, IconButton, Text } from "react-native-paper";
import ListItem from "../../components/ListItem";
import Wrapper from "../../components/Wrapper";
import SaveChargeBtns from "../../components/SaveChargeBtns";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../Auth/astorage";
import axiosInstance from "../../api/instance";
import { MainColors } from "../../theme";
import Loader from "../../components/Loader";

const StyledPicker = styled(Picker);

const SalesScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const { data: goods, isLoading, isError } = useQuery({
    queryKey: ["goods"],
    queryFn: async () => {
      const accessToken = await getAccessToken()
      const response = await axiosInstance.get("goods", {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      return response.data
    }
  })

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator
          animating={true}
          color={MainColors.primary}
          size="large"
        />
      </View>
    )
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl text-red-500">Error: sign in again</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 w-full dark:bg-slate-800">      
      <View className="flex-row items-center pl-4 h-14 border border-gray-400">
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          className="w-4/5 text-base dark:text-white"
        >
          <Picker.Item label="All items" value="option0" />
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </StyledPicker>
        <View className="w-1/5 h-full flex items-center justify-center border border-gray-400">
          <IconButton
            size={30}
            icon="magnify"
            onPress={() => alert("magnify clicked")}
          />
        </View>
      </View>
      <Wrapper>
        {Array.isArray(goods) ? goods.map((good, index) => (
          <ListItem
            key={index}
            title={good.title}
            price={5000}
            // description={value.description}
          />
        )) : <Loader />}
      </Wrapper>
        <SaveChargeBtns navigation={navigation} />
    </View>
  );
};

export default SalesScreen;
