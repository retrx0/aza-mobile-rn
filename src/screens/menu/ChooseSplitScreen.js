"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Divider_1 = require("../../components/divider/Divider");
var SplitListItem_1 = require("./components/SplitListItem");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var ChooseSplitScreen = function (_a) {
    var navigation = _a.navigation;
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
    var splitsListItems = [
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
    return (<Themed_1.View style={styles.container}>
      <react_native_1.ScrollView>
        <Divider_1["default"] />
        {splitsListItems.map(function (_a, i) {
            var amount = _a.amount, date = _a.date, splitImage = _a.splitImage, name = _a.name;
            return (<Themed_1.View key={i}>
            <react_native_1.TouchableOpacity style={{}} onPress={function () {
                    return navigation.navigate("SplitSelectContacts", {
                        amount: amount,
                        date: date,
                        splitImage: splitImage,
                        name: name
                    });
                }}>
              <SplitListItem_1["default"] key={i} amount={amount} date={date} splitImage={splitImage} name={name} showChevron/>
            </react_native_1.TouchableOpacity>
            <Divider_1["default"] />
          </Themed_1.View>);
        })}
      </react_native_1.ScrollView>
    </Themed_1.View>);
};
exports["default"] = ChooseSplitScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
