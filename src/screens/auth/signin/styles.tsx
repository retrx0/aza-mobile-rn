import { StyleSheet } from "react-native";
import { darkGrey, Primary, white } from "../../../common/colors";
import { hp, wp } from "../../../common/utils";

export const SigninStyles = StyleSheet.create({
  sentCode: {
    fontSize: hp(14),
    fontWeight: "400",
    paddingHorizontal: hp(10),
    lineHeight: hp(17.75),
    marginBottom: hp(35),
    marginLeft: hp(20),
  },
  welcome: {
    marginTop: hp(50),
    fontSize: hp(24),
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
    fontSize: hp(16),
    lineHeight: hp(20.29),
  },
  welcomebutton: {
    // backgroundColor: Primary,
    marginTop: hp(340),
    width: wp(325),
  },
  welcomeOTPButton: {
    // color: "white",
    fontSize: hp(14),
    lineHeight: hp(17.75),
    fontWeight: "500",
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
    fontSize: hp(18),
    borderRadius: hp(8),
    borderColor: Primary,
  },

  resend: {
    fontWeight: "500",
    fontSize: hp(14),
  },
  noOtp: {
    marginTop: hp(40),
    justifyContent: "center",
  },
  welcomenoOtp: {
    alignSelf: "center",
    fontWeight: "500",
    // color: Primary,
    fontSize: hp(14),
    lineHeight: hp(17.75),
  },
  otpText: {
    fontWeight: "500",
    fontSize: hp(14),
  },
  otp: {
    marginLeft: hp(90),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
  },
  back: {
    marginLeft: hp(10),
    fontSize: 16,
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
  },

  verification: {
    width: wp(321),
    marginTop: hp(30),
    fontSize: hp(14),
    fontWeight: "400",
    marginLeft: hp(20),
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
    fontSize: 16,
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
    fontSize: hp(14),
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
    fontSize: 14,
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
