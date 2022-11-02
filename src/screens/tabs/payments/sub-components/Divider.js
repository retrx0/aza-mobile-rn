"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var Colors_1 = require("../../../../constants/Colors");
function Divider(_a) {
    var style = _a.style;
    var colorScheme = useColorScheme_1["default"]();
    return (<react_native_1.View style={[
            styles.divider,
            style,
            {
                backgroundColor: Colors_1["default"][colorScheme].disabledButton
            },
        ]}></react_native_1.View>);
}
exports["default"] = Divider;
var styles = react_native_1.StyleSheet.create({
    divider: {
        width: "100%",
        height: 0.5,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto"
    }
});
