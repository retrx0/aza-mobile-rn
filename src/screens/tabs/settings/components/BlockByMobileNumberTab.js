"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var Themed_1 = require("../../../../components/Themed");
var ContactListItem_1 = require("../../../../components/ListItem/ContactListItem");
var svg_1 = require("../../../../../assets/svg");
var BlockByMobileNumberTab = function (_a) {
    var toggleModal = _a.toggleModal;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[styles.container, { justifyContent: "space-between" }]}>
      <Themed_1.View>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}>
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            marginTop: LayoutUtil_1.hp(30)
        }}>
          You can unblock these users anytime
        </Themed_1.Text>
        <Themed_1.View style={{ marginTop: LayoutUtil_1.hp(50) }}>
          <Themed_1.TextInput lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} placeholderTextColor={Colors_1["default"][colorScheme].secondaryText} style={{
            backgroundColor: "transparent",
            fontFamily: "Euclid-Circular-A",
            paddingBottom: 10,
            marginTop: LayoutUtil_1.hp(15),
            borderBottomWidth: 1,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} placeholder="Mobile Number"/>
        </Themed_1.View>
        <Themed_1.Text style={{
            color: Colors_1["default"][colorScheme].secondaryText,
            marginTop: LayoutUtil_1.hp(40),
            fontSize: 14,
            marginBottom: 20
        }}>
          Your Aza Contacts
        </Themed_1.Text>
        <react_native_1.ScrollView contentContainerStyle={{ paddingBottom: LayoutUtil_1.hp(300) }} showsVerticalScrollIndicator={false}>
          {Array(20)
            .fill("")
            .map(function (_, i) { return (<react_native_1.TouchableOpacity key={i} onPress={toggleModal}>
                <ContactListItem_1["default"] image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s" name={"Adewale Adeyesufu"} phoneNumber={"8012345678"} suffixIcon={<svg_1.AZALargeLightningLogo size={25} color={Colors_1["default"][colorScheme].text}/>}/>
              </react_native_1.TouchableOpacity>); })}
        </react_native_1.ScrollView>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = BlockByMobileNumberTab;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
