import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TickIcon } from '../../../../assets/svg'

type HeaderImageProps={
    image:any
    header?:string
    title:string
    amount?:string
}
export default function HeadrImage({image,header,title,amount}:HeaderImageProps) {
  return (
    <View style={[styles.mainConatiner,{height:amount?120:70}]}>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={image}/>
    {
    amount&&(
        <View style={styles.icon}>
        <TickIcon />
        </View>
    )
    }
    </View>
    {
    header&&(
    <Text style={styles.text}>{header}</Text>
    )
    }
     
     <Text style={styles.text2}>{title}</Text>
     {
        amount&&(
        <Text style={styles.text3}>₦{amount}</Text>
        )
     }
     
    </View>
  )
}

const styles = StyleSheet.create({
    mainConatiner:{
    width:44,
    backgroundColor:'#ffffff',
    alignItems:'center',
    marginRight:33.5
    },
    imageContainer:{
        width:44,
        height:44,
        backgroundColor:'transparent',
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#A6A6A6',
        position:'relative'
    },
    image:{
        height:36,
        width:36,
        borderRadius:20
    },
    icon:{
        width:13.3,
        height:13.3,
        position:'absolute',
        bottom:0,
        right:0,
        transform:[{translateY:2}],
        borderRadius:20
    },
    text:{
        fontWeight:'400',
        fontSize:12,
        color:'#2A9E17'
    },
    text2:{
        fontWeight:'400',
        fontSize:12,
        color:'#4D4D4D'
    },
    text3:{
        fontWeight:'400',
        fontSize:12,
        color:'#A6A6A6',
        
    }
})