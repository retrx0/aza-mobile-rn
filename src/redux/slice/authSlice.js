"use strict";
var _a;
exports.__esModule = true;
exports.selectAuthIsLoggedIn = exports.logOut = exports.logIn = exports.authSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Define the initial state using that type
var initialState = {
    azaId: "",
    isLoggedIn: true
};
exports.authSlice = toolkit_1.createSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialState,
    reducers: {
        logIn: function (state) {
            state.isLoggedIn = true;
        },
        logOut: function (state) {
            state.isLoggedIn = false;
        }
    }
});
exports.logIn = (_a = exports.authSlice.actions, _a.logIn), exports.logOut = _a.logOut;
// Other code such as selectors can use the imported `RootState` type
var selectAuthIsLoggedIn = function (state) { return state.auth.isLoggedIn; };
exports.selectAuthIsLoggedIn = selectAuthIsLoggedIn;
exports["default"] = exports.authSlice.reducer;
