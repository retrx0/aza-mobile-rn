"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SettingsListItem_1 = require("./SettingsListItem");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var svg_1 = require("../../../../../assets/svg");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
function AccountSettings(_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var accountSettings = [
        {
            icon: (<svg_1.ChangePasswordIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>),
            name: "Change Password",
            detail: "Change your Aza account password",
            disabled: false,
            disabledIcon: (<svg_1.ChangePasswordIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "ChangePassword" });
            }
        },
        {
            icon: (<svg_1.ChangePhoneNumberIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>),
            name: "Change Mobile Phone Number",
            detail: "Change your mobile number",
            disabled: false,
            disabledIcon: (<svg_1.ChangePhoneNumberIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "ChangePhoneNumber" });
            }
        },
        {
            icon: <svg_1.ChangeEmailIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>,
            name: "Change Email Address",
            detail: "Change your email address",
            disabled: false,
            disabledIcon: (<svg_1.ChangeEmailIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "ChangeEmail" });
            }
        },
        {
            icon: (<svg_1.PrivacySettingsIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>),
            name: "Privacy Settings",
            detail: "Change your privacy settings",
            disabled: false,
            disabledIcon: (<svg_1.PrivacySettingsIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "PrivacySettings" });
            }
        },
        {
            icon: <svg_1.LoginOptionsIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>,
            name: "Login Options",
            detail: "Connect your social media accounts",
            disabled: false,
            disabledIcon: (<svg_1.LoginOptionsIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "LoginOptions" });
            }
        },
    ];
    return (<react_native_1.View>
      <react_native_1.View>
        <react_native_1.Text style={{
            color: Colors_1["default"][colorScheme].secondaryText,
            fontSize: 14
        }}>
          Account Settings
        </react_native_1.Text>
        <react_native_1.View style={{
            backgroundColor: "transparent",
            marginTop: LayoutUtil_1.hp(10),
            borderBottomWidth: 0.6,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }}/>
      </react_native_1.View>

      {accountSettings.map(function (_a, i) {
            var icon = _a.icon, detail = _a.detail, name = _a.name, handleNavigation = _a.handleNavigation, disabled = _a.disabled, disabledIcon = _a.disabledIcon;
            return (<SettingsListItem_1["default"] detail={detail} icon={icon} name={name} disabled={disabled} disabledIcon={disabledIcon} handleNavigation={handleNavigation} key={i}/>);
        })}
    </react_native_1.View>);
}
exports["default"] = AccountSettings;
