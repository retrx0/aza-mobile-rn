"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../../components/Themed");
var Divider_1 = require("../../../payments/sub-components/Divider");
var MenuList_1 = require("../../../../../components/ListItem/MenuList");
var Button_1 = require("../../../../../components/buttons/Button");
var Colors_1 = require("../../../../../constants/Colors");
function DepositIndex(_a) {
    var navigation = _a.navigation;
    return (<Themed_1.View style={styles.container}>
      <Divider_1["default"] />
      <MenuList_1["default"] heading="Card deposit" subHeading="Deposit via Debit/Credit card" onPress={function () {
            navigation.navigate("Common", { screen: "Deposit" });
        }}/>
      <Divider_1["default"] style={styles.divider}/>
      <Button_1["default"] title="Cancel" style={styles.button} onPressButton={function () { return navigation.goBack(); }}/>
    </Themed_1.View>);
}
exports["default"] = DepositIndex;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    divider: {
        marginTop: 10
    },
    button: {
        backgroundColor: Colors_1["default"].general.red,
        marginTop: "auto",
        width: "100%",
        marginBottom: 100
    }
});
