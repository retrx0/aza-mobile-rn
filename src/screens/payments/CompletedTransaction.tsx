import { StyleSheet} from 'react-native'
import React from 'react'
import { Text, View } from '../../components/Themed'
import CommonStyles from '../../common/styles/CommonStyles'
import { SuccessIcon } from '../../../assets/svg'
import MyButton from './sub-components/MyButton'

export default function CompletedTransaction({navigation}:{navigation:{navigate:any}}) {
  return (
    <View style={[CommonStyles.parentContainer,styles.container]}>
    <SuccessIcon style={styles.icon}/>
    <Text style={styles.sucess}>Successful</Text>
    <Text style={styles.msg}>Your internet purchase was successful</Text>
    <MyButton style={styles.btn} disabled={false} title='Confirm' onPress={()=>{
      navigation.navigate('PaymentIndex')
    }}/>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
sucess:{
    color:'#2A9E17',
    fontWeight:'600',
    fontSize:24,
    lineHeight:30,
    marginTop:10
},
msg:{
    marginTop:10
},
btn:{
    marginTop:'auto',
    marginBottom:40
},
icon:{
    marginTop:'auto'
}
})