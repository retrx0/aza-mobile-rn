"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../../../components/Themed");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Divider_1 = require("../../../../components/divider/Divider");
var SettingsSwitch_1 = require("../components/SettingsSwitch");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var useAsyncStorage_1 = require("../../../../hooks/useAsyncStorage");
var NameVisibilityScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = useAsyncStorage_1.useAsyncStorage(), saveSettingsToStorage = _b.saveSettingsToStorage, loadSettingsFromStorage = _b.loadSettingsFromStorage;
    var _c = react_1.useState(false), isEnabled = _c[0], setIsEnabled = _c[1];
    react_1.useEffect(function () {
        loadSettingsFromStorage().then(function (setting) {
            (setting === null || setting === void 0 ? void 0 : setting.nameVisibilitySwitch) !== undefined &&
                setIsEnabled(setting === null || setting === void 0 ? void 0 : setting.nameVisibilitySwitch);
        });
    }, []);
    react_1.useEffect(function () {
        saveSettingsToStorage({ nameVisibilitySwitch: isEnabled });
    }, [isEnabled]);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Name Visibility
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
        You can disable this setting if you want your name to appear masked when
        others send or receive money from you
      </Themed_1.Text>
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(80) }}>
        <Divider_1["default"] />
        <SettingsSwitch_1["default"] text={"Name Visibility"} isEnabled={isEnabled} onSwitchToggle={function () {
            setIsEnabled(!isEnabled);
        }}/>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                justifyContent: "space-between",
                alignSelf: "stretch",
                paddingVertical: 30,
                alignItems: "center"
            },
        ]}>
          <Themed_1.View style={[CommonStyles_1["default"].col]}>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 14, marginBottom: 10 }}>
              With whom?
            </Themed_1.Text>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 16, fontFamily: "Euclid-Circular-A-Medium" }}>
              Chiazondu Joseph
            </Themed_1.Text>
          </Themed_1.View>
          <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
        </Themed_1.View>
        <Divider_1["default"] />
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = NameVisibilityScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
