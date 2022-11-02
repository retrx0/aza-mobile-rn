"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var AppUtil_1 = require("../../common/util/AppUtil");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Button_1 = require("../../components/buttons/Button");
var ContactListItem_1 = require("../../components/ListItem/ContactListItem");
var Themed_1 = require("../../components/Themed");
var Colors_1 = require("../../constants/Colors");
var redux_1 = require("../../hooks/redux");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var useContacts_1 = require("../../hooks/useContacts");
var userSlice_1 = require("../../redux/slice/userSlice");
var SectionListSeparator_1 = require("../tabs/home/components/SectionListSeparator");
var ContactsScene = function (_a) {
    var route = _a.route, azaContactOnPress = _a.azaContactOnPress, nonAzaContactOnPress = _a.nonAzaContactOnPress;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState([]), contacts = _b[0], setContacts = _b[1];
    var _d = react_1.useState([]), userQuickContacts = _d[0], setUserQuickContacts = _d[1];
    var _e = react_1.useState([]), userAzaContacts = _e[0], setUserAzaContacts = _e[1];
    var _f = react_1.useState(""), searchContact = _f[0], setSearchContact = _f[1];
    var _g = react_1.useState(""), receipientAzaNumber = _g[0], setReceipientAzaNumber = _g[1];
    var user = redux_1.useAppSelector(userSlice_1.selectUser);
    react_1.useEffect(function () {
        useContacts_1.getUserContacts().then(function (_contacts) {
            if (_contacts) {
                setContacts(_contacts.filter(function (_c) { return _c.contactType === "person"; }));
                setUserQuickContacts(user.azaContacts);
                setUserAzaContacts(user.azaContacts);
            }
        });
    }, []);
    if (route.key == "first") {
        return (<Themed_1.View style={[styles.container, { justifyContent: "space-between" }]}>
        <Themed_1.View>
          <Themed_1.Text style={{
                color: colorScheme === "dark"
                    ? Colors_1["default"].dark.mainText
                    : Colors_1["default"].light.text,
                fontSize: 14
            }}>
            Quick contacts
          </Themed_1.Text>
          <Themed_1.View style={[
                CommonStyles_1["default"].row,
                {
                    marginTop: LayoutUtil_1.hp(20)
                },
            ]}>
            <react_native_1.ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Themed_1.View style={[CommonStyles_1["default"].row]}>
                {user.azaContacts.map(function (_contct, i) { return (<QuickContactView firstName={_contct.firstName} lastName="" photoUrl={AppUtil_1.getInitialsAvatar({
                    firstName: _contct.fullName,
                    scheme: colorScheme
                })} key={i} onPress={function () { return azaContactOnPress(_contct); }}/>); })}
              </Themed_1.View>
            </react_native_1.ScrollView>
          </Themed_1.View>

          <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} value={searchContact} returnKeyType="search" onChangeText={function (text) {
                setSearchContact(text);
            }} style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 10,
                marginVertical: LayoutUtil_1.hp(35),
                borderBottomWidth: 1,
                borderBottomColor: Colors_1["default"][colorScheme].separator
            }} placeholder="To (Search for a contact)"/>
          <react_native_1.SectionList contentContainerStyle={{ paddingBottom: LayoutUtil_1.hp(300) }} showsVerticalScrollIndicator={false} stickyHeaderHiddenOnScroll={true} stickySectionHeadersEnabled={false} sections={[
                {
                    title: "Contacts using Aza",
                    data: user.azaContacts,
                    azaContacts: true
                },
                {
                    title: "Contacts not using Aza yet",
                    data: contacts.filter(function (_c) {
                        return _c.name.toUpperCase().includes(searchContact.toUpperCase());
                    }),
                    azaContacts: false
                },
            ]} renderSectionHeader={function (_a) {
                var section = _a.section;
                return (<SectionListSeparator_1["default"] title={section.title} listSize={section.data.length}/>);
            }} renderItem={function (_a) {
                var section = _a.section, item = _a.item;
                return section.azaContacts ? (item.azaAccountNumber && item.phone ? (<react_native_1.TouchableOpacity onPress={function () {
                        if (section.azaContacts) {
                            azaContactOnPress(item);
                        }
                        else {
                            nonAzaContactOnPress(item);
                        }
                    }}>
                    <ContactListItem_1["default"] image={AppUtil_1.getInitialsAvatar({
                        firstName: item === null || item === void 0 ? void 0 : item.fullName,
                        lastName: item.lastName,
                        scheme: colorScheme
                    })} name={item.fullName} phoneNumber={item.phone || ""} isContactOnAza={section.azaContacts}/>
                  </react_native_1.TouchableOpacity>) : (<></>)) : item.firstName && item.phoneNumbers ? (<react_native_1.TouchableOpacity onPress={function () {
                        if (section.azaContacts) {
                            azaContactOnPress(item);
                        }
                        else {
                            nonAzaContactOnPress(item);
                        }
                    }}>
                  <ContactListItem_1["default"] image={AppUtil_1.getInitialsAvatar({
                        firstName: item === null || item === void 0 ? void 0 : item.firstName,
                        lastName: item.lastName,
                        scheme: colorScheme
                    })} name={item.name} phoneNumber={item.phoneNumbers[0].number || ""} isContactOnAza={section.azaContacts}/>
                </react_native_1.TouchableOpacity>) : (<></>);
            }}/>
        </Themed_1.View>
      </Themed_1.View>);
    }
    else if (route.key === "second") {
        return (<Themed_1.View style={[styles.container, { justifyContent: "flex-start" }]}>
        <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} keyboardType={"number-pad"} returnKeyType={"send"} returnKeyLabel={"Send"} value={receipientAzaNumber} onChangeText={function (number) { return setReceipientAzaNumber(number); }} style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 10,
                marginTop: LayoutUtil_1.hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors_1["default"][colorScheme].separator
            }} placeholder="Aza Number"/>
        <Button_1["default"] title="Send" style={{ marginVertical: LayoutUtil_1.hp(20) }} onPressButton={function () { }} disabled={receipientAzaNumber.length < 5}/>
      </Themed_1.View>);
    }
    else {
        return <></>;
    }
};
var sentToAzaNumber = function () {
    //do some check with aza number
    var numberValid = true;
    if (numberValid) {
    }
    else {
    }
};
var QuickContactView = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName, photoUrl = _a.photoUrl, key = _a.key, onPress = _a.onPress;
    return (<react_native_1.TouchableOpacity onPress={onPress}>
      <Themed_1.View style={[CommonStyles_1["default"].col, { alignItems: "center", marginRight: 20 }]}>
        <react_native_1.Image style={{
            borderRadius: 50,
            width: 45,
            height: 45
        }} source={{
            uri: photoUrl
        }}/>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 10, marginTop: 5 }}>
          {firstName}
        </Themed_1.Text>
      </Themed_1.View>
    </react_native_1.TouchableOpacity>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
exports["default"] = ContactsScene;
