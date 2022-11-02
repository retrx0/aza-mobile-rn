"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Divider_1 = require("../../components/divider/Divider");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var svg_1 = require("../../../assets/svg");
var SplitScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
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
    var navigationListItems = [
        {
            name: "Split",
            handleNavigation: function () { return navigation.navigate("ChooseSplit"); },
            icon: <svg_1.SplitIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>
        },
        {
            name: "Incoming Requests",
            handleNavigation: function () { return navigation.navigate("IncomingSplitRequests"); },
            icon: <svg_1.ReceivedIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>
        },
        {
            name: "Outgoing Requests",
            handleNavigation: function () { return navigation.navigate("OutgoingSplitRequests"); },
            icon: <svg_1.SendIcon size={16} color={Colors_1["default"][colorScheme].mainText}/>
        },
    ];
    return (<Themed_1.View style={styles.container}>
      <Themed_1.View>
        <Divider_1["default"] />
        {navigationListItems.map(function (_a, i) {
            var name = _a.name, icon = _a.icon, handleNavigation = _a.handleNavigation;
            return (<Themed_1.View key={i}>
            <react_native_1.TouchableOpacity onPress={handleNavigation} style={[CommonStyles_1["default"].col, { alignSelf: "stretch" }]}>
              <Themed_1.View style={[
                    CommonStyles_1["default"].row,
                    {
                        alignSelf: "stretch",
                        justifyContent: "space-between",
                        marginVertical: LayoutUtil_1.hp(20)
                    },
                ]}>
                <Themed_1.View>{icon}</Themed_1.View>
                <Themed_1.View style={[
                    CommonStyles_1["default"].col,
                    { marginRight: "auto", marginLeft: 20 },
                ]}>
                  <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 14
                }}>
                    {name}
                  </Themed_1.Text>
                </Themed_1.View>
                <svg_1.ChevronRightIcon color={"#2A9E17"} size={20}/>
              </Themed_1.View>
            </react_native_1.TouchableOpacity>
            <Divider_1["default"] />
          </Themed_1.View>);
        })}
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = SplitScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
