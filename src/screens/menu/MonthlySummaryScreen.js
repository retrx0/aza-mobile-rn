"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gifted_charts_1 = require("react-native-gifted-charts");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var svg_1 = require("../../../assets/svg");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var NumberUtils_1 = require("../../common/util/NumberUtils");
var MonthlySummaryScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Monthly Summary
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; },
            headerRight: function () { return (<react_native_1.TouchableOpacity style={[CommonStyles_1["default"].col, { alignItems: "center", marginTop: 2 }]}>
          <svg_1.DownLoadIcon color={Colors_1["default"][colorScheme].secondaryText} size={16}/>
          <Themed_1.Text style={{
                    color: Colors_1["default"][colorScheme].secondaryText,
                    fontSize: 12,
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    textAlign: "center"
                }}>
            Download
          </Themed_1.Text>
        </react_native_1.TouchableOpacity>); }
        });
    }, []);
    var chartData = [
        { value: 0, color: "#1198F6", text: "Water" },
        { value: 45, color: "#ED8A0A", text: "Electricity" },
        { value: 42, color: "#753FF6", text: "Internet" },
        { value: 46, color: "#2A9E17", text: "Airtime" },
        { value: 10, color: "#FFD200", text: "Cable Tv" },
    ];
    var filterBy = ["Summary", "Money Transfer", "Withdrawal", "Bills/Payment"];
    var summaries = [
        {
            transactionType: "Incoming",
            icon: (<Themed_1.View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#2AD168",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
          <svg_1.DepositIcon size={40} color="#FFFFFF"/>
        </Themed_1.View>),
            totalAmount: "100000",
            info: "Total money received in account this month",
            transactions: [
                {
                    amount: "30000",
                    transactionInfo: "Amount deposited via Debit/Credit card",
                    transactionIcon: <svg_1.DebitCardSmallIcon size={20} color="#FFFFFF"/>
                },
                {
                    amount: "40000",
                    transactionInfo: "Incoming money transfer",
                    transactionIcon: <svg_1.IncomingTransferIcon size={20} color="#FFFFFF"/>
                },
                {
                    amount: "30000",
                    transactionInfo: "Payments received through QR code",
                    transactionIcon: <svg_1.QRCodeIcon size={20} color="white"/>
                },
            ]
        },
        {
            transactionType: "Outgoing",
            icon: (<Themed_1.View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#FF361A",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
          <svg_1.WithdrawIcon size={40} color="#FFFFFF"/>
        </Themed_1.View>),
            totalAmount: "480000",
            info: "Total amount debited from your account",
            transactions: [
                {
                    amount: "25000",
                    transactionInfo: "Outgoing money transfer",
                    transactionIcon: <svg_1.OutgoingTransferIcon size={20} color="#FFFFFF"/>
                },
                {
                    amount: "200000",
                    transactionInfo: "Total money withdrawn to your bank",
                    transactionIcon: <svg_1.BankIcon size={16} color="#FFFFFF"/>
                },
                {
                    amount: "200000",
                    transactionInfo: "Total money withdrawn to your vault",
                    transactionIcon: <svg_1.VaultOutlinedSmallIcon color={"white"} size={20}/>
                },
                {
                    amount: "55000",
                    transactionInfo: "Bills, donations and other payments",
                    transactionIcon: <svg_1.PaymentsOutlinedIcon size={24} color="white"/>
                },
            ]
        },
        {
            transactionType: "Money Transfer",
            icon: (<Themed_1.View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#FF361A",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
          <svg_1.DebitCardIcon size={30} color="#FFFFFF"/>
        </Themed_1.View>),
            transactions: [
                {
                    amount: "5000",
                    transactionInfo: "Sent with a total of 9 transactions",
                    transactionIcon: <svg_1.DepositSmallIcon size={20} color="#FFFFFF"/>
                },
                {
                    amount: "30000",
                    transactionInfo: "Payments made through QR code",
                    transactionIcon: <svg_1.QRCodeIcon size={20} color="#FFFFFF"/>
                },
            ]
        },
        {
            transactionType: "Withdrawal to bank",
            icon: (<Themed_1.View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#FF361A",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
          <svg_1.BankLargeIcon size={30} color="#FFFFFF"/>
        </Themed_1.View>),
            transactions: [
                {
                    amount: "150000",
                    transactionInfo: "Withdrawn with a total of 3 transactions",
                    transactionIcon: <svg_1.DepositSmallIcon size={20} color="#FFFFFF"/>
                },
            ]
        },
        {
            transactionType: "Vault",
            icon: (<Themed_1.View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#FF361A",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
          <svg_1.VaultOutlinedIcon size={30} color="#FFFFFF"/>
        </Themed_1.View>),
            transactions: [
                {
                    amount: "50000",
                    transactionInfo: "Total money withdrawn from Vault to Bank",
                    transactionIcon: <svg_1.BankIcon size={16} color="#FFFFFF"/>
                },
                {
                    amount: "100000",
                    transactionInfo: "Total money withdrawn from Vault to Aza",
                    transactionIcon: <svg_1.WithdrawSmallIcon size={20} color="#FFFFFF"/>
                },
            ]
        },
        {
            transactionType: "Bills & Payment",
            icon: (<Themed_1.View style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#FF361A",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
          <svg_1.DebitCardIcon size={30} color="#FFFFFF"/>
        </Themed_1.View>),
            totalAmount: "75000",
            info: "See distribution of money spent in a chart"
        },
    ];
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[styles.container]}>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            {
                alignSelf: "stretch"
            },
        ]}>
          <Themed_1.View style={[CommonStyles_1["default"].row]}>
            <react_native_1.TouchableOpacity>
              <svg_1.ArrowLeftIcon color={Colors_1["default"][colorScheme].mainText}/>
            </react_native_1.TouchableOpacity>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
            marginHorizontal: 20
        }}>
              Jun 2022
            </Themed_1.Text>
            <react_native_1.TouchableOpacity>
              <svg_1.ArrowRightIcon color={Colors_1["default"][colorScheme].mainText} size={16}/>
            </react_native_1.TouchableOpacity>
          </Themed_1.View>
          <react_native_1.ScrollView horizontal style={{ marginTop: LayoutUtil_1.hp(25) }} showsHorizontalScrollIndicator={false}>
            {filterBy.map(function (filter, i) { return (<Themed_1.View key={i}>
                {i === 0 ? (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 14,
                    marginRight: 25
                }}>
                    {filter}
                  </Themed_1.Text>) : (<Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 14,
                    marginRight: 25
                }}>
                    {filter}
                  </Themed_1.Text>)}
              </Themed_1.View>); })}
          </react_native_1.ScrollView>
          <react_native_1.ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
            {summaries.map(function (_a, index) {
            var icon = _a.icon, info = _a.info, totalAmount = _a.totalAmount, transactionType = _a.transactionType, transactions = _a.transactions;
            return (<Themed_1.View key={index} style={[
                    CommonStyles_1["default"].col,
                    {
                        alignSelf: "stretch",
                        alignItems: "center",
                        paddingTop: LayoutUtil_1.hp(40)
                    },
                ]}>
                  {icon}
                  <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 14,
                    marginTop: 10
                }}>
                    {transactionType}
                  </Themed_1.Text>
                  {totalAmount && (<Themed_1.Text style={{
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: 14,
                        marginTop: 10,
                        color: transactionType === "Incoming"
                            ? "#2A9E17"
                            : "#FF361A"
                    }}>
                      {"\u20A6"} {NumberUtils_1.numberWithCommas(totalAmount)}
                    </Themed_1.Text>)}
                  {info && (<Themed_1.Text style={{
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: 14,
                        marginTop: 3,
                        color: Colors_1["default"][colorScheme].secondaryText
                    }}>
                      {info}
                    </Themed_1.Text>)}
                  {(transactions === null || transactions === void 0 ? void 0 : transactions.length) !== undefined && (<Themed_1.View style={{ marginVertical: 10 }}>
                      <svg_1.ArrowDownIcon color={Colors_1["default"][colorScheme].mainText} size={16}/>
                    </Themed_1.View>)}
                  {transactions === null || transactions === void 0 ? void 0 : transactions.map(function (transaction, i, _a) {
                    var length = _a.length;
                    return (<Themed_1.View key={i} style={[
                            CommonStyles_1["default"].col,
                            { alignSelf: "stretch", alignItems: "center" },
                        ]}>
                      <Themed_1.View style={{
                            width: 36,
                            height: 36,
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: colorScheme === "dark" ? "#3A3D42" : "black"
                        }}>
                        {transaction.transactionIcon}
                      </Themed_1.View>
                      <Themed_1.Text style={{
                            fontFamily: "Euclid-Circular-A-Medium",
                            fontSize: 14,
                            marginTop: 10,
                            color: transactionType === "Incoming"
                                ? "#2A9E17"
                                : "#FF361A"
                        }}>
                        {"\u20A6"} {NumberUtils_1.numberWithCommas(transaction.amount)}
                      </Themed_1.Text>
                      <Themed_1.Text style={{
                            fontFamily: "Euclid-Circular-A-Medium",
                            fontSize: 14,
                            marginTop: 3,
                            color: Colors_1["default"][colorScheme].secondaryText
                        }}>
                        {transaction.transactionInfo}
                      </Themed_1.Text>
                      {length - 1 !== i && (<Themed_1.View style={{ marginVertical: 15 }}>
                          <svg_1.PlusIcon color={Colors_1["default"][colorScheme].mainText} size={34}/>
                        </Themed_1.View>)}
                    </Themed_1.View>);
                })}
                </Themed_1.View>);
        })}
            <Themed_1.View style={{
            alignItems: "center",
            marginTop: 40,
            paddingLeft: 20
        }}>
              <react_native_gifted_charts_1.PieChart data={chartData} innerCircleColor={"transparent"} centerLabelComponent={function () {
            return (<Themed_1.View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 130,
                    height: 130,
                    borderRadius: 150
                }}>
                      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
                    fontSize: 14
                }}>
                        Total
                      </Themed_1.Text>
                      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
                        {"\u20A6"} {NumberUtils_1.numberWithCommas(65000)}
                      </Themed_1.Text>
                    </Themed_1.View>);
        }}/>

              <Themed_1.View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: 300
        }}>
                {chartData.map(function (_a, i) {
            var color = _a.color, text = _a.text;
            return (<Themed_1.View key={i} style={[
                    CommonStyles_1["default"].row,
                    { marginRight: 10, marginTop: 15 },
                ]}>
                    <Themed_1.View style={{
                    width: 15,
                    height: 15,
                    backgroundColor: color,
                    borderRadius: 3,
                    marginRight: 10
                }}/>
                    <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
                    fontSize: 14
                }}>
                      {text}
                    </Themed_1.Text>
                  </Themed_1.View>);
        })}
              </Themed_1.View>
            </Themed_1.View>
            <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { alignSelf: "stretch", alignItems: "center", marginTop: 20 },
        ]}>
              <Themed_1.View style={{
            width: 36,
            height: 36,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colorScheme === "dark" ? "#3A3D42" : "black"
        }}>
                <svg_1.HeartIcon color="#FF361A" size={20}/>
              </Themed_1.View>
              <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginTop: 10,
            color: "#FF361A"
        }}>
                {"\u20A6"} {NumberUtils_1.numberWithCommas(10000)}
              </Themed_1.Text>
              <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginTop: 3,
            color: Colors_1["default"][colorScheme].secondaryText
        }}>
                Worth of donations made
              </Themed_1.Text>
            </Themed_1.View>
          </react_native_1.ScrollView>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = MonthlySummaryScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
