import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

export default function ProductDetails({ navigation, route }) {
  const item = route.params.item
  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.details}>
        <View style={styles.actions}>
          <Ionicons
            name="cart"
            size={40}
            color={Colors.text}
            onPress={() => alert('Added!')}
          />
        </View>
        <Text style={styles.price}>INR {item.price.toFixed(2)}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  details: {
    alignItems: 'center',
  },
  actions: {
    marginVertical: 20,
  },
  price: {
    color: '#888',
    marginVertical: 5,
  },
  description: {
    width: '90%',
    color: Colors.text,
    textAlign: 'center',
    marginVertical: 20,
  },
})
