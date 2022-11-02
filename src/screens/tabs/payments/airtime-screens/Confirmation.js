"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var RegularText_1 = require("../../../../components/text/RegularText");
var input_1 = require("../../../../components/input/input");
var ImageInput_1 = require("../sub-components/ImageInput");
var MyButton_1 = require("../sub-components/MyButton");
var Themed_1 = require("../../../../components/Themed");
var FaceIdAlert_1 = require("../sub-components/FaceIdAlert");
function Confirmation(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), confirmed = _b[0], setConfirm = _b[1];
    return (<Themed_1.SafeAreaView style={[CommonStyles_1["default"].parentContainer, styles.container, { paddingTop: react_native_1.Platform.OS == "android" ? 100 : 0 }]}>
      <Themed_1.Text style={styles.txt}>Kindly confirm the details of this transaction</Themed_1.Text>
      <ImageInput_1["default"] />
      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="Phone Number" placeholder="08164942224"/>

      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="Amount" placeholder="N2,000 (Airtime)"/>

      <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="Payment Method" placeholder="Aza Account"/>

      <MyButton_1["default"] style={styles.btn} disabled={false} title="Confirm" onPress={function () {
            setConfirm(true);
            setTimeout(function () {
                navigation.navigate("Common", { screen: "CompleteTransaction" });
                setConfirm(false);
            }, 3000);
        }}/>
      <react_native_1.TouchableOpacity style={styles.cancelContainer}>
        <RegularText_1["default"] style={styles.cancel} text="Cancel Transaction"/>
      </react_native_1.TouchableOpacity>

      {confirmed && <FaceIdAlert_1["default"] />}
    </Themed_1.SafeAreaView>);
}
exports["default"] = Confirmation;
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 20
    },
    txt: {
        color: "#4D4D4D",
        marginBottom: 40
    },
    input: {
        width: "100%",
        borderBottomColor: "#EAEAEC",
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 20
    },
    btn: {
        marginTop: "auto",
        marginBottom: 0
    },
    cancel: {
        textAlign: "center",
        color: "#FF361A",
        borderBottomColor: "#FF361A",
        borderBottomWidth: 1,
        width: 140,
        marginLeft: "auto",
        marginRight: "auto"
    },
    cancelContainer: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20
    }
});
