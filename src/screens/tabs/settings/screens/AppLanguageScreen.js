"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Divider_1 = require("../../../../components/divider/Divider");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var svg_1 = require("../../../../../assets/svg");
var useAsyncStorage_1 = require("../../../../hooks/useAsyncStorage");
var AppLanguageScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = useAsyncStorage_1.useAsyncStorage(), saveSettingsToStorage = _b.saveSettingsToStorage, loadSettingsFromStorage = _b.loadSettingsFromStorage;
    var _c = react_1.useState("English"), selectedLanguage = _c[0], setSelectedLanguage = _c[1];
    var languages = [
        {
            icon: (<react_native_1.Image style={{ width: 36, height: 36, borderRadius: 50 }} source={require("../../../../../assets/images/icons/BritishFlag.png")}/>),
            name: "English"
        },
    ];
    react_1.useEffect(function () {
        loadSettingsFromStorage().then(function (setting) {
            (setting === null || setting === void 0 ? void 0 : setting.appLanguage) !== undefined &&
                setSelectedLanguage(setting === null || setting === void 0 ? void 0 : setting.appLanguage);
        });
    }, []);
    react_1.useEffect(function () {
        saveSettingsToStorage({ appLanguage: selectedLanguage });
    }, [selectedLanguage]);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          App Language
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
        You can change the app language
      </Themed_1.Text>
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(30) }}>
        <Divider_1["default"] />
        {languages.map(function (_a, i) {
            var icon = _a.icon, name = _a.name;
            return (<Themed_1.View key={i}>
            <react_native_1.TouchableOpacity onPress={function () { return setSelectedLanguage(name); }} style={[
                    CommonStyles_1["default"].row,
                    {
                        justifyContent: "space-between",
                        alignSelf: "stretch",
                        paddingVertical: 20
                    },
                ]}>
              <Themed_1.View>{icon}</Themed_1.View>
              <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    marginRight: "auto",
                    marginLeft: 15,
                    fontSize: 14,
                    fontFamily: "Euclid-Circular-A-Medium"
                }}>
                {name}
              </Themed_1.Text>
              {selectedLanguage === name && (<svg_1.CheckIcon size={20} color={"#2A9E17"}/>)}
            </react_native_1.TouchableOpacity>
            <Themed_1.View style={{
                    borderBottomWidth: 0.6,
                    borderBottomColor: Colors_1["default"][colorScheme].separator
                }}/>
          </Themed_1.View>);
        })}
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = AppLanguageScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
