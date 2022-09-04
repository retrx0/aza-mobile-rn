import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { BackIcon } from "../../../assets/svg";
import { Text } from "../../components/Themed";
import useColorScheme from "../../hooks/useColorScheme";
import { AirtimeTabs, CharityTabs } from "../../navigation/PaymensNavigation";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import StatusScreen from "../../screens/status/StatusScreen";
import Confirmation from "../../screens/tabs/payments/airtime-screens/Confirmation";
import CableTvIndex from "../../screens/tabs/payments/cable-tv-screens/CableTvIndex";
import CharityIndexScreen from "../../screens/tabs/payments/charity-screens/CharityIndexScreen";
import CompletedTransaction from "../../screens/tabs/payments/CompletedTransaction";
import ConfirmTransaction from "../../screens/tabs/payments/ConfirmTransaction";
import ElectricityIndex from "../../screens/tabs/payments/electricity-screens/ElectricityIndex";
import InternetDetail from "../../screens/tabs/payments/internet-screens/InternetDetail";
import InternetPlans from "../../screens/tabs/payments/internet-screens/InternetPlans";
import Pie from "../../screens/tabs/payments/Pie";
import WaterScreen from "../../screens/tabs/payments/water-screens/WaterScreen";
import { CommonStackParamList } from "./types";

const Stack = createNativeStackNavigator<CommonStackParamList>();

const CommonStack = () => {
  const scheme=useColorScheme()
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BvnVerificationNavigator} name="BvnVerificationRoot" />
        <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
          <Stack.Screen component={StatusScreen} name="StatusScreen" options={() => ({ headerShown: false })} />
        </Stack.Group>
      </Stack.Group>

      {/* Payments */}

      <Stack.Group screenOptions={(props)=>(
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
        <Stack.Screen options={{ title: "Airtime & Data" }} name="AirtimeData" component={AirtimeTabs} />
        <Stack.Screen options={{ presentation: "fullScreenModal", title: "" }} name="Pie" component={Pie} />
        <Stack.Screen options={{ title: "Confirmation" }} name="Confirm" component={Confirmation} />
        <Stack.Screen options={{ title: "Password" }} name="ConfirmTransaction" component={ConfirmTransaction} />
        <Stack.Screen options={{ title: "Internet" }} name="InternetPlans" component={InternetPlans} />
        <Stack.Screen options={{ title: "Electricity" }} name="Electricity" component={ElectricityIndex} />
        <Stack.Screen options={{ title: "Cable TV" }} name="CableTV" component={CableTvIndex} />
        <Stack.Screen options={{ title: "Water" }} name="Water" component={WaterScreen} />
        <Stack.Screen name="Charity" component={CharityIndexScreen} />
        <Stack.Screen
          options={({ route }: { route: any }) => ({ title: route.params.name })}
          name="CharityDetail"
          component={CharityTabs}
        />

        <Stack.Screen
          options={({ route }: { route: any }) => ({ title: route.params.name })}
          name="InternetPlanDetail"
          component={InternetDetail}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CompleteTransaction"
          component={CompletedTransaction}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
