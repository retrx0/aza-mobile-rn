"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var TransactionListItem_1 = require("../../../../components/ListItem/TransactionListItem");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var svg_1 = require("../../../../../assets/svg");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var TransactionHistoryScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Transaction History
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
    var transactionHistory = [
        {
            dateOfTransactions: "15 June 2022",
            transactions: [
                {
                    id: 1,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "incoming",
                    transactionTitle: "Incoming Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 2,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Transfer to Bank",
                    transactionMessage: "",
                    amount: "328,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 3,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "incoming",
                    transactionTitle: "Incoming Transfer",
                    transactionMessage: "",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
            ]
        },
        {
            dateOfTransactions: "9 June 2022",
            transactions: [
                {
                    id: 9,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Outgoing Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 10,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Outgoing Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
            ]
        },
        {
            dateOfTransactions: "20 June 2022",
            transactions: [
                {
                    id: 4,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Swift Networks",
                    transactionType: "outgoing",
                    transactionTitle: "Internet Payment",
                    transactionMessage: "",
                    amount: "328,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 5,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Outgoing Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 6,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Outgoing Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 7,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Outgoing Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
                {
                    id: 8,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                    name: "Adewale Adeyesufu",
                    transactionType: "outgoing",
                    transactionTitle: "Outgoing Transfer",
                    transactionMessage: "Chop life my gee ",
                    amount: "28,000.00",
                    date: "4 July 2022 04:26"
                },
            ]
        },
    ];
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[styles.container]}>
        <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
          {transactionHistory.map(function (_a, i) {
            var dateOfTransactions = _a.dateOfTransactions, transactions = _a.transactions;
            return (<Themed_1.View key={i} style={[CommonStyles_1["default"].col, { alignSelf: "stretch" }]}>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
                    fontSize: 14,
                    marginBottom: LayoutUtil_1.hp(10)
                }}>
                {dateOfTransactions}
              </Themed_1.Text>
              {transactions.map(function (_a, i) {
                    var amount = _a.amount, date = _a.date, image = _a.image, name = _a.name, transactionMessage = _a.transactionMessage, transactionTitle = _a.transactionTitle, transactionType = _a.transactionType;
                    return (<Themed_1.View key={i} style={{ marginBottom: LayoutUtil_1.hp(20) }}>
                    <TransactionListItem_1["default"] amount={amount} date={date} image={image} name={name} transactionMessage={transactionMessage} transactionTitle={transactionTitle} transactionType={transactionType}/>
                  </Themed_1.View>);
                })}
            </Themed_1.View>);
        })}
        </react_native_1.ScrollView>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = TransactionHistoryScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
