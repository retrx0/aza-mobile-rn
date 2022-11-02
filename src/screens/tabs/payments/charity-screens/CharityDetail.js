"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var styles_1 = require("../styles");
var svg_1 = require("../../../../../assets/svg");
var input_1 = require("../../../../components/input/input");
var Divider_1 = require("../sub-components/Divider");
var MyButton_1 = require("../sub-components/MyButton");
var native_1 = require("@react-navigation/native");
var CustomSwitch_1 = require("../../../../components/input/CustomSwitch");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var Colors_1 = require("../../../../constants/Colors");
function CharityDetail(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var route = native_1.useRoute();
    return (<Themed_1.View style={styles_1.CharityStyles.container}>
      <Themed_1.View style={styles_1.CharityStyles.detailContainer}>
        <svg_1.InfoIcon />
        <Themed_1.Text style={styles_1.CharityStyles.text}>
          The Chess in Slums, Africa is reimagining education using chess as a
          tool/framework to aid cognition and empower the minds of children in
          impoverished areas of Nigeria.
        </Themed_1.Text>
      </Themed_1.View>
      {route.name == "For Someone Else" && (<>
          <input_1.Input style={styles_1.CharityStyles.mainInput} icon={null} inputStyle={styles_1.CharityStyles.input} labelStyle={styles_1.CharityStyles.label} label="" placeholder="Name and Surname"/>

          <input_1.Input style={styles_1.CharityStyles.mainInput} icon={null} inputStyle={styles_1.CharityStyles.input} labelStyle={styles_1.CharityStyles.label} label="" placeholder="Email Address"/>
        </>)}
      <input_1.Input style={styles_1.CharityStyles.mainInput} icon={null} inputStyle={styles_1.CharityStyles.input} labelStyle={styles_1.CharityStyles.label} label="" placeholder="Donation Amount"/>

      <Themed_1.View style={styles_1.CharityStyles.suggestions}>
        <react_native_1.TouchableOpacity style={styles_1.CharityStyles.mainSuggestion}>
          <Themed_1.Text style={styles_1.CharityStyles.amount}>₦100</Themed_1.Text>
        </react_native_1.TouchableOpacity>

        <react_native_1.TouchableOpacity style={styles_1.CharityStyles.mainSuggestion}>
          <Themed_1.Text style={styles_1.CharityStyles.amount}>₦200</Themed_1.Text>
        </react_native_1.TouchableOpacity>

        <react_native_1.TouchableOpacity style={styles_1.CharityStyles.mainSuggestion}>
          <Themed_1.Text style={styles_1.CharityStyles.amount}>₦500</Themed_1.Text>
        </react_native_1.TouchableOpacity>

        <react_native_1.TouchableOpacity style={styles_1.CharityStyles.mainSuggestion}>
          <Themed_1.Text style={styles_1.CharityStyles.amount}>₦1000</Themed_1.Text>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>

      <Themed_1.View style={styles_1.CharityStyles.buttons}>
        <Themed_1.View style={styles_1.CharityStyles.check}>
          <CustomSwitch_1["default"] title="Recurring monthly donation" onValueChange={toggleSwitch} isEnabled={isEnabled}/>
        </Themed_1.View>
        <Divider_1["default"] style={{
            marginTop: 10,
            marginBottom: 20,
            width: "85%"
        }}/>
        <MyButton_1["default"] style={styles_1.CharityStyles.btn} disabled={false} title="Continue" onPress={function () {
            navigation.navigate("Common", { screen: "Confirm" });
        }}/>
        <CancelButtonWithUnderline_1["default"] onPressButton={function () {
            navigation.goBack();
        }} style={{ borderBottomColor: Colors_1["default"].general.red, marginBottom: 20 }} title="Cancel" styleText={CommonStyles_1["default"].cancelStyle}/>
      </Themed_1.View>
    </Themed_1.View>);
}
exports["default"] = CharityDetail;
