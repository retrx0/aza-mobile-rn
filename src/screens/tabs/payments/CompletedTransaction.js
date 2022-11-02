"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../components/Themed");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var svg_1 = require("../../../../assets/svg");
var MyButton_1 = require("./sub-components/MyButton");
function CompletedTransaction(_a) {
    var navigation = _a.navigation;
    return (<Themed_1.View style={[CommonStyles_1["default"].parentContainer, styles.container]}>
      <svg_1.SuccessIcon style={styles.icon} color={""} size={0}/>
      <Themed_1.Text style={styles.sucess}>Successful</Themed_1.Text>
      <Themed_1.Text style={styles.msg}>Your internet purchase was successful</Themed_1.Text>
      <MyButton_1["default"] style={styles.btn} disabled={false} title="Confirm" onPress={function () {
            navigation.navigate("Payments");
        }}/>
    </Themed_1.View>);
}
exports["default"] = CompletedTransaction;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sucess: {
        color: "#2A9E17",
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 30,
        marginTop: 10
    },
    msg: {
        marginTop: 10
    },
    btn: {
        marginTop: "auto",
        marginBottom: 40
    },
    icon: {
        marginTop: "auto"
    }
});
