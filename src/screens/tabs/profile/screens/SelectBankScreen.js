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
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var images_1 = require("../../../../../assets/images");
var SelectBankScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState(""), search = _b[0], setSearch = _b[1];
    var screenType = route.params.screenType;
    var banks = [
        { name: "access", logo: images_1.AccessBankLogoWithName },
        { name: "eco", logo: images_1.EcoBankLogoWithName },
        { name: "fcmb", logo: images_1.FCMBLogoWithName },
        { name: "gt", logo: images_1.GTBankLogoWithName },
        { name: "uba", logo: images_1.UBALogoWithName },
        { name: "zenith", logo: images_1.ZenithBankLogoWithName },
        { name: "fidelity", logo: images_1.FidelityBankLogoWithName },
        { name: "first", logo: images_1.FirstBankLogoWithName },
    ];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Select Bank
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[CommonStyles_1["default"].col, styles.container]}>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                borderBottomColor: Colors_1["default"][colorScheme].separator,
                borderBottomWidth: 0.7,
                marginBottom: 20
            },
        ]}>
          <svg_1.SearchIcon color={Colors_1["default"][colorScheme].secondaryText} size={16}/>
          <Themed_1.TextInput style={{
            flex: 1,
            padding: 10,
            backgroundColor: "transparent",
            color: Colors_1["default"][colorScheme].secondaryText
        }} placeholder="Search for bank" onChangeText={function (e) { return setSearch(e); }}/>
        </Themed_1.View>
        <react_native_1.ScrollView style={{}} showsVerticalScrollIndicator={false}>
          {banks
            .filter(function (_a) {
            var name = _a.name;
            return name.toLowerCase().includes(search.toLowerCase());
        })
            .map(function (_a, i) {
            var logo = _a.logo, name = _a.name;
            return (<Themed_1.View key={i}>
                <react_native_1.TouchableOpacity onPress={function () {
                    return navigation.navigate("AddBankAccount", {
                        bankName: name,
                        screenType: screenType
                    });
                }} style={[
                    CommonStyles_1["default"].col,
                    {
                        alignSelf: "stretch",
                        alignItems: "center"
                    },
                ]}>
                  <react_native_1.Image source={logo}/>
                </react_native_1.TouchableOpacity>
                <Themed_1.View style={{
                    marginVertical: 25,
                    width: "100%"
                }}>
                  <Divider_1["default"] />
                </Themed_1.View>
              </Themed_1.View>);
        })}
        </react_native_1.ScrollView>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SelectBankScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
