"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Divider_1 = require("../../components/divider/Divider");
var SplitListItem_1 = require("./components/SplitListItem");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var NumberUtils_1 = require("../../common/util/NumberUtils");
var SplitPaymentStatus_1 = require("./components/SplitPaymentStatus");
var CompletedSplitRequestDetailsScreen = function (_a) {
    var navigation = _a.navigation;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Request details
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
        <Divider_1["default"] />
        <SplitListItem_1["default"] amount="480000" date="4 July 2022 04:26" name="KFC" splitImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwr_jykU8Gdf9mpFXyUFwKAbCEaLFPFJbfA&usqp=CAU"/>
        <Divider_1["default"] />
        <Themed_1.View style={{
            marginTop: LayoutUtil_1.hp(25)
        }}>
          <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
            Request Creator
          </Themed_1.Text>
          <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginTop: LayoutUtil_1.hp(15)
            },
        ]}>
            <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
            <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { marginLeft: 20, marginRight: "auto" },
        ]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Medium"
        }}>
                Chiazo
              </Themed_1.Text>
              <Themed_1.Text style={{ fontSize: 12, marginTop: 5, color: "#2A9E17" }}>
                {"\u20A6"} {NumberUtils_1.numberWithCommas(6666)}
              </Themed_1.Text>
            </Themed_1.View>
            <SplitPaymentStatus_1["default"] paid={true}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14,
            marginTop: LayoutUtil_1.hp(25)
        }}>
          Request Recipients
        </Themed_1.Text>
        <react_native_1.ScrollView>
          <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginTop: LayoutUtil_1.hp(15)
            },
        ]}>
            <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
            <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { marginLeft: 20, marginRight: "auto" },
        ]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Medium"
        }}>
                James
              </Themed_1.Text>
              <Themed_1.Text style={{ fontSize: 12, marginTop: 5, color: "#2A9E17" }}>
                {"\u20A6"} {NumberUtils_1.numberWithCommas(6666)}
              </Themed_1.Text>
            </Themed_1.View>
            <SplitPaymentStatus_1["default"] paid={true}/>
          </Themed_1.View>
        </react_native_1.ScrollView>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = CompletedSplitRequestDetailsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
