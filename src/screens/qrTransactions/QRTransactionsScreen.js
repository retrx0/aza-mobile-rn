"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_tab_view_1 = require("react-native-tab-view");
var QRMakePaymentTab_1 = require("./components/QRMakePaymentTab");
var QRReceivePaymentTab_1 = require("./components/QRReceivePaymentTab");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var QRTransactionsScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(0), index = _b[0], setIndex = _b[1];
    var routes = react_1.useState([
        { key: "first", title: "Make Payment" },
        { key: "second", title: "Receive Payment" },
    ])[0];
    var colorScheme = useColorScheme_1["default"]();
    var layout = react_native_1.useWindowDimensions();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          QR Transactions
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    var renderScene = function (props) {
        switch (props.route.key) {
            case "first":
                return <QRMakePaymentTab_1["default"] navigation={navigation} route={route}/>;
            case "second":
                return <QRReceivePaymentTab_1["default"] navigation={navigation} route={route}/>;
        }
    };
    return (<>
      <SpacerWrapper_1["default"]>
        <react_native_tab_view_1.TabView navigationState={{ index: index, routes: routes }} renderScene={renderScene} onIndexChange={setIndex} initialLayout={{ width: layout.width }} sceneContainerStyle={{ overflow: "visible" }} renderTabBar={function (props) { return (<react_native_tab_view_1.TabBar {...props} style={{
                elevation: 0,
                backgroundColor: "transparent",
                borderBottomColor: Colors_1["default"][colorScheme].secondaryText,
                borderBottomWidth: 2
            }} indicatorStyle={{
                backgroundColor: Colors_1["default"][colorScheme].text,
                marginBottom: -2
            }} renderLabel={function (_a) {
                var focused = _a.focused, route = _a.route;
                return (<Themed_1.Text lightColor={focused ? Colors_1["default"].light.text : Colors_1["default"].light.secondaryText} darkColor={focused ? Colors_1["default"].dark.mainText : Colors_1["default"].dark.secondaryText} style={{
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: 16
                    }}>
                    {route.title}
                  </Themed_1.Text>);
            }}/>); }}/>
      </SpacerWrapper_1["default"]>
    </>);
};
exports["default"] = QRTransactionsScreen;
