"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../components/Themed");
var Safety = require("react-native-safe-area-context");
var NotchResponsive = function () {
    return (<react_native_1.View>
      {react_native_1.Platform.OS === "android" ? (<Safety.SafeAreaView style={{ flex: 0 }}/>) : (<Themed_1.SafeAreaView style={{ flex: 0 }}/>)}
    </react_native_1.View>);
};
exports["default"] = NotchResponsive;
