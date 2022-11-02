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
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_camera_1 = require("expo-camera");
var Themed_1 = require("../../../../components/Themed");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Button_1 = require("../../../../components/buttons/Button");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var images_1 = require("../../../../../assets/images");
var ScanCardScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(), cameraPermission = _b[0], setCameraPermission = _b[1];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16,
                    color: "#E7E9EA"
                }}>
          Scan Card
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            headerTransparent: true,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expo_camera_1.Camera.requestCameraPermissionsAsync()];
                    case 1:
                        permission = _a.sent();
                        setCameraPermission(permission);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (<react_native_1.ImageBackground source={images_1.ScanCardBackground} style={{ flex: 1 }}>
      <Themed_1.View style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0, 0.60)",
            paddingHorizontal: 15,
            paddingTop: LayoutUtil_1.hp(120),
            paddingBottom: LayoutUtil_1.hp(50)
        }}>
        <Themed_1.View style={{ backgroundColor: "transparent" }}>
          <Themed_1.Text darkColor={Colors_1["default"].dark.mainText} style={{
            color: "#E7E9EA",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            textAlign: "center"
        }}>
            1/2
          </Themed_1.Text>
          <Themed_1.Text darkColor={Colors_1["default"].dark.mainText} style={{
            color: "#E7E9EA",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginTop: LayoutUtil_1.hp(15)
        }}>
            Place the front side of card in the purple box
          </Themed_1.Text>
        </Themed_1.View>
        {(cameraPermission === null || cameraPermission === void 0 ? void 0 : cameraPermission.granted) && (<expo_camera_1.Camera style={{ width: "100%", height: 250 }} type={expo_camera_1.CameraType.back}/>)}

        <Button_1["default"] title="Add Card Manually" onPressButton={function () { return navigation.navigate("AddNewCard"); }} styleText={{
            color: "black",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(25),
            backgroundColor: "#E7E9EA"
        }}/>
      </Themed_1.View>
    </react_native_1.ImageBackground>);
};
exports["default"] = ScanCardScreen;
