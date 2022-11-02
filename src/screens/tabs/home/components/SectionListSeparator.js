"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var SectionListSeparator = function (_a) {
    var title = _a.title, listSize = _a.listSize;
    return (<Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignItems: "flex-end",
                alignSelf: "flex-start",
                marginTop: LayoutUtil_1.hp(15)
            },
        ]}>
      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 14 }}>
        {title}
      </Themed_1.Text>
      <Themed_1.Text style={{
            color: "#2A9E17",
            marginLeft: 10,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Light"
        }}>
        {listSize}
      </Themed_1.Text>
    </Themed_1.View>);
};
exports["default"] = SectionListSeparator;
