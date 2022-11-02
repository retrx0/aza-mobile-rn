"use strict";
exports.__esModule = true;
exports.CharityTabs = exports.AirtimeTabs = void 0;
var native_stack_1 = require("@react-navigation/native-stack");
var AirtimeIndex_1 = require("../screens/tabs/payments/airtime-screens/AirtimeIndex");
var Payments_1 = require("../screens/tabs/payments/Payments");
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var Themed_1 = require("../components/Themed");
var CommonStyles_1 = require("../common/styles/CommonStyles");
var Confirmation_1 = require("../screens/tabs/payments/airtime-screens/Confirmation");
var ConfirmTransaction_1 = require("../screens/tabs/payments/ConfirmTransaction");
var CompletedTransaction_1 = require("../screens/tabs/payments/CompletedTransaction");
var react_native_1 = require("react-native");
var svg_1 = require("../../assets/svg");
var InternetPlans_1 = require("../screens/tabs/payments/internet-screens/InternetPlans");
var InternetDetail_1 = require("../screens/tabs/payments/internet-screens/InternetDetail");
var ElectricityIndex_1 = require("../screens/tabs/payments/electricity-screens/ElectricityIndex");
var CableTvIndex_1 = require("../screens/tabs/payments/cable-tv-screens/CableTvIndex");
var Pie_1 = require("../screens/tabs/payments/Pie");
var WaterScreen_1 = require("../screens/tabs/payments/water-screens/WaterScreen");
var CharityIndexScreen_1 = require("../screens/tabs/payments/charity-screens/CharityIndexScreen");
var CharityDetail_1 = require("../screens/tabs/payments/charity-screens/CharityDetail");
var useColorScheme_1 = require("../hooks/useColorScheme");
var Stack = native_stack_1.createNativeStackNavigator();
var Tab = material_top_tabs_1.createMaterialTopTabNavigator();
// AIRTIME AND DATA_BUNDLE TABS
function AirtimeTabs() {
    var scheme = useColorScheme_1["default"]();
    return (<Themed_1.SafeAreaView style={CommonStyles_1["default"].parentContainer}>
      <Tab.Navigator screenOptions={{
            tabBarItemStyle: {
                borderRadius: 100,
                marginTop: react_native_1.Platform.OS == "android" ? 50 : 0
            },
            tabBarIndicatorStyle: {
                borderWidth: 1,
                borderColor: scheme == "light" ? "#000000" : "#ffffff"
            },
            tabBarLabelStyle: {
                textTransform: "capitalize"
            },
            tabBarStyle: {
                borderBottomColor: "#A6A6A6",
                borderBottomWidth: 1
            }
        }} initialRouteName="airtime">
        <Tab.Screen name="airtime" component={AirtimeIndex_1["default"]}/>
        <Tab.Screen name="data" component={AirtimeIndex_1["default"]}/>
      </Tab.Navigator>
    </Themed_1.SafeAreaView>);
}
exports.AirtimeTabs = AirtimeTabs;
// Charity TABS
function CharityTabs() {
    var scheme = useColorScheme_1["default"]();
    return (<Themed_1.SafeAreaView style={CommonStyles_1["default"].parentContainer}>
      <Tab.Navigator screenOptions={{
            tabBarItemStyle: {
                borderRadius: 100,
                marginTop: react_native_1.Platform.OS == "android" ? 50 : 0
            },
            tabBarIndicatorStyle: {
                borderWidth: 1,
                borderColor: scheme == "light" ? "#000000" : "#ffffff"
            },
            tabBarLabelStyle: {
                textTransform: "capitalize"
            },
            tabBarStyle: {
                borderBottomColor: "#A6A6A6",
                borderBottomWidth: 1
            }
        }} initialRouteName="For Myself">
        <Tab.Screen name="For Myself" component={CharityDetail_1["default"]}/>
        <Tab.Screen name="For Someone Else" component={CharityDetail_1["default"]}/>
      </Tab.Navigator>
    </Themed_1.SafeAreaView>);
}
exports.CharityTabs = CharityTabs;
var PaymentNavigator = function () {
    var scheme = useColorScheme_1["default"]();
    return (<Stack.Navigator screenOptions={function (props) { return ({
            headerTitleAlign: "center",
            headerLeft: function () { return (<react_native_1.TouchableOpacity onPress={function () { return props.navigation.goBack(); }} style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
            <svg_1.BackIcon color={scheme == "light" ? "#000000" : "#ffffff"} size={24}/>
            <Themed_1.Text style={{ marginLeft: 5 }}>Back</Themed_1.Text>
          </react_native_1.TouchableOpacity>); },
            headerStyle: {
                backgroundColor: ""
            },
            headerTransparent: true,
            headerTitleStyle: {
                fontSize: 16,
                fontWeight: "600"
            }
        }); }}>
      <Stack.Screen options={{
            headerShown: false
        }} name="PaymentIndex" component={Payments_1["default"]}/>
      <Stack.Screen options={{ title: "Airtime & Data" }} name="airtimeData" component={AirtimeTabs}/>
      <Stack.Screen options={{ presentation: "fullScreenModal", title: "" }} name="pie" component={Pie_1["default"]}/>
      <Stack.Screen options={{ title: "Confirmation" }} name="confirm" component={Confirmation_1["default"]}/>
      <Stack.Screen options={{ title: "Password" }} name="confirm_transaction" component={ConfirmTransaction_1["default"]}/>
      <Stack.Screen options={{ title: "Internet" }} name="internet_plans" component={InternetPlans_1["default"]}/>
      <Stack.Screen options={{ title: "Electricity" }} name="electricity" component={ElectricityIndex_1["default"]}/>
      <Stack.Screen options={{ title: "Cable TV" }} name="cabletv" component={CableTvIndex_1["default"]}/>
      <Stack.Screen options={{ title: "Water" }} name="water" component={WaterScreen_1["default"]}/>
      <Stack.Screen name="Charity" component={CharityIndexScreen_1["default"]}/>
      <Stack.Screen options={function (_a) {
        var route = _a.route;
        return ({ title: route.params.name });
    }} name="charity_detail" component={CharityTabs}/>

      <Stack.Screen options={function (_a) {
        var route = _a.route;
        return ({ title: route.params.name });
    }} name="internet_plan_detail" component={InternetDetail_1["default"]}/>

      <Stack.Screen options={{
            headerShown: false
        }} name="complete_transaction" component={CompletedTransaction_1["default"]}/>
    </Stack.Navigator>);
};
exports["default"] = PaymentNavigator;
