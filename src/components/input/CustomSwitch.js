"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
function CustomSwitch(_a) {
    var onValueChange = _a.onValueChange, isEnabled = _a.isEnabled, title = _a.title;
    return (<react_native_1.View style={styles.container}>
    <react_native_1.Text style={styles.text}>{title}</react_native_1.Text>
      <react_native_1.Switch trackColor={{ "false": "#767577", "true": "#2A9E17" }} thumbColor={"#f4f3f4"} ios_backgroundColor="#f4f3f4" onValueChange={onValueChange} value={isEnabled}/>
    </react_native_1.View>);
}
exports["default"] = CustomSwitch;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 40,
        padding: 10
    },
    text: {
        color: "#A6A6A6",
        marginRight: 20
    }
});
