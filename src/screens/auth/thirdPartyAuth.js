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
exports.storeAuthSessionTokens = exports.fetchThirdPartyUserInfo = exports.signInWithApple = exports.signInWithFacebook = exports.signInWithGoogole = void 0;
var Google = require("expo-auth-session/providers/google");
var Facebook = require("expo-auth-session/providers/facebook");
var AuthSession = require("expo-auth-session");
var AppleAuthentication = require("expo-apple-authentication");
var AppUtil_1 = require("../../common/util/AppUtil");
var axios_1 = require("axios");
var SecureStore = require("expo-secure-store");
var useProxy = AppUtil_1.isEnvDevelopent;
var signInWithGoogole = function () {
    //TODO replace id's with env var
    var _a = Google.useAuthRequest({
        expoClientId: "323832028739-lv5fi56u3oh3rl78itctljbackutb9d2.apps.googleusercontent.com",
        iosClientId: "323832028739-24c0ke20u7pvufco57fcd6u6slnvi1ep.apps.googleusercontent.com",
        androidClientId: "323832028739-9c78ldonqnd1d0altnabgcf0h8lnbb1a.apps.googleusercontent.com",
        redirectUri: AuthSession.makeRedirectUri({
            useProxy: true,
            isTripleSlashed: true
        })
    }, { useProxy: useProxy, isTripleSlashed: true }), request = _a[0], response = _a[1], promptAsync = _a[2];
    return {
        g_request: request,
        g_response: response,
        g_promptAsync: promptAsync
    };
};
exports.signInWithGoogole = signInWithGoogole;
var signInWithFacebook = function () {
    var _a = Facebook.useAuthRequest({
        expoClientId: "423467809816897",
        redirectUri: AuthSession.makeRedirectUri({
            useProxy: true,
            isTripleSlashed: true
        })
    }, { useProxy: useProxy, isTripleSlashed: true }), f_request = _a[0], f_response = _a[1], f_promptAsync = _a[2];
    return {
        f_request: f_request,
        f_response: f_response,
        f_promptAsync: f_promptAsync
    };
};
exports.signInWithFacebook = signInWithFacebook;
var signInWithApple = function () { return __awaiter(void 0, void 0, void 0, function () {
    var credential, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, AppleAuthentication.signInAsync({
                        requestedScopes: [
                            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                            AppleAuthentication.AppleAuthenticationScope.EMAIL,
                        ]
                    })];
            case 1:
                credential = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                if (e_1.code === "ERR_CANCELED") {
                    // handle that the user canceled the sign-in flow
                }
                else {
                    // handle other errors
                }
                return [3 /*break*/, 3];
            case 3:
                console.log(credential);
                return [2 /*return*/, credential];
        }
    });
}); };
exports.signInWithApple = signInWithApple;
var signOutAllAccount = function () {
    // AppleAuthentication.signOutAsync()
    //   .then((r) => console.debug("Apple account signed out"))
    //   .catch((e) => console.error(e));
};
var fetchThirdPartyUserInfo = function (access_token, thirdParty) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1["default"].get(thirdParty === "Google"
                        ? "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + access_token
                        : "https://graph.facebook.com/me?fields=id,name,first_name,last_name,email,picture&access_token=" + access_token)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2:
                e_2 = _a.sent();
                console.error(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, null];
        }
    });
}); };
exports.fetchThirdPartyUserInfo = fetchThirdPartyUserInfo;
var storeAuthSessionTokens = function (response, tokenKey, refreshTokenKey) {
    var _a, _b, _c;
    if ((response === null || response === void 0 ? void 0 : response.type) === "success") {
        // Store Tokens
        if ((_a = response.authentication) === null || _a === void 0 ? void 0 : _a.refreshToken) {
            SecureStore.setItemAsync(tokenKey, (_b = response.authentication) === null || _b === void 0 ? void 0 : _b.accessToken)
                .then(function () { return console.log("token stored"); })["catch"](function (e) { return console.error(e); });
            SecureStore.setItemAsync(refreshTokenKey, (_c = response.authentication) === null || _c === void 0 ? void 0 : _c.refreshToken)
                .then(function () { return console.log("Refresh token stored"); })["catch"](function (e) { return console.error(e); });
        }
    }
};
exports.storeAuthSessionTokens = storeAuthSessionTokens;
