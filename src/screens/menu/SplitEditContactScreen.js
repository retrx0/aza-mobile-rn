"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Button_1 = require("../../components/buttons/Button");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var NumberUtils_1 = require("../../common/util/NumberUtils");
var SplitEditContactScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = route.params, contactSplitAmount = _b.contactSplitAmount, contactImage = _b.contactImage, contactName = _b.contactName;
    var _c = react_1.useState(contactSplitAmount), editedAmount = _c[0], setEditedAmount = _c[1];
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Edit
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
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginBottom: LayoutUtil_1.hp(50)
        }}>
            You can edit the split amount
          </Themed_1.Text>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(30), position: "relative" }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
              With whom?
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={[
            styles.input1,
            {
                borderBottomColor: Colors_1["default"][colorScheme].separator
            },
        ]} showSoftInputOnFocus={false} value={contactName}/>
            <react_native_1.Image source={{
            uri: contactImage
        }} style={styles.contactImage}/>
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
              <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={[
            styles.input2,
            {
                borderBottomColor: Colors_1["default"][colorScheme].separator
            },
        ]} keyboardType="number-pad" returnKeyType="done" onChangeText={function (e) { return setEditedAmount(e.replace(/[^0-9]/g, "")); }} value={NumberUtils_1.numberWithCommas(editedAmount)}/>
            </Themed_1.View>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { width: "100%", marginBottom: LayoutUtil_1.hp(35), marginTop: 5 },
        ]}>
          <Button_1["default"] title="Confirm" onPressButton={function () { return navigation.goBack(); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { return navigation.goBack(); }} style={{ borderBottomColor: Colors_1["default"].general.red }} styleText={CommonStyles_1["default"].cancelStyle}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SplitEditContactScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingVertical: LayoutUtil_1.hp(20),
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    input1: {
        backgroundColor: "transparent",
        fontFamily: "Euclid-Circular-A-Medium",
        paddingBottom: 5,
        marginTop: LayoutUtil_1.hp(15),
        borderBottomWidth: 1
    },
    contactImage: {
        position: "absolute",
        right: 0,
        bottom: LayoutUtil_1.hp(10),
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "white"
    },
    input2: {
        flex: 1,
        backgroundColor: "transparent",
        fontFamily: "Euclid-Circular-A-Medium",
        paddingBottom: 5,
        paddingLeft: 20,
        borderBottomWidth: 1
    }
});
