"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../assets/svg");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var NumberUtils_1 = require("../../../common/util/NumberUtils");
var Themed_1 = require("../../../components/Themed");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var SenderDetails = function (_a) {
    var userData = _a.userData, amount = _a.amount;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={{ alignItems: "center" }}>
      <react_native_1.Image style={{ borderRadius: 50, width: 50, height: 50 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14,
            marginTop: 15
        }}>
        {userData.fullName}
      </Themed_1.Text>
      <Themed_1.View lightColor="#eaeaec" darkColor="#1D1D20" style={[
            CommonStyles_1["default"].row,
            {
                marginVertical: 20,
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50
            },
        ]}>
        <Themed_1.Text lightColor={Colors_1["default"].general.darkGrey} darkColor={"#CCCCCC"} style={{ fontSize: 12 }}>
          Nigerian Naira
        </Themed_1.Text>
        <react_native_1.Image style={{
            width: 15,
            height: 15,
            marginHorizontal: 10,
            resizeMode: "cover"
        }} source={require("../../../assets/images/icons/NigerianFlag.png")}/>
        <Themed_1.Text lightColor={Colors_1["default"].general.darkGrey} darkColor={"#CCCCCC"} style={{ fontSize: 12 }}>
          NGN
        </Themed_1.Text>
      </Themed_1.View>
      <Themed_1.View style={[CommonStyles_1["default"].row]}>
        <svg_1.NairaLargeIcon color={!amount
            ? Colors_1["default"][colorScheme].secondaryText
            : Colors_1["default"][colorScheme].mainText}/>
        <Themed_1.Text style={{
            color: !amount
                ? Colors_1["default"][colorScheme].secondaryText
                : Colors_1["default"][colorScheme].mainText,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 36,
            marginVertical: 15
        }}>
          {!amount && " 0"} {NumberUtils_1.numberWithCommas(amount)}
        </Themed_1.Text>
      </Themed_1.View>
      <Themed_1.View style={[CommonStyles_1["default"].row]}>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 12
        }}>
          Aza Balance:
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            marginLeft: 3,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
          {"\u20A6"} {userData.azaBalance}
        </Themed_1.Text>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = SenderDetails;
