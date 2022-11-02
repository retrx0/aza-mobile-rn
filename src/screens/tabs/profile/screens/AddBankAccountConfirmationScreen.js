"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Button_1 = require("../../../../components/buttons/Button");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var AddBankAccountConfirmationScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var colorScheme = useColorScheme_1["default"]();
    var _b = route.params, bankName = _b.bankName, accountName = _b.accountName, accountNumber = _b.accountNumber, screenType = _b.screenType;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Confirmation
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
            Kindly confirm the details of your bank account
          </Themed_1.Text>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30), position: "relative" }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Bank
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A-Medium",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} showSoftInputOnFocus={false} value={bankName}/>
            <react_native_1.Image source={{
            uri: "https://pbs.twimg.com/profile_images/1112702246326845445/a-CBpIyN_400x400.png"
        }} style={{
            position: "absolute",
            right: 0,
            bottom: LayoutUtil_1.hp(10),
            width: 45,
            height: 45,
            borderRadius: 50,
            backgroundColor: "white",
            resizeMode: "contain"
        }}/>
          </Themed_1.View>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30) }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Account Number
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A-Medium",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} showSoftInputOnFocus={false} value={accountNumber}/>
          </Themed_1.View>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30) }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Account Name
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A-Medium",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} showSoftInputOnFocus={false} value={accountName}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(50), width: "100%" }]}>
          <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                statusMessage: "Your bank account has been successfully linked to your Aza",
                navigateTo: "BankAccounts",
                navigateToParams: {
                    screenType: screenType
                }
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(25),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = AddBankAccountConfirmationScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
