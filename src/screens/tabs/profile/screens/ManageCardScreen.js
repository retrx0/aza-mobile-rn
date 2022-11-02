"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var svg_1 = require("../../../../../assets/svg");
var ManageCardScreen = function (_a) {
    var navigation = _a.navigation;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Manage Card
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
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            {
                borderRadius: 10,
                width: "100%",
                height: LayoutUtil_1.hp(150),
                backgroundColor: "black"
            },
        ]}>
          <Themed_1.View style={{
            marginLeft: 50,
            marginTop: "auto",
            backgroundColor: "transparent"
        }}>
            <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 16,
            color: "white"
        }}>
              **** **** **** 1234
            </Themed_1.Text>
            <Themed_1.Text style={{
            fontSize: 8,
            marginTop: 8,
            color: "white"
        }}>
              Visa - EXP Jul/2023
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.View style={{
            marginTop: "auto",
            marginRight: "auto",
            backgroundColor: "transparent"
        }}>
            <svg_1.DebitCreditCardCurvesDesign />
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(50), width: "100%" }]}>
          <CancelButtonWithUnderline_1["default"] title="Delete Card" styleText={[CommonStyles_1["default"].cancelStyle]} onPressButton={function () { return navigation.goBack(); }} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = ManageCardScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: LayoutUtil_1.hp(25)
    }
});
