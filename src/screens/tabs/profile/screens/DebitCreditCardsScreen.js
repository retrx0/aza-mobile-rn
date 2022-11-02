"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var Button_1 = require("../../../../components/buttons/Button");
var Divider_1 = require("../../../../components/divider/Divider");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var DebitCreditCardsScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Debit/Credit Cards
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
            Securely manage all your debit and credit cards connected to Aza
            right here. Tap a card for more options.
          </Themed_1.Text>
          <Divider_1["default"] />
          {/* list item */}
          <Themed_1.View>
            <react_native_1.TouchableOpacity onPress={function () { return navigation.navigate("ManageCard"); }}>
              <Themed_1.View style={[
            CommonStyles_1["default"].row,
            { alignSelf: "stretch", paddingVertical: 15 },
        ]}>
                <react_native_1.Image source={{
            uri: "https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png"
        }} style={{
            width: 36,
            height: 36,
            backgroundColor: "white",
            borderRadius: 50,
            resizeMode: "contain"
        }}/>
                <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            marginLeft: 20,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
                  Visa (**** **** **** 1234)
                </Themed_1.Text>
              </Themed_1.View>
            </react_native_1.TouchableOpacity>
            <Divider_1["default"] />
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(45), width: "100%" }]}>
          <Button_1["default"] title="Add New Card" onPressButton={function () {
            return navigation.navigate("AddNewCard", {
                navigateBackTo: "DebitCreditCards"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(15),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { return navigation.goBack(); }} styleText={CommonStyles_1["default"].cancelStyle} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = DebitCreditCardsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
