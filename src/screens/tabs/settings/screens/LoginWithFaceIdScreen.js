"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Divider_1 = require("../../../../components/divider/Divider");
var SettingsSwitch_1 = require("../components/SettingsSwitch");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useAsyncStorage_1 = require("../../../../hooks/useAsyncStorage");
var LoginWithFaceIdScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = useAsyncStorage_1.useAsyncStorage(), saveSettingsToStorage = _b.saveSettingsToStorage, loadSettingsFromStorage = _b.loadSettingsFromStorage;
    var _c = react_1.useState(false), isLoginWithFaceId = _c[0], setLoginWithFaceId = _c[1];
    var _d = react_1.useState(false), isConfirmTransactionWithFaceId = _d[0], setConfirmTransactionWithFaceId = _d[1];
    react_1.useEffect(function () {
        loadSettingsFromStorage().then(function (setting) {
            if ((setting === null || setting === void 0 ? void 0 : setting.loginWithFaceIDSwitch) !== undefined) {
                setLoginWithFaceId(setting === null || setting === void 0 ? void 0 : setting.loginWithFaceIDSwitch);
            }
            if ((setting === null || setting === void 0 ? void 0 : setting.confirmTransactionsWithFaceIDSwitch) !== undefined) {
                setConfirmTransactionWithFaceId(setting === null || setting === void 0 ? void 0 : setting.confirmTransactionsWithFaceIDSwitch);
            }
        });
    }, []);
    react_1.useEffect(function () {
        saveSettingsToStorage({
            loginWithFaceIDSwitch: isLoginWithFaceId,
            confirmTransactionsWithFaceIDSwitch: isConfirmTransactionWithFaceId
        });
    }, [isLoginWithFaceId, isConfirmTransactionWithFaceId]);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Login with Face ID
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
      <Themed_1.View>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
          You can access your account without entering a password by signing in
          with Face ID
        </Themed_1.Text>
      </Themed_1.View>
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(100) }}>
        <Divider_1["default"] />
        <SettingsSwitch_1["default"] text={"Login with Face ID"} isEnabled={isLoginWithFaceId} onSwitchToggle={function () { return setLoginWithFaceId(!isLoginWithFaceId); }}/>
        <SettingsSwitch_1["default"] text={"Confirm transactions with Face ID"} isEnabled={isConfirmTransactionWithFaceId} onSwitchToggle={function () {
            return setConfirmTransactionWithFaceId(!isConfirmTransactionWithFaceId);
        }}/>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = LoginWithFaceIdScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
