import { Image, StyleSheet} from 'react-native'
import React from 'react'
import { View } from '../../../components/Themed'
import CommonStyles from '../../../common/styles/CommonStyles'
import { Input } from '../../../components/input/input'
import {AIrtimeStyles as styles} from '../airtime_screens/styles'
import ListItem from '../sub-components/ListItem'

export default function CharityIndexScreen(props:any) {
  return (
    <View style={[CommonStyles.parentContainer,styles2.container]}>

      <Input style={styles2.mainInput} icon={null} inputStyle={styles2.input} 
      labelStyle={styles.label} label='' 
      placeholder='Search for charitable organizations'/>

      <ListItem onPress={()=>{
        props.navigation.navigate('charity_detail',{name:'Chess in Slums'})
      }} 
      route='' index={0} 
      title='Chess in Slums' 
      Icon={()=><Image
      style={styles2.img} 
      source={require('../../../../assets/images/spec.png')}/>}/>

<ListItem onPress={()=>{}} 
      route='' index={2} 
      title='ICICE' 
      Icon={()=><Image
      style={styles2.img}
      source={require('../../../../assets/images/ntel.png')}/>}/>
    </View>
  )
}

const styles2 = StyleSheet.create({
container:{
paddingTop:100,
padding:20
},
input:{
  width:'100%',
  borderBottomColor:'#EAEAEC',
  borderBottomWidth:1,
  height:40,
 
  
},
mainInput:{
marginTop:0,
marginBottom:25
},
img:{
  width:20,
  height:20
}
})