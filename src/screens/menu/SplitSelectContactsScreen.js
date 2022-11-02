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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Contacts = require("expo-contacts");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Divider_1 = require("../../components/divider/Divider");
var ContactListItem_1 = require("../../components/ListItem/ContactListItem");
var SplitListItem_1 = require("./components/SplitListItem");
var SelectedContactsScroll_1 = require("./components/SelectedContactsScroll");
var Button_1 = require("../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var svg_1 = require("../../../assets/svg");
var SplitSelectContactsScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState([]), contacts = _b[0], setContacts = _b[1];
    var _c = react_1.useState(""), search = _c[0], setSearch = _c[1];
    var _d = react_1.useState([]), selectedContacts = _d[0], setSelectedContacts = _d[1];
    var colorScheme = useColorScheme_1["default"]();
    var _e = route.params, amount = _e.amount, date = _e.date, splitImage = _e.splitImage, name = _e.name;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Split
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var status, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Contacts.requestPermissionsAsync()];
                    case 1:
                        status = (_a.sent()).status;
                        if (!(status === "granted")) return [3 /*break*/, 3];
                        return [4 /*yield*/, Contacts.getContactsAsync({
                                fields: [Contacts.Fields.PhoneNumbers]
                            })];
                    case 2:
                        data = (_a.sent()).data;
                        if (data.length > 0) {
                            setContacts(data);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var filteredContacts = contacts.filter(function (_a) {
        var name = _a.name;
        return (name === null || name === void 0 ? void 0 : name.includes(search)) && name;
    });
    var addContact = function (contact) {
        if (!checkIfContactIsSelected(contact)) {
            setSelectedContacts(function (prevState) { return __spreadArray(__spreadArray([], prevState), [contact]); });
        }
        else {
            setSelectedContacts(selectedContacts.filter(function (_a) {
                var id = _a.id;
                return id !== contact.id;
            }));
        }
    };
    var deSelectContact = function (id) {
        setSelectedContacts(selectedContacts.filter(function (contact) { return contact.id !== id; }));
    };
    var checkIfContactIsSelected = function (contact) {
        return selectedContacts.some(function (item) { return item.id.includes(contact.id); });
    };
    var disabledButton = selectedContacts.length > 0 ? false : true;
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View>
          <Divider_1["default"] />
          <SplitListItem_1["default"] amount={amount} date={date} name={name} splitImage={splitImage}/>
          <Divider_1["default"] />
        </Themed_1.View>
        <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={[
            styles.input,
            {
                borderBottomColor: Colors_1["default"][colorScheme].separator
            },
        ]} value={search} onChangeText={function (e) { return setSearch(e); }} placeholder="With whom (Search for contact)"/>
        {selectedContacts.length > 0 && (<Themed_1.View style={[CommonStyles_1["default"].row]}>
            <react_native_1.ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
                marginTop: LayoutUtil_1.hp(15)
            }}>
              <Themed_1.View style={[CommonStyles_1["default"].row]}>
                <Themed_1.View style={[CommonStyles_1["default"].col, { alignItems: "center" }]}>
                  <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
            }}/>
                  <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 10, marginTop: 5 }}>
                    Chiazo
                  </Themed_1.Text>
                </Themed_1.View>
                <Themed_1.View style={{ marginHorizontal: 15 }}>
                  <svg_1.ArrowRightIcon size={24} color={Colors_1["default"][colorScheme].mainText}/>
                </Themed_1.View>
              </Themed_1.View>
              <SelectedContactsScroll_1["default"] deSelectContact={deSelectContact} selectedContacts={selectedContacts}/>
            </react_native_1.ScrollView>
          </Themed_1.View>)}
        <Themed_1.Text style={{
            color: Colors_1["default"][colorScheme].secondaryText,
            marginTop: LayoutUtil_1.hp(40),
            fontSize: 14,
            marginBottom: 20
        }}>
          {search.length > 0 ? "Contacts" : "Quick contacts"}
        </Themed_1.Text>
        <react_native_1.FlatList showsVerticalScrollIndicator={false} keyExtractor={function (item) { return item.id; }} renderItem={function (_a) {
            var item = _a.item;
            return (<react_native_1.TouchableOpacity activeOpacity={0.5} onPress={function () { return addContact(item); }}>
                <ContactListItem_1["default"] image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"} name={item.name} 
            // phoneNumber={item.phoneNumbers[0].number}
            phoneNumber={"08167753429"} suffixIcon={checkIfContactIsSelected(item) ? (<svg_1.CheckIcon size={25} color={Colors_1["default"]["general"].green}/>) : undefined}/>
              </react_native_1.TouchableOpacity>);
        }} data={filteredContacts}/>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { width: "100%", marginBottom: LayoutUtil_1.hp(35), marginTop: 5 },
        ]}>
          <Button_1["default"] title="Continue" disabled={disabledButton} onPressButton={function () {
            return navigation.navigate("SplitEditContacts", {
                amount: amount,
                date: date,
                splitImage: splitImage,
                name: name,
                contacts: selectedContacts
            });
        }} styleText={{
            color: disabledButton
                ? Colors_1["default"][colorScheme].disabledButtonText
                : Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: disabledButton
                ? Colors_1["default"][colorScheme].disabledButton
                : Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { return navigation.goBack(); }} style={{ borderBottomColor: Colors_1["default"].general.red }} styleText={CommonStyles_1["default"].cancelStyle}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SplitSelectContactsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    },
    input: {
        backgroundColor: "transparent",
        fontFamily: "Euclid-Circular-A-Medium",
        paddingBottom: 10,
        marginTop: LayoutUtil_1.hp(25),
        borderBottomWidth: 1
    }
});
