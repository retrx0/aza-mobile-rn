"use strict";
exports.__esModule = true;
/* eslint-disable no-console */
var react_1 = require("react");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var redux_1 = require("../../../hooks/redux");
var authSlice_1 = require("../../../redux/slice/authSlice");
var OtpScreen_1 = require("../otp/OtpScreen");
var LoginOTPScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), LoginOtp = _b[0], setLoginUpOtp = _b[1];
    var isLoggedIn = redux_1.useAppSelector(authSlice_1.selectAuthIsLoggedIn);
    var dispatch = redux_1.useAppDispatch();
    return (<SpacerWrapper_1["default"]>
      <OtpScreen_1["default"] onBackButtonPressed={function () { return navigation.goBack(); }} onWrongNumber={function () {
            console.log("wrong otp");
        }} otpCode={LoginOtp} onOtpChanged={function (code) { return setLoginUpOtp(code); }} onVerify={function () {
            // dispatch(logIn());
            navigation.navigate("SignInWelcomeBack");
        }} onResend={function () {
            console.log("otp resend");
        }} phoneNumber={""}/>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = LoginOTPScreen;
