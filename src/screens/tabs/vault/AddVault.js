"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var header_1 = require("../../../components/text/header");
var svg_1 = require("../../../../assets/svg");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var CancelButtonWithUnderline_1 = require("../../../components/buttons/CancelButtonWithUnderline");
var ArchievedCard_1 = require("./components/ArchievedCard");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var AddVault = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <Themed_1.View style={[CommonStyles_1["default"].addVault]}>
          <header_1.Header heading="Vault" description={""} headerStyle={[CommonStyles_1["default"].vaultAdd]} descriptionStyle={undefined}/>
          <react_native_1.TouchableOpacity>
            <svg_1.InfoIcon color={""} size={0}/>
          </react_native_1.TouchableOpacity>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].lineDivider}/>
        <ArchievedCard_1["default"] />
        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(45) }]}>
          <CancelButtonWithUnderline_1["default"] title="Archived Vaults" onPressButton={function () { var _a; return (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("ArchievedVault"); }} color={Colors_1["default"][colorScheme].text}/>
          <Button_1["default"] title="New Vault" onPressButton={function () {
            return navigation.navigate("Common", { screen: "TopBar" });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].button,
        ]}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = AddVault;
