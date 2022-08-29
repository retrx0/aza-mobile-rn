import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {PaymentsStackParamList} from "../../types";
import AirtimeIndex from "../screens/payments/airtime_screens/AirtimeIndex";
import PaymentIndexScreen from "../screens/payments/PaymentIndexScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text, useThemeColor } from "../components/Themed";
import CommonStyles from "../common/styles/CommonStyles";
import Confirmation from "../screens/payments/airtime_screens/Confirmation";
import ConfirmTransaction from "../screens/payments/ConfirmTransaction";
import CompletedTransaction from "../screens/payments/CompletedTransaction";
import {Platform, TouchableOpacity} from 'react-native'
import { BackIcon, CableTvIcon } from "../../assets/svg";
import InternetPlans from "../screens/payments/internet_screens/InternetPlans";
import InternetDetail from "../screens/payments/internet_screens/InternetDetail";
import ElectricityIndex from "../screens/payments/Electricity_screens/ElectricityIndex";
import CableTvIndex from "../screens/payments/Cable_tv_screens/CableTvIndex";
import Pie from "../screens/payments/Pie";
import WaterScreen from "../screens/payments/water_screens/WaterScreen";
import CharityIndexScreen from "../screens/payments/charity_screens/CharityIndexScreen";
import CharityDetail from "../screens/payments/charity_screens/CharityDetail";
import useColorScheme from "../hooks/useColorScheme";




const Stack = createNativeStackNavigator<PaymentsStackParamList>();
const Tab = createMaterialTopTabNavigator();


// AIRTIME AND DATA_BUNDLE TABS
function AirtimeTabs() {
  const scheme=useColorScheme()
  return (
  <SafeAreaView style={CommonStyles.parentContainer}>
    <Tab.Navigator
    screenOptions={
      {
        tabBarItemStyle: {
          borderRadius: 100,
          marginTop:Platform.OS=='android'?50:0
        },
        tabBarIndicatorStyle: {
          borderWidth:2,
          borderColor:scheme=='light'?'#000000':'#ffffff'
        },
        tabBarLabelStyle:{
        textTransform:'capitalize'
        }
      }
      
    } initialRouteName="airtime">
      <Tab.Screen name="airtime" component={AirtimeIndex} />
      <Tab.Screen name="data" component={AirtimeIndex} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}

// Charity TABS
function CharityTabs() {
  const scheme=useColorScheme()
  return (
  <SafeAreaView style={CommonStyles.parentContainer}>
    <Tab.Navigator
    screenOptions={
      {
        tabBarItemStyle: {
          borderRadius: 100,
          marginTop:Platform.OS=='android'?50:0
        },
        tabBarIndicatorStyle: {
          borderWidth:2,
          borderColor:scheme=='light'?'#000000':'#ffffff'
        },
        tabBarLabelStyle:{
        textTransform:'capitalize'
        }
      }
      
    } initialRouteName="For Myself">
      <Tab.Screen name="For Myself" component={CharityDetail} />
      <Tab.Screen name="For Someone Else" component={CharityDetail} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}





const PaymentNavigator = () => {
  const scheme=useColorScheme()
  return (
    <Stack.Navigator screenOptions={(props)=>(
      {
        headerTitleAlign: 'center',
        headerLeft:()=>(
          <TouchableOpacity 
          onPress={()=>props.navigation.goBack()}
          style={{
            flexDirection:'row',
            alignItems:'center'
          }}>
          <BackIcon color={scheme=='light'?'#000000':'#ffffff'} size={24}/>
          <Text style={{marginLeft:5}}>Back</Text>
          </TouchableOpacity>
         
        ),
        headerStyle:{
        backgroundColor:'',
        },
        headerTransparent:true,
        headerTitleStyle:{
          fontSize:16,
          fontWeight:'600'
        }
        
      }
    )}>
      <Stack.Screen options={
        {
         headerShown:false,
        }
      } name="PaymentIndex" component={PaymentIndexScreen}/>
      <Stack.Screen options={{title:'Airtime & Data'}}  name="airtimeData" component={AirtimeTabs}/>
      <Stack.Screen options={{presentation:'fullScreenModal',title:''}} name='pie' component={Pie}/>
      <Stack.Screen options={{title:'Confirmation'}} name="confirm" component={Confirmation}/>
      <Stack.Screen options={{title:'Password'}} name="confirm_transaction" component={ConfirmTransaction}/>
      <Stack.Screen options={{title:'Internet'}} name="internet_plans" component={InternetPlans}/>
      <Stack.Screen options={{title:'Electricity'}} name="electricity" component={ElectricityIndex}/>
      <Stack.Screen options={{title:'Cable TV'}} name="cabletv" component={CableTvIndex}/>
      <Stack.Screen options={{title:'Water'}} name="water" component={WaterScreen}/>
      <Stack.Screen name='Charity' component={CharityIndexScreen}/>
      <Stack.Screen  options={({route}:{route:any}) => ({ title: route.params.name})} 
       name='charity_detail' component={CharityTabs}/>
      
      <Stack.Screen 
      options={({route}:{route:any}) => ({ title: route.params.name})} 
      name="internet_plan_detail" component={InternetDetail}/>
      
      <Stack.Screen 
      options={
        {
         headerShown:false 
        }
      }
       name="complete_transaction" 
       component={CompletedTransaction}/>

    </Stack.Navigator>
  );
};

export default PaymentNavigator;