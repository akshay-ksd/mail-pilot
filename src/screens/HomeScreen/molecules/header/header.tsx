import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from "react-native-vector-icons/Ionicons"
import colors from '../../../../components/constants/colors'
const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="person-circle-outline" size={28} color={colors.secondary}/>
      <Icon name="search-outline" size={25} color={colors.primary}/>
    </View>
  )
}

export default Header