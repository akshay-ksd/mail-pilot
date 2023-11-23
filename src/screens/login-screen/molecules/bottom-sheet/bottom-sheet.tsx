import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
const BottomSheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helpText}>Need Help</Text>
      <Icons name={"chevron-forward-outline"} size={30} color={"white"}/>
    </View>
  )
}

export default BottomSheet