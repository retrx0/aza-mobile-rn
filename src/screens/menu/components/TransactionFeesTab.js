"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var Colors_1 = require("../../../constants/Colors");
var Themed_1 = require("../../../components/Themed");
var Divider_1 = require("../../../components/divider/Divider");
var TransactionFeesTab = function () {
    var transactionFees = [
        {
            transaction: "Account usage and opening fee",
            detail: "You can open your Aza account within seconds and start using it for free.",
            charge: "Free"
        },
        {
            transaction: "Money transfer to Aza accounts",
            detail: "Send money to Aza users for free",
            charge: "Free"
        },
        {
            transaction: "Payments (Bills, Gift cards, Donations)",
            detail: "Zero fees on any transaction under payment section",
            charge: "Free"
        },
        {
            transaction: "Withdraw money to own bank",
            detail: "Withdraw money from Aza to your own bank with no fees",
            charge: "Free"
        },
        {
            transaction: "Deposits via debit/credit cards",
            charge: "0.2%"
        },
        {
            transaction: "Money transfer to other banks",
            charge: "0.1%"
        },
    ];
    return (<react_native_1.ScrollView showsVerticalScrollIndicator={false} style={[styles.container]}>
      {transactionFees.map(function (_a, i) {
            var charge = _a.charge, detail = _a.detail, transaction = _a.transaction;
            return (<Themed_1.View key={i} style={[CommonStyles_1["default"].col, { alignSelf: "stretch" }]}>
          <Themed_1.View style={[
                    CommonStyles_1["default"].row,
                    {
                        alignSelf: "stretch",
                        justifyContent: "space-between",
                        paddingHorizontal: 15
                    },
                ]}>
            <Themed_1.View style={[CommonStyles_1["default"].col, { maxWidth: LayoutUtil_1.wp(300) }]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 14
                }}>
                {transaction}
              </Themed_1.Text>
              {detail && (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 12, marginTop: LayoutUtil_1.hp(4) }}>
                  {detail}
                </Themed_1.Text>)}
            </Themed_1.View>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontSize: 14
                }}>
              {charge}
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.View style={{
                    paddingVertical: LayoutUtil_1.hp(35)
                }}>
            <Divider_1["default"] />
          </Themed_1.View>
        </Themed_1.View>);
        })}
    </react_native_1.ScrollView>);
};
exports["default"] = TransactionFeesTab;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(35)
    }
});
