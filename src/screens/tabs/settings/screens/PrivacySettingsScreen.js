"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var SettingsListItem_1 = require("../components/SettingsListItem");
var PrivacySettingsScreen = function (_a) {
    var navigation = _a.navigation;
    var privacySettings = [
        {
            name: "Name Visibility",
            handleNavigation: function () { return navigation.navigate("NameVisibility"); }
        },
        {
            name: "Contacts Visibility",
            handleNavigation: function () { return navigation.navigate("ContactVisibility"); }
        },
        {
            name: "Split and Money Requests",
            handleNavigation: function () { return navigation.navigate("SplitAndMoneyRequests"); }
        },
        {
            name: "Block Users",
            handleNavigation: function () { return navigation.navigate("BlockUsers"); }
        },
    ];
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Privacy Settings
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
        You can change your privacy settings
      </Themed_1.Text>
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(80) }}>
        <Themed_1.View style={{
            backgroundColor: "transparent",
            borderBottomWidth: 0.6,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }}/>
        {privacySettings.map(function (_a, i) {
            var name = _a.name, handleNavigation = _a.handleNavigation;
            return (<SettingsListItem_1["default"] name={name} handleNavigation={handleNavigation} key={i}/>);
        })}
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = PrivacySettingsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
