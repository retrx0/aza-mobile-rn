"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../assets/svg");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../Themed");
var ContactListItem = function (_a) {
    var name = _a.name, phoneNumber = _a.phoneNumber, suffixIcon = _a.suffixIcon, image = _a.image, isContactOnAza = _a.isContactOnAza;
    var scheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginTop: LayoutUtil_1.hp(25)
            },
        ]}>
      <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
            uri: image
        }}/>
      <Themed_1.View style={[CommonStyles_1["default"].col, { marginLeft: 10, marginRight: "auto" }]}>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 16, fontFamily: "Euclid-Circular-A-Medium" }}>
          {name}
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 12, marginTop: 5 }}>
          {phoneNumber}
        </Themed_1.Text>
      </Themed_1.View>
      {isContactOnAza ? (<svg_1.AZALargeLightningLogo size={25} color={Colors_1["default"][scheme].text}/>) : (<svg_1.InviteIcon />)}
    </Themed_1.View>);
};
exports["default"] = react_1.memo(ContactListItem);
