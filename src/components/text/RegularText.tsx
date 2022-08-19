import { View, Text } from 'react-native'
import React from 'react'

export default function RegularText({text,style}:{text:string,style?:{}}) {
  return (
<Text style={[style]}>{text}</Text>   
  )
}