"use strict";
exports.__esModule = true;
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Button_1 = require("../../../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
function BlockUserModal(_a) {
    var toggleModal = _a.toggleModal, isModalVisible = _a.isModalVisible, navigation = _a.navigation, user = _a.user;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={{
            display: isModalVisible ? "flex" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.75)"
        }}>
      <Themed_1.View style={{
            backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary,
            borderRadius: 20,
            paddingBottom: 20,
            paddingTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%",
            justifyContent: "space-between"
        }}>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16
        }}>
          Block User
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 14,
            marginVertical: 15,
            maxWidth: 300,
            textAlign: "center"
        }}>
          The user{" "}
          <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 15
        }}>
            {user}
          </Themed_1.Text>{" "}
          will be blocked. Do you confirm?
        </Themed_1.Text>
        <Button_1["default"] title="Confirm" onPressButton={function () {
            toggleModal();
            navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "The user " + user + " has been successfully blocked.",
                navigateTo: "BlockNewUser"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginTop: LayoutUtil_1.hp(40),
            marginBottom: LayoutUtil_1.hp(20),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
        <CancelButtonWithUnderline_1["default"] onPressButton={toggleModal} style={{ borderBottomColor: Colors_1["default"].general.red }} title="Cancel" styleText={CommonStyles_1["default"].cancelStyle}/>
      </Themed_1.View>
    </Themed_1.View>);
}
exports["default"] = BlockUserModal;
