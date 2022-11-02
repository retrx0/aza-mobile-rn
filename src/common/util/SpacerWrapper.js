"use strict";
exports.__esModule = true;
var Themed_1 = require("../../components/Themed");
var CommonStyles_1 = require("../styles/CommonStyles");
var NotchResponsiveness_1 = require("./NotchResponsiveness");
var SpacerWrapper = function (_a) {
    var children = _a.children;
    return (<Themed_1.View style={[CommonStyles_1["default"].wrapperContainer]}>
      <NotchResponsiveness_1["default"] />
      <Themed_1.View style={[CommonStyles_1["default"].wrapperContainer]}>{children}</Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = SpacerWrapper;
