"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var input_1 = require("../../../components/input/input");
var ImageInput_1 = require("./sub-components/ImageInput");
var MyButton_1 = require("./sub-components/MyButton");
var Themed_1 = require("../../../components/Themed");
var CancelButtonWithUnderline_1 = require("../../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../../constants/Colors");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
function Confirmation(_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), confirmed = _b[0], setConfirm = _b[1];
    var colorScheme = useColorScheme_1["default"]();
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    return (<Themed_1.ScrollView style={[styles.container, { paddingTop: react_native_1.Platform.OS == 'android' ? 100 : 70 }]}>
        <Themed_1.Text style={styles.txt}>
          Kindly confirm the details of this transaction
        </Themed_1.Text>
        <ImageInput_1["default"] />
        <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="Phone Number" placeholder="08164942224"/>
        <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="Amount" placeholder="N2,000 (Airtime)"/>
        <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={styles.input} labelStyle={null} label="Payment Method" placeholder="Aza Account"/>
        <MyButton_1["default"] disabled={false} title="Confirm" onPress={function () {
            navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "Your internet purchase was successful",
                navigateTo: "Payments"
            });
        }}/>
          <CancelButtonWithUnderline_1["default"] onPressButton={function () {
            navigation.goBack();
        }} title="Cancel Transaction" style={{ borderBottomColor: Colors_1["default"].general.red }} styleText={CommonStyles_1["default"].cancelStyle}/>
    </Themed_1.ScrollView>);
}
exports["default"] = Confirmation;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20
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
    cancelContainer: {
        marginTop: 5
    }
});
