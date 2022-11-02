"use strict";
exports.__esModule = true;
exports.CancelButtonWithUnderline = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../components/Themed");
var CancelButtonWithUnderline = function (_a) {
    var title = _a.title, color = _a.color, onPressButton = _a.onPressButton, style = _a.style, styleText = _a.styleText;
    return (<react_native_1.TouchableOpacity onPress={onPressButton} style={[
            {
                backgroundColor: "transparent",
                borderBottomColor: color,
                paddingBottom: 2,
                borderBottomWidth: 1,
                alignSelf: "center",
                marginTop: 3
            },
            style,
        ]}>
      <Themed_1.Text style={[{ fontSize: 14 }, styleText]}>{title}</Themed_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.CancelButtonWithUnderline = CancelButtonWithUnderline;
exports["default"] = exports.CancelButtonWithUnderline;
