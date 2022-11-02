"use strict";
exports.__esModule = true;
exports.TextHeader = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Colors_1 = require("../../constants/Colors");
var TextHeader = function (_a) {
    var label = _a.label, style = _a.style;
    return <react_native_1.Text style={[styles.label, style]}>{label}</react_native_1.Text>;
};
exports.TextHeader = TextHeader;
var styles = react_native_1.StyleSheet.create({
    label: {
        fontSize: 18,
        color: Colors_1["default"].general.primary
    }
});
