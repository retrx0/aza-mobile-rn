"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Themed_1 = require("../Themed");
var ButtonMd = function (props) {
    return (<react_native_1.TouchableOpacity style={[styles.buttonContainer, { backgroundColor: props.color }]} onPress={props.onPress}>
      <Themed_1.Text style={[styles.buttonText, { color: props.alt ? "black" : "white" }]}>
        {props.title}
      </Themed_1.Text>
    </react_native_1.TouchableOpacity>);
};
var styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        width: LayoutUtil_1.wp(160),
        height: LayoutUtil_1.hp(50),
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1
    },
    buttonText: {
        textAlign: "center",
        margin: 5,
        fontFamily: "Euclid-Circular-A-Semi-Bold",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(18)
    }
});
exports["default"] = ButtonMd;
