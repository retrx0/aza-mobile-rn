import React, { useState } from 'react'
import { SafeAreaView, Text, View } from '../../../../../components/Themed'
import BankAccountsScreen from '../../../profile/screens/BankAccountsScreen'
import { CommonScreenProps } from '../../../../../common/navigation/types'
import CommonStyles from '../../../../../common/styles/CommonStyles'
import { ArrowDownIcon, UndrawAccountIcon } from '../../../../../../assets/svg'
import Colors from '../../../../../constants/Colors'
import { hp } from '../../../../../common/util/LayoutUtil'
import Button from '../../../../../components/buttons/Button'
import CancelButtonWithUnderline from '../../../../../components/buttons/CancelButtonWithUnderline'
import { Image, Platform, StyleSheet } from 'react-native'
import useColorScheme from '../../../../../hooks/useColorScheme'
import Divider from '../../../payments/sub-components/Divider'
import ListItem from '../../../payments/sub-components/ListItem'
import {Spectranet} from '../../../../../../assets/images/'
import RadioInput from '../../../../../components/input/RadioInput'
import { useSharedValue, withSpring } from 'react-native-reanimated'

export default function Withdraw({
  navigation,
  route,
}: CommonScreenProps<"BankAccounts">) {
const colorScheme=useColorScheme()
const [accountAvailable,setAccountAvailability]=useState(true)
const sharedValue=useSharedValue(0)
if (accountAvailable) {
  return(
    <SafeAreaView style={[CommonStyles.parentContainer,{
      paddingTop:Platform.OS=='android'?100:70,
      paddingHorizontal:20
      }]}>
    <Text>Select the bank you wish to withdraw to</Text>
     <Divider style={styles.divider}/>
     <ListItem
      Icon={()=><Image style={styles.img} source={Spectranet}/>}
      onPress={()=>{
        const newValue= sharedValue.value==1?0:1
        sharedValue.value=withSpring(newValue)
      }}
      index={0} 
      title='Access Bank (123........)'
      route=''
      IconComponent={()=><RadioInput sharedValue={sharedValue}/>}
    />

    <CancelButtonWithUnderline
     style={styles.addBank} 
     onPressButton={()=>navigation.navigate('SelectBank')}
     title='Add another bank Account'
     />

   <Button
    style={styles.button}
    title='Continue'
    />

  <CancelButtonWithUnderline 
  onPressButton={()=>navigation.goBack()}
  styleText={{color:Colors.general.red}} 
  color={Colors.general.red} style={styles.cancel} 
  title='Cancel'/>
    </SafeAreaView>
  )
}

return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
    <View
      style={[
        CommonStyles.col,
        { marginTop: "auto", marginBottom: "auto" },
      ]}>
      <UndrawAccountIcon
        color={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
        size={30}
      />
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{
          fontSize: 16,
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          marginTop: hp(30),
          maxWidth: 300,
          textAlign: "center",
        }}>
        There is no bank account registered to your Aza account
      </Text>
      <View style={[CommonStyles.row, { marginTop: hp(15) }]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: 14,
            maxWidth: 300,
            marginRight: 5,
            textAlign: "center",
          }}>
          Click ‘Add Bank Account’ to link your bank account to aza
        </Text>
        <ArrowDownIcon
          color={
            colorScheme === "dark"
              ? Colors.dark.secondaryText
              : Colors.light.text
          }
          size={16}
        />
      </View>
    </View>
    <View
      style={[CommonStyles.col, { width: "100%", marginBottom: hp(45) }]}>
      <Button
        title="Add Bank Account"
        onPressButton={() => navigation.navigate('SelectBank')}
        styleText={{
          color: Colors[colorScheme].buttonText,
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: 14,
        }}
        style={{
          marginBottom: hp(15),
          width: "100%",
          backgroundColor: Colors[colorScheme].button,
        }}
      />
      <CancelButtonWithUnderline
        title="Cancel"
        onPressButton={() => navigation.goBack()}
        styleText={CommonStyles.cancelStyle}
        style={{ borderBottomColor: Colors.general.red }}
      />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
container:{
  flex:1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
},
divider:{
  marginTop:30
},
img: {
  width: 20,
  height: 20,
},
addBank:{
  marginTop:'auto'
},
button:{
  marginVertical:20,
  width:'100%',

},
cancel:{
  marginBottom:50
}
})