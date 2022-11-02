"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Button_1 = require("../../../../components/buttons/Button");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var BoxTextInput_1 = require("../../../../components/input/BoxTextInput");
var userData_1 = require("../../../../constants/userData");
var ChangeEmailScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState(userData_1.UserData.userEmail), currentEmail = _b[0], _ = _b[1];
    var _c = react_1.useState(""), newEmail = _c[0], setNewEmail = _c[1];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          New Email
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
        Change your email
      </Themed_1.Text>
      <Themed_1.View style={{ marginBottom: 10, marginTop: 10 }}>
        <BoxTextInput_1["default"] placeHolder="Current Email" required={false} value={currentEmail} onChange={function () {
            undefined;
        }}/>
        <BoxTextInput_1["default"] placeHolder="New Email" required={false} value={newEmail} onChange={function (e) { return setNewEmail(e.nativeEvent.text); }}/>
      </Themed_1.View>
      <Button_1["default"] title="Continue" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Settings"); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            width: "100%",
            marginTop: 10,
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
    </Themed_1.View>);
};
exports["default"] = ChangeEmailScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
