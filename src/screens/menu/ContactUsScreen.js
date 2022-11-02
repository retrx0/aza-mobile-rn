"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var images_1 = require("../../../assets/images");
var ContactUsScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Contact Us
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View>
          <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
            marginTop: LayoutUtil_1.hp(20),
            marginBottom: LayoutUtil_1.hp(40)
        }}>
            Contact us with any questions. We are ready to help
          </Themed_1.Text>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(40) }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14
        }}>
              Email
            </Themed_1.Text>
            <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 5,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} placeholder="Enter your Email"/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            {
                marginBottom: LayoutUtil_1.hp(50),
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            },
        ]}>
          <react_native_1.TouchableOpacity activeOpacity={0.7} style={{
            borderWidth: 1,
            borderColor: Colors_1["default"][colorScheme].text,
            width: "100%",
            height: LayoutUtil_1.hp(50),
            borderRadius: LayoutUtil_1.hp(10),
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center"
        }}>
            <react_native_1.Image source={images_1.WhatsappLogo} style={{ marginRight: 10 }}/>
            <Themed_1.Text style={{
            color: Colors_1["default"][colorScheme].text,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
              Whatsapp Customer Support
            </Themed_1.Text>
          </react_native_1.TouchableOpacity>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = ContactUsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
