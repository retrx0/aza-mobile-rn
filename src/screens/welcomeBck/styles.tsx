import { StyleSheet } from "react-native";
import { hp, wp } from "../../common/utils";

export const WelcomeStyles = StyleSheet.create({
  sentCode: {
    fontSize: hp(14),
    fontWeight: "400",
    color: "#4D4D4D",
    paddingHorizontal: hp(10),
    lineHeight: hp(17.75),
    marginBottom: hp(35),
    marginLeft: hp(20),
  },
  welcome: {
    marginTop: hp(100),
    fontSize: hp(24),
    fontWeight: "bold",
    color: "#121212",
    paddingHorizontal: hp(10),
    lineHeight: hp(30.43),
    marginBottom: hp(10),
    marginLeft: hp(20),
  },
  noOtp: {
    alignSelf: "center",
    fontWeight: "500",
    color: "#121212",
    fontSize: hp(14),
    lineHeight: hp(17.75),
  },
  passwordText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(16),
    color: "#4D4D4D",
    lineHeight: hp(20.29),
  },
  button: {
    backgroundColor: "black",
    marginTop: hp(340),
    width: wp(325),
  },
  sendOTPButton: {
    color: "white",
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
    color: "black",
    fontSize: hp(18),
    borderRadius: hp(8),
    borderColor: "#121212",
  },
});
