"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var Layout_1 = require("../../constants/Layout");
var OnboardingStyles_1 = require("./OnboardingStyles");
var CarouselWrapper = function (props) {
    return (<react_native_1.View style={[{ height: "93%", width: Layout_1["default"].window.width }]}>
      <react_native_1.Image style={[OnboardingStyles_1["default"].image]} source={props.carousel.source}/>
      <react_native_1.Text style={[CommonStyles_1["default"].headerText]}>{props.carousel.heading}</react_native_1.Text>
      <react_native_1.Text style={[CommonStyles_1["default"].bodyText, { width: "90%" }]}>{props.carousel.description}</react_native_1.Text>
    </react_native_1.View>);
};
exports["default"] = CarouselWrapper;
