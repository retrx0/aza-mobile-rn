"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var svg_1 = require("../../../../../assets/svg");
var Divider_1 = require("../../../../components/divider/Divider");
var useAsyncStorage_1 = require("../../../../hooks/useAsyncStorage");
var AppearanceScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = useAsyncStorage_1.useAsyncStorage(), saveSettingsToStorage = _b.saveSettingsToStorage, loadSettingsFromStorage = _b.loadSettingsFromStorage;
    var _c = react_1.useState("System Mode"), selectedAppearance = _c[0], setSelectedAppearance = _c[1];
    var options = [
        {
            icon: <svg_1.DarkModeIcon color={Colors_1["default"][colorScheme].mainText} size={16}/>,
            name: "Dark Mode"
        },
        {
            icon: <svg_1.LightModeIcon color={Colors_1["default"][colorScheme].mainText} size={16}/>,
            name: "Light Mode"
        },
        {
            icon: <svg_1.SystemModeIcon color={Colors_1["default"][colorScheme].mainText} size={0}/>,
            name: "System Mode"
        },
    ];
    react_1.useEffect(function () {
        loadSettingsFromStorage().then(function (setting) {
            (setting === null || setting === void 0 ? void 0 : setting.appearance) !== undefined &&
                setSelectedAppearance(setting === null || setting === void 0 ? void 0 : setting.appearance);
        });
    }, []);
    react_1.useEffect(function () {
        saveSettingsToStorage({ appearance: selectedAppearance });
    }, [selectedAppearance]);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Appearance
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
      <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(10) }}>
        <Divider_1["default"] />
        {options.map(function (_a, i) {
            var icon = _a.icon, name = _a.name;
            return (<Themed_1.View key={i}>
            <react_native_1.TouchableOpacity onPress={function () { return setSelectedAppearance(name); }} style={[
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
              {selectedAppearance === name && (<svg_1.CheckIcon size={20} color={"#2A9E17"}/>)}
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
exports["default"] = AppearanceScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
