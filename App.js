import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import Navigator from './navigation'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

export default App
