import { ScrollView, Text, View} from 'react-native'
import React from 'react'
import {PaymentStyles as styles} from './styles'
import { SafeAreaView } from '../../components/Themed'
import { Header } from '../../components/text/header'
import HeadrImage from './sub-components/HeadrImage'
import {Image} from 'react-native'
import Divider from './sub-components/Divider'


export default function PaymentIndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
       <Text style={styles.headerText}>Payments</Text>
        <View style={styles.icon}>
          <Image source={require('../../../assets/images/pie.png')} style={styles.imageIcon} />
        </View>
    </View>
    <Header description='' headerStyle={null} descriptionStyle={null} style={styles.subHead} heading='Recent Payments'/>
    <ScrollView 
   showsHorizontalScrollIndicator={false}
    horizontal style={{
        marginLeft:20,
        maxHeight:120

        }}>
    <HeadrImage/>
    <HeadrImage/>
    <HeadrImage/>
    <HeadrImage/>
    <HeadrImage/>

    </ScrollView>
    <Divider/>
    </SafeAreaView>
  )
}
