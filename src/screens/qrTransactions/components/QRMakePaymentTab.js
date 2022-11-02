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
var ImagePicker = require("expo-image-picker");
var expo_camera_1 = require("expo-camera");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var QRMakePaymentTab = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(), cameraPermission = _b[0], setCameraPermission = _b[1];
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
    var renderCameraEdge = function (edgePosition) {
        return (<Themed_1.View style={{
                position: "absolute",
                top: edgePosition === "topLeft" || edgePosition === "topRight"
                    ? -4
                    : undefined,
                right: edgePosition === "topRight" || edgePosition === "bottomRight"
                    ? -4
                    : undefined,
                bottom: edgePosition === "bottomRight" || edgePosition === "bottomLeft"
                    ? -4
                    : undefined,
                left: edgePosition === "topLeft" || edgePosition === "bottomLeft"
                    ? -4
                    : undefined,
                width: 60,
                height: 60,
                backgroundColor: "transparent",
                borderColor: "#D9D9D9",
                borderBottomWidth: edgePosition.includes("bottom") ? 4 : undefined,
                borderLeftWidth: edgePosition.includes("Left") ? 4 : undefined,
                borderRightWidth: edgePosition.includes("Right") ? 4 : undefined,
                borderTopWidth: edgePosition.includes("top") ? 4 : undefined
            }}/>);
    };
    var selectImageFromGallery = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, uri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        aspect: [4, 3],
                        quality: 1
                    })];
                case 1:
                    result = _a.sent();
                    if (!result.cancelled) {
                        uri = result.uri;
                        console.log("selected");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<Themed_1.View style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        }}>
      {/* TODO fix camera not shuting down after closing modal */}
      {(cameraPermission === null || cameraPermission === void 0 ? void 0 : cameraPermission.granted) && (<expo_camera_1.Camera style={{ width: "100%", height: "100%" }} type={expo_camera_1.CameraType.back} onBarCodeScanned={function (code) {
                if (code.type === "org.iso.QRCode") {
                    react_native_1.Alert.alert("Code Scanned " + code.data);
                    navigation.navigate("Root");
                }
            }}>
          <Themed_1.View style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                flex: 1
            }}/>
          <Themed_1.View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 2,
                backgroundColor: "transparent"
            }}>
            <Themed_1.View style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "10%"
            }}/>
            <Themed_1.View style={{
                backgroundColor: "transparent",
                position: "relative",
                flex: 1
            }}>
              {/* {renderCameraEdge("topLeft")}
                  {renderCameraEdge("topRight")}
                  {renderCameraEdge("bottomLeft")}
                  {renderCameraEdge("bottomRight")} */}
            </Themed_1.View>
            <Themed_1.View style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "10%",
                zIndex: -10
            }}/>
          </Themed_1.View>
          <Themed_1.View style={{
                display: "flex",
                justifyContent: "flex-end",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                flex: 2
            }}>
            <Button_1["default"] title="Select from Gallery" onPressButton={function () { return selectImageFromGallery(); }} styleText={{
                color: "black",
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 14
            }} style={{
                marginTop: LayoutUtil_1.hp(100),
                marginBottom: "auto",
                backgroundColor: "#E7E9EA"
            }}/>
          </Themed_1.View>
        </expo_camera_1.Camera>)}
    </Themed_1.View>);
};
exports["default"] = QRMakePaymentTab;
