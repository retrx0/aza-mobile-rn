"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Button_1 = require("../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var BvnVerificationScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var colorScheme = useColorScheme_1["default"]();
    var onVerifyNavigateBackTo = route.params.onVerifyNavigateBackTo;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Tier 1 Verification
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
          <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14,
            marginVertical: LayoutUtil_1.hp(30)
        }}>
            Verify your BVN
          </Themed_1.Text>
          <Themed_1.View>
            <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              BVN
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} placeholder="Enter your bank verification number" keyboardType="number-pad" returnKeyType="done"/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(50), width: "100%" }]}>
          <Button_1["default"] title="Verify" onPressButton={function () {
            return navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "You have successfully added your BVN to your Aza account",
                navigateTo: onVerifyNavigateBackTo
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(20),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" color={Colors_1["default"].general.red} styleText={CommonStyles_1["default"].cancelStyle} onPressButton={function () { return navigation.goBack(); }} style={{ marginTop: 5 }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = BvnVerificationScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
