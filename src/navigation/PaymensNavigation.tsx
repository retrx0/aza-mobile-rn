import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {PaymentsStackParamList} from "../../types";
import AirtimeIndex from "../screens/payments/airtime_screens/AirtimeIndex";
import PaymentIndexScreen from "../screens/payments/PaymentIndexScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "../components/Themed";
import CommonStyles from "../common/styles/CommonStyles";


const Stack = createNativeStackNavigator<PaymentsStackParamList>();
const Tab = createMaterialTopTabNavigator();

function AirtimeTabs() {
  return (
  <SafeAreaView style={CommonStyles.container}>
    <Tab.Navigator
    screenOptions={
      {
        tabBarItemStyle: {
          borderRadius: 100
        },
        tabBarIndicatorStyle: {
          borderWidth:2,
          borderColor:'#121212'
        },
        tabBarLabelStyle:{
        textTransform:'capitalize'
        }
      }
      
    } initialRouteName="airtime">
      <Tab.Screen name="airtime" component={AirtimeIndex} />
      <Tab.Screen options={{title:'Data Bundle'}} name="data" component={AirtimeIndex} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}

const PaymentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
     headerShown:false   
    }}>
      <Stack.Screen name="PaymentIndex" component={PaymentIndexScreen}/>
      <Stack.Screen name="airtimeData" component={AirtimeTabs}/>

    </Stack.Navigator>
  );
};

export default PaymentNavigator;