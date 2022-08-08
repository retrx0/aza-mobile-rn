import { StyleSheet } from "react-native";
import { hp, wp } from "../../../common/utils";
import * as Colors from "../../../common/colors";

export const OtpStyles = StyleSheet.create({
  resend: {
    fontWeight: "500",
    height: hp(20),
    color: Colors.Primary,
    fontSize: hp(14),
  },
  noOtp: {
    alignSelf: "center",
    marginTop: hp(61),
    color: Colors.darkGrey,
    fontSize: hp(14),
  },
  otpText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(16),
    color: Colors.darkGrey,
  },
  otp: {
    marginLeft: hp(90),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
    color: Colors.darkGrey,
  },
  back: {
    marginLeft: hp(10),
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20.29,
    color: Colors.darkGrey,
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  Container: {
    alignItems: "center",
    marginTop: hp(60),
    flexDirection: "row",
    paddingHorizontal: hp(30),
  },
  button: {
    marginTop: hp(20),
    width: wp(325),
  },
  sendOTPButton: {
    fontSize: hp(14),
    lineHeight: hp(17.75),
    fontWeight: "500",
  },
  verification: {
    width: wp(321),
    marginTop: hp(30),
    fontSize: hp(14),
    fontWeight: "400",
    color: "#4D4D4D",
    marginLeft: hp(30),
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
