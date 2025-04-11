import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loader = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="extra-large" />
    </View>
  )
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});


export default Loader