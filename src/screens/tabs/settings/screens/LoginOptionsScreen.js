"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var ButtonLg_1 = require("../../../../components/buttons/ButtonLg");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var svg_1 = require("../../../../../assets/svg");
var LoginOptionsScreen = function (_a) {
    var navigation = _a.navigation;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Login Options
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
            Login quickly by connecting your Aza account to your social media
            account.
          </Themed_1.Text>
        </Themed_1.View>
        <Themed_1.View>
          <ButtonLg_1["default"] icon={<svg_1.AppleIcon />} title="Connect with Apple" color={Colors_1["default"].general.apple} onPress={function () { return console.log("connecting with apple..."); }} alt={false}/>
          <ButtonLg_1["default"] icon={<svg_1.FacebookIcon />} title="Connect with Facebook" color={Colors_1["default"].general.facebook} onPress={function () { return console.log("connecting with facebook..."); }} alt={false}/>
          <ButtonLg_1["default"] icon={<svg_1.GoogleIcon />} title="Connect with Google" color={Colors_1["default"].general.google} onPress={function () { return console.log("connecting with google..."); }} alt={false}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = LoginOptionsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
