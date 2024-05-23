import React, { useState } from "react"
import { View, Dimensions, TouchableOpacity, ScrollView } from "react-native"

import ListItem from "../../components/ListItem"

const initialLayout = { width: Dimensions.get("window").width }

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const onChangeSearch = query => {
    console.log(query)
    setSearchQuery(query)
  }

  const onSearchSubmit = () => {
    console.log("Search submitted:", searchQuery)
  }

  return (
    <View className="flex-1">
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("EditItem")}>
          <ListItem title={"Click this"} description="1 tonna" price={20000} />
        </TouchableOpacity>
        {[...Array(20)].map((_, index) => (
          <ListItem
            key={index}
            title="Olma"
            description="1 tonna"
            price={10000 + index}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchScreen
