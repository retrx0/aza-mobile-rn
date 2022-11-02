"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var styles_1 = require("../airtime-screens/styles");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var header_1 = require("../../../../components/text/header");
var input_1 = require("../../../../components/input/input");
var native_1 = require("@react-navigation/native");
var SelectInput_1 = require("../../../../components/input/SelectInput");
var Button_1 = require("../../../../components/buttons/Button");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var Colors_1 = require("../../../../constants/Colors");
function InternetDetail(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var _c = react_1.useState(0), currentIndex = _c[0], setCurrent = _c[1];
    var route = native_1.useRoute();
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var bundles = ["100mb", "200mb", "500mb"];
    var colorScheme = useColorScheme_1["default"]();
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    return (<Themed_1.SafeAreaView style={[CommonStyles_1["default"].parentContainer, styles2.container]}>
      <header_1.Header description="" descriptionStyle={null} headerStyle={null} heading="Subscribe to an internet plan"/>

      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={[styles_1.AIrtimeStyles.input]} labelStyle={styles_1.AIrtimeStyles.label} label="Account/User ID" placeholder="Enter your User ID"/>

      <SelectInput_1["default"] items={bundles} title="Bundle" placeHolder="Choose a bundle" style={[styles_1.AIrtimeStyles.select, styles2.select]}/>
      <input_1.Input icon={null} inputStyle={styles_1.AIrtimeStyles.input} labelStyle={styles_1.AIrtimeStyles.label} label="Amount" placeholder="Enter an amount"/>
      <Themed_1.View style={[
            CommonStyles_1["default"].passwordContainer,
            { bottom: insets.bottom || 45 },
        ]}>
        <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate("Common", { screen: "Confirm" });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            { bottom: 20 },
            CommonStyles_1["default"].button,
        ]}/>
      </Themed_1.View>
    </Themed_1.SafeAreaView>);
}
exports["default"] = InternetDetail;
var styles2 = react_native_1.StyleSheet.create({
    container: {
        paddingTop: 100
    },
    select: {
        marginTop: 20
    }
});
