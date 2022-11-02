"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../assets/svg");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var Themed_1 = require("../Themed");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
function TransactionListItem(_a) {
    var image = _a.image, name = _a.name, transactionType = _a.transactionType, transactionTitle = _a.transactionTitle, transactionMessage = _a.transactionMessage, amount = _a.amount, date = _a.date;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignItems: "flex-start",
                alignSelf: "stretch"
            },
        ]}>
      <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
            uri: image
        }}/>
      <Themed_1.View style={{ display: "flex", marginRight: "auto", marginLeft: 15 }}>
        <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
          {name}
        </Themed_1.Text>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                marginTop: 3,
                marginBottom: 10,
                alignSelf: "flex-start"
            },
        ]}>
          {transactionType === "incoming" ? (<svg_1.ReceivedIcon color="#2A9E17"/>) : (<svg_1.SendIcon color={Colors_1["default"].light.error}/>)}
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            marginLeft: 3,
            fontSize: 12
        }}>
            {transactionTitle}
          </Themed_1.Text>
        </Themed_1.View>
        {transactionMessage ? (<Themed_1.View style={[CommonStyles_1["default"].row, { alignSelf: "flex-start" }]}>
            <svg_1.MessageIcon color={Colors_1["default"][colorScheme].text} size={12}/>
            <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.secondaryText} style={{
                marginLeft: 3,
                fontSize: 10,
                fontFamily: "Euclid-Circular-A-Light"
            }}>
              {transactionMessage}
            </Themed_1.Text>
          </Themed_1.View>) : null}
      </Themed_1.View>

      <Themed_1.View style={{
            display: "flex",
            alignItems: "flex-end"
        }}>
        <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14,
            color: transactionType === "incoming" ? "#2A9E17" : Colors_1["default"].light.error
        }}>
          {"\u20A6"} {amount}
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 10,
            marginTop: 3,
            fontFamily: "Euclid-Circular-A-Light"
        }}>
          {date}
        </Themed_1.Text>
      </Themed_1.View>
    </Themed_1.View>);
}
exports["default"] = TransactionListItem;
