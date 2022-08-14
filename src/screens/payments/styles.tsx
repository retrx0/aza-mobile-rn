import { StyleSheet,StatusBar,Platform, Appearance } from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'
import Colors from '../../constants/Colors'

export const PaymentStyles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Appearance.getColorScheme()=='light'?Colors.light.background:Colors.dark.background,
        paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0,
       
       },
       header:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        marginTop:45
       },
       icon:{
        alignSelf:'flex-end',
        width:28,
        height:28,
        backgroundColor:'transparent',
        position:'absolute',
        right:0,
        marginRight:20

       },
       headerText:{
        color:'#4D4D4D',
        fontWeight:'600',
        fontSize:20
       },
       subHead:{
        marginTop:40,
        fontWeight:'400',
        fontSize:14,
        color:'#4D4D4D',
        lineHeight:18
       },
       imageIcon:{
        width:58,
        height:58,
       },
       imageHeaderContainer:{
        marginLeft:20,
        minHeight:70,
        maxHeight:100
 
        },
        itemListContainer:{
        paddingHorizontal:20,
        width:'100%',
        marginTop:10,
        backgroundColor:'transparent',
        flex:1
        }
  })
