import { Appearance, Platform, StyleSheet, StatusBar } from "react-native";
import Colors from "../../constants/Colors";
import { hp, wp } from "../util/utils";

const CommonStyles = StyleSheet.create({
  //Grid
  container: {
    position: "absolute",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  col: {
    flexDirection: "column",
    alignSelf: "center",
    // margin: 5,
    // padding: 5,
  },
  //Texts
  headerText: {
    padding: hp(5),
    margin: hp(4),
    fontWeight: "500",
    fontSize: hp(24),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: hp(15),
  },
  bodyText: {
    padding: hp(5),
    margin: hp(4),
    fontFamily: "Euclid-Circular-A",
    // marginBottom: hp(56),
    // marginTop: hp(40),
    marginLeft: hp(15),
  },
  centerText: {
    textAlign: "center",
  },
  // Shadows
  raised: {
    shadowOffset: {
      width: wp(0),
      height: hp(2),
    },
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: hp(3),
    elevation: hp(5),
  },
  //Other
  separator: {
    marginVertical: hp(10),
    height: hp(1),
    width: wp(335),
    alignSelf: "center",
  },
  //for testing only!
  outlineThisComponent: {
    borderColor: "red",
    borderWidth: hp(1),
  },
  parentcontainer: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    // position: "absolute",
    // alignSelf: "center",
  },
  imageHeaderContainer: {
    marginLeft: hp(20),
    minHeight: hp(70),
    maxHeight: hp(100),
  },
  wrapperContainer: {
    flex: 1,
  },

  textProps: {
    alignSelf: "center",
    height: hp(55),
    width: wp(350),
    padding: hp(10),
    borderWidth: hp(1),
    borderStyle: "solid",
    borderRadius: hp(5),
    alignItems: "center",
  },
  login: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  otherWise: {
    fontSize: hp(18),
  },
  user: {
    justifyContent: "center",
    marginVertical: 20,
  },
  textStyle: {
    fontSize: 16,
    padding: 3,
  },
  phoneNumber: {
    color: Colors.general.red,
  },
  transaction: {
    marginRight: 20,
  },
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

  otpcontainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  underlineStyleBase: {
    width: wp(40),
    height: hp(40),
    // color: Primary,
    fontSize: hp(18),
    borderRadius: hp(8),
    // borderColor: Primary,
  },

  noOtp: {
    marginTop: hp(40),
    justifyContent: "center",
  },
  forgetOTP: {
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
  resend: {
    fontWeight: "bold",
    textDecorationLine: "underline",
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

export default CommonStyles;
