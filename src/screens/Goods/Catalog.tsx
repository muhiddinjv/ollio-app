import { ScrollView, Alert, View } from "react-native";
import ListItem from "../../components/ListItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { MainColors } from "../../theme";

interface CatalogItem {
  _id: string;
  name: string;
}

export const Catalog = () => {
    const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([]);
    const [itemIds, setItemIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCatalogItems = async () => {
        try {
            setIsLoading(false);
            const response = await axios.get('http://10.0.2.2:4000/catalog');
            setCatalogItems(response.data);
        }  catch (error) {
            setIsLoading(true);
            console.error(error,'failed to fetch catalog');
        } 
    };
    
    useEffect(() => {
        getCatalogItems();
    }, []);

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
    console.log(itemIds);

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator animating={true} color={MainColors.primary} size="large"/>
            </View>
        )
    }


    return (
        <ScrollView>
          {catalogItems.map((item) => (
            <ListItem
                key={item._id}
                title={item.name}
                description="description was supposed to be here"
                variant="checkbox"
                checked={itemIds.includes(item._id)}
                onChange={() => handleToggleItem(item._id)}
            />
          ))}
        </ScrollView>
    );
};