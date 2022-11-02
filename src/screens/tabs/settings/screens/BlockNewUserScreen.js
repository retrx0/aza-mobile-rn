"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var react_native_tab_view_1 = require("react-native-tab-view");
var BlockByAzaNumberTab_1 = require("../components/BlockByAzaNumberTab");
var BlockByMobileNumberTab_1 = require("../components/BlockByMobileNumberTab");
var BlockUserModal_1 = require("../components/BlockUserModal");
var BlockNewUserScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(false), isModalVisible = _b[0], setModalVisible = _b[1];
    var _c = react_1.useState(0), index = _c[0], setIndex = _c[1];
    var routes = react_1.useState([
        { key: 'first', title: 'Mobile Number' },
        { key: 'second', title: 'Aza Number' },
    ])[0];
    var colorScheme = useColorScheme_1["default"]();
    var layout = react_native_1.useWindowDimensions();
    var toggleModal = function () {
        setModalVisible(!isModalVisible);
    };
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: 'Euclid-Circular-A-Semi-Bold',
                    fontSize: 16
                }}>
          Block New User
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    var renderScene = function (_a) {
        var route = _a.route;
        switch (route.key) {
            case 'first':
                return <BlockByMobileNumberTab_1["default"] toggleModal={toggleModal}/>;
            case 'second':
                return <BlockByAzaNumberTab_1["default"] toggleModal={toggleModal}/>;
        }
    };
    return (<>
      <SpacerWrapper_1["default"]>
        <react_native_tab_view_1.TabView navigationState={{ index: index, routes: routes }} renderScene={renderScene} onIndexChange={setIndex} initialLayout={{ width: layout.width }} sceneContainerStyle={{ overflow: 'visible' }} renderTabBar={function (props) { return (<react_native_tab_view_1.TabBar {...props} style={{
                elevation: 0,
                backgroundColor: 'transparent',
                borderBottomColor: Colors_1["default"][colorScheme].secondaryText,
                borderBottomWidth: 2
            }} indicatorStyle={{
                backgroundColor: Colors_1["default"][colorScheme].text,
                marginBottom: -2
            }} renderLabel={function (_a) {
                var focused = _a.focused, route = _a.route;
                return (<Themed_1.Text lightColor={focused ? Colors_1["default"].light.text : Colors_1["default"].light.secondaryText} darkColor={focused ? Colors_1["default"].dark.mainText : Colors_1["default"].dark.secondaryText} style={{
                        fontFamily: 'Euclid-Circular-A-Medium',
                        fontSize: 16
                    }}>
                    {route.title}
                  </Themed_1.Text>);
            }}/>); }}/>
      </SpacerWrapper_1["default"]>
      <BlockUserModal_1["default"] navigation={navigation} route={route} user="Chiazo" toggleModal={toggleModal} isModalVisible={isModalVisible}/>
    </>);
};
exports["default"] = BlockNewUserScreen;
