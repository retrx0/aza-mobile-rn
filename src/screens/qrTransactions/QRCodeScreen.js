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
var react_native_view_shot_1 = require("react-native-view-shot");
var MediaLibrary = require("expo-media-library");
var react_native_custom_qr_codes_expo_1 = require("react-native-custom-qr-codes-expo");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Button_1 = require("../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var svg_1 = require("../../../assets/svg");
var QRCodeScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = MediaLibrary.usePermissions(), requestPermission = _b[1];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          QR Transactions
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    var captureScreenAndSaveToGallery = function () { return __awaiter(void 0, void 0, void 0, function () {
        var permission;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestPermission()];
                case 1:
                    permission = _a.sent();
                    permission.granted
                        ? react_native_view_shot_1.captureScreen({
                            format: "jpg",
                            quality: 0.8
                        }).then(function (uri) { return MediaLibrary.saveToLibraryAsync(uri); }, function (error) { return console.error("Oops, snapshot failed", error); })
                        : react_native_1.Alert.alert("Permission not granted");
                    return [2 /*return*/];
            }
        });
    }); };
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View style={{ alignItems: "center" }}>
          <react_native_1.Image style={{ borderRadius: 50, width: 50, height: 50 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14,
            marginVertical: 15
        }}>
            Chiazondu Joseph
          </Themed_1.Text>
          <Themed_1.View style={[CommonStyles_1["default"].row]}>
            <svg_1.NairaIcon color={colorScheme === "dark"
            ? Colors_1["default"].dark.mainText
            : Colors_1["default"].light.text}/>
            <Themed_1.Text style={{
            color: colorScheme === "dark"
                ? Colors_1["default"].dark.mainText
                : Colors_1["default"].light.text,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 24,
            marginLeft: 5
        }}>
              80,000
            </Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={{ alignSelf: "center" }}>
          <react_native_custom_qr_codes_expo_1.QRCode content="https://google.com" codeStyle="circle" color={colorScheme === "dark" ? Colors_1["default"].dark.mainText : Colors_1["default"].light.text}/>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(100), width: "100%" }]}>
          <Button_1["default"] title="Copy Link" styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(10),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Save to Gallery" color={Colors_1["default"][colorScheme].text} onPressButton={captureScreenAndSaveToGallery} style={{ marginTop: 5 }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = QRCodeScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 15
    }
});
