"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Divider_1 = require("../../../../components/divider/Divider");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var SettingsListItem = function (_a) {
    var icon = _a.icon, detail = _a.detail, name = _a.name, disabled = _a.disabled, disabledIcon = _a.disabledIcon, handleNavigation = _a.handleNavigation;
    var colorScheme = useColorScheme_1["default"]();
    return (<>
      <react_native_1.TouchableOpacity disabled={disabled} onPress={handleNavigation} style={[CommonStyles_1["default"].col, { alignSelf: "stretch" }]}>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginVertical: LayoutUtil_1.hp(20)
            },
        ]}>
          <Themed_1.View>{disabled ? disabledIcon : icon}</Themed_1.View>
          <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { marginRight: "auto", marginLeft: icon ? 20 : 0 },
        ]}>
            <Themed_1.Text lightColor={disabled ? Colors_1["default"][colorScheme].disabled : Colors_1["default"].light.text} darkColor={disabled ? Colors_1["default"][colorScheme].disabled : Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
              {name}
            </Themed_1.Text>
            {detail && (<Themed_1.Text lightColor={disabled ? Colors_1["default"][colorScheme].disabled : Colors_1["default"].light.text} darkColor={disabled
                ? Colors_1["default"][colorScheme].disabled
                : Colors_1["default"].dark.secondaryText} style={{ fontSize: 12, marginTop: LayoutUtil_1.hp(4) }}>
                {detail}
              </Themed_1.Text>)}
          </Themed_1.View>
          <svg_1.ChevronRightIcon color={disabled ? Colors_1["default"][colorScheme].disabled : "#2A9E17"} size={20}/>
        </Themed_1.View>
      </react_native_1.TouchableOpacity>
      <Divider_1["default"] />
    </>);
};
exports["default"] = SettingsListItem;
