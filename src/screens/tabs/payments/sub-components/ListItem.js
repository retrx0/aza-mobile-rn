"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Divider_1 = require("./Divider");
var svg_1 = require("../../../../../assets/svg");
var react_native_reanimated_1 = require("react-native-reanimated");
var Themed_1 = require("../../../../components/Themed");
function ListItem(_a) {
    var Icon = _a.Icon, title = _a.title, onPress = _a.onPress, index = _a.index, _b = _a.IconComponent, IconComponent = _b === void 0 ? null : _b;
    var TouchableAnimated = react_native_reanimated_1["default"].createAnimatedComponent(react_native_1.TouchableOpacity);
    return (<TouchableAnimated entering={react_native_reanimated_1.FadeInDown.delay(200 * (index + 1))} onPress={onPress} style={styles.listContainer}>
      <Themed_1.View style={styles.mainItem}>
        <Themed_1.View style={styles.item}>
          <Icon />
          <Themed_1.Text style={styles.text}>{title}</Themed_1.Text>
        </Themed_1.View>

        {IconComponent == null ? <svg_1.ArrowFowardIcon /> : <IconComponent />}
      </Themed_1.View>
      <Divider_1["default"] />
    </TouchableAnimated>);
}
exports["default"] = ListItem;
var styles = react_native_1.StyleSheet.create({
    listContainer: {
        minHeight: 20,
        marginTop: 20,
        width: "100%",
        backgroundColor: "transparent",
        justifyContent: "center"
    },
    mainItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        marginLeft: 16.5
    }
});
