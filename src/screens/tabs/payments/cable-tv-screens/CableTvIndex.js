"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var styles_1 = require("../airtime-screens/styles");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var header_1 = require("../../../../components/text/header");
var HeadrImage_1 = require("../sub-components/HeadrImage");
var input_1 = require("../../../../components/input/input");
var MyButton_1 = require("../sub-components/MyButton");
var native_1 = require("@react-navigation/native");
var SelectInput_1 = require("../../../../components/input/SelectInput");
var images_1 = require("../../../../../assets/images");
function CableTvIndex(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var _c = react_1.useState(0), currentIndex = _c[0], setCurrent = _c[1];
    var route = native_1.useRoute();
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var bundles = ["100mb", "200mb", "500mb"];
    return (<Themed_1.SafeAreaView style={[CommonStyles_1["default"].parentContainer, styles2.container]}>
      <header_1.Header style={styles_1.AIrtimeStyles.header} description="" descriptionStyle={null} headerStyle={null} heading="Select Cable TV"/>

      <react_native_1.ScrollView horizontal style={CommonStyles_1["default"].imageHeaderContainer}>
        <HeadrImage_1["default"] selected index={0} image={images_1.Ie} title="IE"/>
      </react_native_1.ScrollView>

      <SelectInput_1["default"] items={bundles} title="Subscription Package" placeHolder="Choose a subscription package" style={styles_1.AIrtimeStyles.select}/>

      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={[styles_1.AIrtimeStyles.input]} labelStyle={styles_1.AIrtimeStyles.label} label="Smart Card Number" placeholder="Enter your smart card number"/>

      <MyButton_1["default"] disabled={false} title="Continue" onPress={function () {
            navigation.navigate("Common", { screen: "Confirm" });
        }}/>
    </Themed_1.SafeAreaView>);
}
exports["default"] = CableTvIndex;
var styles2 = react_native_1.StyleSheet.create({
    container: {
        marginTop: 70
    }
});
