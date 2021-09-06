import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProductItem({ item }) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
