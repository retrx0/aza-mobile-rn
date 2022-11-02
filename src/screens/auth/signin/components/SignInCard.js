"use strict";
exports.__esModule = true;
exports.GENDER = exports.SocialSigInCard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var SocialSigInCard = function (_a) {
    var icon = _a.icon, onPress = _a.onPress, style = _a.style, connect = _a.connect;
    return (<react_native_2.TouchableOpacity onPress={onPress} style={styles.signupButtons}>
      {icon}
      <react_native_2.Text>{connect}</react_native_2.Text>
    </react_native_2.TouchableOpacity>);
};
exports.SocialSigInCard = SocialSigInCard;
var styles = react_native_1.StyleSheet.create({
    signupButtons: {
        height: LayoutUtil_1.hp(50),
        borderRadius: 25,
        borderColor: "grey",
        borderWidth: 1,
        marginVertical: 10
    }
});
exports.GENDER = [
    {
        label: "Male",
        value: "male"
    },
];
