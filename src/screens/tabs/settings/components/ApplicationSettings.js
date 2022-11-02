"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SettingsListItem_1 = require("./SettingsListItem");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var svg_1 = require("../../../../../assets/svg");
function ApplicationSettings(_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var applicationSettings = [
        // {
        //   icon: <MoonIcon size={36} color={Colors[colorScheme].mainText} />,
        //   name: "Appearance",
        //   detail: "Change appearance as light/dark/system",
        //   disabled: false,
        //   disabledIcon: <MoonIcon size={36} color={Colors[colorScheme].disabled} />,
        //   handleNavigation: () =>
        //     navigation.navigate("Common", { screen: "Appearance" }),
        // },
        {
            icon: (<svg_1.NotificationSettingsIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>),
            name: "Notification Settings",
            detail: "Change your notification preferences",
            disabled: false,
            disabledIcon: (<svg_1.NotificationSettingsIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "NotificationSettings" });
            }
        },
        {
            icon: <svg_1.AppLanguageIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>,
            name: "App Language",
            detail: "Change the app language",
            disabled: false,
            disabledIcon: (<svg_1.AppLanguageIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "AppLanguage" });
            }
        },
        {
            icon: <svg_1.FaceIdIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>,
            name: "Face ID",
            detail: "Login and confrim transactions with Face ID",
            disabled: false,
            disabledIcon: (<svg_1.FaceIdIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", { screen: "FaceId" });
            }
        },
        {
            icon: <svg_1.HeartSlashIcon size={36} color={Colors_1["default"][colorScheme].mainText}/>,
            name: "Close Aza account",
            detail: "You can close your Aza account",
            disabled: false,
            disabledIcon: (<svg_1.HeartSlashIcon size={36} color={Colors_1["default"][colorScheme].disabled}/>),
            handleNavigation: function () {
                return navigation.navigate("Common", {
                    screen: "StatusScreen",
                    params: {
                        status: "Do you want to close your Aza account?",
                        statusIcon: "Warning",
                        statusMessage: "Are you sure you want to go back to a life without Aza?",
                        cancelButton: true,
                        navigateTo: "Settings"
                    }
                });
            }
        },
    ];
    return (<react_native_1.View style={{ marginTop: LayoutUtil_1.hp(25) }}>
      <react_native_1.View>
        <react_native_1.Text style={{
            color: Colors_1["default"][colorScheme].secondaryText,
            fontSize: 14
        }}>
          Application Settings
        </react_native_1.Text>
        <react_native_1.View style={{
            backgroundColor: "transparent",
            marginTop: LayoutUtil_1.hp(10),
            borderBottomWidth: 0.6,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }}/>
      </react_native_1.View>

      {applicationSettings.map(function (_a, i) {
            var icon = _a.icon, detail = _a.detail, name = _a.name, handleNavigation = _a.handleNavigation, disabled = _a.disabled, disabledIcon = _a.disabledIcon;
            return (<SettingsListItem_1["default"] detail={detail} disabled={disabled} icon={icon} name={name} disabledIcon={disabledIcon} handleNavigation={handleNavigation} key={i}/>);
        })}
    </react_native_1.View>);
}
exports["default"] = ApplicationSettings;
