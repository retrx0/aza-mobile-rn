import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Divider from './Divider'
import { ArrowFowardIcon, DataIcon } from '../../../../assets/svg'

type Props={
    Icon:any
    title:string
    route:string
}

export default function ListItem({Icon,title,route}:Props) {
  return (
    <View style={styles.listContainer}>
      <View style={styles.mainItem}>
        <View style={styles.item}>    
        <Icon/>
       <Text style={styles.text}>{title}</Text>
        </View>
        <TouchableOpacity>
        <ArrowFowardIcon/>
        </TouchableOpacity>
      </View>
      <Divider/>
    </View>
  )
}
const styles = StyleSheet.create({
listContainer:{
    minHeight:20,
    marginTop:20,
    width:'100%',
    backgroundColor:'white',
    justifyContent:'center',
    
},
mainItem:{
    flexDirection:'row',
    justifyContent:'space-between',
   
    
},

item:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
text:{
fontSize:14,
fontWeight:'500',
color:'#4D4D4D',
marginLeft:16.5
}
})