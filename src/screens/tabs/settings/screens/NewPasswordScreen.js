"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var SegmentedInput_1 = require("../../../../components/input/SegmentedInput");
var Button_1 = require("../../../../components/buttons/Button");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var NewPasswordScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState(''), newPassword = _b[0], setNewPassword = _b[1];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: 'Euclid-Circular-A-Semi-Bold',
                    fontSize: 16
                }}>
          New Password
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<Themed_1.View style={styles.container}>
      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: 'Euclid-Circular-A-Medium' }}>
        Please enter your new password
      </Themed_1.Text>
      <Themed_1.View style={{ marginBottom: 100, marginTop: 80, marginLeft: -20 }}>
        <SegmentedInput_1["default"] value={newPassword} secureInput headerText="Password" onValueChanged={function (pass) { return setNewPassword(pass); }}/>
      </Themed_1.View>
      <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate('StatusScreen', {
                statusIcon: 'Success',
                status: 'Successful',
                statusMessage: 'We have successfully updated your password',
                navigateTo: 'Settings'
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: 'Euclid-Circular-A-Medium',
            fontSize: 14
        }} style={{
            width: '100%',
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
    </Themed_1.View>);
};
exports["default"] = NewPasswordScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
