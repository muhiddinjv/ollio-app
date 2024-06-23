import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAccessToken } from '../Auth/astorage'
import axiosInstance from '../../api/instance'
import { GlobalContext } from '../../utils'

const Bills = () => {
    const { goodId, goodQty } = useContext(GlobalContext);

    const billsQuery = useQuery({
        queryKey: ["bills"], queryFn: async () => {
            const accessToken = await getAccessToken()
            const response = await axiosInstance.post("bills", 
            {
                buyer:"66366f44d06d804edde49493",
                goods: [
                    {
                        _id: "665eee37cd18d7e147b8baaf",
                        quantity: 3
                    },
                    {
                        _id: "665eee37cd18d7e147b8bab2",
                        quantity: 4
                    }
                ]
            },
            { headers: { Authorization: `Bearer ${accessToken}` }})
            
            return response.data
        }
    })

  return (
    <View className='p-4'>
      <Text>title + quantity</Text>
      <Text>total price per product</Text>
      <Text>total price of all products</Text>
    </View>
  )
}

export default Bills