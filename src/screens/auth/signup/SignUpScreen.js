"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var Themed_1 = require("../../../components/Themed");
var ButtonLg_1 = require("../../../components/buttons/ButtonLg");
var Colors_1 = require("../../../constants/Colors");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var BackButton_1 = require("../../../components/buttons/BackButton");
var Button_1 = require("../../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../../components/buttons/CancelButtonWithUnderline");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var redux_1 = require("../../../hooks/redux");
var newUserSlice_1 = require("../../../redux/slice/newUserSlice");
var svg_1 = require("../../../../assets/svg");
var AuthSession = require("expo-auth-session");
var WebBrowser = require("expo-web-browser");
var react_native_1 = require("react-native");
var _env_1 = require("@env");
var thirdPartyAuth_1 = require("../thirdPartyAuth");
var SecureStore = require("expo-secure-store");
WebBrowser.maybeCompleteAuthSession();
var SignUpScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), phone = _b[0], setPhone = _b[1];
    var colorScheme = useColorScheme_1["default"]();
    var dispatch = redux_1.useAppDispatch();
    var _c = thirdPartyAuth_1.signInWithFacebook(), f_promptAsync = _c.f_promptAsync, f_response = _c.f_response;
    var _d = thirdPartyAuth_1.signInWithGoogole(), g_promptAsync = _d.g_promptAsync, g_response = _d.g_response, g_request = _d.g_request;
    var storeAuthSessionTokens = function (response, tokenKey, refreshTokenKey) {
        var _a, _b, _c;
        if ((response === null || response === void 0 ? void 0 : response.type) === "success") {
            // Store Tokens
            if ((_a = response.authentication) === null || _a === void 0 ? void 0 : _a.refreshToken) {
                SecureStore.setItemAsync(tokenKey, (_b = response.authentication) === null || _b === void 0 ? void 0 : _b.accessToken)
                    .then(function () { return console.log("token stored"); })["catch"](function (e) { return console.error(e); });
                SecureStore.setItemAsync(refreshTokenKey, (_c = response.authentication) === null || _c === void 0 ? void 0 : _c.refreshToken)
                    .then(function () { return console.log("Refresh token stored"); })["catch"](function (e) { return console.error(e); });
            }
        }
    };
    react_1["default"].useEffect(function () {
        var _a, _b;
        console.log(AuthSession.getDefaultReturnUrl());
        if ((g_response === null || g_response === void 0 ? void 0 : g_response.type) === "success") {
            // Store Tokens
            storeAuthSessionTokens(g_response, _env_1.STORAGE_KEY_GOOGLE_TOKEN, _env_1.STORAGE_KEY_GOOGLE_REFRESH_TOKEN);
            thirdPartyAuth_1.fetchThirdPartyUserInfo((_a = g_response.authentication) === null || _a === void 0 ? void 0 : _a.accessToken, "Google")
                .then(function (r) { return console.log(r === null || r === void 0 ? void 0 : r.data); })["catch"](function (e) { return console.error(e); });
        }
        // TODO make calls to googleapis/facebook using the response to get the email and profile
        if ((f_response === null || f_response === void 0 ? void 0 : f_response.type) === "success") {
            storeAuthSessionTokens(g_response, _env_1.STORAGE_KEY_GOOGLE_TOKEN, _env_1.STORAGE_KEY_GOOGLE_REFRESH_TOKEN);
            thirdPartyAuth_1.fetchThirdPartyUserInfo((_b = f_response.authentication) === null || _b === void 0 ? void 0 : _b.accessToken, "Facebook")
                .then(function (r) { return console.log(r === null || r === void 0 ? void 0 : r.data); })["catch"](function (e) { return console.error(e); });
        }
    }, [g_response, f_response]);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={{ marginLeft: 20 }}>
        <BackButton_1["default"] onPress={function () {
            var _a;
            (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Welcome");
        }}/>
      </Themed_1.View>
      <Themed_1.View style={[CommonStyles_1["default"].phoneContainer]}>
        <Themed_1.Text style={[CommonStyles_1["default"].headerText]}>Sign Up for Aza</Themed_1.Text>
        <Themed_1.Text style={[CommonStyles_1["default"].bodyText]}>
          Enter your phone number to continue
        </Themed_1.Text>
        <Themed_1.Text style={[CommonStyles_1["default"].phoneText]}>
          Phone Number <Themed_1.Text style={[CommonStyles_1["default"].phoneNumber]}>*</Themed_1.Text>
        </Themed_1.Text>
      </Themed_1.View>

      <Themed_1.PhoneInput initialValue={phone} onChangePhoneNumber={function (p) { return setPhone(p); }} initialCountry="ng" autoFormat textStyle={[CommonStyles_1["default"].textStyle]} textProps={{
            placeholder: "Enter a phone number..."
        }} style={[CommonStyles_1["default"].phoneStyle]}/>
      <Button_1["default"] title="Continue" onPressButton={function () {
            dispatch(newUserSlice_1.setPhone(phone));
            // TDOD replace the below email with the one coming from google, apple or facebook!
            dispatch(newUserSlice_1.requestOtp({ phone: "", email: "mubarakibrahim2015@gmail.com" }));
            navigation.navigate("SignUpOTP");
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].otpbutton,
        ]} disabled={phone.length < 10 ? true : false}/>
      <Themed_1.View style={[CommonStyles_1["default"].row, CommonStyles_1["default"].user]}>
        <Themed_1.Text style={[CommonStyles_1["default"].account]}>Already have an account? </Themed_1.Text>
        <CancelButtonWithUnderline_1["default"] title="Login" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("SignIn"); }} color={Colors_1["default"][colorScheme].text}/>
      </Themed_1.View>

      <Themed_1.Text style={[CommonStyles_1["default"].orText]}>OR</Themed_1.Text>
      {react_native_1.Platform.OS === "ios" ? (<ButtonLg_1["default"] icon={<svg_1.AppleIcon />} title="Connect Apple Account" color={Colors_1["default"].general.apple} onPress={function () {
                thirdPartyAuth_1.signInWithApple().then(function (a_response) {
                    if (a_response === null || a_response === void 0 ? void 0 : a_response.identityToken) {
                        SecureStore.setItemAsync(_env_1.STORAGE_KEY_APPLE_TOKEN, a_response.identityToken);
                    }
                });
                // pass the response to create account
            }} alt={false}/>) : (<></>)}

      <ButtonLg_1["default"] icon={<svg_1.FacebookIcon />} title="Connect with Facebook" color={Colors_1["default"].general.facebook} onPress={function () {
            f_promptAsync();
        }} alt={false}/>
      <ButtonLg_1["default"] icon={<svg_1.GoogleIcon />} title="Connect Google Account" color={Colors_1["default"].general.google} onPress={function () {
            g_promptAsync();
        }} alt={false}/>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SignUpScreen;
