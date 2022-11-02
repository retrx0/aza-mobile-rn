"use strict";
exports.__esModule = true;
var Button_1 = require("../../../../components/buttons/Button");
var Themed_1 = require("../../../../components/Themed");
var header_1 = require("../../../../components/text/header");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var input_1 = require("../../../../components/input/input");
var styles_1 = require("../styles");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var VaultToAza = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
          <Themed_1.View style={{ marginLeft: 15 }}>
            <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>
          </Themed_1.View>
          <Themed_1.View>
            <header_1.Header heading="Confirmation" description={""} headerStyle={CommonStyles_1["default"].confirmation} descriptionStyle={undefined}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.Text style={CommonStyles_1["default"].confirmDetails}>
          Kindly confirm the details of this transaction
        </Themed_1.Text>
        <Themed_1.View style={CommonStyles_1["default"].vaultInputcontainer}>
          <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={CommonStyles_1["default"].inputStyle} labelStyle={styles_1.VaultStyles.label} label="To" placeholder="Aza Account" containerStyle={undefined} placeholderTextColor={Colors_1["default"][colorScheme].text}/>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].vaultInputcontainer}>
          <input_1.Input icon={null} keyboardType="phone-pad" inputStyle={CommonStyles_1["default"].inputStyle} labelStyle={styles_1.VaultStyles.label} label="Amount" placeholder={"\u20A6 80,000"} containerStyle={undefined} placeholderTextColor={Colors_1["default"][colorScheme].text}/>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(45) }]}>
          <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate("Common", {
                screen: "VaultWithdrawsuccessful"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button,
                marginBottom: LayoutUtil_1.hp(10)
            },
            CommonStyles_1["default"].button,
        ]}/>

          <CancelButtonWithUnderline_1["default"] title="Cancel Transaction" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("TopBar"); }} styleText={CommonStyles_1["default"].cancelStyle} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = VaultToAza;
