"use strict";
exports.__esModule = true;
exports.numberWithCommas = void 0;
var numberWithCommas = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
exports.numberWithCommas = numberWithCommas;
