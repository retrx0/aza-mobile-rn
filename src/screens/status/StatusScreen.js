"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../components/Themed");
var Button_1 = require("../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var svg_1 = require("../../../assets/svg");
var StatusScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var colorScheme = useColorScheme_1["default"]();
    var _b = route.params, statusIcon = _b.statusIcon, status = _b.status, statusMessage = _b.statusMessage, statusMessage2 = _b.statusMessage2, receiptButton = _b.receiptButton, setupRecurringTransfer = _b.setupRecurringTransfer, cancelButton = _b.cancelButton, navigateTo = _b.navigateTo, navigateToParams = _b.navigateToParams;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerShown: false
        });
    }, []);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { alignItems: "center", marginTop: "auto", marginBottom: "auto" },
        ]}>
          {statusIcon === "Success" ? (<svg_1.StatusSuccessIcon />) : (<svg_1.StatusWarningIcon />)}
          <Themed_1.Text style={{
            color: statusIcon === "Success" ? "#2A9E17" : Colors_1["default"][colorScheme].text,
            fontSize: 24,
            marginVertical: 20,
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
            {status}
          </Themed_1.Text>
          <Themed_1.Text style={{
            color: Colors_1["default"][colorScheme].text,
            fontSize: 14,
            textAlign: "center",
            maxWidth: 350,
            fontFamily: "Euclid-Circular-A-Medium"
        }}>
            {statusMessage}
          </Themed_1.Text>

          <Themed_1.Text style={{
            color: Colors_1["default"][colorScheme].text,
            fontSize: 14,
            textAlign: "center",
            marginTop: LayoutUtil_1.hp(25),
            fontFamily: "Euclid-Circular-A-Medium"
        }}>
            {statusMessage2}
          </Themed_1.Text>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(50), width: "100%" }]}>
          {setupRecurringTransfer && (<Button_1["default"] title="Setup Recurring Transfer" onPressButton={function () {
                return navigation.navigate("SetupRecurringTransfer");
            }} styleText={{
                color: Colors_1["default"][colorScheme].text,
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 14
            }} style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: Colors_1["default"][colorScheme].text
            }}/>)}

          <Button_1["default"] title="Continue" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate(navigateTo, navigateToParams); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: LayoutUtil_1.hp(20),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          {receiptButton && (<CancelButtonWithUnderline_1["default"] title="Receipt" color={Colors_1["default"][colorScheme].text} onPressButton={function () { return console.log("called receipt"); }}/>)}
          {cancelButton && (<CancelButtonWithUnderline_1["default"] title="Cancel" styleText={CommonStyles_1["default"].cancelStyle} color={Colors_1["default"][colorScheme].error} onPressButton={function () { return navigation.goBack(); }}/>)}
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = StatusScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
