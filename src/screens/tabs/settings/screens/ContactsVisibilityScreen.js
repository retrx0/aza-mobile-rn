"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Divider_1 = require("../../../../components/divider/Divider");
var SettingsSwitch_1 = require("../components/SettingsSwitch");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var ContactListItem_1 = require("../../../../components/ListItem/ContactListItem");
var useAsyncStorage_1 = require("../../../../hooks/useAsyncStorage");
var ContactsVisibilityScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var _c = useAsyncStorage_1.useAsyncStorage(), saveSettingsToStorage = _c.saveSettingsToStorage, loadSettingsFromStorage = _c.loadSettingsFromStorage;
    react_1.useEffect(function () {
        loadSettingsFromStorage().then(function (setting) {
            (setting === null || setting === void 0 ? void 0 : setting.contactVisibilitySwitch) !== undefined &&
                setIsEnabled(setting === null || setting === void 0 ? void 0 : setting.contactVisibilitySwitch);
        });
    }, []);
    react_1.useEffect(function () {
        saveSettingsToStorage({ contactVisibilitySwitch: isEnabled });
    }, [isEnabled]);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Contacts Visibility
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<Themed_1.View style={styles.container}>
      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
        You can disable this setting if you want to prevent other users from
        seeing you labeled as an Aza user in their contacts.
      </Themed_1.Text>

      <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Medium",
            marginTop: LayoutUtil_1.hp(30)
        }}>
        In turn, Aza users in your contact won't be labeled as such.
      </Themed_1.Text>
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(50) }}>
        <Divider_1["default"] />
        <SettingsSwitch_1["default"] text={"Contact Visibility"} isEnabled={isEnabled} onSwitchToggle={function () {
            setIsEnabled(!isEnabled);
        }}/>

        <Themed_1.View style={[CommonStyles_1["default"].col, { alignSelf: "flex-start", marginTop: 30 }]}>
          <Themed_1.View style={[
            CommonStyles_1["default"].row,
            { alignItems: "flex-end", alignSelf: "flex-start" },
        ]}>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 14 }}>
              Contacts using Aza
            </Themed_1.Text>
            <Themed_1.Text lightColor={"#753FF6"} darkColor={"#2A9E17"} style={{
            marginLeft: 10,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Light"
        }}>
              +18
            </Themed_1.Text>
          </Themed_1.View>
          <ContactListItem_1["default"] image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s" name={"Adewale Adeyesufu"} phoneNumber={"8012345678"}/>
        </Themed_1.View>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = ContactsVisibilityScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
