"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var react_native_reanimated_1 = require("react-native-reanimated");
var images_1 = require("../../../../../assets/images");
function FaceIdAlert() {
    return (<Themed_1.View style={styles.container}>
      <react_native_reanimated_1["default"].View entering={react_native_reanimated_1.ZoomIn.delay(1000)} style={styles.faceContainer}>
        <react_native_1.Image style={styles.auth} source={images_1.Auth}/>
        <Themed_1.Text>Face ID</Themed_1.Text>
      </react_native_reanimated_1["default"].View>
    </Themed_1.View>);
}
exports["default"] = FaceIdAlert;
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "transparent",
        zIndex: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    faceContainer: {
        width: 140,
        height: 150,
        backgroundColor: "rgba(228, 228, 231, 1)",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    auth: {
        height: 50,
        width: 50
    }
});
