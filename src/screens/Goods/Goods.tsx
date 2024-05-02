import { ScrollView } from "react-native-gesture-handler";
import ListItem from "../../components/ListItem";
import { useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { ActivityIndicator, Text } from "react-native-paper";
import { MainColors } from "../../theme";
import { getToken } from "../Auth/astorage";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/instance";

export const Goods = ({ keyProp }: { keyProp: string }) => {
    const [goodIds, setGoodIds] = useState<string[]>([]);

    const { data: goods, isLoading, isError } = useQuery({ queryKey: ['goods', keyProp], queryFn: async () => {
      const accessToken = await getToken();
      const response = await axiosInstance.get('goods',{
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      return response.data;
    }});


    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator animating={true} color={MainColors.primary} size="large"/>
            </View>
        )
    }

    if (isError) {
      return (
          <View className="flex-1 justify-center items-center">
              <Text className="text-xl text-red-500">Error fetching data</Text>
          </View>
      )
    }

    return (
        <ScrollView>
          {goods?.map((good:any) => (
            <ListItem
                key={good._id}
                title={good.name}
                description="description was supposed to be here"
                // variant="checkbox"
                price={good.price}
                checked={goodIds.includes(good._id)}
                // onChange={() => handleToggleItem(item._id)}
            />
          ))}
        </ScrollView>
    )
};