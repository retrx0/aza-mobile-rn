"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var input_1 = require("../../../../components/input/input");
var styles_1 = require("../airtime-screens/styles");
var ListItem_1 = require("../sub-components/ListItem");
var images_1 = require("../../../../../assets/images");
function CharityIndexScreen(_a) {
    var navigation = _a.navigation;
    return (<Themed_1.View style={[CommonStyles_1["default"].parentContainer, styles2.container]}>
      <input_1.Input style={styles2.mainInput} icon={null} inputStyle={styles2.input} labelStyle={styles_1.AIrtimeStyles.label} label="" placeholder="Search for charitable organizations"/>

      <ListItem_1["default"] onPress={function () {
            navigation.navigate("Common", { screen: "CharityDetail", params: { name: "Chess in Slums" } });
        }} route="" index={0} title="Chess in Slums" Icon={function () { return <react_native_1.Image style={styles2.img} source={images_1.Spectranet}/>; }}/>

      <ListItem_1["default"] onPress={function () { }} route="" index={2} title="ICICE" Icon={function () { return <react_native_1.Image style={styles2.img} source={images_1.Ntel}/>; }}/>
    </Themed_1.View>);
}
exports["default"] = CharityIndexScreen;
var styles2 = react_native_1.StyleSheet.create({
    container: {
        paddingTop: 80,
        padding: 20
    },
    input: {
        width: "100%",
        borderBottomColor: "#EAEAEC",
        borderBottomWidth: 1,
        height: 40
    },
    mainInput: {
        marginTop: 0,
        marginBottom: 25
    },
    img: {
        width: 20,
        height: 20
    }
});
