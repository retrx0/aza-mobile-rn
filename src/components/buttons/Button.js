"use strict";
exports.__esModule = true;
exports.Button = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Button = function (_a) {
    var title = _a.title, onPressButton = _a.onPressButton, isNext = _a.isNext, style = _a.style, styleText = _a.styleText, disabled = _a.disabled;
    var colorScheme = useColorScheme_1["default"]();
    return (<react_native_1.TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPressButton} style={[
            styles.doneButton,
            isNext && styles.nextButton,
            style,
            disabled && {
                backgroundColor: Colors_1["default"][colorScheme].secondaryText
            },
            {
                opacity: disabled ? 0.5 : 1
            },
            style,
        ]}>
      <react_native_1.Text style={[styles.doneText, isNext && styles.nextText, styleText]}>
        {title}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.Button = Button;
var styles = {
    doneText: {
        color: Colors_1["default"].general.secondary,
        fontWeight: "500",
        letterSpacing: LayoutUtil_1.hp(0.5),
        fontSize: LayoutUtil_1.hp(14),
        lineHeight: LayoutUtil_1.hp(18),
        fontFamily: "Euclid-Circular-A-Medium"
    },
    nextText: {
        color: Colors_1["default"].general.secondary
    },
    doneButton: {
        backgroundColor: Colors_1["default"].general.black,
        width: "90%",
        height: LayoutUtil_1.hp(50),
        borderRadius: LayoutUtil_1.hp(10),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    nextButton: {
        backgroundColor: Colors_1["default"].general.primary,
        width: "90%"
    }
};
exports["default"] = exports.Button;
