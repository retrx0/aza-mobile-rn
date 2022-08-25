import { Appearance, Platform, StyleSheet, StatusBar } from "react-native";
import Colors from "../../constants/Colors";
import { hp, wp } from "../util/LayoutUtil";

const CommonStyles = StyleSheet.create({
  archivedBox: {
    marginBottom: 10,
    borderBottomColor: "#121212",
    paddingBottom: 1,
    borderBottomWidth: 1,
  },
  archived: {
    color: "#121212",
    fontFamily: "Euclid-Circular-A",
    fontSize: 12,
    fontWeight: "500",
  },

  archievedContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: hp(20),
  },
  createVaultContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(200),
  },
  archievedVault: {
    flexDirection: "row",
    alignItems: "center",
  },
  addVault: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hp(15),
    justifyContent: "space-between",
  },
  Style: {
    fontSize: hp(24),
    fontWeight: "600",
    lineHeight: hp(30),
    fontFamily: "Euclid-Circular-A-Bold",
    marginBottom: hp(10),
    color: Colors.general.green,
  },
  successStyle: {
    textAlign: "center",
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17),
    fontFamily: "Euclid-Circular-A-Medium",
    width: wp(295),
  },
  archivedStyle: {
    textAlign: "center",
    marginBottom: hp(20),
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17),
    fontFamily: "Euclid-Circular-A",
  },
  cancelStyle: {
    textAlign: "center",
    marginTop: hp(16),
    color: Colors.general.red,
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17),
    fontFamily: "Euclid-Circular-A",
  },
  actionContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 26,
  },
  lockupStyle: {
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17),
    fontFamily: "Euclid-Circular-A-Medium",
    marginTop: hp(10),
  },
  actionStyle: {
    fontSize: hp(24),
    fontWeight: "600",
    lineHeight: hp(30),
    fontFamily: "Euclid-Circular-A-Bold",
  },
  caution: {
    alignSelf: "center",
    marginTop: hp(264),
  },
  passwordContainer: {
    position: "absolute",
    alignSelf: "center",
  },
  everyMonth: {
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(15.22),
    color: "#A6A6A6",
    alignSelf: "center",
    fontFamily: "Euclid-Circular-A",
  },
  SwitchContainer: {
    marginTop: hp(16),
    paddingHorizontal: hp(60),
    marginBottom: hp(23),
    position: "absolute",
    alignSelf: "center",
  },
  Container: {
    paddingHorizontal: hp(20),
  },
  choose: {
    fontWeight: "500",
    alignSelf: "center",
    color: "#A6A6A6",
    paddingRight: wp(10),
    fontSize: hp(14),
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
  },
  period: {
    color: "#4D4D4D",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: hp(17.75),
    marginBottom: hp(12),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
  },
  chooseContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  periodContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  daysContainer: {
    width: wp(360),
    height: hp(200),
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: hp(1),
    borderColor: "white",
    marginBottom: hp(30),
  },

  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: hp(20),
    marginVertical: hp(20),
    marginTop: hp(10),
  },
  inputStyle: {
    color: "#A6A6A6",
    paddingRight: wp(10),
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17.75),
    marginBottom: hp(5),
    fontFamily: "Euclid-Circular-A",
  },
  vaultInput: {
    marginBottom: hp(5),
    marginTop: hp(11),
  },
  // line: {
  //   borderWidth: 0.7,
  //   borderColor: "#EAEAEC",
  // },
  vaultInputcontainer: {
    paddingHorizontal: hp(20),
  },
  vaultInputContainer: {
    paddingHorizontal: hp(20),
    marginBottom: hp(10),
  },
  archieved: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    fontWeight: "400",
    marginRight: hp(60),
  },
  vaultAdd: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    fontWeight: "400",
    marginLeft: hp(150),
  },
  vault: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    fontWeight: "400",
    lineHeight: hp(20),
    textAlign: "center",
    marginBottom: hp(30),
  },
  descriptionStyle: {
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17.75),
    marginBottom: hp(10),
    fontFamily: "Euclid-Circular-A-Medium",
  },
  undraw: {
    marginTop: hp(159),
  },
  createVault: {
    fontSize: hp(14),
    fontWeight: "400",
    lineHeight: hp(17.75),
    marginBottom: hp(158),
  },
  vaultcontainer: {
    flex: hp(1),
    marginTop: hp(20),
  },

  vaultContainer: {
    alignSelf: "center",
    alignItems: "center",
  },

  createNewVault: {
    fontSize: hp(14),
    fontWeight: "400",
    fontFamily: "Euclid-Circular-A-Medium",
    lineHeight: hp(18),
    marginRight: hp(10),
  },
  vaultText: {
    fontSize: hp(16),
    fontWeight: "600",
    lineHeight: hp(20),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginTop: hp(30),
    marginBottom: hp(10),
  },
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
    fontWeight: "600",
    fontSize: hp(26),
    fontFamily: "Euclid-Circular-A-Bold",
    marginLeft: hp(15),
    lineHeight: hp(30),
  },
  phoneText: {
    padding: hp(5),
    margin: hp(4),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginTop: hp(35),
    marginLeft: hp(15),
    fontSize: hp(16),
    fontWeight: "500",
  },

  setUpText: {
    padding: hp(5),
    margin: hp(4),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: hp(15),
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(20),
  },
  genderstyle: {
    marginLeft: hp(18),
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginTop: hp(40),
    fontWeight: "500",
  },

  bodyText: {
    padding: hp(5),
    margin: hp(4),
    fontFamily: "Euclid-Circular-A",
    marginLeft: hp(15),
    fontSize: hp(15.5),
    fontWeight: "400",
    lineHeight: hp(18),
  },
  phoneContainer: {
    marginTop: hp(50),
  },
  iconStyle: {
    marginLeft: 26,
  },
  centerText: {
    width: wp(160),
    left: hp(30),
  },
  // Shadows
  raised: {
    shadowOffset: {
      width: wp(0),
      height: hp(2),
    },
    shadowColor: "#000",
    shadowOpacity: hp(0.08),
    shadowRadius: hp(3),
    elevation: hp(5),
  },
  //Other

  lineDivider: {
    borderWidth: 0.4,
    borderColor: "#EAEAEC",
    marginBottom: hp(10),
    width: wp(370),
    alignSelf: "center",
  },
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
    flex: hp(1),
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
    flex: hp(1),
  },
  button: {
    width: wp(338),
  },
  textProps: {
    alignSelf: "center",
    width: "90%",
    padding: hp(10),
    borderWidth: hp(1),
    borderStyle: "solid",
    borderRadius: hp(5),
    marginBottom: hp(40),
  },
  account: {
    fontSize: hp(16),
    fontWeight: "100",
  },
  login: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A-Bold",
  },

  otherWise: {
    fontSize: hp(18),
  },
  user: {
    marginVertical: hp(20),
  },
  textStyle: {
    fontSize: hp(16),
    fontWeight: "400",
    fontFamily: "Euclid-Circular-A",
  },
  phoneNumber: {
    color: Colors.general.red,
  },
  transaction: {
    fontFamily: "Euclid-Circular-A",
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
    marginBottom: hp(10),
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
    marginTop: hp(50),
  },
  underlineStyleBase: {
    width: wp(40),
    height: hp(40),
    // color: Primary,
    fontSize: hp(18),
    borderRadius: hp(8),
    // borderColor: Primary,
  },

  forgetOTP: {
    alignSelf: "center",
    fontWeight: "500",
    // color: Primary,
    fontSize: hp(14),
    lineHeight: hp(17.75),
  },
  otpText: {
    fontSize: hp(16),
    fontWeight: "400",
    color: Colors.general.primary,
  },
  otp: {
    fontSize: hp(18),
    fontWeight: "500",
    lineHeight: hp(20.29),
    left: 100,
    textAlign: "center",
    fontFamily: "Euclid-Circular-A-Semi-Bold",
  },
  back: {
    marginLeft: hp(10),
    fontSize: hp(16),
    fontWeight: "400",
    lineHeight: hp(20.29),
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  resend: {
    fontWeight: "400",
    textDecorationLine: "underline",
    fontFamily: "Euclid-Circular-A-Bold",
    fontSize: hp(16),
  },

  verification: {
    width: wp(340),
    marginTop: hp(30),
    fontSize: hp(16),
    marginLeft: hp(20),
    marginBottom: hp(32),
    fontFamily: "Euclid-Circular-A-Medium",
    lineHeight: hp(18),
    color: Colors.general.black,
  },
  phoneStyle: {
    alignSelf: "center",
    width: "90%",
    padding: hp(10),
    borderWidth: hp(1),
    borderRadius: hp(5),
    marginBottom: hp(40),
    height: hp(55),
  },

  header: {
    marginTop: hp(0),
    marginBottom: hp(0),
  },
  otpbutton: {
    marginTop: hp(20),
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
    fontSize: hp(18),
    alignSelf: "center",
    fontWeight: "500",
    marginTop: hp(30),
    marginBottom: hp(20),
    lineHeight: hp(18),
    padding: hp(5),
    color: Colors.general.grey,
  },
  signupOptions: {
    justifyContent: "space-between",
    marginHorizontal: wp(20),
    marginVertical: hp(20),
  },
});

export default CommonStyles;
