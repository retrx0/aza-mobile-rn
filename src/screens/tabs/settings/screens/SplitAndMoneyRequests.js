"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../../../components/Themed");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Divider_1 = require("../../../../components/divider/Divider");
var SettingsSwitch_1 = require("../components/SettingsSwitch");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useAsyncStorage_1 = require("../../../../hooks/useAsyncStorage");
var SplitAndMoneyRequestsScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = useAsyncStorage_1.useAsyncStorage(), saveSettingsToStorage = _b.saveSettingsToStorage, loadSettingsFromStorage = _b.loadSettingsFromStorage;
    var _c = react_1.useState(false), isEnabled = _c[0], setIsEnabled = _c[1];
    react_1.useEffect(function () {
        loadSettingsFromStorage().then(function (setting) {
            (setting === null || setting === void 0 ? void 0 : setting.splitAndMoneyRequestsSwitch) !== undefined &&
                setIsEnabled(setting === null || setting === void 0 ? void 0 : setting.splitAndMoneyRequestsSwitch);
        });
    }, []);
    react_1.useEffect(function () {
        saveSettingsToStorage({ splitAndMoneyRequestsSwitch: isEnabled });
    }, [isEnabled]);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Split and Money Requests
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<Themed_1.View style={styles.container}>
      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
        You can disable this setting to reject all split and money requests from
        other users.
      </Themed_1.Text>
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(50) }}>
        <Divider_1["default"] />
        <SettingsSwitch_1["default"] text={"Split and Money Requests"} isEnabled={isEnabled} onSwitchToggle={function () {
            setIsEnabled(!isEnabled);
        }}/>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = SplitAndMoneyRequestsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
