import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentsStackParamList } from "../../types";
import AirtimeIndex from "../screens/tabs/payments/airtime-screens/AirtimeIndex";
import PaymentIndexScreen from "../screens/tabs/payments/Payments";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "../theme/Themed";
import CommonStyles from "../common/styles/CommonStyles";
import { Platform } from "react-native";
import InternetPlans from "../screens/tabs/payments/internet-screens/InternetPlans";
import InternetDetail from "../screens/tabs/payments/internet-screens/InternetDetail";
import ElectricityIndex from "../screens/tabs/payments/electricity-screens/ElectricityIndex";
import CableTvIndex from "../screens/tabs/payments/cable-tv-screens/CableTvIndex";
import Pie from "../screens/tabs/payments/Pie";
import WaterScreen from "../screens/tabs/payments/water-screens/WaterScreen";
import CharityIndexScreen from "../screens/tabs/payments/charity-screens/CharityIndexScreen";
import CharityDetail from "../screens/tabs/payments/charity-screens/CharityDetail";
import useColorScheme from "../hooks/useColorScheme";
import { hp } from "../common/util/LayoutUtil";
import CharityConfirmation from "../screens/tabs/payments/charity-screens/CharityConfirmation";
import GiftCardScreen from "../screens/tabs/payments/gift-card/GiftCardScreen";
import GiftCardDetails from "../screens/tabs/payments/gift-card/GiftCard_Details";
import GameScreen from "../screens/tabs/payments/game/GameScreen";
import PaymentRecurring from "../screens/tabs/payments/paymentRecurring/PaymentRecurring";
import AirtimeRecurring from "../screens/tabs/payments/paymentRecurring/AirtimeRecurring/AirtimeRecurring";
import InternetRecurring from "../screens/tabs/payments/paymentRecurring/InternetRecurring/InternetRecurring";
import RecurringPlan from "../screens/tabs/payments/paymentRecurring/InternetRecurring/RecurringPlan";
import WaterRecurring from "../screens/tabs/payments/paymentRecurring/WaterRecurring/WaterRecurring";
import CableRecurring from "../screens/tabs/payments/paymentRecurring/CableRecurring/CableRecurring";
import ElectricityRecurring from "../screens/tabs/payments/paymentRecurring/ElctricityRecurring/ElectricityRecurring";
import CharityTabs from "../screens/tabs/payments/charity-screens/CharityTabs";

const Stack = createNativeStackNavigator<PaymentsStackParamList>();
const Tab = createMaterialTopTabNavigator();

// AIRTIME AND DATA_BUNDLE TABS
export function AirtimeTabs() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={CommonStyles.parentContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
            borderColor: scheme == "light" ? "#000000" : "#ffffff",
            borderBottomColor: "#A6A6A6",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: hp(16),
            fontWeight: "500",
          },
        }}
        initialRouteName="airtime"
      >
        <Tab.Screen
          name="airtime"
          component={AirtimeIndex}
          initialParams={{ type: "airtime" }}
        />
        <Tab.Screen
          name="data-bundle"
          component={AirtimeIndex}
          initialParams={{ type: "data-bundle" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export function AirtimeRecurringTab() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={CommonStyles.parentContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
            borderColor: scheme == "light" ? "#000000" : "#ffffff",
            borderBottomColor: "#A6A6A6",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: hp(16),
            fontWeight: "500",
          },
        }}
        initialRouteName="airtime"
      >
        <Tab.Screen name="airtime" component={AirtimeRecurring} />
        <Tab.Screen name="data bundle" component={AirtimeRecurring} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// const PaymentNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="PaymentIndex"
//         component={PaymentIndexScreen}
//       />
//       <Stack.Screen
//         options={{ title: "Airtime & Data" }}
//         name="airtimeData"
//         component={AirtimeTabs}
//       />
//       <Stack.Screen
//         options={{ presentation: "fullScreenModal", title: "" }}
//         name="pie"
//         component={Pie}
//       />
//       <Stack.Screen
//         options={{ title: "GameScreen" }}
//         name="GameScreen"
//         component={GameScreen}
//       />
//       <Stack.Screen
//         options={{ title: "Confirmation" }}
//         name="CharityConfirmation"
//         component={CharityConfirmation}
//       />
//       <Stack.Screen
//         options={{ title: "Internet" }}
//         name="internet_plans"
//         component={InternetPlans}
//       />
//       <Stack.Screen
//         options={{ title: "Electricity" }}
//         name="electricity"
//         component={ElectricityIndex}
//       />
//       <Stack.Screen
//         options={{ title: "Cable TV" }}
//         name="cabletv"
//         component={CableTvIndex}
//       />
//       <Stack.Screen
//         options={{ title: "Water" }}
//         name="water"
//         component={WaterScreen}
//       />
//       <Stack.Screen name="Charity" component={CharityIndexScreen} />
//       <Stack.Screen
//         options={({ route }: { route: any }) => ({ title: route.params.name })}
//         name="charity_detail"
//         component={CharityTabs}
//       />
//       <Stack.Screen
//         options={({ route }: { route: any }) => ({ title: route.params.name })}
//         name="GiftCard"
//         component={GiftCardScreen}
//       />
//       <Stack.Screen
//         options={{ title: "iTunes" }}
//         name="GiftCardDetails"
//         component={GiftCardDetails}
//       />
//       <Stack.Screen
//         options={({ route }: { route: any }) => ({ title: route.params.name })}
//         name="internet_plan_detail"
//         component={InternetDetail}
//       />
//       <Stack.Screen
//         options={{ headerShown: false }}
//         name="PaymentRecurring"
//         component={PaymentRecurring}
//       />
//       <Stack.Screen
//         options={{ title: "Airtime & Data" }}
//         name="AirtimeRecurring"
//         component={AirtimeRecurringTab}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="RecurringPlan"
//         component={RecurringPlan}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="InternetRecurring"
//         component={InternetRecurring}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="WaterRecurring"
//         component={WaterRecurring}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="CableRecurring"
//         component={CableRecurring}
//       />
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="ElectricityRecurring"
//         component={ElectricityRecurring}
//       />
//     </Stack.Navigator>
//   );
// };

// export default PaymentNavigator;
