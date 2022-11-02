"use strict";
exports.__esModule = true;
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var Divider_1 = require("../../../../components/divider/Divider");
var CustomSwitch_1 = require("../../../../components/switch/CustomSwitch");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var SettingsSwitch = function (_a) {
    var text = _a.text, isEnabled = _a.isEnabled, onSwitchToggle = _a.onSwitchToggle;
    return (<>
      <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                justifyContent: "space-between",
                alignSelf: "stretch",
                paddingVertical: 30,
                alignItems: "center"
            },
        ]}>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
          {text}
        </Themed_1.Text>
        <CustomSwitch_1["default"] isEnabled={isEnabled} onSwitchToggle={onSwitchToggle}/>
      </Themed_1.View>
      <Divider_1["default"] />
    </>);
};
exports["default"] = SettingsSwitch;
