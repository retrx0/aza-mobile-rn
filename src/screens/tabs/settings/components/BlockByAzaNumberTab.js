"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Themed_1 = require("../../../../components/Themed");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var react_native_1 = require("react-native");
var BlockByAzaNumberTab = function (_a) {
    var toggleModal = _a.toggleModal;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[styles.container, { justifyContent: "space-between" }]}>
      <Themed_1.View>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            marginTop: LayoutUtil_1.hp(30)
        }}>
          You can unblock these users anytime
        </Themed_1.Text>
        <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(50) }}>
          <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 10,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} placeholder="Aza Number"/>
        </Themed_1.View>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = BlockByAzaNumberTab;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
