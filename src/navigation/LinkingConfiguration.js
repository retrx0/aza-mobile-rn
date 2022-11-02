"use strict";
/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
exports.__esModule = true;
var Linking = require("expo-linking");
var linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeTab: "one"
                        }
                    },
                    Vault: {
                        screens: {
                            VaultTab: "two"
                        }
                    }
                }
            },
            Modal: "modal",
            NotFound: "*"
        }
    }
};
exports["default"] = linking;
