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
var Font = require("expo-font");
var SplashScreen = require("expo-splash-screen");
var react_1 = require("react");
var SecureStore = require("expo-secure-store");
var _env_1 = require("@env");
var EuclidRegular = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A.ttf");
var EuclidLight = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Light.ttf");
var EuclidSemiBold = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Semi-Bold.ttf");
var EuclidBold = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Bold.ttf");
var EuclidMedium = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Medium.ttf");
var EuclidSemiBoldItalic = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Semi-Bold-Italic.ttf");
var SpaceMono = require("../../assets/fonts/SpaceMono-Regular.ttf");
var useCachedResources = function () {
    var _a = react_1.useState(false), isLoadingComplete = _a[0], setLoadingComplete = _a[1];
    var _b = react_1.useState(false), isUserSignedIn = _b[0], setUserSignedIn = _b[1];
    // const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);
    // const dispatch = useAppDispatch();
    // Load any resources or data that we need prior to rendering the app
    react_1.useEffect(function () {
        function loadResourcesAndDataAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            // Keep the splash screen visible while we fetch resources
                            SplashScreen.preventAutoHideAsync();
                            // Check if user is already logged in
                            SecureStore.getItemAsync(_env_1.STORAGE_KEY_JWT_TOKEN)
                                .then(function (token) {
                                if (token)
                                    setUserSignedIn(true);
                            })["catch"](function (e) { return console.info(e); });
                            // do any api call here
                            if (isUserSignedIn) {
                                //  then user is loggend in, get passcode and refresh tokens
                                // dispatch(login())
                            }
                            else {
                                // goto sign in screen
                            }
                            // Load fonts
                            return [4 /*yield*/, Font.loadAsync({
                                    "Euclid-Circular-A-Bold": EuclidBold,
                                    "Euclid-Circular-A": EuclidRegular,
                                    "Euclid-Circular-A-Semi-Bold": EuclidSemiBold,
                                    "Euclid-Circular-A-Medium": EuclidMedium,
                                    "Euclid-Circular-A-Semi-Bold-Italic": EuclidSemiBoldItalic,
                                    "Euclid-Circular-A-Light": EuclidLight,
                                    "SpaceMono-Regular": SpaceMono
                                })];
                        case 1:
                            // Load fonts
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            e_1 = _a.sent();
                            // We might want to provide this error information to an error reporting service
                            console.warn(e_1);
                            return [3 /*break*/, 4];
                        case 3:
                            setLoadingComplete(true);
                            SplashScreen.hideAsync();
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        loadResourcesAndDataAsync();
    }, []);
    return { isLoadingComplete: isLoadingComplete, isUserSignedIn: isUserSignedIn };
};
exports["default"] = useCachedResources;
