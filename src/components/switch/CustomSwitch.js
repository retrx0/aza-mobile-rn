"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var CustomSwitch = function (_a) {
    var isEnabled = _a.isEnabled, onSwitchToggle = _a.onSwitchToggle;
    var colorScheme = useColorScheme_1["default"]();
    var switchColor = Colors_1["default"][colorScheme].backgroundSecondary;
    var switchOnColor = Colors_1["default"][colorScheme].success;
    return (<react_native_1.Switch trackColor={{ "false": switchColor, "true": switchOnColor }} thumbColor={isEnabled ? "white" : "grey"} ios_backgroundColor={switchColor} onValueChange={onSwitchToggle} value={isEnabled}/>);
};
exports["default"] = CustomSwitch;
