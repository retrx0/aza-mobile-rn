import { ScrollView, Text, View} from 'react-native'
import React from 'react'
import {PaymentStyles as styles} from './styles'
import { SafeAreaView } from '../../components/Themed'
import { Header } from '../../components/text/header'
import HeadrImage from './sub-components/HeadrImage'
import {Image} from 'react-native'
import Divider from './sub-components/Divider'
import ListItem from './sub-components/ListItem'
import { CableTvIcon, DataIcon, DropIcon, ElectricIcon, GiftIcon, LoveIcon, PieIcon, WifiIcon } from '../../../assets/svg'


export default function PaymentIndexScreen({navigation}:{navigation?:any}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
       <Text style={styles.headerText}>Payments</Text>
        <View style={styles.icon}>
          <PieIcon style={styles.imageIcon} />
        </View>
    </View>
    <Header description='' headerStyle={null} descriptionStyle={null} style={styles.subHead} heading='Recent Payments'/>
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    horizontal 
    style={styles.imageHeaderContainer}>

    <HeadrImage 
    header='Paid' 
    title='MTN' 
    amount='200'
    image={require('../../../assets/images/mtn.png')}/>


    </ScrollView>

    <ScrollView
     style={styles.itemListContainer}>
    <Divider/>

    <ListItem 
    onPress={()=>{
      navigation.navigate('airtimeData')
    }}
    Icon={()=><DataIcon/>} 
    title='Airtime & Data' 
    route=''/>

   <ListItem 
    onPress={()=>{}}
    Icon={()=><WifiIcon/>} 
    title='Internet' 
    route=''/>

   <ListItem
   onPress={()=>{}} 
    Icon={()=><CableTvIcon/>} 
    title='Cable TV' 
    route=''/>


  <ListItem
  onPress={()=>{}} 
    Icon={()=><ElectricIcon/>} 
    title='Electricity' 
    route=''/>

  
<ListItem
onPress={()=>{}} 
    Icon={()=><DropIcon/>} 
    title='Water' 
    route=''/>


<ListItem
onPress={()=>{}} 
    Icon={()=><GiftIcon/>} 
    title='Gift Cards' 
    route=''/>

<ListItem
onPress={()=>{}} 
    Icon={()=><LoveIcon/>} 
    title='Charity' 
    route=''/>
   
   
    </ScrollView>
    
    </SafeAreaView>
  )
}
