"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var Themed_1 = require("../Themed");
var ButtonLg = function (props) {
    return (<react_native_1.TouchableOpacity {...props} style={[styles.button, { backgroundColor: props.color }, props.style]} onPress={props.onPress}>
      <Themed_1.View style={[
            {
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                alignItems: "center"
            },
        ]}>
        <Themed_1.View style={[styles.row, { backgroundColor: "transparent" }]}>
          <Themed_1.View style={[
            CommonStyles_1["default"].iconStyle,
            {
                flex: 1,
                alignItems: "center",
                height: 0,
                width: 0
            },
        ]}>
            {props.icon}
          </Themed_1.View>
          <Themed_1.Text adjustsFontSizeToFit style={[
            CommonStyles_1["default"].centerText,
            {
                color: props.alt ? "black" : "white",
                fontSize: 16,
                flex: 6,
                fontFamily: "Euclid-Circular-A-Semi-Bold"
            },
        ]}>
            {props.title}
          </Themed_1.Text>
        </Themed_1.View>
      </Themed_1.View>
    </react_native_1.TouchableOpacity>);
};
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        width: "90%",
        height: 50,
        marginVertical: 10,
        borderRadius: 10,
        alignSelf: "center"
    }
});
exports["default"] = ButtonLg;
