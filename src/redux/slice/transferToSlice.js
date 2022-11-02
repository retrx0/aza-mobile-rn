"use strict";
exports.__esModule = true;
exports.selectTransferTo = exports.setTransferTo = exports.transferToSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Define the initial state using that type
var initialState = {
    amount: 0,
    description: "enjoy this",
    beneficairy: {
        azaAccountNumber: "000000111",
        fullName: "Test User",
        phone: "23456789",
        currency: "NGN",
        email: "testuser@aza.com",
        firstName: "Test",
        lastName: "User",
        pictureUrl: ""
    },
    transferType: "normal"
};
exports.transferToSlice = toolkit_1.createSlice({
    name: "transferTo",
    initialState: initialState,
    reducers: {
        setTransferTo: function (state, action) {
            state = action.payload;
        }
    }
});
exports.setTransferTo = exports.transferToSlice.actions.setTransferTo;
// Other code such as selectors can use the imported `RootState` type
var selectTransferTo = function (state) { return state.transferTo; };
exports.selectTransferTo = selectTransferTo;
exports["default"] = exports.transferToSlice.reducer;
