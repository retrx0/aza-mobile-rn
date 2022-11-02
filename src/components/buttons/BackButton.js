"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../assets/svg");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Colors_1 = require("../../constants/Colors");
var Themed_1 = require("../Themed");
var BackButton = function (_a) {
    var style = _a.style, onPress = _a.onPress;
    var color = Themed_1.useThemeColor({ light: Colors_1["default"].light.text, dark: Colors_1["default"].dark.text }, "text");
    return (<react_native_1.TouchableOpacity style={[styles.backContainer, style]} onPress={onPress}>
      <svg_1.BackIcon color={color} size={14}/>
      <Themed_1.Text style={styles.back}>Back</Themed_1.Text>
    </react_native_1.TouchableOpacity>);
};
var styles = react_native_1.StyleSheet.create({
    back: {
        marginLeft: LayoutUtil_1.hp(10),
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "400",
        lineHeight: 20.29,
        fontFamily: "Euclid-Circular-A"
    },
    backContainer: {
        alignItems: "center",
        flexDirection: "row"
    }
});
exports["default"] = BackButton;
