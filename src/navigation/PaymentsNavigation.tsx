import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentsStackParamList } from "../../types";
import AirtimeIndex from "../screens/tabs/payments/airtime-screens/AirtimeIndex";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "../theme/Themed";
import CommonStyles from "../common/styles/CommonStyles";
import { Platform } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import { hp } from "../common/util/LayoutUtil";
import AirtimeRecurring from "../screens/tabs/payments/paymentRecurring/AirtimeRecurring/AirtimeRecurring";

const Stack = createNativeStackNavigator<PaymentsStackParamList>();
const Tab = createMaterialTopTabNavigator();

// AIRTIME AND DATA_BUNDLE TABS
export function AirtimeTabs() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={[CommonStyles.parentContainer]}>
      <Tab.Navigator
        style={CommonStyles.parentContainer}
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
