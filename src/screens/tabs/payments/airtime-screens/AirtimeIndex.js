"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var styles_1 = require("./styles");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var header_1 = require("../../../../components/text/header");
var HeadrImage_1 = require("../sub-components/HeadrImage");
var input_1 = require("../../../../components/input/input");
var MyButton_1 = require("../sub-components/MyButton");
var native_1 = require("@react-navigation/native");
var SelectInput_1 = require("../../../../components/input/SelectInput");
var images_1 = require("../../../../../assets/images");
var CustomSwitch_1 = require("../../../../components/input/CustomSwitch");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
function AirtimeIndex(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var _c = react_1.useState(false), selected = _c[0], setSelected = _c[1];
    var _d = react_1.useState(0), currentIndex = _d[0], setCurrent = _d[1];
    var route = native_1.useRoute();
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var bundles = ["100mb", "200mb", "500mb"];
    var colorScheme = useColorScheme_1["default"]();
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    return (<Themed_1.View style={styles_1.AIrtimeStyles.container}>
        <header_1.Header description="" descriptionStyle={null} headerStyle={null} heading="Select Network Provider"/>
        <react_native_1.ScrollView horizontal style={CommonStyles_1["default"].imageHeaderContainer}>
          <HeadrImage_1["default"] selected={selected} onSelect={function () {
            setSelected(true);
        }} index={0} image={images_1.Mtn} title="MTN"/>
          <HeadrImage_1["default"] selected={false} index={1} image={images_1.Glo} title="Glo"/>
        </react_native_1.ScrollView>
        <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles_1.AIrtimeStyles.input} labelStyle={styles_1.AIrtimeStyles.label} style={{ marginTop: 0 }} label="Phone Number" placeholder="Enter a phone number"/>
        <CustomSwitch_1["default"] title="My number" onValueChange={toggleSwitch} isEnabled={isEnabled}/>
        {route.name == "data" && (<SelectInput_1["default"] items={bundles} title="Bundle" placeHolder="Choose a bundle" style={styles_1.AIrtimeStyles.select}/>)}
        <input_1.Input icon={null} inputStyle={styles_1.AIrtimeStyles.input} labelStyle={styles_1.AIrtimeStyles.label} label="Amount" placeholder="Enter an amount"/>
        <MyButton_1["default"] title="Continue" onPress={function () {
            navigation.navigate("Common", { screen: "Confirm" });
        }} disabled={false}/>
        
      </Themed_1.View>);
}
exports["default"] = AirtimeIndex;
