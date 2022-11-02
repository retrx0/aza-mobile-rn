"use strict";
exports.__esModule = true;
exports.SigninStyles = void 0;
var react_native_1 = require("react-native");
var Colors_1 = require("../../../constants/Colors");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
exports.SigninStyles = react_native_1.StyleSheet.create({
    sentCode: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        paddingHorizontal: LayoutUtil_1.hp(10),
        lineHeight: LayoutUtil_1.hp(17.75),
        marginBottom: LayoutUtil_1.hp(35),
        marginLeft: LayoutUtil_1.hp(20)
    },
    welcome: {
        marginTop: LayoutUtil_1.hp(50),
        fontSize: LayoutUtil_1.hp(24),
        fontWeight: "bold",
        // color: Primary,
        paddingHorizontal: LayoutUtil_1.hp(10),
        lineHeight: LayoutUtil_1.hp(30.43),
        marginBottom: LayoutUtil_1.hp(10),
        marginLeft: LayoutUtil_1.hp(20)
    },
    passwordText: {
        marginBottom: 10,
        fontWeight: "500",
        fontSize: LayoutUtil_1.hp(16),
        lineHeight: LayoutUtil_1.hp(20.29)
    },
    welcomebutton: {
        // backgroundColor: Primary,
        marginTop: LayoutUtil_1.hp(340),
        width: LayoutUtil_1.wp(325)
    },
    welcomeForgetMeButton: {
        // color: "white",
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75),
        fontWeight: "500",
        fontFamily: "Euclid-Circular-A",
        textDecorationLine: "underline",
        textDecorationStyle: "solid"
    },
    otpContainer: {
        marginTop: LayoutUtil_1.hp(20),
        paddingHorizontal: LayoutUtil_1.hp(30),
        height: LayoutUtil_1.hp(40),
        marginBottom: LayoutUtil_1.hp(61)
    },
    underlineStyleBase: {
        width: LayoutUtil_1.wp(40),
        height: LayoutUtil_1.hp(40),
        // color: Primary,
        fontSize: LayoutUtil_1.hp(18),
        borderRadius: LayoutUtil_1.hp(8),
        borderColor: Colors_1["default"].general.primary
    },
    resend: {
        fontWeight: "500",
        fontSize: LayoutUtil_1.hp(14),
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        lineHeight: LayoutUtil_1.hp(17.75)
    },
    noOtp: {
        marginTop: LayoutUtil_1.hp(40),
        justifyContent: "center"
    },
    welcomenoOtp: {
        alignSelf: "center",
        fontWeight: "500",
        // color: Primary,
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75)
    },
    otpText: {
        fontWeight: "500",
        fontSize: LayoutUtil_1.hp(14),
        fontFamily: "Euclid-Circular-A",
        lineHeight: LayoutUtil_1.hp(17.75)
    },
    otp: {
        marginLeft: LayoutUtil_1.hp(100),
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 20.29,
        fontFamily: "Euclid-Circular-A-Bold"
    },
    back: {
        marginLeft: LayoutUtil_1.hp(10),
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 20.29
    },
    backContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    Container: {
        alignItems: "center",
        flexDirection: "row",
        marginLeft: LayoutUtil_1.hp(20)
    },
    verification: {
        width: LayoutUtil_1.wp(321),
        marginTop: LayoutUtil_1.hp(30),
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        marginLeft: LayoutUtil_1.hp(20)
    },
    phoneStyle: {
        alignSelf: "center",
        height: 50,
        width: "90%",
        padding: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        marginBottom: LayoutUtil_1.hp(40)
    },
    textStyle: {
        fontSize: 16,
        padding: 3
    },
    header: {
        marginTop: LayoutUtil_1.hp(0),
        marginBottom: LayoutUtil_1.hp(0)
    },
    otpbutton: {
        marginTop: LayoutUtil_1.hp(40),
        width: LayoutUtil_1.wp(340)
    },
    OTPButton: {
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75),
        fontWeight: "500"
    },
    //  button: {
    //   marginTop: hp(10),
    //   width: wp(325),
    // },
    // sendOTPButton: {
    //   fontSize: hp(14),
    //   lineHeight: hp(17.75),
    //   fontWeight: "500",
    // },
    // button: {
    //   marginTop: hp(10),
    //   width: wp(325),
    // },
    // sendOTPButton: {
    //   fontSize: hp(14),
    //   lineHeight: hp(17.75),
    //   fontWeight: "500",
    // },
    orText: {
        fontSize: 14,
        alignSelf: "center",
        fontWeight: "500",
        marginTop: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(20),
        lineHeight: LayoutUtil_1.hp(18)
    },
    signupOptions: {
        justifyContent: "space-between",
        marginHorizontal: LayoutUtil_1.wp(20),
        marginVertical: LayoutUtil_1.hp(20)
    }
});
