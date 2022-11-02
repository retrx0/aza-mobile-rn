"use strict";
exports.__esModule = true;
var react_1 = require("react");
var VirtualKeyboard_1 = require("../../../components/input/VirtualKeyboard");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var DescriptionModal_1 = require("../../keypad/modal/DescriptionModal");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var NumberUtils_1 = require("../../../common/util/NumberUtils");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var svg_1 = require("../../../../assets/svg");
var QRReceivePaymentTab = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), amount = _b[0], setAmount = _b[1];
    var _c = react_1.useState(""), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState(false), isDescModalVisible = _d[0], setDescModalVisible = _d[1];
    var colorScheme = useColorScheme_1["default"]();
    return (<>
      <Themed_1.View style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            paddingVertical: LayoutUtil_1.hp(30),
            paddingHorizontal: 15
        }}>
        <Themed_1.View style={{
            display: "flex",
            alignItems: "center"
        }}>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginTop: 10,
            marginBottom: 15
        }}>
            Enter amount to be paid
          </Themed_1.Text>
          <Themed_1.View style={[CommonStyles_1["default"].row]}>
            <svg_1.NairaLargeIcon color={!amount
            ? Colors_1["default"][colorScheme].secondaryText
            : colorScheme === "dark"
                ? Colors_1["default"].dark.mainText
                : Colors_1["default"].light.text}/>
            <Themed_1.Text style={{
            color: !amount
                ? Colors_1["default"][colorScheme].secondaryText
                : colorScheme === "dark"
                    ? Colors_1["default"].dark.mainText
                    : Colors_1["default"].light.text,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 36
        }}>
              {!amount && " 0"} {NumberUtils_1.numberWithCommas(amount)}
            </Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={{
            width: "100%",
            marginTop: "auto",
            marginBottom: "auto"
        }}>
          <VirtualKeyboard_1["default"] value={amount} setValue={setAmount}/>
        </Themed_1.View>

        <Button_1["default"] title="Continue" disabled={!amount} onPressButton={function () { return setDescModalVisible(true); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            width: "100%",
            marginBottom: "auto",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
      </Themed_1.View>
      <DescriptionModal_1["default"] description={description} navigation={navigation} setDescription={setDescription} setModalVisible={setDescModalVisible} 
    // TODO pass proper type for qr transactions
    transactionType={null} visible={isDescModalVisible}/>
    </>);
};
exports["default"] = QRReceivePaymentTab;
