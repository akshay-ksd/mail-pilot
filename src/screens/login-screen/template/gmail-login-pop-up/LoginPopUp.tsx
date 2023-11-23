import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import WebView from 'react-native-webview'
import styles from './style'
import Header from '../../molecules/header/header'
import BottomSheet from '../../molecules/bottom-sheet/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
const LoginPopUp:FC<any> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation:any = useNavigation()

  const handleNavigationStateChange = (newNavState:any) => {
    const redirectedUrl = newNavState.url;
    if (redirectedUrl.includes('https://mail.google.com/mail/mu/mp')) {
      // The user has successfully logged in
      navigation.navigate("HomeScreen")
    }
  };
  return (
    <View style={styles.container}>
      <Header close={()=>props.close()}/>
      <WebView source={{ uri: 'https://mail.google.com/mail' }} style={{ flex: 1 }} onNavigationStateChange={handleNavigationStateChange}/>
      <BottomSheet/>
    </View>
  )
}

export default LoginPopUp

// https://accounts.google.com/v3/signin/challenge/pwd?TL=AHNYTISE5Dt2KikDqDQxwElnj53k6LeRl-IMBtAAUOqB60j1BjXieSfwPwp0wkWR&btmpl=mobile&checkConnection=youtube%3A835%3A0&checkedDomains=youtube&cid=2&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fview&dsh=S436220677%3A1700722079958659&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&ifkv=ASKXGp183ExmiZNpigtN--PNu5N3Vm77-JriHwXbx11SQrxkBSEeVPbevwuqo9ClDr7Zy9a1W5w5Ig&ltmpl=ecobx&osid=1&pstMsg=1&scc=1&service=mail&theme=glif
