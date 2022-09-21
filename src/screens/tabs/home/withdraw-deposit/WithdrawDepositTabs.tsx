import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Platform } from "react-native";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { SafeAreaView } from "../../../../components/Themed";
import useColorScheme from "../../../../hooks/useColorScheme";
import WithdrawIndex from "./withdraw/WithdrawIndex";


export function WithdrawDepositTabs() {
  const scheme = useColorScheme();
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={CommonStyles.parentContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth:1,
            borderColor: scheme == "light" ? "#000000" : "#ffffff",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
          },
          tabBarStyle:{
            borderBottomColor:'#A6A6A6',
            borderBottomWidth:1
          }
          
        }}
        initialRouteName="WithdrawIndex"
      >
        <Tab.Screen options={{title:'Withdraw'}} name="WithdrawIndex" component={WithdrawIndex} />
        <Tab.Screen options={{title:'Deposit'}} name="DepositIndex" component={WithdrawIndex} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}