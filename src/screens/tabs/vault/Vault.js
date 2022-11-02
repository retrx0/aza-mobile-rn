"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var header_1 = require("../../../components/text/header");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var svg_1 = require("../../../../assets/svg");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var VaultUndraw_1 = require("../../../../assets/svg/VaultUndraw");
var Vault = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <Themed_1.View style={[CommonStyles_1["default"].vaultContainer]}>
          <header_1.Header heading="Vault" description={""} headerStyle={[CommonStyles_1["default"].vault]} descriptionStyle={undefined}/>
          {/* <Image
          source={Undraw}
          resizeMode="cover"
          style={[CommonStyles.undraw]}
        /> */}
          <Themed_1.View style={[CommonStyles_1["default"].undraw]}>
            <VaultUndraw_1["default"] />
          </Themed_1.View>

          <Themed_1.Text style={[CommonStyles_1["default"].vaultText]}>You dont have any vaults</Themed_1.Text>
          <Themed_1.View style={CommonStyles_1["default"].createVaultContainer}>
            <Themed_1.Text style={[
            CommonStyles_1["default"].createNewVault,
            { color: Colors_1["default"][colorScheme].Text },
        ]}>
              Click New Vault to create a new vault
            </Themed_1.Text>
            <react_native_1.TouchableOpacity>
              <svg_1.ArrowDownIcon color={colorScheme === "dark"
            ? Colors_1["default"].dark.secondaryText
            : Colors_1["default"].light.text} size={16}/>
            </react_native_1.TouchableOpacity>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].passwordContainer,
            { bottom: insets.bottom || LayoutUtil_1.hp(20) },
        ]}>
          <Button_1["default"] title="New Vault" onPressButton={function () {
            return navigation.navigate("Common", { screen: "NewVault" });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].button,
        ]} disabled={false}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = Vault;
