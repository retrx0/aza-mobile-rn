"use strict";
exports.__esModule = true;
require("react-native-gesture-handler");
var expo_status_bar_1 = require("expo-status-bar");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useCachedResources_1 = require("./src/hooks/useCachedResources");
var useColorScheme_1 = require("./src/hooks/useColorScheme");
var navigation_1 = require("./src/navigation");
var react_redux_1 = require("react-redux");
var Store_1 = require("./src/redux/Store");
var Sentry = require("sentry-expo");
var App = function () {
    var isLoadingComplete = useCachedResources_1["default"]().isLoadingComplete;
    var colorScheme = useColorScheme_1["default"]();
    if (!isLoadingComplete) {
        return null;
    }
    else {
        return (<react_native_safe_area_context_1.SafeAreaProvider>
        <expo_status_bar_1.StatusBar />
        <react_redux_1.Provider store={Store_1.Store}>
          <navigation_1["default"] colorScheme={colorScheme}/>
        </react_redux_1.Provider>
      </react_native_safe_area_context_1.SafeAreaProvider>);
    }
};
// Sentry report config
Sentry.init({
    dsn: "https://e0cda68987dd4b5197008ef21096f2ca@o4503908022550528.ingest.sentry.io/4503908024188928",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    enableInExpoDevelopment: true,
    debug: true
});
exports["default"] = App;
