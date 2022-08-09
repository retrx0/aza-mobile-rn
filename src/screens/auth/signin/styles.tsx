import { StyleSheet } from "react-native";
import { hp, wp } from "../../../common/util/utils";

export const SigninStyles = StyleSheet.create({
  header: {
    marginTop: hp(200),
  },
  button: {
    backgroundColor: "black",
    marginTop: hp(40),
    width: wp(340),
  },
  sendOTPButton: {
    color: "white",
    fontSize: hp(14),
    lineHeight: hp(17.75),
    fontWeight: "500",
  },
  orText: {
    fontSize: 17,
    alignSelf: "center",
    color: "grey",
    fontWeight: "500",
    marginTop: hp(20),
    marginBottom: hp(20),
  },
  signupOptions: {
    justifyContent: "space-between",
    marginHorizontal: wp(20),
    marginVertical: hp(20),
  },
});
