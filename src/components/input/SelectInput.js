"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var RegularText_1 = require("../text/RegularText");
var svg_1 = require("../../../assets/svg");
var react_native_reanimated_1 = require("react-native-reanimated");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../Themed");
function SelectInput(_a) {
    var style = _a.style, title = _a.title, placeHolder = _a.placeHolder, _b = _a.items, items = _b === void 0 ? [] : _b;
    var _c = react_1.useState(""), selectedItem = _c[0], setSelectedItem = _c[1];
    var scheme = useColorScheme_1["default"]();
    var scaleValue = react_native_reanimated_1.useSharedValue(0);
    var listItemStyle = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        transform: [{ scaleY: scaleValue.value }, { translateY: 53 }]
    }); });
    return (<react_native_reanimated_1["default"].View style={[styles.container, style]}>
      <RegularText_1["default"] style={styles.label} text={title}/>
      <react_native_1.TouchableOpacity onPress={function () {
            var value = scaleValue.value == 0 ? 1 : 0;
            scaleValue.value = react_native_reanimated_1.withSpring(value);
            console.log(value);
        }} style={styles.selector}>
        <>
          <RegularText_1["default"] style={styles.selectorText} text={selectedItem == "" ? placeHolder : selectedItem}/>
          <svg_1.SelectIcon />
        </>
      </react_native_1.TouchableOpacity>
      <react_native_reanimated_1["default"].ScrollView style={[
            styles.selectList,
            listItemStyle,
            { backgroundColor: scheme == "light" ? "#ffffff" : "#3A3D42" },
        ]}>
        {items.length > 0 &&
            items.map(function (item, index) { return (<react_native_1.TouchableOpacity onPress={function () {
                    setSelectedItem(item);
                    scaleValue.value = react_native_reanimated_1.withSpring(0);
                }} key={index.toString()} style={styles.listItem}>
              <Themed_1.Text style={styles.listItemText}>{item}</Themed_1.Text>
            </react_native_1.TouchableOpacity>); })}
      </react_native_reanimated_1["default"].ScrollView>
    </react_native_reanimated_1["default"].View>);
}
exports["default"] = SelectInput;
var styles = react_native_1.StyleSheet.create({
    container: {
        height: 53,
        backgroundColor: "transparent",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        width: "100%",
        zIndex: 200
    },
    label: {
        fontWeight: "400",
        fontSize: 14,
        color: "#4D4D4D"
    },
    selector: {
        width: "100%",
        borderBottomColor: "#EAEAEC",
        borderBottomWidth: 1,
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    selectorText: {
        color: "#A6A6A6",
        fontWeight: "500"
    },
    selectList: {
        width: "100%",
        minHeight: 70,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
            zIndex: 200
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10
    },
    listItem: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#EAEAEC",
        justifyContent: "center"
    },
    listItemText: {
        fontWeight: "400"
    }
});
