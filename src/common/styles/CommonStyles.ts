import { Platform, StyleSheet, StatusBar } from "react-native";
import Colors from "../../constants/Colors";
import { hp, wp } from "../util/LayoutUtil";

const CommonStyles = StyleSheet.create({
  dot: {
    backgroundColor: "#A6A6A6",
  },

  activedot: {
    backgroundColor: Colors.dark.buttonText,
  },

  gameImage: {
    width: wp(200),
    height: hp(200),
  },
  flightcontainer: {
    flexDirection: "row",
    marginLeft: hp(20),
    alignItems: "center",
  },
  flightIconContainer: {
    width: wp(36),
    height: hp(36),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(18),
    backgroundColor: Colors.light.backgroundSecondary,
  },
  flightText: {
    marginLeft: hp(15),
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
  },
  line: {
    borderWidth: hp(0.3),
    marginBottom: hp(10),
    width: wp(370),
    alignSelf: "center",
    marginTop: hp(10),
  },
  transHistory: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(18),
    fontWeight: "600",
    marginTop: hp(10),
  },
  download: {
    fontSize: hp(14),
    fontWeight: "600",
    lineHeight: hp(15),
    fontFamily: "Euclid-Circular-A",
    color: Colors.dark.secondaryText,
  },
  transContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: hp(15),
    alignItems: "center",
    marginBottom: hp(25),
  },
  accountNumber: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(17),
    marginLeft: hp(15),
  },
  doneSelect: {
    width: hp(14),
    height: hp(14),
    backgroundColor: Colors.general.green,
    borderRadius: hp(7),
  },
  onselect: {
    width: hp(20),
    height: hp(20),
    borderRadius: hp(10),
    borderColor: Colors.general.green,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: hp(1),
  },
  selectContainer: {
    width: hp(20),
    height: hp(20),
    borderColor: Colors.dark.secondaryText,
    borderWidth: hp(1),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(10),
  },
  accessContainer: {
    borderBottomWidth: hp(0.3),
    borderColor: "black",
    width: "95%",
    borderTopWidth: hp(0.3),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accessBank: {
    marginTop: hp(10),
    marginBottom: hp(10),
  },
  selectStyle: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(16),
    fontWeight: "500",
    marginTop: hp(30),
    marginBottom: hp(80),
  },
  withdrawSuccessfull: {
    fontFamily: "Euclid-Circular-A",
    fontSize: hp(16),
    fontWeight: "400",
    color: Colors.general.grey,

    alignSelf: "center",
    textAlign: "center",
  },
  seconds: {
    fontSize: hp(14),
    marginTop: hp(3),
  },
  matured: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(24),
    fontWeight: "500",
  },
  time: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(20),
    fontWeight: "400",
  },
  timeContainer: {
    flexDirection: "row",
    marginTop: hp(10),
    alignItems: "center",
  },
  matureContainer: {
    width: wp(355),
    height: hp(100),
    borderWidth: hp(1),
    marginTop: hp(40),
    borderRadius: hp(10),
    alignItems: "center",
    paddingVertical: hp(25),
    marginBottom: hp(20),
    alignSelf: "center",
    borderStyle: "dashed",
  },
  maturity: {
    fontFamily: "Euclid-Circular-A",
    fontSize: hp(14),
    fontWeight: "400",
    lineHeight: hp(15),
    textAlign: "center",
    marginBottom: hp(30),
  },
  lockContainer: {
    width: wp(335),
    height: hp(100),
    borderColor: "grey",
    borderWidth: hp(1),
    marginTop: hp(40),
    borderRadius: hp(10),
    borderStyle: "dashed",
    alignItems: "center",
    paddingVertical: hp(25),
    marginBottom: hp(10),
    alignSelf: "center",
  },
  flightContainer: {
    marginTop: hp(20),
    marginLeft: hp(15),
    paddingHorizontal: hp(10),
  },
  ticket: {
    fontFamily: "Euclid-Circular-A",
    fontSize: hp(16),
    fontWeight: "600",
    lineHeight: hp(17),
  },
  flightAmount: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(26),
    fontWeight: "600",
    lineHeight: hp(30),
  },
  parentContainer: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },

  archivedBox: {
    marginBottom: hp(10),
    borderBottomColor: "#121212",
    paddingBottom: hp(1),
    borderBottomWidth: hp(1),
  },
  addAccount: {
    borderBottomColor: "#121212",
    fontFamily: "Euclid-Circular-A",
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17),
  },
  archived: {
    color: "#121212",
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17),
  },
  newvaultcontainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: hp(20),
    marginBottom: hp(30),
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
    marginLeft: hp(30),
    justifyContent: "center",
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
    fontSize: hp(26),
    fontWeight: "600",
    lineHeight: hp(30),
    fontFamily: "Euclid-Circular-A-Bold",
    marginBottom: hp(10),
    color: Colors.general.green,
  },
  successStyle: {
    textAlign: "center",
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(17),
    fontFamily: "Euclid-Circular-A-Medium",
    width: wp(300),
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
    color: Colors.general.red,
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(17),
    fontFamily: "Euclid-Circular-A",
    marginTop: hp(5),
  },
  actionContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 26,
  },
  lockupStyle: {
    fontSize: hp(14),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
    marginTop: hp(10),
  },
  actionStyle: {
    fontSize: hp(24),
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A-Bold",
  },
  caution: {
    alignSelf: "center",
    marginTop: hp(264),
  },
  passwordContainer: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
  },
  everyMonth: {
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(15.22),
    color: Colors.light.secondaryText,
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
    fontSize: hp(16),
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
    marginBottom: hp(10),
  },
  period: {
    color: "#4D4D4D",
    fontWeight: "400",
    fontSize: hp(16),
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
    width: wp(365),
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: hp(30),
    alignItems: "center",
    height: hp(200),
    borderRadius: hp(10),
  },

  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: hp(20),
  },
  inputStyle: {
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
    borderBottomWidth: hp(0.25),
    paddingVertical: hp(8),
    width: "100%",
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
    marginBottom: 35,
  },
  vaultInputContainer: {
    marginBottom: hp(35),
  },
  confirmation: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    marginLeft: hp(40),
  },
  archieved: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    marginRight: hp(20),
  },

  vaultAdd: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    marginLeft: hp(140),
  },
  topTab: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(25),
    paddingHorizontal: hp(5),
    justifyContent: "space-between",
  },
  withdraw: {
    fontFamily: "Euclid-Circular-A-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    lineHeight: hp(20),
    textAlign: "center",
    marginRight: hp(150),
  },
  vaultTab: {
    fontFamily: "Euclid-Circular-A-Bold",
    fontSize: hp(16),
    fontWeight: "600",
    lineHeight: hp(20),
    textAlign: "center",
    marginRight: hp(130),
  },
  vaultContainerdetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  headervault: {
    marginLeft: hp(80),
    fontFamily: "Euclid-Circular-A-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    lineHeight: hp(20),
    textAlign: "center",
  },
  vaultstyle: {
    fontFamily: "Euclid-Circular-A-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    alignSelf: "center",
    marginLeft: hp(100),
  },
  vault: {
    fontFamily: "Euclid-Circular-A-Bold",
    fontSize: hp(18),
    fontWeight: "400",
    lineHeight: hp(20),
    textAlign: "center",
    marginBottom: hp(30),
  },
  confirmDetails: {
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A-Medium",
    marginTop: hp(30),
    marginBottom: hp(40),
  },
  descriptionStyle: {
    fontSize: hp(16),
    fontWeight: "500",
    marginBottom: hp(40),
    fontFamily: "Euclid-Circular-A-Medium",
  },
  undraw: {
    marginTop: hp(130),
  },
  createVault: {
    fontSize: hp(16),
    fontWeight: "400",
    lineHeight: hp(17.75),
    marginBottom: hp(158),
  },
  vaultcontainer: {
    marginTop: hp(20),
    flex: hp(1),
  },

  vaultContainer: {
    alignSelf: "center",
    alignItems: "center",
  },

  createNewVault: {
    fontSize: hp(16),
    fontWeight: "400",
    fontFamily: "Euclid-Circular-A-Medium",
    lineHeight: hp(18),
    marginRight: hp(10),
  },
  vaultText: {
    fontSize: hp(18),
    fontWeight: "600",
    lineHeight: hp(20),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginTop: hp(30),
    marginBottom: hp(10),
    textAlign: "center",
  },
  //Grid
  container: {
    position: "absolute",
    alignSelf: "center",
  },
  transactionContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: hp(20),
    marginTop: hp(10),
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
    marginLeft: hp(13),
    lineHeight: hp(30),
  },
  phoneText: {
    padding: hp(5),
    margin: hp(4),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginTop: hp(35),
    marginLeft: hp(15),
    fontSize: hp(18),
    fontWeight: "500",
  },

  setUpText: {
    padding: hp(5),
    margin: hp(4),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: hp(15),
    fontSize: hp(18),
    fontWeight: "500",
    lineHeight: hp(20),
  },
  genderstyle: {
    marginLeft: hp(20),
    fontSize: hp(18),
    fontFamily: "Euclid-Circular-A-Medium",
    marginTop: hp(10),
    fontWeight: "500",
  },

  bodyText: {
    padding: hp(3),
    margin: hp(3),
    fontFamily: "Euclid-Circular-A",
    marginLeft: hp(15),
    fontSize: hp(16),
    fontWeight: "500",
    marginBottom: hp(30),
  },
  phoneContainer: {
    marginTop: hp(20),
    marginBottom: hp(10),
  },

  centerText: {
    width: wp(160),
    left: hp(50),
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
    width: "95%",
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
    minHeight: hp(70),
    maxHeight: hp(100),
    marginTop: hp(20),
  },
  wrapperContainer: {
    flex: hp(1),
  },
  toAzabuttonText: {
    color: Colors.general.white,
  },
  toBankbuttonText: {
    color: Colors.general.black,
  },
  toBankbutton: {
    backgroundColor: Colors.general.white,
    borderColor: Colors.general.black,
    borderWidth: 1,
    marginTop: hp(20),
  },
  toAzabutton: {
    borderWidth: 1,
    borderColor: Colors.general.white,
  },

  button: {},
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
    fontSize: hp(14),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  login: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A-Bold",
  },

  otherWise: {
    fontSize: hp(20),
  },
  user: {
    marginVertical: hp(15),
  },
  textStyle: {
    fontSize: hp(18),
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
    fontSize: hp(16),
    fontWeight: "400",
    paddingHorizontal: hp(10),
    lineHeight: hp(17.75),
    marginBottom: hp(35),
    marginLeft: hp(20),
  },
  welcome: {
    marginTop: hp(50),
    fontSize: hp(26),
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
    fontSize: hp(18),
    lineHeight: hp(20.29),
  },
  welcomebutton: {
    // backgroundColor: Primary,
    marginTop: hp(340),
    width: wp(325),
  },
  welcomeOTPButton: {
    // color: "white",
    fontSize: hp(16),
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
    fontSize: hp(20),
    borderRadius: hp(8),
    // borderColor: Primary,
  },

  forgetOTP: {
    alignSelf: "center",
    fontWeight: "500",
    // color: Primary,
    fontSize: hp(16),
    lineHeight: hp(17.75),
  },
  otpText: {
    fontSize: hp(18),
    fontWeight: "400",
    color: Colors.general.primary,
  },
  otp: {
    fontSize: hp(20),
    fontWeight: "500",
    lineHeight: hp(20.29),
    left: hp(100),
    textAlign: "center",
    fontFamily: "Euclid-Circular-A-Semi-Bold",
  },
  back: {
    marginLeft: hp(10),
    fontSize: hp(18),
    fontWeight: "400",
    lineHeight: hp(20.29),
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  resend: {
    fontWeight: "500",
    fontSize: hp(14),
    fontFamily: "Euclid-Circular-A-Bold",
  },

  verification: {
    width: wp(340),
    marginTop: hp(30),
    fontSize: hp(18),
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
    fontSize: hp(16),
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
    fontSize: hp(14),
    alignSelf: "center",
    fontWeight: "500",
    marginTop: hp(15),
    marginBottom: hp(15),
    lineHeight: hp(18),
    color: Colors.general.grey,
  },
  signupOptions: {
    justifyContent: "space-between",
    marginHorizontal: wp(20),
    marginVertical: hp(20),
  },

  //Text/Email Input Forms
  textInput: {
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A",
    fontWeight: "400",
  },
  errorText: {
    fontSize: hp(14),
    color: "red",
    marginTop: 5,
  },
});

export default CommonStyles;
