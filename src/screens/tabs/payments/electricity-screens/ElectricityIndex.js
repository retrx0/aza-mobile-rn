"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var styles_1 = require("../airtime-screens/styles");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var header_1 = require("../../../../components/text/header");
var input_1 = require("../../../../components/input/input");
var MyButton_1 = require("../sub-components/MyButton");
var SelectInput_1 = require("../../../../components/input/SelectInput");
var images_1 = require("../../../../../assets/images");
var HeaderImage_1 = require("../sub-components/HeaderImage");
function ElectricityIndex(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var bundles = ["100mb", "200mb", "500mb"];
    return (<Themed_1.SafeAreaView style={[CommonStyles_1["default"].parentContainer, styles2.container]}>
      <header_1.Header style={styles_1.AIrtimeStyles.header} description="" descriptionStyle={null} headerStyle={null} heading="Select electricity provider"/>

      <react_native_1.ScrollView horizontal style={CommonStyles_1["default"].imageHeaderContainer}>
        <HeaderImage_1["default"] selected index={0} image={images_1.Ie} title="IE"/>
      </react_native_1.ScrollView>

      <SelectInput_1["default"] items={bundles} title="Meter Type" placeHolder="Choose a bundle" style={styles_1.AIrtimeStyles.select}/>
      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles_1.AIrtimeStyles.input} labelStyle={styles_1.AIrtimeStyles.label} label="Meter Number" placeholder="Enter your meter number"/>

      <input_1.Input icon={null} inputStyle={styles_1.AIrtimeStyles.input} labelStyle={styles_1.AIrtimeStyles.label} label="Amount" placeholder="Enter an amount"/>
      <MyButton_1["default"] disabled={false} title="Continue" onPress={function () {
            navigation.navigate("Common", { screen: "Confirm" });
        }}/>
    </Themed_1.SafeAreaView>);
}
exports["default"] = ElectricityIndex;
var styles2 = react_native_1.StyleSheet.create({
    container: {
        marginTop: 70
    }
});
