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
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
var vector_icons_1 = require("@expo/vector-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var React = require("react");
var Notifications = require("expo-notifications");
var QRTransactionsScreen_1 = require("../screens/qrTransactions/QRTransactionsScreen");
var QRCodeScreen_1 = require("../screens/qrTransactions/QRCodeScreen");
var NotFoundScreen_1 = require("../screens/NotFoundScreen");
var LinkingConfiguration_1 = require("./LinkingConfiguration");
var WelcomeScreen_1 = require("../screens/onboarding/WelcomeScreen");
var SignUpNavigator_1 = require("../screens/auth/signup/SignUpNavigator");
var SignInNavigator_1 = require("../screens/auth/signin/SignInNavigator");
var BottomTabNavigator_1 = require("./BottomTabNavigator");
var CommonStackNavigator_1 = require("../common/navigation/CommonStackNavigator");
var useCachedResources_1 = require("../hooks/useCachedResources");
var useNotifications_1 = require("../hooks/useNotifications");
var Navigation = function (_a) {
    var colorScheme = _a.colorScheme;
    return (<native_1.NavigationContainer linking={LinkingConfiguration_1["default"]} theme={colorScheme === "dark" ? native_1.DarkTheme : native_1.DefaultTheme}>
      <RootNavigator />
    </native_1.NavigationContainer>);
};
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
var Stack = native_stack_1.createNativeStackNavigator();
Notifications.setNotificationHandler({
    handleNotification: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, ({
                    shouldShowAlert: true,
                    shouldPlaySound: false,
                    shouldSetBadge: false
                })];
        });
    }); }
});
var RootNavigator = function () {
    var isUserSignedIn = useCachedResources_1["default"]().isUserSignedIn;
    var _a = useNotifications_1.useNotifications(), registerForPushNotificationsAsync = _a.registerForPushNotificationsAsync, sendPushNotification = _a.sendPushNotification;
    var _b = React.useState(""), expoPushToken = _b[0], setExpoPushToken = _b[1];
    var notificationListener = React.useRef();
    var responseListener = React.useRef();
    React.useEffect(function () {
        registerForPushNotificationsAsync().then(function (token) {
            if (token !== undefined) {
                setExpoPushToken(token);
            }
        });
        notificationListener.current =
            Notifications.addNotificationReceivedListener(function (notification) {
                // handle notification
            });
        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(function (response) {
                console.log(response);
            });
        return function () {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    return (<Stack.Navigator initialRouteName={isUserSignedIn ? "SignIn" : "Welcome"} screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen_1["default"]} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUpNavigator_1["default"]} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignInNavigator_1["default"]} options={{ headerShown: false }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator_1["default"]} options={{
            headerShown: false
        }}/>
      <Stack.Screen name="Common" component={CommonStackNavigator_1["default"]} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen_1["default"]} options={{ title: "Oops!" }}/>
      <Stack.Screen name="QRTransactions" component={QRTransactionsScreen_1["default"]}/>
      <Stack.Screen name="QRCode" component={QRCodeScreen_1["default"]}/>
    </Stack.Navigator>);
};
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
var BottomTab = bottom_tabs_1.createBottomTabNavigator();
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
var TabBarIcon = function (props) {
    return <vector_icons_1.FontAwesome size={30} style={{ marginBottom: -3 }} {...props}/>;
};
exports["default"] = Navigation;
