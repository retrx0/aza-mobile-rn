"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../assets/svg");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var AccountLimitsTab = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var isVerified = react_1.useState(false)[0];
    return (<Themed_1.View style={[styles.container, { paddingHorizontal: 15 }]}>
      <Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { alignSelf: "flex-start" }]}>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
            My Level:{" "}
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14
        }}>
              Tier {isVerified ? "1" : "0"}
            </Themed_1.Text>
          </Themed_1.Text>
          <Themed_1.View style={{
            marginTop: 6,
            borderWidth: 1,
            borderColor: isVerified
                ? "#2A9E17"
                : Colors_1["default"][colorScheme].secondaryText,
            borderRadius: 50,
            width: 120
        }}/>
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                alignItems: "flex-start",
                marginTop: LayoutUtil_1.hp(35)
            },
        ]}>
          <svg_1.VerifyIcon color={isVerified ? "#2A9E17" : Colors_1["default"][colorScheme].backgroundSecondary} size={34}/>
          <Themed_1.View style={[CommonStyles_1["default"].col, { marginRight: "auto", marginLeft: 25 }]}>
            <Themed_1.Text style={{
            fontSize: 12,
            color: isVerified
                ? "#2A9E17"
                : Colors_1["default"][colorScheme].secondaryText
        }}>
              {isVerified ? "Verified" : "Not verified"}
            </Themed_1.Text>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
              Tier 1
            </Themed_1.Text>
            <Themed_1.View style={{
            marginTop: 10
        }}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14,
            marginBottom: 5
        }}>
                Daily Transaction Limit:
              </Themed_1.Text>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
                {"\u20A6 "}
                50,000
              </Themed_1.Text>
            </Themed_1.View>
            <Themed_1.View style={{
            marginTop: 10
        }}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14,
            marginBottom: 5
        }}>
                Maximum Balance:
              </Themed_1.Text>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
                {"\u20A6 "}
                200,000
              </Themed_1.Text>
            </Themed_1.View>
            <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "flex-start",
                marginTop: 20
            },
        ]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            marginRight: 5
        }}>
                Verify BVN
              </Themed_1.Text>
              {isVerified && <svg_1.SmallVerifyIcon color={"#2A9E17"}/>}
            </Themed_1.View>
          </Themed_1.View>
          <svg_1.AwardIcon color={isVerified ? "#ECCA13" : Colors_1["default"][colorScheme].backgroundSecondary}/>
        </Themed_1.View>
      </Themed_1.View>
      <Button_1["default"] title="Upgrade Account" disabled={isVerified} onPressButton={function () {
            return navigation.navigate("BvnVerification", {
                onVerifyNavigateBackTo: "FeesAndLimits"
            });
        }} styleText={{
            color: isVerified
                ? Colors_1["default"][colorScheme].disabledButtonText
                : Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginTop: "auto",
            marginBottom: LayoutUtil_1.hp(50),
            backgroundColor: isVerified
                ? Colors_1["default"][colorScheme].disabledButton
                : Colors_1["default"][colorScheme].button
        }}/>
    </Themed_1.View>);
};
exports["default"] = AccountLimitsTab;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(35)
    }
});
