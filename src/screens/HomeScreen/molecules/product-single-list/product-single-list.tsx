import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
interface productType{
  index:number;
  item:any
}
const ProductSingleList:FC<productType> = ({index,item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
            <Image style={styles.image} source={{uri:item?.thumbnail}} resizeMode="contain"/>
            <View style={styles.details}>
                <Text style={styles.brandName}>{item?.brand}</Text>
                <Text style={styles.description}>{item?.description}</Text>
            </View>
      </View>
    </View>
  )
}

export default ProductSingleList