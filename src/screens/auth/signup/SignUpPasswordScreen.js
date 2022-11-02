"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../../components/Themed");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var Button_1 = require("../../../components/buttons/Button");
var BackButton_1 = require("../../../components/buttons/BackButton");
var SegmentedInput_1 = require("../../../components/input/SegmentedInput");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var Colors_1 = require("../../../constants/Colors");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var redux_1 = require("../../../hooks/redux");
var newUserSlice_1 = require("../../../redux/slice/newUserSlice");
var SignUpPasswordScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var passwordScreenType = route.params.passwordScreenType;
    var toggleSwitch = function () { return setIsEnabled(function (previousState) { return !previousState; }); };
    var _b = react_1.useState(false), isUsePasscodeAsPin = _b[0], setIsEnabled = _b[1];
    var newUserData = redux_1.useAppSelector(newUserSlice_1.selectNewUser);
    var _c = react_1.useState(false), isConfirmScreen = _c[0], setIsConfirmScreen = _c[1];
    react_1.useEffect(function () {
        if (passwordScreenType !== "Create") {
            setIsConfirmScreen(true);
            setIsEnabled(newUserData.isUsePasscodeAsPin);
        }
    }, []);
    var colorScheme = useColorScheme_1["default"]();
    var _d = react_1.useState(""), passcode = _d[0], setPasscode = _d[1];
    var switchColor = Colors_1["default"][colorScheme].backgroundSecondary;
    var switchOnColor = Colors_1["default"][colorScheme].success;
    var dispatch = redux_1.useAppDispatch();
    var newUser = redux_1.useAppSelector(newUserSlice_1.selectNewUser);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={{ marginLeft: 20 }}>
        <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>
      </Themed_1.View>
      <Themed_1.View style={[CommonStyles_1["default"].phoneContainer]}>
        <Themed_1.Text style={[CommonStyles_1["default"].headerText]}>
          {passwordScreenType} Aza Password
        </Themed_1.Text>
      </Themed_1.View>
      <Themed_1.Text style={[CommonStyles_1["default"].bodyText]}>
        The password will be used to access your account
      </Themed_1.Text>
      <SegmentedInput_1["default"] value={passcode} secureInput headerText="" onValueChanged={function (code) { return setPasscode(code); }}/>
      <Themed_1.View style={[CommonStyles_1["default"].container, { bottom: LayoutUtil_1.hp(react_native_1.Platform.OS == 'android' ? 300 : 400) }]}>
        <Themed_1.View style={[CommonStyles_1["default"].row]}>
          <Themed_1.Text style={[CommonStyles_1["default"].transaction]}>
            Use as transaction pin?
          </Themed_1.Text>

          <react_native_1.Switch trackColor={{ "false": switchColor, "true": switchOnColor }} thumbColor={isUsePasscodeAsPin ? "white" : "grey"} ios_backgroundColor={switchColor} onValueChange={toggleSwitch} value={isUsePasscodeAsPin} style={{
            marginLeft: LayoutUtil_1.hp(13)
        }}/>
        </Themed_1.View>
        <Separator />
        <Button_1["default"] title="Continue" onPressButton={function () {
            var _a;
            // dispatch changes
            // TODO replace with expo-secure-store or react-native-encrypted-storage
            dispatch(newUserSlice_1.setNewUser({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                phone: newUser.phone,
                gender: newUser.gender,
                isUsePasscodeAsPin: isUsePasscodeAsPin,
                createdPasscode: passcode
            }));
            if (!isConfirmScreen) {
                navigation.navigate("SignUpConfirmPassword", {
                    passwordScreenType: "Confirm"
                });
            }
            else {
                if (passcode === newUserData.createdPasscode) {
                    dispatch(newUserSlice_1.setPassword({ password: passcode }));
                    (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("Root");
                }
                else {
                    alert("Password does not match");
                }
            }
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button,
                marginTop: 5
            },
            CommonStyles_1["default"].button,
        ]} disabled={passcode.length < 6 ? true : false}/>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
var Separator = function () {
    return (<Themed_1.View lightColor={Colors_1["default"].light.separator} darkColor={Colors_1["default"].dark.separator} style={[CommonStyles_1["default"].separator]}/>);
};
exports["default"] = SignUpPasswordScreen;
