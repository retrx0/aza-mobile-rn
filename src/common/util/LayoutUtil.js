"use strict";
exports.__esModule = true;
exports.wp = exports.hp = void 0;
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var Layout_1 = require("../../constants/Layout");
var CustomHeight = Layout_1["default"].window.height;
var CustomWidth = Layout_1["default"].window.width;
var hp = function (value) {
    var dimension = (value / CustomHeight) * 100;
    return react_native_responsive_screen_1.heightPercentageToDP(dimension + "%");
};
exports.hp = hp;
var wp = function (value) {
    var dimension = (value / CustomWidth) * 100;
    return react_native_responsive_screen_1.widthPercentageToDP(dimension + "%");
};
exports.wp = wp;
