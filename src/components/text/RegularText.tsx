import React from 'react'
import { Text } from '../Themed'

export default function RegularText({text,style}:{text:string,style?:{}}) {
  return (
<Text style={[style,{fontFamily: "Euclid-Circular-A-Semi-Bold"}]}>{text}</Text>   
  )
}