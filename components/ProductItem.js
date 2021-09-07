import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native'
import { Colors } from '../constants/Colors'
import { Ionicons, Feather } from '@expo/vector-icons'

export default function ProductItem({
  item,
  onDetails,
  onAddToCart,
  navigation,
}) {
  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('productDetails', { item })}
    >
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>INR {item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.action}>
          <Feather
            name="more-horizontal"
            size={40}
            color={Colors.text}
            onPress={onDetails}
          />
          <Ionicons
            name="cart"
            size={40}
            color={Colors.text}
            onPress={onAddToCart}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 10,
    elevation: 5,
    height: 300,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: Colors.primary,
  },
  image: {
    width: '100%',
    height: '60%',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.text,
  },
  price: {
    fontSize: 14,
    color: '#888888',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    marginVertical: 3,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
})
