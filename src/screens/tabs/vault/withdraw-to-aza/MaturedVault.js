"use strict";
exports.__esModule = true;
var Button_1 = require("../../../../components/buttons/Button");
var Themed_1 = require("../../../../components/Themed");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var svg_1 = require("../../../../../assets/svg");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var styles_1 = require("../styles");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var MaturedVault = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles_1.VaultStyles.container}>
        <Themed_1.View style={CommonStyles_1["default"].flightContainer}>
          <Themed_1.Text style={CommonStyles_1["default"].ticket}>Flight Ticket Vault</Themed_1.Text>
          <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
            <svg_1.NairaIcon color={Colors_1["default"][colorScheme].text} size={0}/>
            <Themed_1.Text style={CommonStyles_1["default"].flightAmount}>80,000</Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].matureContainer,
            { backgroundColor: Colors_1["default"][colorScheme].mature },
            { borderColor: Colors_1["default"][colorScheme].unlock },
        ]}>
          <svg_1.UnlockIcon color={Colors_1["default"][colorScheme].unlock} size={0}/>
          <Themed_1.Text style={[
            CommonStyles_1["default"].matured,
            { color: Colors_1["default"][colorScheme].unlock },
        ]}>
            Matured
          </Themed_1.Text>
        </Themed_1.View>
        <Themed_1.Text style={CommonStyles_1["default"].withdrawSuccessfull}>
          Your funds have successfully matured and can now be withdrawn.
        </Themed_1.Text>

        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(135) }]}>
          <Button_1["default"] title="Withdraw to Aza" onPressButton={function () {
            var _a;
            return (_a = navigation
                .getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Common", { screen: "VaultToAza" });
        }} style={[CommonStyles_1["default"].toAzabutton]} styleText={CommonStyles_1["default"].toAzabuttonText}/>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(55) }]}>
          <Button_1["default"] title="Withdraw to Bank" onPressButton={function () {
            var _a;
            return (_a = navigation
                .getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Common", { screen: "VaultToBank" });
        }} style={[CommonStyles_1["default"].toBankbutton]} styleText={CommonStyles_1["default"].toBankbuttonText}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = MaturedVault;
