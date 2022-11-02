"use strict";
exports.__esModule = true;
var native_stack_1 = require("@react-navigation/native-stack");
var SignUpOTPScreen_1 = require("./SignUpOTPScreen");
var SignUpPasswordScreen_1 = require("./SignUpPasswordScreen");
var SignUpScreen_1 = require("./SignUpScreen");
var SignUpProfileSetupScreen_1 = require("./SignUpProfileSetupScreen");
var SignUpStack = native_stack_1.createNativeStackNavigator();
var SignUpRoot = function () {
    var create = { passwordScreenType: "Create" };
    var confirm = { passwordScreenType: "Confirm" };
    return (<SignUpStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <SignUpStack.Screen component={SignUpScreen_1["default"]} name="SignUpRoot" options={{ headerShown: false }}/>
      <SignUpStack.Screen component={SignUpProfileSetupScreen_1["default"]} name="SignUpProfileSetup" options={{ headerShown: false }}/>
      <SignUpStack.Screen component={SignUpOTPScreen_1["default"]} name="SignUpOTP" options={{ headerShown: false }}/>
      <SignUpStack.Screen component={SignUpPasswordScreen_1["default"]} initialParams={create} name="SignUpPassword" options={{ headerShown: false }}/>
      <SignUpStack.Screen component={SignUpPasswordScreen_1["default"]} initialParams={confirm} name="SignUpConfirmPassword" options={{ headerShown: false }}/>
    </SignUpStack.Navigator>);
};
exports["default"] = SignUpRoot;
