"use strict";
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.SIZES = exports.PhoneInput = exports.OTPInput = exports.ThemedFAIcon = exports.TextInput = exports.SafeAreaView = exports.ScrollView = exports.View = exports.Text = exports.useThemeColor = void 0;
var react_native_1 = require("react-native");
var Colors_1 = require("../constants/Colors");
var useColorScheme_1 = require("../hooks/useColorScheme");
var FontAwesome_1 = require("@expo/vector-icons/FontAwesome");
var react_native_otp_input_1 = require("@twotalltotems/react-native-otp-input");
var react_native_phone_input_1 = require("react-native-phone-input");
var react_native_2 = require("react-native");
var useThemeColor = function (props, colorName) {
    var theme = useColorScheme_1["default"]();
    var colorFromProps = props[theme];
    if (colorFromProps) {
        return colorFromProps;
    }
    else {
        return Colors_1["default"][theme][colorName];
    }
};
exports.useThemeColor = useThemeColor;
var Text = function (props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var color = exports.useThemeColor({ light: lightColor, dark: darkColor }, "text");
    return (<react_native_1.Text style={[{ color: color, fontFamily: "Euclid-Circular-A" }, style]} {...otherProps}/>);
};
exports.Text = Text;
var View = function (props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "background");
    return <react_native_1.View style={[{ backgroundColor: backgroundColor }, style]} {...otherProps}/>;
};
exports.View = View;
var ScrollView = function (props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "background");
    return <react_native_1.ScrollView style={[{ backgroundColor: backgroundColor }, style]} {...otherProps}/>;
};
exports.ScrollView = ScrollView;
var SafeAreaView = function (props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "background");
    return (<react_native_1.SafeAreaView style={[{ backgroundColor: backgroundColor }, style]} {...otherProps}/>);
};
exports.SafeAreaView = SafeAreaView;
var TextInput = function (props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "backgroundSecondary");
    var color = exports.useThemeColor({ light: lightColor, dark: darkColor }, "text");
    return (<react_native_1.TextInput style={[{ backgroundColor: backgroundColor, color: color }, style]} {...otherProps}/>);
};
exports.TextInput = TextInput;
var ThemedFAIcon = function (props) {
    var style = props.style, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "background");
    var color = exports.useThemeColor({ light: lightColor, dark: darkColor }, "text");
    return (<FontAwesome_1["default"] style={[{ backgroundColor: backgroundColor, color: color }, style]} {...otherProps}/>);
};
exports.ThemedFAIcon = ThemedFAIcon;
var OTPInput = function (props) {
    var style = props.style, codeInputFieldStyle = props.codeInputFieldStyle, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "codeInputFieldStyle", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "backgroundSecondary");
    var color = exports.useThemeColor({ light: lightColor, dark: darkColor }, "text");
    var border = exports.useThemeColor({ light: lightColor, dark: darkColor }, "border");
    return (<react_native_otp_input_1["default"] style={style} codeInputFieldStyle={__assign({ color: color, backgroundColor: backgroundColor, borderColor: border }, codeInputFieldStyle)} {...otherProps}/>);
};
exports.OTPInput = OTPInput;
var PhoneInput = function (props) {
    var style = props.style, textStyle = props.textStyle, lightColor = props.lightColor, darkColor = props.darkColor, otherProps = __rest(props, ["style", "textStyle", "lightColor", "darkColor"]);
    var backgroundColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "backgroundSecondary");
    var color = exports.useThemeColor({ light: lightColor, dark: darkColor }, "text");
    var borderColor = exports.useThemeColor({ light: lightColor, dark: darkColor }, "border");
    return (<react_native_phone_input_1["default"] textStyle={[{ color: color }, textStyle]} style={[{ borderColor: borderColor, backgroundColor: backgroundColor }, style]} {...otherProps}/>);
};
exports.PhoneInput = PhoneInput;
var _a = react_native_2.Dimensions.get("window"), width = _a.width, height = _a.height;
exports.SIZES = {
    // font sizes
    largeTitle: 36,
    font1: width * 0.08,
    font2: width * 0.076,
    font3: width * 0.068,
    font4: width * 0.062,
    font5: width * 0.056,
    font6: width * 0.048,
    font7: width * 0.042,
    font8: width * 0.038,
    font9: width * 0.035,
    font10: width * 0.03,
    // app dimensions
    width: width,
    height: height
};
var appTheme = {
    SIZES: exports.SIZES
};
exports["default"] = appTheme;
