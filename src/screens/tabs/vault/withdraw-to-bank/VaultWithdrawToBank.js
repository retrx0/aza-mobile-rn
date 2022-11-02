"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Themed_1 = require("../../../../components/Themed");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var styles_1 = require("../styles");
var react_native_1 = require("react-native");
var Button_1 = require("../../../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var VaultToBank = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(false), click = _b[0], setClick = _b[1];
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles_1.VaultStyles.container}>
        <Themed_1.View style={[CommonStyles_1["default"].topTab]}>
          <Themed_1.View style={{ marginLeft: 20 }}>
            <BackButton_1["default"] onPress={function () {
            var _a;
            (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("TopBar");
        }}/>
          </Themed_1.View>
          <Themed_1.Text style={CommonStyles_1["default"].withdraw}>Withdraw</Themed_1.Text>
        </Themed_1.View>
        <Themed_1.Text style={CommonStyles_1["default"].selectStyle}>
          Select the bank you wish to withdraw to
        </Themed_1.Text>
        <Themed_1.View style={[
            CommonStyles_1["default"].accessContainer,
            { borderColor: Colors_1["default"][colorScheme].disabledButton },
        ]}>
          <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
            <react_native_1.Image source={require("../../../../../assets/images/AccessBank.png")} resizeMode="cover" style={[CommonStyles_1["default"].accessBank]}/>
            <Themed_1.Text style={CommonStyles_1["default"].accountNumber}>
              Access Bank (123........)
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.View>
            <react_native_1.TouchableOpacity activeOpacity={0.9} style={CommonStyles_1["default"].selectContainer} onPress={function () { return setClick(!click); }}>
              {click ? (<Themed_1.View style={CommonStyles_1["default"].onselect}>
                  <Themed_1.View style={CommonStyles_1["default"].doneSelect}/>
                </Themed_1.View>) : null}
            </react_native_1.TouchableOpacity>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(45) }]}>
          <CancelButtonWithUnderline_1["default"] title="Add another Bank Account" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("TopBar"); }} style={CommonStyles_1["default"].archivedBox} styleText={CommonStyles_1["default"].addAccount}/>
          <Button_1["default"] title="Continue" onPressButton={function () {
            return navigation.navigate("Common", {
                screen: "VaultWithdrawConfirmation"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].button,
        ]}/>

          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("TopBar"); }} styleText={CommonStyles_1["default"].cancelStyle} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = VaultToBank;
