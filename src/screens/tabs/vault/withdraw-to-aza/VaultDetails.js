"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UnMatureVault_1 = require("./UnMatureVault");
var MaturedVault_1 = require("./MaturedVault");
var VaultDetails = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(false), matured = _b[0], setMatured = _b[1];
    return (<>
      {matured ? (<MaturedVault_1["default"] navigation={navigation} route={route}/>) : (<UnMatureVault_1["default"] setMatured={function () { return setMatured(true); }}/>)}
    </>);
};
exports["default"] = VaultDetails;
