"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Themed_1 = require("../Themed");
var Header = function (_a) {
    var heading = _a.heading, description = _a.description, style = _a.style, headerStyle = _a.headerStyle, descriptionStyle = _a.descriptionStyle;
    return (<Themed_1.View style={[styles.container, style]}>
      <Themed_1.Text style={[styles.heading, headerStyle]}>{heading}</Themed_1.Text>
      <Themed_1.Text style={[styles.description, descriptionStyle]}>{description}</Themed_1.Text>
    </Themed_1.View>);
};
exports.Header = Header;
var styles = react_native_1.StyleSheet.create({
    container: {
        marginTop: LayoutUtil_1.hp(10),
        paddingHorizontal: LayoutUtil_1.hp(20)
    },
    heading: {
        fontSize: LayoutUtil_1.hp(16),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(20.29)
    },
    description: {
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(22)
    }
});
