"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var CancelButtonWithUnderline_1 = require("../../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var LockVault = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <react_native_1.Image source={require("../../../../assets/images/Caution.png")} resizeMode="cover" style={[CommonStyles_1["default"].caution]}/>
        <Themed_1.View style={CommonStyles_1["default"].actionContainer}>
          <Themed_1.Text style={CommonStyles_1["default"].actionStyle}>
            This action cannot be undone
          </Themed_1.Text>
          <Themed_1.Text style={CommonStyles_1["default"].lockupStyle}>
            You are about to lock up {"\u20A62,000"} for 2 Weeks
          </Themed_1.Text>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(45) }]}>
          <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate("Common", {
                screen: "VaultSuccessful"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].button,
        ]}/>

          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("NewVault"); }} styleText={CommonStyles_1["default"].cancelStyle} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = LockVault;
