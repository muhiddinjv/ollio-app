import { ScrollView } from "react-native-gesture-handler"
import ListItem from "../../components/ListItem"
import { useState } from "react"
import { View } from "react-native"
import { ActivityIndicator, Text } from "react-native-paper"
import { MainColors } from "../../theme"
import { getAccessToken } from "../Auth/astorage"
import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../../api/instance"

export const Goods = ({ keyProp, navigation }) => {
  const [goodId, setGoodId] = useState([])

  const { data: goods, isLoading, isError } = useQuery({
    queryKey: ["goods", keyProp],
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
    console.log("isError :>> ", isError)
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl text-red-500">Error: sign in again</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {goods?.map(good => (
        <ListItem
          key={good._id}
          goodId={good._id}
          title={good.name}
          description="description was supposed to be here"
          // variant="checkbox"
          editable
          navigate={navigation}
          price={good.price}
          // onChange={() => handleToggleItem(item._id)}
          checked={goodId.includes(good._id)}
        />
      ))}
    </ScrollView>
  )
}
