"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../../../components/Themed");
var AccountDetails_1 = require("./components/AccountDetails");
var TransactionOptions_1 = require("./components/TransactionOptions");
var LinkBVN_1 = require("./components/LinkBVN");
var RecentTransactions_1 = require("./components/RecentTransactions");
var authSlice_1 = require("../../../redux/slice/authSlice");
var redux_1 = require("../../../hooks/redux");
var newUserSlice_1 = require("../../../redux/slice/newUserSlice");
var useNotifications_1 = require("../../../hooks/useNotifications");
var Home = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var isLoggedIn = redux_1.useAppSelector(authSlice_1.selectAuthIsLoggedIn);
    console.log("Logged in state: " + isLoggedIn);
    var newUserData = redux_1.useAppSelector(newUserSlice_1.selectNewUser);
    console.log(newUserData);
    var _b = useNotifications_1.useNotifications(), schedulePushNotification = _b.schedulePushNotification, registerForPushNotificationsAsync = _b.registerForPushNotificationsAsync, sendPushNotification = _b.sendPushNotification;
    // Testing notification
    // schedulePushNotification("Hi 👋", "Welcome to AZA!!", 1, { a: "b" });
    // registerForPushNotificationsAsync().then((token) => {
    //   if (token) {
    //     sendPushNotification(
    //       token,
    //       "Hello Again 👀",
    //       "This is a push notification",
    //       {}
    //     );
    //   }
    // });
    return (<Themed_1.View style={styles.container}>
      <AccountDetails_1["default"] />
      <TransactionOptions_1["default"] navigation={navigation} route={route}/>
      <LinkBVN_1["default"] navigation={navigation} route={route} isBvnLinked={true}/>
      <RecentTransactions_1["default"] navigation={navigation} route={route}/>
    </Themed_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    }
});
exports["default"] = Home;
