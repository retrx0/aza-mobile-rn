import { View, Text } from 'react-native'
import React from 'react'
import ButtonLg from '../../../components/buttons/ButtonLg'
import { AIrtimeStyles as styles } from '../airtime_screens/styles' 
export default function MyButton({disabled,title,onPress}:{disabled:boolean,title:string,onPress:any}) {
  return (
    <View style={[styles.button,{
        width:'100%',
        opacity:disabled?0.3:1
    }]}>
   <ButtonLg disabled={disabled} color='black' title={title} alt={false} onPress={onPress}/>
   </View>
  )
}