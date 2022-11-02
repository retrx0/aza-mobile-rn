"use strict";
exports.__esModule = true;
exports.WithdrawDepositTabs = void 0;
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var react_native_1 = require("react-native");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var Themed_1 = require("../../../../components/Themed");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var DepositIndex_1 = require("./deposit/DepositIndex");
var WithdrawIndex_1 = require("./withdraw/WithdrawIndex");
function WithdrawDepositTabs() {
    var scheme = useColorScheme_1["default"]();
    var Tab = material_top_tabs_1.createMaterialTopTabNavigator();
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
                borderBottomColor: '#A6A6A6',
                borderBottomWidth: 1
            }
        }} initialRouteName="WithdrawIndex">
        <Tab.Screen options={{ title: "Withdraw" }} name="WithdrawIndex" component={WithdrawIndex_1["default"]}/>
        <Tab.Screen options={{ title: "Deposit" }} name="DepositIndex" component={DepositIndex_1["default"]}/>
      </Tab.Navigator>
    </Themed_1.SafeAreaView>);
}
exports.WithdrawDepositTabs = WithdrawDepositTabs;
