"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Themed_1 = require("../../components/Themed");
var react_native_1 = require("react-native");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var SegmentedInput = function (props) {
    var value = props.value, onValueChanged = props.onValueChanged, secureInput = props.secureInput, headerText = props.headerText, style = props.style;
    return (<Themed_1.View style={[styles.otpContainer, style]}>
      <Themed_1.Text style={styles.otpText}>{headerText}</Themed_1.Text>
      <Themed_1.OTPInput keyboardType="phone-pad" pinCount={6} code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
     onCodeChanged={function (code) { return onValueChanged(code); }} secureTextEntry={secureInput} autoFocusOnLoad codeInputFieldStyle={styles.underlineStyleBase} 
    // codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled={function (code) {
            console.log("Code is " + code + ", you are good to go!");
        }}/>
    </Themed_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    otpContainer: {
        marginTop: LayoutUtil_1.hp(20),
        paddingHorizontal: LayoutUtil_1.hp(20),
        height: LayoutUtil_1.hp(40),
        marginBottom: LayoutUtil_1.hp(100)
    },
    otpText: {
        marginBottom: 10,
        fontWeight: "500",
        fontSize: LayoutUtil_1.hp(16),
        fontFamily: "Euclid-Circular-A-Bold",
        lineHeight: LayoutUtil_1.hp(20)
    },
    otp: {
        marginLeft: LayoutUtil_1.hp(90),
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20.29
    },
    underlineStyleBase: {
        width: LayoutUtil_1.wp(40),
        height: LayoutUtil_1.hp(40),
        fontSize: LayoutUtil_1.hp(18),
        borderRadius: LayoutUtil_1.hp(5),
        marginVertical: 50
    }
});
exports["default"] = SegmentedInput;
