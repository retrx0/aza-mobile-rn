"use strict";
exports.__esModule = true;
exports.sendInviteToNonAzaContact = void 0;
var SecureStore = require("expo-secure-store");
var _env_1 = require("@env");
var __1 = require("..");
var react_native_1 = require("react-native");
var sendInviteToNonAzaContact = function () {
    SecureStore.getItemAsync(_env_1.STORAGE_KEY_JWT_TOKEN)
        .then(function (jwt) {
        if (jwt) {
            __1["default"]
                .post("/api/v1/user/invite", { phoneNumber: "", email: "" }, { headers: { Authorization: "Bearer " + jwt } })
                .then(function () {
                return react_native_1.Alert.alert("Invitation Sent", "Your invitation was sent successfully!");
            })["catch"](function (e) {
                console.error(e);
                react_native_1.Alert.alert("Invitation failed", "Your invitation failed to send!");
            });
        }
    })["catch"](function (e) {
        console.error(e);
        react_native_1.Alert.alert("Invitation failed!", "Your invitation failed to send!");
    });
};
exports.sendInviteToNonAzaContact = sendInviteToNonAzaContact;
