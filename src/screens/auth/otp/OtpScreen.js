"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("../signin/styles");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var BackButton_1 = require("../../../components/buttons/BackButton");
var SegmentedInput_1 = require("../../../components/input/SegmentedInput");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var CancelButtonWithUnderline_1 = require("../../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../../constants/Colors");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var OtpScreen = function (props) {
    var otpCode = props.otpCode, onOtpChanged = props.onOtpChanged, onVerify = props.onVerify;
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles_1.SigninStyles.Container}>
        <BackButton_1["default"] onPress={function () { return props.onBackButtonPressed(); }}/>
        <Themed_1.Text style={styles_1.SigninStyles.otp}>OTP</Themed_1.Text>
      </Themed_1.View>
      <Themed_1.Text style={styles_1.SigninStyles.verification}>
        Please enter the 6-digit code sent to your mobile number
      </Themed_1.Text>
      <SegmentedInput_1["default"] value={otpCode} onValueChanged={function (code) { return onOtpChanged(code); }} headerText="OTP" secureInput={false}/>
      <Themed_1.View style={[styles_1.SigninStyles.noOtp, CommonStyles_1["default"].row]}>
        <Themed_1.Text style={styles_1.SigninStyles.otpText}>Didn't get the code? </Themed_1.Text>
        <react_native_1.TouchableOpacity>
          <CancelButtonWithUnderline_1["default"] title="Resend code" styleText={CommonStyles_1["default"].resend} color={Colors_1["default"][colorScheme].text}/>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>
      <Button_1["default"] title="Continue" onPressButton={onVerify} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button,
                marginBottom: LayoutUtil_1.hp(10)
            },
            CommonStyles_1["default"].otpbutton,
        ]} disabled={otpCode.length < 6 ? true : false}/>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = OtpScreen;
