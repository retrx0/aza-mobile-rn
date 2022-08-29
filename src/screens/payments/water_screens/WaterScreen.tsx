import { ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from '../../../components/Themed'
import { AIrtimeStyles as styles } from '../airtime_screens/styles' 
import CommonStyles from '../../../common/styles/CommonStyles'
import { Header } from '../../../components/text/header'
import HeadrImage from '../sub-components/HeadrImage'
import { Input } from '../../../components/input/input'
import MyButton from '../sub-components/MyButton'
import { useRoute } from '@react-navigation/native'


export default function WaterScreen({navigation}:{navigation:{navigate:any}}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex,setCurrent]=useState(0)
  const route=useRoute()
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const bundles=['100mb','200mb','500mb']
  return (
    <SafeAreaView style={[CommonStyles.parentContainer,styles2.container]}>
    <Header style={styles.header} description='' descriptionStyle={null} 
    headerStyle={null} heading='Select water provider'/>
   
    <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
    <HeadrImage 
    selected
    index={0} 
    image={require('../../../../assets/images/ie.png')} title='FCTWB'/>
  
    </ScrollView>

    
    <Input style={styles2.input} icon={null} keyboardType='phone-pad'  
    inputStyle={styles.input} labelStyle={styles.label} label='Customer Account Number' 
    placeholder='Enter your customer account number'/>
   
  
     
    
    <Input style={styles2.input} icon={null} inputStyle={styles.input} 
    labelStyle={styles.label} label='Amount' 
    placeholder='Enter an amount to be paid'/>

    <MyButton disabled={false} title='Continue' onPress={()=>{
      navigation.navigate('confirm')
    }}/>
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
container:{
    marginTop:70
},
input:{
    marginTop:0,
    marginBottom:40
}
})