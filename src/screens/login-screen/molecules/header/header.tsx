import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
const Header:FC<any> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>props.close()}>
          <Icons name={"arrow-back-outline"} size={20} color={"white"}/>
      </TouchableOpacity>
      <Text style={styles.title}>Back To Mail Pilot</Text>
    </View>
  )
}

export default Header