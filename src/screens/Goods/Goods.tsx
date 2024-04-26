import { ScrollView } from "react-native-gesture-handler";
import ListItem from "../../components/ListItem";
import { useEffect, useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";
import { MainColors } from "../../theme";
import { getToken } from "../Auth/astorage";
import { INavigation } from "../../utils/interfaces";


export const Goods = ({navigation}: INavigation) => {
    const [goods, setGoods] = useState<any>();
    const [goodIds, setGoodIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getGoods = async () => {
      try {
        const accessToken = await getToken();
          const response = await axios.get('http://10.0.2.2:4000/goods', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          setGoods(response.data);
        } catch (error) {
          setIsLoading(true);
          console.error(error,'failed to fetch goods');
        } 
        
      };
    
    useEffect(() => {
        getGoods();
    }, []);


    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator animating={true} color={MainColors.primary} size="large"/>
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