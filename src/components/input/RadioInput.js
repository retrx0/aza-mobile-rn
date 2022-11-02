"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
function RadioInput(_a) {
    // const sharedValue=useSharedValue(0)
    var sharedValue = _a.sharedValue;
    var reanimatedStyle = react_native_reanimated_1.useAnimatedStyle(function () {
        var bg = react_native_reanimated_1.interpolateColor(sharedValue.value, [0, 1], ['#ffffff', '#2A9E17']);
        return {
            backgroundColor: bg
        };
    });
    var reanimatedStyle2 = react_native_reanimated_1.useAnimatedStyle(function () {
        var border = react_native_reanimated_1.interpolateColor(sharedValue.value, [0, 1], ['#A6A6A6', '#2A9E17']);
        return {
            borderColor: border
        };
    });
    return (<react_native_reanimated_1["default"].View style={[styles.radioConatiner, reanimatedStyle2]}>
    <react_native_reanimated_1["default"].View style={[styles.radio, reanimatedStyle]}/>
    </react_native_reanimated_1["default"].View>);
}
exports["default"] = RadioInput;
var styles = react_native_1.StyleSheet.create({
    radio: {
        width: 14,
        height: 14,
        borderRadius: 14
    },
    radioConatiner: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20
    }
});
