import { View, Text } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getAccessToken } from '../Auth/astorage';
import axiosInstance from '../../api/instance';
import { GlobalContext } from '../../utils';

const GoodQty = () => {
    const { goodId } = useContext(GlobalContext);
    const [title, setTitle] = useState("");

    const goodsQuery = useQuery({
        queryKey: ["good",goodId], queryFn: async () => {
            const accessToken = await getAccessToken()
            const response = await axiosInstance.get(`goods/${goodId}`, {
            headers: { Authorization: `Bearer ${accessToken}` }
            })
            return response.data
        }
    })

    useEffect(() => {
        if (goodsQuery?.data) {
            setTitle(goodsQuery?.data.title);
        }
    }, [goodsQuery?.data, goodId]);
      
    return (
        <View>
            <Text>Title: {title}</Text>
        </View>
    )
}

export default GoodQty