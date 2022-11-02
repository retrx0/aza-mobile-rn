"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Colors_1 = require("../../constants/Colors");
var Themed_1 = require("../Themed");
var WelcomeScrollIndicator = function (props) {
    var backgroundColor = props.active ? Colors_1["default"].general.black : Colors_1["default"].general.grey;
    return (<Themed_1.View style={[
            {
                backgroundColor: backgroundColor,
                borderColor: backgroundColor,
                borderStyle: "solid",
                borderWidth: 0.8,
                width: LayoutUtil_1.wp(60),
                marginTop: LayoutUtil_1.hp(20),
                margin: LayoutUtil_1.hp(5)
            },
        ]}></Themed_1.View>);
};
exports["default"] = WelcomeScrollIndicator;
