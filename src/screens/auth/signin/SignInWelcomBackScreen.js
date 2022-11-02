"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var SegmentedInput_1 = require("../../../components/input/SegmentedInput");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var Themed_1 = require("../../../components/Themed");
var userData_1 = require("../../../constants/userData");
var react_native_1 = require("react-native");
var LocalAuthentication = require("expo-local-authentication");
var SecureStore = require("expo-secure-store");
var _env_1 = require("@env");
var verifyPasscode = function (code, navigation) {
    if (code.length === 6) {
        console.log("verifying passcode...");
        navigation.navigate("Root");
    }
};
var forgetUser = function (navigation) {
    console.log("forgetting user...");
    SecureStore.deleteItemAsync(_env_1.STORAGE_KEY_JWT_TOKEN, {
        requireAuthentication: true
    })
        .then(function () {
        navigation.navigate("Welcome");
    })["catch"](function (e) { return console.log(e); });
};
var SignInWelcomeBackScreen = function (_a) {
    var otpCode = _a.otpCode, navigation = _a.navigation;
    var insets = react_native_safe_area_context_1.useSafeAreaInsets();
    react_1.useEffect(function () {
        LocalAuthentication.authenticateAsync({
            promptMessage: "Authenticate to open AZA"
        }).then(function (result) {
            console.log(result.success);
        });
    }, []);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.Text style={styles_1.SigninStyles.welcome}>Welcome back, {userData_1.UserData.userFullName}</Themed_1.Text>
      <Themed_1.Text style={styles_1.SigninStyles.sentCode}>Enter your Aza password to login</Themed_1.Text>
      <SegmentedInput_1["default"] value={otpCode} onValueChanged={function (code) { return verifyPasscode(code, navigation); }} headerText="Password" secureInput={true}/>
      <Themed_1.View style={[{ alignSelf: "center", bottom: insets.bottom || LayoutUtil_1.hp(15) }]}>
        <react_native_1.TouchableOpacity onPress={function () { return forgetUser(navigation); }}>
          <Themed_1.Text style={styles_1.SigninStyles.welcomeForgetMeButton}>Forget Me</Themed_1.Text>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SignInWelcomeBackScreen;
