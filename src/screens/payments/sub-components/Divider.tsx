import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Divider() {
  return (
    <View style={styles.divide}></View>
  )
}
const styles = StyleSheet.create({
divide:{
    width:'100%',
    height:1,
    backgroundColor:'#EAEAEC',
    marginTop:20
}
})