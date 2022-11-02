"use strict";
exports.__esModule = true;
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../Themed");
var Divider = function () {
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={{
            backgroundColor: "transparent",
            borderBottomWidth: 0.6,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }}/>);
};
exports["default"] = Divider;
