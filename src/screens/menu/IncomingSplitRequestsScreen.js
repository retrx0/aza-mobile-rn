"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_tab_view_1 = require("react-native-tab-view");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Divider_1 = require("../../components/divider/Divider");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var SplitListItem_1 = require("./components/SplitListItem");
var IncomingSplitRequestsScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(0), index = _b[0], setIndex = _b[1];
    var routes = react_1.useState([
        { key: "first", title: "Pending" },
        { key: "second", title: "Completed" },
    ])[0];
    var colorScheme = useColorScheme_1["default"]();
    var layout = react_native_1.useWindowDimensions();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Incoming Requests
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    var listItems = [
        {
            name: "Coldstone",
            amount: "2000000",
            date: "4 July 2022 04:26",
            splitImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTumpKjOB5PtCkHk3DUZ_6px9A073NcfLPA&usqp=CAU"
        },
        {
            name: "Burger King",
            amount: "120000",
            date: "4 July 2022 04:26",
            splitImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07WdeXexZ8Igvtni6pY013Wc0K1i9uuWfPA&usqp=CAU"
        },
        {
            name: "KFC",
            amount: "480000",
            date: "4 July 2022 04:26",
            splitImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwr_jykU8Gdf9mpFXyUFwKAbCEaLFPFJbfA&usqp=CAU"
        },
    ];
    var renderScene = function (_a) {
        var route = _a.route;
        switch (route.key) {
            case "first":
                return (<react_native_1.ScrollView>
            {listItems.map(function (_a, i) {
                        var amount = _a.amount, date = _a.date, splitImage = _a.splitImage, name = _a.name;
                        return (<Themed_1.View key={i}>
                <react_native_1.TouchableOpacity style={{
                                paddingTop: 20,
                                paddingBottom: 15,
                                paddingHorizontal: 15
                            }} onPress={function () {
                                return navigation.navigate("IncomingSplitRequestAcceptance");
                            }}>
                  <SplitListItem_1["default"] amount={amount} date={date} name={name} splitImage={splitImage} showCreatorAndRecipients showChevron/>
                </react_native_1.TouchableOpacity>
                <Divider_1["default"] />
              </Themed_1.View>);
                    })}
          </react_native_1.ScrollView>);
            case "second":
                return (<react_native_1.ScrollView>
            {listItems.map(function (_a, i) {
                        var amount = _a.amount, date = _a.date, splitImage = _a.splitImage, name = _a.name;
                        return (<Themed_1.View key={i}>
                <react_native_1.TouchableOpacity style={{
                                paddingTop: 20,
                                paddingBottom: 15,
                                paddingHorizontal: 15
                            }} onPress={function () {
                                return navigation.navigate("CompletedSplitRequestDetails");
                            }}>
                  <SplitListItem_1["default"] amount={amount} date={date} name={name} splitImage={splitImage} showCreatorAndRecipients/>
                </react_native_1.TouchableOpacity>
                <Divider_1["default"] />
              </Themed_1.View>);
                    })}
          </react_native_1.ScrollView>);
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
exports["default"] = IncomingSplitRequestsScreen;
