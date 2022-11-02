"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Colors_1 = require("../../constants/Colors");
var Themed_1 = require("../../components/Themed");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Input = function (_a) {
    var label = _a.label, style = _a.style, labelStyle = _a.labelStyle, placeholder = _a.placeholder, inputStyle = _a.inputStyle, icon = _a.icon, isPhone = _a.isPhone, containerStyle = _a.containerStyle, rest = __rest(_a, ["label", "style", "labelStyle", "placeholder", "inputStyle", "icon", "isPhone", "containerStyle"]);
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[styles.container, style, containerStyle]}>
      <Themed_1.Text style={[styles.label, labelStyle]}>{label}</Themed_1.Text>
      {isPhone ? (<Themed_1.View style={[styles.textInput, isPhone && styles.isPhone]}>
          <Themed_1.View style={styles.divider}/>
          <react_native_1.TextInput placeholder="Your 10-digit phone number" style={styles.phoneInput} keyboardType="number-pad"/>
        </Themed_1.View>) : (<Themed_1.View>
          <react_native_1.TextInput placeholder={placeholder} {...rest} style={[
                inputStyle,
                { color: Colors_1["default"][colorScheme].text },
            ]}></react_native_1.TextInput>
          <react_native_1.TouchableOpacity>{icon}</react_native_1.TouchableOpacity>
        </Themed_1.View>)}
    </Themed_1.View>);
};
exports.Input = Input;
var styles = react_native_1.StyleSheet.create({
    label: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        marginBottom: LayoutUtil_1.hp(11),
        fontFamily: "Euclid-Circular-A"
    },
    container: {
        marginTop: LayoutUtil_1.hp(10),
        marginBottom: LayoutUtil_1.hp(10)
    },
    textInput: {
        borderRadius: 9,
        marginTop: LayoutUtil_1.hp(7),
        fontSize: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    phoneInput: {
        fontSize: 15,
        paddingRight: LayoutUtil_1.wp(10)
    },
    countryCode: {
        color: Colors_1["default"].general.primary,
        fontSize: 15,
        marginRight: LayoutUtil_1.wp(7)
    },
    divider: {
        width: 1,
        height: LayoutUtil_1.hp(18),
        marginRight: LayoutUtil_1.wp(7)
    },
    isPhone: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 36,
        width: 36,
        borderRadius: 36
    }
});
