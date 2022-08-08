import { StyleSheet } from "react-native";
import { hp, wp } from "../../../common/utils";
import * as Colors from "../../../common/colors";

export const WelcomeStyles = StyleSheet.create({
  sentCode: {
    fontSize: hp(14),
    fontWeight: "400",
    color: Colors.darkGrey,
    paddingHorizontal: hp(10),
    lineHeight: hp(17.75),
    marginBottom: hp(35),
    marginLeft: hp(20),
  },
  welcome: {
    marginTop: hp(100),
    fontSize: hp(24),
    fontWeight: "bold",
    color: Colors.Primary,
    paddingHorizontal: hp(10),
    lineHeight: hp(30.43),
    marginBottom: hp(10),
    marginLeft: hp(20),
  },
  noOtp: {
    alignSelf: "center",
    fontWeight: "500",
    color: Colors.darkGrey,
    fontSize: hp(14),
    lineHeight: hp(17.75),
  },
  passwordText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(16),
    color: Colors.darkGrey,
    lineHeight: hp(20.29),
  },
  button: {
    backgroundColor: "black",
    marginTop: hp(340),
    width: wp(325),
  },
  sendOTPButton: {
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
    borderColor: Colors.darkGrey,
  },
});
