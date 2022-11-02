"use strict";
exports.__esModule = true;
exports.CountriesCard = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CountriesCard = function (_a) {
    var code = _a.code, short_name = _a.short_name, name = _a.name, imageLink = _a.imageLink, onPress = _a.onPress;
    return (<>
      <react_native_1.TouchableOpacity style={styles.countryCard} onPress={onPress}>
        {imageLink && (<react_native_1.Image source={{
                uri: imageLink,
                headers: {
                    Accept: "*/*"
                }
            }} style={styles.flag} resizeMode='contain'/>)}
        <react_native_1.Text style={styles.countryName}>{code}</react_native_1.Text>
        <react_native_1.Text style={styles.countryName}>{short_name}</react_native_1.Text>

        <react_native_1.Text style={styles.countryName}>{name}</react_native_1.Text>
      </react_native_1.TouchableOpacity>
    </>);
};
exports.CountriesCard = CountriesCard;
var styles = react_native_1.StyleSheet.create({
    countryName: {
        color: "black",
        fontSize: 14,
        marginRight: LayoutUtil_1.hp(5)
    },
    countryCard: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderColor: "green",
        height: LayoutUtil_1.hp(40),
        paddingVertical: LayoutUtil_1.hp(5),
        marginBottom: LayoutUtil_1.hp(10)
    },
    flag: {
        width: LayoutUtil_1.wp(29),
        height: LayoutUtil_1.hp(29),
        marginRight: LayoutUtil_1.wp(12)
    }
});
