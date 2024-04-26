import { ScrollView, Alert, View } from "react-native";
import ListItem from "../../components/ListItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native-paper";
import { MainColors } from "../../theme";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface CatalogItem {
  _id: string;
  name: string;
}

export const Catalog = () => {
    const queryClient = useQueryClient();
    const [itemIds, setItemIds] = useState<string[]>([]);
    queryClient.setQueryData(['catalogIds'], itemIds);

    const { data: catalogItems, isLoading, isError } = useQuery({ queryKey: ['catalogItems'], queryFn: async () => {
        const response = await axios.get('http://10.0.2.2:4000/catalogs');
        return response.data;
    }});

    const handleToggleItem = (id: string) => {
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

    const catalogIds = queryClient.getQueryData<string[]>(['catalogIds']) || [];

    return (
        <ScrollView>
          {catalogItems.map((item:CatalogItem) => (
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