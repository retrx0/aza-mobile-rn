import { StyleSheet } from "react-native";
import { hp, wp } from "../../../common/util/utils";
import Colors from "../../../constants/Colors";

const darkGrey = Colors.general.darkGrey;
const primary = Colors.general.primary;

export const OtpStyles = StyleSheet.create({
  resend: {
    fontWeight: "500",
    height: hp(20),
    color: primary,
    fontSize: hp(14),
  },
  noOtp: {
    alignSelf: "center",
    marginTop: hp(61),
    color: darkGrey,
    fontSize: hp(14),
  },
  otp: {
    marginLeft: hp(90),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
    color: darkGrey,
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
    color: darkGrey,
    marginLeft: hp(30),
  },
});
