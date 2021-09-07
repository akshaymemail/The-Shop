import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screens/Shop/Products'
import { Colors } from '../constants/Colors'
import ProductDetails from '../screens/Shop/ProductDetails'

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#f1f1f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          statusBarStyle: 'light',
        }}
      >
        <Stack.Screen
          name="home"
          component={Products}
          options={{ title: 'Products' }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={({ route }) => ({ title: route.params.item.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
