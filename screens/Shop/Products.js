import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import { Colors } from '../../constants/Colors'

export default function Products({ navigation }) {
  const { products } = useSelector((state) => state.products)

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onDetails={() => {
              navigation.navigate('productDetails', { item })
            }}
            onAddToCart={() => alert('Add to cart')}
            navigation={navigation}
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
