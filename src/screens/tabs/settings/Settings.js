"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../../../components/Themed");
var AccountSettings_1 = require("./components/AccountSettings");
var ApplicationSettings_1 = require("./components/ApplicationSettings");
var Settings = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    return (<Themed_1.View style={styles.container}>
      <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
        <AccountSettings_1["default"] navigation={navigation} route={route}/>
        <ApplicationSettings_1["default"] navigation={navigation} route={route}/>
      </react_native_1.ScrollView>
    </Themed_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    }
});
exports["default"] = Settings;
