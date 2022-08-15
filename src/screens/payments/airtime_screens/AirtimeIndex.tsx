import { View, Text, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from '../../../components/Themed'
import {AIrtimeStyles as styles} from './styles'
import CommonStyles from '../../../common/styles/CommonStyles'
import { Header } from '../../../components/text/header'
import HeadrImage from '../sub-components/HeadrImage'
import { Input } from '../../../components/input/input'
import ButtonLg from '../../../components/buttons/ButtonLg'
import MyButton from '../sub-components/MyButton'
import MySwitch from '../sub-components/MySwitch'

export default function AirtimeIndex() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={CommonStyles.container}>
    <Header description='' descriptionStyle={null} headerStyle={null} heading='Select Network Provider'/>
    <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
    <HeadrImage image={require('../../../../assets/images/mtn.png')} title='MTN'/>
    <HeadrImage image={require('../../../../assets/images/glo.png')} title='Glo'/>
    </ScrollView>
    <Input icon={null} keyboardType='phone-pad'  inputStyle={styles.input} labelStyle={styles.label} label='Phone Number' placeholder='Enter a phone number'/>
    <MySwitch title='My number' onValueChange={toggleSwitch} isEnabled={isEnabled}/>
    <Input icon={null} inputStyle={styles.input} labelStyle={styles.label} label='Amount' placeholder='Enter an amount'/>
    
    <MyButton disabled title='Continue' onPress={()=>{}}/>
    </SafeAreaView>
  )
}