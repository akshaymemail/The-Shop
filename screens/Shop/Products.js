import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'

export default function Products() {
  const { products } = useSelector((state) => state.products)

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
    />
  )
}

const styles = StyleSheet.create({})
