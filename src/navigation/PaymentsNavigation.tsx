import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentsStackParamList } from "../../types";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "../theme/Themed";
import CommonStyles from "../common/styles/CommonStyles";
import { Platform } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import { hp } from "../common/util/LayoutUtil";
import AirtimeRecurring from "../screens/tabs/payments/paymentRecurring/AirtimeRecurring/AirtimeRecurring";
import Airtime from "../screens/tabs/payments/airtime-screens/Airtime";
import DataBundle from "../screens/tabs/payments/airtime-screens/DataBundle";
import DataBundleRecurring from "../screens/tabs/payments/paymentRecurring/AirtimeRecurring/DataBundleRecurring";

const Stack = createNativeStackNavigator<PaymentsStackParamList>();
const Tab = createMaterialTopTabNavigator();

// AIRTIME AND DATA_BUNDLE TABS
// export function AirtimeTabs() {
//   const scheme = useColorScheme();
//   return (
//     <SafeAreaView style={[CommonStyles.parentContainer]}>
//       <Tab.Navigator
//         style={CommonStyles.parentContainer}
//         screenOptions={{
//           tabBarItemStyle: {
//             borderRadius: 100,
//             marginTop: Platform.OS == "android" ? 50 : 0,
//           },
//           tabBarIndicatorStyle: {
//             borderWidth: 1,
//             borderColor: scheme == "light" ? "#000000" : "#ffffff",
//             borderBottomColor: "#A6A6A6",
//           },
//           tabBarLabelStyle: {
//             textTransform: "capitalize",
//             fontSize: hp(16),
//             fontWeight: "500",
//           },
//         }}
//         initialRouteName="airtime"
//       >
//         <Tab.Screen name="Airtime" component={Airtime} />
//         <Tab.Screen name="Databundle" component={DataBundle} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// }

// export function AirtimeRecurringTab() {
//   const scheme = useColorScheme();
//   return (
//     <SafeAreaView style={CommonStyles.parentContainer}>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarItemStyle: {
//             borderRadius: 100,
//             marginTop: Platform.OS == "android" ? 50 : 0,
//           },
//           tabBarIndicatorStyle: {
//             borderWidth: 1,
//             borderColor: scheme == "light" ? "#000000" : "#ffffff",
//             borderBottomColor: "#A6A6A6",
//           },
//           tabBarLabelStyle: {
//             textTransform: "capitalize",
//             fontSize: hp(16),
//             fontWeight: "500",
//           },
//         }}
//         initialRouteName="airtime"
//       >
//         <Tab.Screen name="airtime" component={AirtimeRecurring} />
//         <Tab.Screen name="data bundle" component={DataBundleRecurring} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// }
