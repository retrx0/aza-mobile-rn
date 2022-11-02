"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../util/LayoutUtil");
var CommonStyles = react_native_1.StyleSheet.create({
    flightcontainer: {
        flexDirection: "row",
        marginLeft: LayoutUtil_1.hp(20),
        alignItems: "center"
    },
    flightIconContainer: {
        width: LayoutUtil_1.wp(36),
        height: LayoutUtil_1.hp(36),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: LayoutUtil_1.hp(18),
        backgroundColor: Colors_1["default"].light.backgroundSecondary
    },
    flightText: {
        marginLeft: LayoutUtil_1.hp(15),
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A"
    },
    line: {
        borderWidth: LayoutUtil_1.hp(0.3),
        borderColor: "#EAEAEC",
        marginBottom: LayoutUtil_1.hp(10),
        width: LayoutUtil_1.wp(370),
        alignSelf: "center",
        marginTop: LayoutUtil_1.hp(10)
    },
    transHistory: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "600",
        marginTop: LayoutUtil_1.hp(10)
    },
    download: {
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(15),
        fontFamily: "Euclid-Circular-A",
        color: Colors_1["default"].dark.secondaryText
    },
    transContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: LayoutUtil_1.hp(15),
        alignItems: "center",
        marginBottom: LayoutUtil_1.hp(25)
    },
    accountNumber: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17),
        marginLeft: LayoutUtil_1.hp(15)
    },
    doneSelect: {
        width: LayoutUtil_1.hp(14),
        height: LayoutUtil_1.hp(14),
        backgroundColor: Colors_1["default"].general.green,
        borderRadius: LayoutUtil_1.hp(7)
    },
    onselect: {
        width: LayoutUtil_1.hp(20),
        height: LayoutUtil_1.hp(20),
        borderRadius: LayoutUtil_1.hp(10),
        borderColor: Colors_1["default"].general.green,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: LayoutUtil_1.hp(1)
    },
    selectContainer: {
        width: LayoutUtil_1.hp(20),
        height: LayoutUtil_1.hp(20),
        borderColor: Colors_1["default"].dark.secondaryText,
        borderWidth: LayoutUtil_1.hp(1),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: LayoutUtil_1.hp(10)
    },
    accessContainer: {
        borderBottomWidth: LayoutUtil_1.hp(0.4),
        borderColor: Colors_1["default"].dark.separator,
        width: LayoutUtil_1.wp(335),
        borderTopWidth: LayoutUtil_1.hp(0.4),
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    accessBank: {
        marginTop: LayoutUtil_1.hp(10),
        marginBottom: LayoutUtil_1.hp(10)
    },
    selectStyle: {
        fontFamily: "Euclid-Circular-A",
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17),
        marginLeft: LayoutUtil_1.hp(24),
        marginTop: LayoutUtil_1.hp(30),
        marginBottom: LayoutUtil_1.hp(30)
    },
    withdrawSuccessfull: {
        fontFamily: "Euclid-Circular-A",
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(17),
        color: Colors_1["default"].general.grey,
        marginLeft: LayoutUtil_1.hp(20),
        width: LayoutUtil_1.wp(307)
    },
    seconds: {
        fontSize: LayoutUtil_1.hp(12),
        marginTop: 3
    },
    matured: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(24),
        fontWeight: "500"
    },
    time: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(18),
        fontWeight: "400"
    },
    timeContainer: {
        flexDirection: "row",
        marginTop: LayoutUtil_1.hp(10),
        alignItems: "center"
    },
    matureContainer: {
        width: LayoutUtil_1.wp(355),
        height: LayoutUtil_1.hp(100),
        borderWidth: LayoutUtil_1.hp(1),
        marginTop: LayoutUtil_1.hp(40),
        borderRadius: LayoutUtil_1.hp(10),
        alignItems: "center",
        paddingVertical: LayoutUtil_1.hp(25),
        marginBottom: LayoutUtil_1.hp(20),
        alignSelf: "center",
        borderStyle: "dashed"
    },
    maturity: {
        fontFamily: "Euclid-Circular-A",
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(15),
        textAlign: "center",
        marginBottom: LayoutUtil_1.hp(30)
    },
    lockContainer: {
        width: LayoutUtil_1.wp(355),
        height: LayoutUtil_1.hp(100),
        borderColor: "grey",
        borderWidth: LayoutUtil_1.hp(1),
        marginTop: LayoutUtil_1.hp(40),
        borderRadius: LayoutUtil_1.hp(10),
        borderStyle: "dashed",
        alignItems: "center",
        paddingVertical: LayoutUtil_1.hp(25),
        marginBottom: LayoutUtil_1.hp(10),
        alignSelf: "center"
    },
    flightContainer: {
        marginTop: LayoutUtil_1.hp(20),
        marginLeft: LayoutUtil_1.hp(15),
        paddingHorizontal: LayoutUtil_1.hp(10)
    },
    ticket: {
        fontFamily: "Euclid-Circular-A",
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(17)
    },
    flightAmount: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(24),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(30)
    },
    parentContainer: {
        flex: 1,
        paddingTop: react_native_1.Platform.OS == "android" ? react_native_1.StatusBar.currentHeight : 0
    },
    archivedBox: {
        marginBottom: LayoutUtil_1.hp(10),
        borderBottomColor: "#121212",
        paddingBottom: LayoutUtil_1.hp(1),
        borderBottomWidth: LayoutUtil_1.hp(1)
    },
    addAccount: {
        color: "#121212",
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17)
    },
    archived: {
        color: "#121212",
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17)
    },
    newvaultcontainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(30)
    },
    archievedContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: LayoutUtil_1.hp(20)
    },
    createVaultContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: LayoutUtil_1.hp(30),
        justifyContent: "center"
    },
    archievedVault: {
        flexDirection: "row",
        alignItems: "center"
    },
    addVault: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: LayoutUtil_1.hp(15),
        justifyContent: "space-between"
    },
    Style: {
        fontSize: LayoutUtil_1.hp(24),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(30),
        fontFamily: "Euclid-Circular-A-Bold",
        marginBottom: LayoutUtil_1.hp(10),
        color: Colors_1["default"].general.green
    },
    successStyle: {
        textAlign: "center",
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17),
        fontFamily: "Euclid-Circular-A-Medium",
        width: LayoutUtil_1.wp(300)
    },
    archivedStyle: {
        textAlign: "center",
        marginBottom: LayoutUtil_1.hp(20),
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17),
        fontFamily: "Euclid-Circular-A"
    },
    cancelStyle: {
        textAlign: "center",
        marginTop: LayoutUtil_1.hp(5),
        color: Colors_1["default"].general.red,
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17),
        fontFamily: "Euclid-Circular-A-Semi-Bold"
    },
    actionContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 26
    },
    lockupStyle: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17),
        fontFamily: "Euclid-Circular-A-Medium",
        marginTop: LayoutUtil_1.hp(10)
    },
    actionStyle: {
        fontSize: LayoutUtil_1.hp(24),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(30),
        fontFamily: "Euclid-Circular-A-Bold"
    },
    caution: {
        alignSelf: "center",
        marginTop: LayoutUtil_1.hp(264)
    },
    passwordContainer: {
        position: "absolute",
        alignSelf: "center"
    },
    everyMonth: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(15.22),
        color: Colors_1["default"].light.secondaryText,
        alignSelf: "center",
        fontFamily: "Euclid-Circular-A"
    },
    SwitchContainer: {
        marginTop: LayoutUtil_1.hp(16),
        paddingHorizontal: LayoutUtil_1.hp(60),
        marginBottom: LayoutUtil_1.hp(23),
        position: "absolute",
        alignSelf: "center"
    },
    Container: {
        paddingHorizontal: LayoutUtil_1.hp(20)
    },
    choose: {
        fontWeight: "500",
        alignSelf: "center",
        color: "#A6A6A6",
        paddingRight: LayoutUtil_1.wp(10),
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A",
        marginBottom: LayoutUtil_1.hp(10)
    },
    period: {
        color: "#4D4D4D",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: LayoutUtil_1.hp(17.75),
        marginBottom: LayoutUtil_1.hp(12),
        fontFamily: "Euclid-Circular-A-Semi-Bold"
    },
    chooseContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    periodContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    daysContainer: {
        width: LayoutUtil_1.wp(365),
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: LayoutUtil_1.hp(30),
        alignItems: "center",
        height: LayoutUtil_1.hp(200),
        borderRadius: LayoutUtil_1.hp(10)
    },
    percentageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: LayoutUtil_1.hp(20),
        marginVertical: LayoutUtil_1.hp(20),
        marginTop: LayoutUtil_1.hp(10),
        paddingHorizontal: LayoutUtil_1.hp(5)
    },
    inputStyle: {
        paddingRight: LayoutUtil_1.wp(10),
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A-Bold",
        borderBottomWidth: LayoutUtil_1.hp(0.3),
        borderColor: Colors_1["default"].light.secondaryText,
        paddingVertical: LayoutUtil_1.hp(8)
    },
    vaultInput: {
        marginBottom: LayoutUtil_1.hp(5),
        marginTop: LayoutUtil_1.hp(11)
    },
    // line: {
    //   borderWidth: 0.7,
    //   borderColor: "#EAEAEC",
    // },
    vaultInputcontainer: {
        paddingHorizontal: LayoutUtil_1.hp(20)
    },
    vaultInputContainer: {
        paddingHorizontal: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(10)
    },
    confirmation: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        alignSelf: "center",
        marginLeft: LayoutUtil_1.hp(40)
    },
    archieved: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        marginRight: LayoutUtil_1.hp(20)
    },
    vaultAdd: {
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        marginLeft: LayoutUtil_1.hp(150)
    },
    topTab: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: LayoutUtil_1.hp(30),
        paddingHorizontal: LayoutUtil_1.hp(5),
        justifyContent: "space-between"
    },
    withdraw: {
        fontFamily: "Euclid-Circular-A-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(20),
        textAlign: "center",
        marginRight: LayoutUtil_1.hp(160)
    },
    vaultTab: {
        fontFamily: "Euclid-Circular-A-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(20),
        textAlign: "center",
        marginRight: LayoutUtil_1.hp(180)
    },
    vaultContainerdetails: {
        flexDirection: "row",
        alignItems: "center"
    },
    headervault: {
        marginLeft: LayoutUtil_1.hp(80),
        fontFamily: "Euclid-Circular-A-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(20),
        textAlign: "center"
    },
    vaultstyle: {
        fontFamily: "Euclid-Circular-A-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        alignSelf: "center",
        marginLeft: LayoutUtil_1.hp(100)
    },
    vault: {
        fontFamily: "Euclid-Circular-A-Bold",
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(20),
        textAlign: "center",
        marginBottom: LayoutUtil_1.hp(30)
    },
    confirmDetails: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A-Medium",
        marginLeft: LayoutUtil_1.hp(18),
        marginTop: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(30)
    },
    descriptionStyle: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        marginBottom: LayoutUtil_1.hp(5),
        fontFamily: "Euclid-Circular-A-Medium",
        marginLeft: LayoutUtil_1.hp(20)
    },
    undraw: {
        marginTop: LayoutUtil_1.hp(130)
    },
    createVault: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(17.75),
        marginBottom: LayoutUtil_1.hp(158)
    },
    vaultcontainer: {
        marginTop: LayoutUtil_1.hp(20),
        flex: 1
    },
    vaultContainer: {
        alignSelf: "center",
        alignItems: "center"
    },
    createNewVault: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        fontFamily: "Euclid-Circular-A-Medium",
        lineHeight: LayoutUtil_1.hp(18),
        marginRight: LayoutUtil_1.hp(10)
    },
    vaultText: {
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(20),
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        marginTop: LayoutUtil_1.hp(30),
        marginBottom: LayoutUtil_1.hp(10),
        textAlign: "center"
    },
    //Grid
    container: {
        position: "absolute",
        alignSelf: "center"
    },
    transactionContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: LayoutUtil_1.hp(20),
        marginTop: LayoutUtil_1.hp(10)
    },
    row: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center"
    },
    col: {
        flexDirection: "column",
        alignSelf: "center"
    },
    //Texts
    headerText: {
        padding: LayoutUtil_1.hp(5),
        fontWeight: "600",
        fontSize: LayoutUtil_1.hp(26),
        fontFamily: "Euclid-Circular-A-Bold",
        marginLeft: LayoutUtil_1.hp(15),
        lineHeight: LayoutUtil_1.hp(30)
    },
    phoneText: {
        padding: LayoutUtil_1.hp(5),
        margin: LayoutUtil_1.hp(4),
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        marginTop: LayoutUtil_1.hp(35),
        marginLeft: LayoutUtil_1.hp(15),
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "500"
    },
    setUpText: {
        padding: LayoutUtil_1.hp(5),
        margin: LayoutUtil_1.hp(4),
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        marginLeft: LayoutUtil_1.hp(15),
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(20)
    },
    genderstyle: {
        marginLeft: LayoutUtil_1.hp(18),
        fontSize: LayoutUtil_1.hp(16),
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        marginTop: LayoutUtil_1.hp(10),
        fontWeight: "500"
    },
    bodyText: {
        padding: LayoutUtil_1.hp(5),
        margin: LayoutUtil_1.hp(4),
        fontFamily: "Euclid-Circular-A",
        marginLeft: LayoutUtil_1.hp(15),
        fontSize: LayoutUtil_1.hp(15.5),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(18)
    },
    phoneContainer: {
        marginTop: LayoutUtil_1.hp(30)
    },
    iconStyle: {
        marginLeft: 26
    },
    centerText: {
        width: LayoutUtil_1.wp(160),
        left: LayoutUtil_1.hp(30)
    },
    // Shadows
    raised: {
        shadowOffset: {
            width: LayoutUtil_1.wp(0),
            height: LayoutUtil_1.hp(2)
        },
        shadowColor: "#000",
        shadowOpacity: LayoutUtil_1.hp(0.08),
        shadowRadius: LayoutUtil_1.hp(3),
        elevation: LayoutUtil_1.hp(5)
    },
    //Other
    lineDivider: {
        borderWidth: 0.4,
        borderColor: "#EAEAEC",
        width: LayoutUtil_1.wp(370),
        alignSelf: "center"
    },
    separator: {
        marginVertical: LayoutUtil_1.hp(10),
        height: LayoutUtil_1.hp(1),
        width: LayoutUtil_1.wp(335),
        alignSelf: "center"
    },
    //for testing only!
    outlineThisComponent: {
        borderColor: "red",
        borderWidth: LayoutUtil_1.hp(1)
    },
    parentcontainer: {
        flex: LayoutUtil_1.hp(1),
        paddingTop: react_native_1.Platform.OS == "android" ? react_native_1.StatusBar.currentHeight : 0
    },
    imageHeaderContainer: {
        marginLeft: LayoutUtil_1.hp(20),
        minHeight: LayoutUtil_1.hp(70),
        maxHeight: LayoutUtil_1.hp(100)
    },
    wrapperContainer: {
        flex: LayoutUtil_1.hp(1)
    },
    toAzabuttonText: {
        color: Colors_1["default"].general.white
    },
    toBankbuttonText: {
        color: Colors_1["default"].general.black
    },
    toBankbutton: {
        width: LayoutUtil_1.wp(338),
        backgroundColor: Colors_1["default"].general.white,
        borderColor: Colors_1["default"].general.black,
        borderWidth: 1
    },
    toAzabutton: {
        width: LayoutUtil_1.wp(338),
        borderWidth: 1,
        borderColor: Colors_1["default"].general.white
    },
    button: {
        width: LayoutUtil_1.wp(338),
        marginTop: LayoutUtil_1.hp(10)
    },
    textProps: {
        alignSelf: "center",
        width: "90%",
        padding: LayoutUtil_1.hp(10),
        borderWidth: LayoutUtil_1.hp(1),
        borderStyle: "solid",
        borderRadius: LayoutUtil_1.hp(5),
        marginBottom: LayoutUtil_1.hp(40)
    },
    account: {
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "100"
    },
    login: {
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: LayoutUtil_1.hp(16),
        fontFamily: "Euclid-Circular-A-Bold"
    },
    otherWise: {
        fontSize: LayoutUtil_1.hp(18)
    },
    user: {
        marginVertical: LayoutUtil_1.hp(20)
    },
    textStyle: {
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        fontFamily: "Euclid-Circular-A"
    },
    phoneNumber: {
        color: Colors_1["default"].general.red
    },
    transaction: {
        fontFamily: "Euclid-Circular-A"
    },
    sentCode: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        paddingHorizontal: LayoutUtil_1.hp(10),
        lineHeight: LayoutUtil_1.hp(17.75),
        marginBottom: LayoutUtil_1.hp(35),
        marginLeft: LayoutUtil_1.hp(20)
    },
    welcome: {
        marginTop: LayoutUtil_1.hp(50),
        fontSize: LayoutUtil_1.hp(24),
        fontWeight: "bold",
        // color: Primary,
        paddingHorizontal: LayoutUtil_1.hp(10),
        lineHeight: LayoutUtil_1.hp(30.43),
        marginBottom: LayoutUtil_1.hp(10),
        marginLeft: LayoutUtil_1.hp(20)
    },
    passwordText: {
        marginBottom: LayoutUtil_1.hp(10),
        fontWeight: "500",
        fontSize: LayoutUtil_1.hp(16),
        lineHeight: LayoutUtil_1.hp(20.29)
    },
    welcomebutton: {
        // backgroundColor: Primary,
        marginTop: LayoutUtil_1.hp(340),
        width: LayoutUtil_1.wp(325)
    },
    welcomeOTPButton: {
        // color: "white",
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75),
        fontWeight: "500"
    },
    otpContainer: {
        marginTop: LayoutUtil_1.hp(20),
        paddingHorizontal: LayoutUtil_1.hp(30),
        height: LayoutUtil_1.hp(40),
        marginBottom: LayoutUtil_1.hp(61)
    },
    otpcontainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: LayoutUtil_1.hp(50)
    },
    underlineStyleBase: {
        width: LayoutUtil_1.wp(40),
        height: LayoutUtil_1.hp(40),
        // color: Primary,
        fontSize: LayoutUtil_1.hp(18),
        borderRadius: LayoutUtil_1.hp(8)
    },
    forgetOTP: {
        alignSelf: "center",
        fontWeight: "500",
        // color: Primary,
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75)
    },
    otpText: {
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        color: Colors_1["default"].general.primary
    },
    otp: {
        fontSize: LayoutUtil_1.hp(18),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(20.29),
        left: 100,
        textAlign: "center",
        fontFamily: "Euclid-Circular-A-Semi-Bold"
    },
    back: {
        marginLeft: LayoutUtil_1.hp(10),
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(20.29)
    },
    backContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    resend: {
        fontWeight: "400",
        fontFamily: "Euclid-Circular-A",
        fontSize: LayoutUtil_1.hp(14)
    },
    verification: {
        width: LayoutUtil_1.wp(340),
        marginTop: LayoutUtil_1.hp(30),
        fontSize: LayoutUtil_1.hp(16),
        marginLeft: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(32),
        fontFamily: "Euclid-Circular-A-Medium",
        lineHeight: LayoutUtil_1.hp(18),
        color: Colors_1["default"].general.black
    },
    phoneStyle: {
        alignSelf: "center",
        width: "90%",
        padding: LayoutUtil_1.hp(10),
        borderWidth: LayoutUtil_1.hp(1),
        borderRadius: LayoutUtil_1.hp(5),
        marginBottom: LayoutUtil_1.hp(40),
        height: LayoutUtil_1.hp(55)
    },
    header: {
        marginTop: LayoutUtil_1.hp(0),
        marginBottom: LayoutUtil_1.hp(0)
    },
    otpbutton: {
        marginTop: LayoutUtil_1.hp(20)
    },
    OTPButton: {
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(17.75),
        fontWeight: "500"
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
        fontSize: LayoutUtil_1.hp(18),
        alignSelf: "center",
        fontWeight: "500",
        marginTop: LayoutUtil_1.hp(30),
        marginBottom: LayoutUtil_1.hp(20),
        lineHeight: LayoutUtil_1.hp(18),
        padding: LayoutUtil_1.hp(5),
        color: Colors_1["default"].general.grey
    },
    signupOptions: {
        justifyContent: "space-between",
        marginHorizontal: LayoutUtil_1.wp(20),
        marginVertical: LayoutUtil_1.hp(20)
    }
});
exports["default"] = CommonStyles;
