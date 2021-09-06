import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import { Colors } from '../../constants/Colors'

export default function Products() {
  const { products } = useSelector((state) => state.products)
  const onDetails = () => {
    alert('Details!')
  }
  const onAddToCart = () => {
    alert('Added to card!')
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onDetails={onDetails}
            onAddToCart={onAddToCart}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
  },
})
