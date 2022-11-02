"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../Themed");
var svg_1 = require("../../../assets/svg");
function MenuList(_a) {
    var heading = _a.heading, subHeading = _a.subHeading, onPress = _a.onPress;
    return (<react_native_1.TouchableOpacity onPress={onPress} style={styles.listContainer}>
      <Themed_1.View>
        <Themed_1.Text style={styles.heading}>{heading}</Themed_1.Text>
        <Themed_1.Text style={styles.subHeading}>{subHeading}</Themed_1.Text>
      </Themed_1.View>
      <svg_1.ArrowFowardIcon />
    </react_native_1.TouchableOpacity>);
}
exports["default"] = MenuList;
var styles = react_native_1.StyleSheet.create({
    listContainer: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    heading: {
        fontSize: 12,
        color: "#A6A6A6"
    },
    subHeading: {}
});
