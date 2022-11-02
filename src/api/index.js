"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = axios_1["default"].create({
    baseURL: 'https://aza-backend-asp-dev.azurewebsites.net',
    responseType: "json",
    headers: {
        'Content-Type': 'application/json'
    }
});
exports["default"] = api;
