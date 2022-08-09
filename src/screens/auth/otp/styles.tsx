import { StyleSheet } from "react-native";
import { hp, wp } from "../../../common/util/utils";

export const OtpStyles = StyleSheet.create({
  underlineStyleHighLighted: {
    borderColor: "blue",
  },
  resend: {
    fontWeight: "500",
    height: hp(20),
    color: "#121212",
    fontSize: hp(14),
  },
  noOtp: {
    alignSelf: "center",
    marginTop: hp(61),
    color: "#4D4D4D",
    fontSize: hp(14),
  },
  otpText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(16),
    color: "#4D4D4D",
  },
  otp: {
    marginLeft: hp(90),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
    color: "#4D4D4D",
  },
  back: {
    marginLeft: hp(10),
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20.29,
    color: "#4D4D4D",
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
    backgroundColor: "black",
    marginTop: hp(20),
    width: wp(325),
  },
  sendOTPButton: {
    color: "white",
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
    borderColor: "#121212",
  },
});
