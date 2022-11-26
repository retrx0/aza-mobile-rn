import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { hp, wp } from "../../../common/util/LayoutUtil";

export const SigninStyles = StyleSheet.create({
  sentCode: {
    fontSize: hp(16),
    fontWeight: "400",
    paddingHorizontal: hp(10),
    lineHeight: hp(17.75),
    marginBottom: hp(35),
    marginLeft: hp(20),
  },
  welcome: {
    marginTop: hp(50),
    fontSize: hp(26),
    fontWeight: "bold",
    // color: Primary,
    paddingHorizontal: hp(10),
    lineHeight: hp(30.43),
    marginBottom: hp(10),
    marginLeft: hp(20),
  },

  passwordText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(18),
    lineHeight: hp(20.29),
  },
  welcomebutton: {
    // backgroundColor: Primary,
    marginTop: hp(340),
    width: wp(325),
  },
  welcomeForgetMeButton: {
    // color: "white",
    fontSize: hp(16),
    lineHeight: hp(17.75),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  otpContainer: {
    marginTop: hp(20),
    paddingHorizontal: hp(30),
    height: hp(40),
    marginBottom: hp(61),
  },
  underlineStyleBase: {
    width: wp(40),
    height: hp(40),
    // color: Primary,
    fontSize: hp(20),
    borderRadius: hp(8),
    borderColor: Colors.general.primary,
  },

  resend: {
    fontWeight: "500",
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    lineHeight: hp(17.75),
  },
  noOtp: {
    marginTop: hp(40),
    justifyContent: "center",
  },
  welcomenoOtp: {
    alignSelf: "center",
    fontWeight: "500",
    // color: Primary,
    fontSize: hp(16),
    lineHeight: hp(17.75),
  },
  otpText: {
    fontWeight: "500",
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A",
    lineHeight: hp(17.75),
  },
  otp: {
    marginLeft: hp(100),
    fontSize: hp(18),
    fontWeight: "600",
    lineHeight: 20.29,
    fontFamily: "Euclid-Circular-A-Bold",
  },
  back: {
    marginLeft: hp(10),
    fontSize: hp(18),
    fontWeight: "400",
    lineHeight: 20.29,
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  Container: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: hp(17),
    marginTop: hp(20),
  },

  verification: {
    marginTop: hp(30),
    fontSize: hp(16),
    fontWeight: "400",
    marginLeft: hp(20),
    fontFamily: "Euclid-Circular-A-Medium",
    marginBottom: hp(62),
  },
  phoneStyle: {
    alignSelf: "center",
    height: 50,
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    marginBottom: hp(40),
  },
  textStyle: {
    fontSize: hp(18),
    padding: 3,
  },
  header: {
    marginTop: hp(0),
    marginBottom: hp(0),
  },
  otpbutton: {
    marginTop: hp(40),
    width: wp(340),
  },

  OTPButton: {
    fontSize: hp(16),
    lineHeight: hp(17.75),
    fontWeight: "500",
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
    fontSize: hp(16),
    alignSelf: "center",
    fontWeight: "500",
    marginTop: hp(20),
    marginBottom: hp(20),
    lineHeight: hp(18),
  },
  signupOptions: {
    justifyContent: "space-between",
    marginHorizontal: wp(20),
    marginVertical: hp(20),
  },
});
