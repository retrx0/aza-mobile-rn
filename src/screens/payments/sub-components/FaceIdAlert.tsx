import { Image, StyleSheet} from 'react-native'
import React from 'react'
import { Text, View } from '../../../components/Themed'
import Animated, { ZoomIn } from 'react-native-reanimated'

export default function FaceIdAlert() {
  return (
    <View style={styles.container}>
      <Animated.View entering={ZoomIn.delay(1000)} style={styles.faceContainer}>
      <Image style={styles.auth} source={require('../../../../assets/images/auth.png')}/>
      <Text>Face ID</Text>
      </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    position:'absolute',
    right:0,
    left:0,
    bottom:0,
    top:0,
    backgroundColor:'transparent',
    zIndex:5,
    justifyContent:'center',
    alignItems:'center'
},
faceContainer:{
    width:140,
    height:150,
    backgroundColor:'rgba(228, 228, 231, 1)',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
},
auth:{
    height:50,
    width:50
}
})