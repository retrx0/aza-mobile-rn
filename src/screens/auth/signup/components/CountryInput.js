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
exports.CountryBox = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CountryBox = function (_a) {
    var code = _a.code, short_name = _a.short_name, onPress = _a.onPress, imageLink = _a.imageLink, 
    // id,
    rest = __rest(_a, ["code", "short_name", "onPress", "imageLink"]);
    return (<react_native_1.View style={styles.container}>
      <react_native_1.View style={styles.countryContainer}>
        <react_native_1.Image source={{ uri: imageLink }} style={styles.flag} resizeMode="contain"/>
        <react_native_1.View style={styles.country}>
          <react_native_1.Text style={styles.countryName}>{short_name}</react_native_1.Text>
        </react_native_1.View>

        <react_native_1.View style={styles.divider}/>
        <react_native_1.Text style={styles.countryName}>{code}</react_native_1.Text>
        <react_native_1.TextInput style={styles.textInput} placeholder="phone number" keyboardType="number-pad" {...rest}/>
      </react_native_1.View>

      <react_native_1.TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <svg_1.DropIcon color={""} size={0}/>
      </react_native_1.TouchableOpacity>
    </react_native_1.View>);
};
exports.CountryBox = CountryBox;
var styles = react_native_1.StyleSheet.create({
    flag: {
        width: LayoutUtil_1.wp(29),
        height: LayoutUtil_1.hp(29),
        marginRight: LayoutUtil_1.wp(12)
    },
    country: {
        color: "black",
        fontSize: 17,
        paddingHorizontal: LayoutUtil_1.wp(2)
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 8,
        height: LayoutUtil_1.hp(55),
        marginVertical: LayoutUtil_1.hp(30),
        paddingHorizontal: LayoutUtil_1.wp(15)
    },
    countryContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "95%"
    },
    divider: {
        width: 1,
        backgroundColor: "grey",
        height: LayoutUtil_1.hp(18),
        marginRight: LayoutUtil_1.wp(8)
    },
    countryName: {
        color: "black",
        fontSize: 17,
        marginRight: LayoutUtil_1.wp(5)
    },
    textInput: {
        marginRight: LayoutUtil_1.wp(5),
        width: LayoutUtil_1.wp(140),
        paddingRight: LayoutUtil_1.wp(5),
        fontSize: 18,
        alignItems: "center"
    }
});
