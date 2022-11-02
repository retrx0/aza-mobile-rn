"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// import Constants from 'expo-constants';
// const appConfig = Constants.manifest;
exports["default"] = (function (_a) {
    var config = _a.config;
    return (__assign(__assign({}, config), { hooks: {
            postPublish: [
                {
                    file: 'sentry-expo/upload-sourcemaps',
                    config: {
                        organization: process.env.SENTRY_ORG,
                        project: process.env.SENTRY_PROJECT,
                        authToken: process.env.SENTRY_AUTH_TOKEN
                    }
                }
            ]
        } }));
});
