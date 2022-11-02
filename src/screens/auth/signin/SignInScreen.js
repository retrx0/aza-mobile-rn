"use strict";
exports.__esModule = true;
/* eslint-disable no-console */
var react_1 = require("react");
var ButtonLg_1 = require("../../../components/buttons/ButtonLg");
var Colors_1 = require("../../../constants/Colors");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var Themed_1 = require("../../../components/Themed");
var BackButton_1 = require("../../../components/buttons/BackButton");
var Button_1 = require("../../../components/buttons/Button");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var svg_1 = require("../../../../assets/svg");
var newUserSlice_1 = require("../../../redux/slice/newUserSlice");
var redux_1 = require("../../../hooks/redux");
var thirdPartyAuth_1 = require("../thirdPartyAuth");
var SignInScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), phone = _b[0], setPhone = _b[1];
    var colorScheme = useColorScheme_1["default"]();
    var dispatch = redux_1.useAppDispatch();
    var _c = thirdPartyAuth_1.signInWithFacebook(), f_promptAsync = _c.f_promptAsync, f_response = _c.f_response;
    var _d = thirdPartyAuth_1.signInWithGoogole(), g_promptAsync = _d.g_promptAsync, g_response = _d.g_response;
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={{ marginLeft: 20 }}>
        <BackButton_1["default"] onPress={function () {
            var _a;
            (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Welcome");
        }}/>
      </Themed_1.View>
      <Themed_1.View style={CommonStyles_1["default"].phoneContainer}>
        <Themed_1.Text style={[CommonStyles_1["default"].headerText]}>Login</Themed_1.Text>
        <Themed_1.Text style={[CommonStyles_1["default"].bodyText]}>
          Enter your phone number to continue
        </Themed_1.Text>
        <Themed_1.Text style={[CommonStyles_1["default"].bodyText]}>
          Phone Number <Themed_1.Text style={{ color: "red" }}>*</Themed_1.Text>
        </Themed_1.Text>
      </Themed_1.View>
      <Themed_1.PhoneInput initialValue={phone} onChangePhoneNumber={function (p) { return setPhone(p); }} initialCountry="ng" autoFormat textStyle={[CommonStyles_1["default"].textStyle]} textProps={{
            placeholder: "Enter a phone number..."
        }} pickerBackgroundColor={Colors_1["default"][colorScheme].backgroundSecondary} style={[CommonStyles_1["default"].phoneStyle]}/>

      <Button_1["default"] title="Continue" onPressButton={function () {
            dispatch(newUserSlice_1.requestOtp({ phone: phone, email: "mubarakibrahim2015@gmail.com" }));
            navigation.navigate("SignInOTP");
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].button,
        ]} disabled={phone.length < 10 ? true : false}/>
      <Themed_1.Text style={[CommonStyles_1["default"].orText]}>OR</Themed_1.Text>
      <ButtonLg_1["default"] icon={<svg_1.AppleIcon />} title="Connect Apple Account" color={Colors_1["default"].general.apple} onPress={function () { return thirdPartyAuth_1.signInWithApple().then(function (r) { return console.log(r); }); }} alt={false}/>
      <ButtonLg_1["default"] icon={<svg_1.FacebookIcon />} title="Connect with Facebook" color={Colors_1["default"].general.facebook} onPress={function () { return f_promptAsync(); }} alt={false}/>
      <ButtonLg_1["default"] icon={<svg_1.GoogleIcon />} title="Connect Google Account" color={Colors_1["default"].general.google} onPress={function () { return g_promptAsync(); }} alt={false}/>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SignInScreen;
