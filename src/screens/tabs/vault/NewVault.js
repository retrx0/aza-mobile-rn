"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Button_1 = require("../../../components/buttons/Button");
var Themed_1 = require("../../../components/Themed");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var input_1 = require("../../../components/input/input");
var CustomDropdown_1 = require("../../../components/dropdown/CustomDropdown");
var VaultCard_1 = require("./components/VaultCard");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var BackButton_1 = require("../../../components/buttons/BackButton");
var NewVault = function (_a) {
    var navigation = _a.navigation;
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var _b = react_1.useState(false), isEnabled = _b[0], setIsEnabled = _b[1];
    var _c = react_1.useState(""), periodValue = _c[0], setPeriodValue = _c[1];
    var period = [
        { label: "2 Days", value: "1" },
        { label: "4 Days", value: "1" },
        { label: "1 Week", value: "1" },
        { label: "2 Weeks", value: "1" },
        { label: "1 Month", value: "1" },
    ];
    var colorScheme = useColorScheme_1["default"]();
    var switchColor = Colors_1["default"][colorScheme].backgroundSecondary;
    var switchOnColor = Colors_1["default"][colorScheme].success;
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <Themed_1.View style={CommonStyles_1["default"].newvaultcontainer}>
          <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>
          <Themed_1.Text style={CommonStyles_1["default"].vaultstyle}>Vault</Themed_1.Text>
          {/* <Header
          headerStyle={CommonStyles.vaultstyle}
          descriptionStyle={CommonStyles.descriptionStyle}
          heading="Vault"
          description="Save and lock part of your Aza funds temporarily,
      for future use."
        /> */}
        </Themed_1.View>
        <Themed_1.Text style={CommonStyles_1["default"].descriptionStyle}>
          Save and lock part of your Aza funds temporarily, for future use
        </Themed_1.Text>
        <Themed_1.View style={CommonStyles_1["default"].vaultInputContainer}>
          <input_1.Input label={"Vault Name"} labelStyle={undefined} placeholder="Give your vault a name" inputStyle={CommonStyles_1["default"].inputStyle} icon={undefined} containerStyle={undefined}/>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].vaultInputcontainer}>
          <input_1.Input label={"Amount"} labelStyle={undefined} placeholder="Enter an amount you wish to save" style={CommonStyles_1["default"].vaultInput} inputStyle={CommonStyles_1["default"].inputStyle} icon={undefined} containerStyle={{ marginBottom: 2 }}/>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].percentageContainer}>
          {VaultCard_1.PercentageList.map(function (item, index) {
            return <VaultCard_1.PercentageCard key={index} percentage={item.percentage}/>;
        })}
        </Themed_1.View>

        <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(20), paddingHorizontal: 20 }}>
          <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
            Period
          </Themed_1.Text>
          <CustomDropdown_1["default"] data={period} placeholder="Choose a period to lock funds away" setValue={setPeriodValue} value={periodValue}/>
        </Themed_1.View>

        <Themed_1.View style={[CommonStyles_1["default"].SwitchContainer, { bottom: LayoutUtil_1.hp(30) }]}>
          <Themed_1.View style={CommonStyles_1["default"].periodContainer}>
            <Themed_1.Text style={CommonStyles_1["default"].everyMonth}>
              Save this amount every month
            </Themed_1.Text>
            <react_native_1.Switch trackColor={{ "false": switchColor, "true": switchOnColor }} thumbColor={isEnabled ? "white" : "grey"} ios_backgroundColor={switchColor} onValueChange={toggleSwitch} value={isEnabled} style={{
            marginLeft: LayoutUtil_1.hp(13)
        }}/>
          </Themed_1.View>
          <Separator />
          <Button_1["default"] title={"Continue"} onPressButton={function () {
            return navigation.navigate("Common", {
                screen: "LockVault"
            });
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
var Separator = function () {
    return (<Themed_1.View lightColor={Colors_1["default"].light.separator} darkColor={Colors_1["default"].dark.separator} style={[CommonStyles_1["default"].separator]}/>);
};
var styles = react_native_1.StyleSheet.create({
    separator: {
        borderWidth: LayoutUtil_1.hp(0.3),
        borderColor: "#EAEAEC",
        width: "100%"
    }
});
exports["default"] = NewVault;
