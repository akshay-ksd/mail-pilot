import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Header from './molecules/header/header'
import ProductList from './product-list/product-list'
const Home = () => {

  return (
    <View style={styles.container}>
      <Header/>
      <ProductList/>
    </View>
  )
}

export default Home