"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var svg_1 = require("../../../../assets/svg");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var react_native_modal_1 = require("react-native-modal");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var DescriptionModal = function (_a) {
    var visible = _a.visible, setModalVisible = _a.setModalVisible, navigation = _a.navigation, description = _a.description, setDescription = _a.setDescription, 
    // transactionParams,
    normalTransaction = _a.normalTransaction, recurringTransaction = _a.recurringTransaction, transactionType = _a.transactionType;
    var colorScheme = useColorScheme_1["default"]();
    return (<react_native_modal_1["default"] isVisible={visible} style={{ justifyContent: "flex-end", margin: 0 }}>
      <react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={react_native_1.Platform.OS === "android" ? -900 : 0}>
        <react_native_1.TouchableOpacity onPress={function () { return setModalVisible(false); }} style={{
            backgroundColor: "transparent",
            alignItems: "flex-end",
            marginBottom: 20,
            marginRight: 15
        }}>
          <svg_1.CloseCircleLargeIcon color={Colors_1["default"][colorScheme].backgroundSecondary}/>
        </react_native_1.TouchableOpacity>
        <Themed_1.View style={{
            backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 50,
            display: "flex",
            justifyContent: "space-between"
        }}>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16
        }}>
            Description
          </Themed_1.Text>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            marginTop: 10,
            fontSize: 14
        }}>
            You can add a note to this transaction
          </Themed_1.Text>
          <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholder="Description (optional)" placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 5,
            marginVertical: LayoutUtil_1.hp(35),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} onChangeText={function (e) { return setDescription(e); }} value={description}/>
          <Button_1["default"] title="Continue" onPressButton={function () {
            setModalVisible(false);
            // TODO create and pass proper type for qr transactions
            if (transactionType === null) {
                navigation.navigate("QRCode");
            }
            if (normalTransaction && transactionType.transaction === "send") {
                // TODO create and pass required params
                navigation.navigate("SendMoneyConfirmation");
            }
            else if (normalTransaction &&
                transactionType.transaction === "request") {
                // TODO create and pass required params
                navigation.navigate("RequestMoneyConfirmation");
            }
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
        </Themed_1.View>
      </react_native_1.KeyboardAvoidingView>
    </react_native_modal_1["default"]>);
};
exports["default"] = DescriptionModal;
