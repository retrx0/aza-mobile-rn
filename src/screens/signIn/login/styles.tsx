import { StyleSheet } from "react-native";
import { hp, wp } from "../../../common/utils";
import * as Colors from "../../../common/colors";

export const LoginStyles = StyleSheet.create({
  header: {
    marginTop: hp(200),
  },
  button: {
    marginTop: hp(40),
    width: wp(340),
  },
  sendOTPButton: {
    fontSize: hp(14),
    lineHeight: hp(17.75),
    fontWeight: "500",
  },
  orText: {
    fontSize: 14,
    alignSelf: "center",
    color: Colors.grey,
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
