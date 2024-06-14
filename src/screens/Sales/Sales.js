import React, { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styled } from "nativewind";
import { ActivityIndicator, IconButton, Text } from "react-native-paper";
import ListItem from "../../components/ListItem";
import SaveCharge from "../../components/SaveCharge";
import Loader from "../../components/Loader";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

const StyledPicker = styled(Picker);

const SalesScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [filters, setFilters] = useState({
    search: '',
  });

  const {
    data,
    isRefreshing,
    onRefresh,
    onEndReached,
    isFetchingNextPage
  } = useInfiniteScroll({
    url: "goods",
    limit: 25,
    filters: filters,
    key: ['goods'],
  })

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
        {Array.isArray(data) 
        ? <FlatList
          data={data}
          onEndReached={onEndReached}
          removeClippedSubviews={true}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => (
            <ListItem
              onSalesScreen
              key={item._id}
              goodId={item._id}
              title={item.title}
              navigate={navigation.navigate}
              description={item.description}
              price={item.price} 
            />
          )}
          ListEmptyComponent={
            <View className='flex items-center'>
              <Text>No result</Text>
            </View>
          }
          ListFooterComponent={() =>
            {isFetchingNextPage && <ActivityIndicator />}
          }/> 
        : <Loader />}
        <SaveCharge navigation={navigation} />
    </View>
  );
};

export default SalesScreen;
