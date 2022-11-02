"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../../../../components/Themed");
var TransactionListItem_1 = require("../../../../components/ListItem/TransactionListItem");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var svg_1 = require("../../../../../assets/svg");
var userData_1 = require("../../../../constants/userData");
function RecentTransactions(_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={{ display: "flex", marginTop: 50 }}>
      <Themed_1.View style={{
            display: "flex",
            marginBottom: 25,
            flexDirection: "row",
            alignItems: "center"
        }}>
        <react_native_1.TouchableOpacity onPress={function () {
            return navigation.navigate("Common", { screen: "TransactionHistory" });
        }}>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ marginRight: 3, fontFamily: "Euclid-Circular-A-Medium" }}>
            Recent Transactions
          </Themed_1.Text>
        </react_native_1.TouchableOpacity>
        <svg_1.SendIcon color={Colors_1["default"][colorScheme].secondaryText}/>
      </Themed_1.View>
      <react_native_1.FlatList showsVerticalScrollIndicator={false} keyExtractor={function (item) { return item.id.toString(); }} data={userData_1.UserData.recentTransactions} contentContainerStyle={{ paddingBottom: 250 }} ItemSeparatorComponent={function () {
            return (<Themed_1.View style={{
                    height: 25
                }}/>);
        }} renderItem={function (_a) {
            var _b = _a.item, amount = _b.amount, date = _b.date, image = _b.image, name = _b.name, transactionMessage = _b.transactionMessage, transactionTitle = _b.transactionTitle, transactionType = _b.transactionType;
            return (<TransactionListItem_1["default"] amount={amount} date={date} image={image} name={name} transactionMessage={transactionMessage} transactionTitle={transactionTitle} transactionType={transactionType}/>);
        }}/>
    </Themed_1.View>);
}
exports["default"] = RecentTransactions;
