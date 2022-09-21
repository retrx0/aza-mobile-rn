import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { View } from '../../../../../components/Themed'
import Divider from '../../../payments/sub-components/Divider'
import TransactionListItem from '../../../../../components/ListItem/TransactionListItem'
import MenuList from '../../../../../components/ListItem/MenuList'
import { RootTabScreenProps } from '../../../../../../types'
import Button from '../../../../../components/buttons/Button'
import Colors from '../../../../../constants/Colors'


export default function WithdrawIndex({
  navigation
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
    <Divider/>
    <MenuList 
     heading='Withdraw money to your own bank account' 
     subHeading='Bank Account'
     onPress={()=>{
      navigation.navigate('Common',{screen:'Withdraw'})
     }}
     />
    <Divider style={styles.divider}/>
    <Button 
    title='Cancel'
    style={styles.button}
    onPressButton={()=>navigation.goBack()}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20
  },
  divider:{
    marginTop:10
  },
  button:{
    backgroundColor:Colors.general.red,
    marginTop:'auto',
    width:'100%',
    marginBottom:100
  }
})