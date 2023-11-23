import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import LoginPopUp from './template/gmail-login-pop-up/LoginPopUp'
const LoginScreen = () => {
  const [pop,setPop] = useState(false)

  const loginHomeScreen =()=>{
    
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>setPop(true)}>
      <Text style={styles.text}>Login By Email</Text>
      </TouchableOpacity>
      {
        pop && (
          <LoginPopUp close={loginHomeScreen}/>
        )
      }
    </View>
  )
}

export default LoginScreen