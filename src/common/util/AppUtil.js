"use strict";
exports.__esModule = true;
exports.getInitialsAvatar = exports.getCurrencyUnicode = exports.isEnvDevelopent = void 0;
var _env_1 = require("@env");
var AppConstants_1 = require("../../constants/AppConstants");
var currency_symbol_map_1 = require("currency-symbol-map");
var Colors_1 = require("../../constants/Colors");
exports.isEnvDevelopent = _env_1.ENV === AppConstants_1.ENV_DEVELOPMENT ? true : false;
var getCurrencyUnicode = function (currencyCode) {
    return currency_symbol_map_1["default"](currencyCode);
};
exports.getCurrencyUnicode = getCurrencyUnicode;
var getInitialsAvatar = function (item) {
    return "https://ui-avatars.com/api/?name=" + item.firstName + "+" + (item.lastName ? item.lastName : "") + "&background=" + Colors_1["default"][item.scheme].backgroundSecondary + "&color=" + Colors_1["default"][item.scheme].mainText;
};
exports.getInitialsAvatar = getInitialsAvatar;
