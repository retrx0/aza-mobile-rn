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
var redux_1 = require("../../hooks/redux");
var transferToSlice_1 = require("../../redux/slice/transferToSlice");
var AppUtil_1 = require("../../common/util/AppUtil");
var SendMoneyConfirmationScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var transferObject = redux_1.useAppSelector(transferToSlice_1.selectTransferTo);
    console.log(transferObject);
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
            Kindly confirm the details of this transaction
          </Themed_1.Text>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30), position: "relative" }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              To
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} showSoftInputOnFocus={false} value={transferObject.beneficairy.fullName}/>
            <react_native_1.Image source={{
            uri: transferObject.beneficairy.pictureUrl &&
                transferObject.beneficairy.pictureUrl !== ""
                ? transferObject.beneficairy.pictureUrl
                : AppUtil_1.getInitialsAvatar({
                    firstName: transferObject.beneficairy.firstName,
                    lastName: transferObject.beneficairy.lastName,
                    scheme: colorScheme
                })
        }} style={{
            position: "absolute",
            right: 0,
            bottom: LayoutUtil_1.hp(10),
            width: 45,
            height: 45,
            borderRadius: 50,
            backgroundColor: "white"
        }}/>
          </Themed_1.View>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30) }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Amount
            </Themed_1.Text>
            <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                marginTop: LayoutUtil_1.hp(15),
                alignSelf: "stretch",
                position: "relative"
            },
        ]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{ position: "absolute", paddingBottom: 5 }}>
                {"\u20A6 "}
              </Themed_1.Text>
              <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            flex: 1,
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A-Medium",
            paddingBottom: 5,
            paddingLeft: 20,
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} showSoftInputOnFocus={false} value={"" + transferObject.amount}/>
            </Themed_1.View>
          </Themed_1.View>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30) }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Description
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} showSoftInputOnFocus={false} value={transferObject.description}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(50), width: "100%" }]}>
          <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                statusMessage: "Your money transfer has been successful.",
                statusMessage2: "You can perform this transaction automatically by giving a Recurring Transfer order",
                receiptButton: true,
                setupRecurringTransfer: true,
                navigateTo: "SendMoney"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(10),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel Transaction" color={Colors_1["default"].general.red} styleText={CommonStyles_1["default"].cancelStyle} onPressButton={function () { return navigation.goBack(); }} style={{ marginTop: 5 }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SendMoneyConfirmationScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
