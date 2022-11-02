"use strict";
exports.__esModule = true;
var native_stack_1 = require("@react-navigation/native-stack");
var react_1 = require("react");
var SignInOTPScreen_1 = require("./SignInOTPScreen");
var SignInWelcomBackScreen_1 = require("./SignInWelcomBackScreen");
var SignInScreen_1 = require("./SignInScreen");
var useCachedResources_1 = require("../../../hooks/useCachedResources");
var LogInStack = native_stack_1.createNativeStackNavigator();
var LoginNavigator = function () {
    var isUserSignedIn = useCachedResources_1["default"]().isUserSignedIn;
    return (<LogInStack.Navigator initialRouteName={isUserSignedIn ? "SignInWelcomeBack" : "SignInRoot"} screenOptions={{ gestureEnabled: false }}>
      <LogInStack.Screen component={SignInScreen_1["default"]} name="SignInRoot" options={{ headerShown: false }}/>
      <LogInStack.Screen component={SignInOTPScreen_1["default"]} name="SignInOTP" options={{ headerShown: false }}/>
      <LogInStack.Screen component={SignInWelcomBackScreen_1["default"]} name="SignInWelcomeBack" options={{ headerShown: false }}/>
    </LogInStack.Navigator>);
};
exports["default"] = LoginNavigator;
