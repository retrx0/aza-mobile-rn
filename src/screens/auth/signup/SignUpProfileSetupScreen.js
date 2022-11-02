"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var BackButton_1 = require("../../../components/buttons/BackButton");
var Themed_1 = require("../../../components/Themed");
var SignUpInput_1 = require("./components/SignUpInput");
var SignUpProfileSetupScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={{ marginLeft: 20 }}>
        <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>
      </Themed_1.View>
      <Themed_1.View style={[CommonStyles_1["default"].phoneContainer]}>
        <Themed_1.Text style={[CommonStyles_1["default"].headerText]}>Profile setup</Themed_1.Text>
        <Themed_1.Text style={[CommonStyles_1["default"].bodyText]}>Set up your account</Themed_1.Text>
      </Themed_1.View>
      <SignUpInput_1["default"] navigation={navigation} route={route}/>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SignUpProfileSetupScreen;
