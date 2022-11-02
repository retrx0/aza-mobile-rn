"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Themed_1 = require("../Themed");
function RegularText(_a) {
    var text = _a.text, style = _a.style;
    return (<Themed_1.Text style={[style, { fontFamily: "Euclid-Circular-A-Semi-Bold" }]}>{text}</Themed_1.Text>);
}
exports["default"] = RegularText;
