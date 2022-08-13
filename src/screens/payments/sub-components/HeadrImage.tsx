import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


export default function HeadrImage() {
  return (
    <View style={styles.mainConatiner}>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('../../../../assets/images/mtn.png')}/>
    <Image style={styles.icon} source={require('../../../../assets/images/Vector.png')}/>
    </View>
     <Text style={styles.text}>Paid</Text>
     <Text style={styles.text2}>MTN</Text>
     <Text style={styles.text3}>₦2,050</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainConatiner:{
    minHeight:100,
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
        backgroundColor:'green',
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
        color:'#A6A6A6'
    }
})