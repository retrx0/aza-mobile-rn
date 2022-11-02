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
var SplitConfirmationScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = route.params, amount = _b.amount, splitImage = _b.splitImage, name = _b.name, contacts = _b.contacts;
    var colorScheme = useColorScheme_1["default"]();
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
    var splitAmountForEachPerson = Number(amount) / (contacts.length + 1);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View>
          <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginBottom: LayoutUtil_1.hp(20)
        }}>
            Kindly confirm the details of this transaction
          </Themed_1.Text>
          <Themed_1.View style={{ position: "relative" }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              To
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={[
            styles.input,
            {
                borderBottomColor: Colors_1["default"][colorScheme].separator
            },
        ]} showSoftInputOnFocus={false} value={name}/>
            <react_native_1.Image source={{
            uri: splitImage
        }} style={[styles.splitImage]}/>
          </Themed_1.View>
          <react_native_1.ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false} style={[
            CommonStyles_1["default"].col,
            {
                alignSelf: "stretch",
                paddingVertical: LayoutUtil_1.hp(30),
                maxHeight: LayoutUtil_1.hp(300)
            },
        ]}>
            <Themed_1.View style={[CommonStyles_1["default"].col, { alignSelf: "stretch" }]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
                Created By
              </Themed_1.Text>
              <Themed_1.View style={[
            CommonStyles_1["default"].row,
            { alignSelf: "stretch", marginTop: 10 },
        ]}>
                <react_native_1.Image style={{ borderRadius: 50, width: 30, height: 30 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
                <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14,
            marginLeft: 10
        }}>
                  Chiazo
                </Themed_1.Text>
                <Themed_1.Text style={{ fontSize: 12, marginLeft: "auto", color: "#FF361A" }}>
                  {"\u20A6"}{" "}
                  {NumberUtils_1.numberWithCommas(splitAmountForEachPerson.toFixed())}
                </Themed_1.Text>
              </Themed_1.View>
            </Themed_1.View>
            <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { alignSelf: "stretch", marginTop: 25 },
        ]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
                Shared With
              </Themed_1.Text>
              {contacts.map(function (_a) {
            var id = _a.id, firstName = _a.firstName;
            return (<Themed_1.View key={id} style={[
                    CommonStyles_1["default"].row,
                    { alignSelf: "stretch", marginTop: 10 },
                ]}>
                  <react_native_1.Image style={{ borderRadius: 50, width: 30, height: 30 }} source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
                }}/>
                  <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A",
                    fontSize: 14,
                    marginLeft: 10
                }}>
                    {firstName}
                  </Themed_1.Text>
                  <Themed_1.Text style={{
                    fontSize: 12,
                    marginLeft: "auto",
                    color: "#FF361A"
                }}>
                    {"\u20A6"}{" "}
                    {NumberUtils_1.numberWithCommas(splitAmountForEachPerson.toFixed())}
                  </Themed_1.Text>
                </Themed_1.View>);
        })}
            </Themed_1.View>
          </react_native_1.ScrollView>
          <Themed_1.View style={{ marginTop: 10 }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Total Amount
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={[
            styles.input,
            {
                borderBottomColor: Colors_1["default"][colorScheme].separator
            },
        ]} showSoftInputOnFocus={false} value={"\u20A6 " + NumberUtils_1.numberWithCommas(amount)}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { width: "100%", marginBottom: LayoutUtil_1.hp(35) }]}>
          <Button_1["default"] title="Confirm" onPressButton={function () { return navigation.navigate("ChooseSplit"); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel Transaction" onPressButton={function () { return navigation.goBack(); }} style={{ borderBottomColor: Colors_1["default"].general.red }} styleText={CommonStyles_1["default"].cancelStyle}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SplitConfirmationScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingVertical: LayoutUtil_1.hp(10),
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    input: {
        backgroundColor: "transparent",
        fontFamily: "Euclid-Circular-A-Medium",
        paddingBottom: 5,
        marginTop: LayoutUtil_1.hp(15),
        borderBottomWidth: 1
    },
    splitImage: {
        position: "absolute",
        right: 0,
        bottom: LayoutUtil_1.hp(10),
        width: 45,
        height: 45,
        borderRadius: 50
    }
});
