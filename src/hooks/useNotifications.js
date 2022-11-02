"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useNotifications = void 0;
var Notifications = require("expo-notifications");
var react_native_1 = require("react-native");
var Device = require("expo-device");
var useNotifications = function () {
    //register and get token
    var registerForPushNotificationsAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, existingStatus, finalStatus, status_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Device.isDevice) return [3 /*break*/, 5];
                    return [4 /*yield*/, Notifications.getPermissionsAsync()];
                case 1:
                    existingStatus = (_a.sent()).status;
                    finalStatus = existingStatus;
                    if (!(existingStatus !== "granted")) return [3 /*break*/, 3];
                    return [4 /*yield*/, Notifications.requestPermissionsAsync()];
                case 2:
                    status_1 = (_a.sent()).status;
                    finalStatus = status_1;
                    _a.label = 3;
                case 3:
                    if (finalStatus !== "granted") {
                        alert("Failed to get push token for push notification!");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, Notifications.getExpoPushTokenAsync()];
                case 4:
                    token = (_a.sent()).data;
                    return [3 /*break*/, 6];
                case 5:
                    alert("Must use physical device for Push Notifications");
                    _a.label = 6;
                case 6:
                    if (react_native_1.Platform.OS === "android") {
                        Notifications.setNotificationChannelAsync("default", {
                            name: "default",
                            importance: Notifications.AndroidImportance.MAX,
                            vibrationPattern: [0, 250, 250, 250],
                            lightColor: "#FF231F7C"
                        });
                    }
                    return [2 /*return*/, token];
            }
        });
    }); };
    // Local notification
    var schedulePushNotification = function (title, body, seconds, data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Notifications.scheduleNotificationAsync({
                        content: {
                            title: title,
                            body: body,
                            data: data
                        },
                        trigger: { seconds: seconds }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // push notification
    var sendPushNotification = function (expoPushToken, title, body, data) { return __awaiter(void 0, void 0, void 0, function () {
        var message, result, expoPushResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (expoPushToken == null || expoPushToken == "null")
                        return [2 /*return*/];
                    message = {
                        to: expoPushToken,
                        sound: "default",
                        title: title,
                        body: body,
                        data: data,
                        autoDismiss: false
                    };
                    return [4 /*yield*/, fetch("https://exp.host/--/api/v2/push/send", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Accept-encoding": "gzip, deflate",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(message)
                        })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    expoPushResponse = _a.sent();
                    console.log("expoPushResponse: ", expoPushResponse);
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        registerForPushNotificationsAsync: registerForPushNotificationsAsync,
        schedulePushNotification: schedulePushNotification,
        sendPushNotification: sendPushNotification
    };
};
exports.useNotifications = useNotifications;
