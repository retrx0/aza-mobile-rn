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
var ChangePhoneNumberScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState(''), currentPhoneNumber = _b[0], _ = _b[1];
    var _c = react_1.useState(''), newPhoneNumber = _c[0], setNewPhoneNumber = _c[1];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: 'Euclid-Circular-A-Semi-Bold',
                    fontSize: 16
                }}>
          New Phone Number
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
        Change your mobile phone number
      </Themed_1.Text>
      <Themed_1.View style={{ marginBottom: 10, marginTop: 50 }}>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: 'Euclid-Circular-A-Medium',
            marginBottom: LayoutUtil_1.hp(10)
        }}>
          Current Phone Number
        </Themed_1.Text>
        <Themed_1.PhoneInput initialValue={currentPhoneNumber} disabled initialCountry="ng" autoFormat textStyle={{
            fontSize: 16,
            padding: 3
        }} style={{
            alignSelf: 'center',
            height: 50,
            width: '100%',
            padding: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5,
            marginBottom: LayoutUtil_1.hp(40)
        }}/>

        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: 'Euclid-Circular-A-Medium',
            marginBottom: LayoutUtil_1.hp(10)
        }}>
          New Phone Number
        </Themed_1.Text>
        <Themed_1.PhoneInput initialValue={newPhoneNumber} onChangePhoneNumber={function (p) { return setNewPhoneNumber(p); }} initialCountry="ng" autoFormat textStyle={{
            fontSize: 16,
            padding: 3
        }} textProps={{
            placeholder: 'Enter new phone number'
        }} style={{
            alignSelf: 'center',
            height: 50,
            width: '100%',
            padding: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5,
            marginBottom: LayoutUtil_1.hp(40)
        }}/>
      </Themed_1.View>
      <Button_1["default"] title="Continue" onPressButton={function () { return navigation.navigate('ChangePhoneNumberOTP'); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: 'Euclid-Circular-A-Medium',
            fontSize: 14
        }} style={{
            width: '100%',
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
    </Themed_1.View>);
};
exports["default"] = ChangePhoneNumberScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
