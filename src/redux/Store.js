"use strict";
exports.__esModule = true;
exports.Store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var authSlice_1 = require("./slice/authSlice");
var newUserSlice_1 = require("./slice/newUserSlice");
var transferSlice_1 = require("./slice/transferSlice");
var transferToSlice_1 = require("./slice/transferToSlice");
var userSlice_1 = require("./slice/userSlice");
exports.Store = toolkit_1.configureStore({
    reducer: {
        user: userSlice_1["default"],
        auth: authSlice_1["default"],
        newUser: newUserSlice_1["default"],
        transfer: transferSlice_1["default"],
        transferTo: transferToSlice_1["default"]
    }
});
