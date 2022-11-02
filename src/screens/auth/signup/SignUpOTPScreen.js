"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var redux_1 = require("../../../hooks/redux");
var newUserSlice_1 = require("../../../redux/slice/newUserSlice");
var OtpScreen_1 = require("../otp/OtpScreen");
var SignUpOTPScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), signUpOtp = _b[0], setSignUpOtp = _b[1];
    var dispatch = redux_1.useAppDispatch();
    var phone = redux_1.useAppSelector(function (state) { return state.newUser; }).phone;
    return (<SpacerWrapper_1["default"]>
      <OtpScreen_1["default"] onBackButtonPressed={function () { return navigation.goBack(); }} onWrongNumber={function () {
            "wrong number";
        }} otpCode={signUpOtp} onOtpChanged={function (code) { return setSignUpOtp(code); }} onVerify={function () {
            dispatch(newUserSlice_1.verifyOtp({
                phone: "",
                email: "mubarakibrahim2015@gmail.com",
                otp: Number(signUpOtp)
            }));
            navigation.navigate("SignUpProfileSetup");
        }} onResend={function () {
            console.log("otp resend");
        }} phoneNumber={""}/>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SignUpOTPScreen;
