import { ScrollView, View } from "react-native";
import ListItem from "../../components/ListItem";
import { useState } from "react";
import { ActivityIndicator, Text } from "react-native-paper";
import { MainColors } from "../../theme";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../api/instance";

export const Catalog = () => {
    const queryClient = useQueryClient();
    const [itemIds, setItemIds] = useState([]);
    queryClient.setQueryData(['catalogIds'], itemIds);

    const { data: catalogItems, isLoading, isError } = useQuery({ queryKey: ['catalogItems'], queryFn: async () => {
        const response = await axiosInstance.get('catalog');
        return response.data;
    }});

    const handleToggleItem = (id) => {
        setItemIds(prevIds => {
            if (prevIds.includes(id)) {
                // Remove id from the array
                return prevIds.filter(itemID => itemID !== id);
            } else {
                // Add id to the array
                return [...prevIds, id];
            }
        });
    };

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

    const catalogIds = queryClient.getQueryData(['catalogIds']) || [];

    return (
        <ScrollView>
          {catalogItems.map((item) => (
            <ListItem
                key={item._id}
                title={item.name}
                description="description was supposed to be here"
                variant="checkbox"
                checked={catalogIds?.includes(item._id)}
                onChange={() => handleToggleItem(item._id)}
            />
          ))}
        </ScrollView>
    );
};