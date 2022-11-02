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
exports.useBottomSheetType = void 0;
var react_1 = require("react");
var ImagePicker = require("expo-image-picker");
var svg_1 = require("../../../../../assets/svg");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var useBottomSheetType = function (itemToReturn, _a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), image = _b[0], setImage = _b[1];
    var selectImageFromGallaery = function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        setImage(uri);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var takePhoto = function () { return __awaiter(void 0, void 0, void 0, function () {
        var permissionStatus, result, uri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ImagePicker.requestCameraPermissionsAsync()];
                case 1:
                    permissionStatus = _a.sent();
                    if (!(permissionStatus.status === "granted")) return [3 /*break*/, 3];
                    return [4 /*yield*/, ImagePicker.launchCameraAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            aspect: [4, 3],
                            quality: 1
                        })];
                case 2:
                    result = _a.sent();
                    if (!result.cancelled) {
                        uri = result.uri;
                        setImage(uri);
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var colorScheme = useColorScheme_1["default"]();
    var _c = react_1.useState(false), isChoosePhoto = _c[0], setChoosePhoto = _c[1];
    var _d = react_1.useState({
        menuBottomSheetListItems: [
            {
                itemName: "Split",
                itemIcon: <svg_1.SplitIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () { return navigation.navigate("Common", { screen: "Split" }); }
            },
            {
                itemName: "Monthly Summary",
                itemIcon: <svg_1.GraphIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () {
                    return navigation.navigate("Common", { screen: "MonthlySummary" });
                }
            },
            {
                itemName: "Fees & Limits",
                itemIcon: (<svg_1.FeesAndLimitsIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () {
                    return navigation.navigate("Common", { screen: "FeesAndLimits" });
                }
            },
            // {
            //   itemName: "Frequently Asked Questions (FAQs)",
            //   itemIcon: (
            //     <MessageQuestionIcon size={16} color={Colors[colorScheme].mainText} />
            //   ),
            //   onPress: () => console.log("called"),
            // },
            {
                itemName: "Contact Us",
                itemIcon: (<svg_1.HeadphoneIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () { return navigation.navigate("Common", { screen: "ContactUs" }); }
            },
        ],
        profileBottomSheetListItems: [
            {
                itemName: "Choose Profile Photo",
                itemIcon: (<svg_1.GalleryIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () { return setChoosePhoto(true); }
            },
            {
                itemName: "Account Details",
                itemIcon: <svg_1.UserIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () {
                    return navigation.navigate("Common", { screen: "AccountDetails" });
                }
            },
            {
                itemName: "Transaction History",
                itemIcon: <svg_1.ClockIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () {
                    return navigation.navigate("Common", { screen: "TransactionHistory" });
                }
            },
            {
                itemName: "Bank Accounts",
                itemIcon: <svg_1.BankIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () {
                    return navigation.navigate("Common", {
                        screen: "BankAccounts",
                        params: {
                            screenType: "Bank Account"
                        }
                    });
                }
            },
            {
                itemName: "Debit/Credit Cards",
                itemIcon: (<svg_1.CreditCardIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () {
                    navigation.navigate("Common", { screen: "DebitCreditCards" });
                }
            },
            {
                itemName: "Sign out",
                itemIcon: <svg_1.LogoutIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () {
                    navigation.navigate("Welcome");
                }
            },
        ],
        transferBottomSheetListItems: [
            {
                itemName: "Send Money",
                itemIcon: (<svg_1.SendMoneyIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () { return navigation.navigate("Common", { screen: "SendMoney" }); }
            },
            {
                itemName: "Request Money",
                itemIcon: (<svg_1.RequestMoneyIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () {
                    return navigation.navigate("Common", { screen: "RequestMoney" });
                }
            },
            {
                itemName: "Recurring Transfer",
                itemIcon: (<svg_1.RecurringTransferIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () {
                    return navigation.navigate("Common", { screen: "RecurringTransfer" });
                }
            },
        ],
        choosePhotoBottomSheetListItems: [
            {
                itemName: "Take Photo",
                itemIcon: <svg_1.CameraIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () { return takePhoto(); }
            },
            {
                itemName: "Select from Gallery",
                itemIcon: (<svg_1.GalleryIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>),
                onPress: function () { return selectImageFromGallaery(); }
            },
            {
                itemName: "Delete Profile Picture",
                itemIcon: <svg_1.TrashIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>,
                onPress: function () { return console.log("called"); }
            },
        ]
    }), items = _d[0], _ = _d[1];
    return itemToReturn === "menu"
        ? items.menuBottomSheetListItems
        : itemToReturn === "profile"
            ? isChoosePhoto
                ? {
                    profileBottomSheetListItems: items.choosePhotoBottomSheetListItems,
                    setChoosePhoto: setChoosePhoto
                }
                : {
                    profileBottomSheetListItems: items.profileBottomSheetListItems,
                    setChoosePhoto: setChoosePhoto
                }
            : items.transferBottomSheetListItems;
};
exports.useBottomSheetType = useBottomSheetType;
