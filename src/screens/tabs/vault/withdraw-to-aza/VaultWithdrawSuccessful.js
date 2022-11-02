"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Button_1 = require("../../../../components/buttons/Button");
var Themed_1 = require("../../../../components/Themed");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var Colors_1 = require("../../../../constants/Colors");
var VaultWithdrawsuccessful = function (_a) {
    var navigation = _a.navigation;
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <react_native_1.Image source={require("../../../../../assets/images/Successful.png")} resizeMode="cover" style={[CommonStyles_1["default"].caution]}/>
        <Themed_1.View style={CommonStyles_1["default"].actionContainer}>
          <Themed_1.Text style={CommonStyles_1["default"].Style}>Successful!</Themed_1.Text>
          <Themed_1.Text style={CommonStyles_1["default"].successStyle}>
            You have successfully withdrawn {"\u20A680,000"} to your Aza Account
          </Themed_1.Text>
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].passwordContainer,
            { bottom: insets.bottom || LayoutUtil_1.hp(45) },
        ]}>
          <Button_1["default"] title="Continue" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Vault"); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            { bottom: LayoutUtil_1.hp(20) },
            CommonStyles_1["default"].button,
        ]}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = VaultWithdrawsuccessful;
