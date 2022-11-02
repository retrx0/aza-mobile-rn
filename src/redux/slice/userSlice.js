"use strict";
exports.__esModule = true;
exports.selectUser = exports.setUser = exports.userSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
// Define the initial state using that type
var initialState = {
    phoneNumber: "+2340011112222",
    fullName: "Test User",
    firstName: "Test",
    lastName: "User",
    pictureUrl: undefined,
    azaAccountNumber: 331234243,
    azaBalance: 0,
    emailAddress: "testuser@gmail.com",
    accountVerified: true,
    accountStatus: "Ok",
    transfers: {
        incommingTransferLimit: 0,
        depositAmountLimit: 0,
        totalMonthlySenders: 0,
        totalMonthlyReceivers: 0,
        totalMonthlyIncomingTransfers: 0,
        totalMonthlyIncomingTransferAmount: 0,
        totalMonthlyOutgoingTransfers: 0,
        totalMonthlyOutgoingTransferAmount: 0
    },
    transactions: [],
    accountCurency: "NGN",
    azaContacts: [
        {
            azaAccountNumber: "12345678",
            fullName: "Test User2",
            firstName: "Test",
            lastName: "User2",
            phone: "234567890",
            pictureUrl: "",
            currency: "NGN",
            email: "testuser2@aza.com"
        },
        {
            azaAccountNumber: "12345679",
            fullName: "Test User3",
            firstName: "Test",
            lastName: "User4",
            phone: "234567890",
            pictureUrl: "",
            currency: "NGN",
            email: "testuser4@aza.com"
        },
        {
            azaAccountNumber: "12345610",
            fullName: "Test User4",
            firstName: "Test",
            lastName: "User4",
            phone: "234567890",
            pictureUrl: "",
            currency: "NGN",
            email: "testuser4@aza.com"
        },
    ]
};
exports.userSlice = toolkit_1.createSlice({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialState,
    reducers: {
        setUser: function (state, action) {
            state = action.payload;
        }
    }
});
exports.setUser = exports.userSlice.actions.setUser;
// Other code such as selectors can use the imported `RootState` type
var selectUser = function (state) { return state.user; };
exports.selectUser = selectUser;
exports["default"] = exports.userSlice.reducer;
