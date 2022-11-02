"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var input_1 = require("../../../../components/input/input");
var images_1 = require("../../../../../assets/images");
function ImageInput() {
    return (<react_native_1.View style={styles.container}>
      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="To" placeholder="MTN"/>

      <react_native_1.Image style={styles.img} source={images_1.Mtn}/>
    </react_native_1.View>);
}
exports["default"] = ImageInput;
var styles = react_native_1.StyleSheet.create({
    input: {
        borderBottomColor: "#EAEAEC",
        borderBottomWidth: 1,
        height: 40,
        minWidth: "100%"
    },
    container: {
        flexDirection: "row",
        position: "relative",
        width: "100%",
        marginBottom: 20
    },
    img: {
        height: 36,
        width: 36,
        borderRadius: 36,
        position: "absolute",
        right: 0,
        bottom: 0,
        marginBottom: 20
    }
});
