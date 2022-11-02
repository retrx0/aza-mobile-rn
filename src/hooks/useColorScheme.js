"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
var useColorScheme = function () {
    return react_native_1.useColorScheme();
};
exports["default"] = useColorScheme;
