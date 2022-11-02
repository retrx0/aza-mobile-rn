"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../../components/Themed");
var Button_1 = require("../../../../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../../../../components/buttons/CancelButtonWithUnderline");
var Divider_1 = require("../../../../../components/divider/Divider");
var Colors_1 = require("../../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../../../../common/util/SpacerWrapper");
var svg_1 = require("../../../../../../assets/svg");
var DepositScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState(""), selectedCard = _b[0], setSelectedCard = _b[1];
    var cardsAvailable = react_1.useState(true)[0];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Deposit
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    var accounts = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjzgYSElVPPXddqi8InFnxHHBzkx524woJQ&usqp=CAU",
            name: "Visa (**** **** **** 1234)"
        },
    ];
    if (cardsAvailable) {
        return (<SpacerWrapper_1["default"]>
        <Themed_1.View style={[
                styles.container,
                {
                    justifyContent: "space-between"
                },
            ]}>
          <Themed_1.View>
            <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: 14,
                marginBottom: LayoutUtil_1.hp(30)
            }}>
              Select the card you wish to deposit money to your Aza from
            </Themed_1.Text>
            <Divider_1["default"] />
            {accounts.map(function (_a, i) {
                var image = _a.image, name = _a.name;
                return (<Themed_1.View key={i}>
                <react_native_1.TouchableOpacity onPress={function () { return setSelectedCard(name); }}>
                  <Themed_1.View style={[
                        CommonStyles_1["default"].row,
                        { alignSelf: "stretch", paddingVertical: 15 },
                    ]}>
                    <react_native_1.Image source={{ uri: image }} style={{
                        width: 36,
                        height: 36,
                        borderRadius: 50
                    }}/>
                    <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: 14
                    }}>
                      {name}
                    </Themed_1.Text>
                    <Themed_1.View style={{
                        marginLeft: "auto",
                        width: LayoutUtil_1.hp(20),
                        height: LayoutUtil_1.hp(20),
                        borderRadius: LayoutUtil_1.hp(10),
                        borderColor: selectedCard === name
                            ? Colors_1["default"].general.green
                            : "#3A3D42",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: LayoutUtil_1.hp(1)
                    }}>
                      {selectedCard === name && (<Themed_1.View style={CommonStyles_1["default"].doneSelect}/>)}
                    </Themed_1.View>
                  </Themed_1.View>
                </react_native_1.TouchableOpacity>
                <Divider_1["default"] />
              </Themed_1.View>);
            })}
          </Themed_1.View>
          <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(45), width: "100%" }]}>
            <Button_1["default"] disabled={!selectedCard} title="Continue" onPressButton={function () {
                return navigation.navigate("TransactionKeypad", {
                    headerTitle: "Amount",
                    transactionType: {
                        transaction: "deposit",
                        type: "normal",
                        beneficiary: {
                            beneficiaryAccount: "",
                            beneficiaryImage: "",
                            beneficiaryName: ""
                        }
                    }
                });
            }} styleText={{
                color: Colors_1["default"][colorScheme].buttonText,
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 14
            }} style={{
                width: "100%",
                marginBottom: LayoutUtil_1.hp(15),
                backgroundColor: Colors_1["default"][colorScheme].button
            }}/>
            <CancelButtonWithUnderline_1.CancelButtonWithUnderline title="Cancel" onPressButton={function () { return navigation.goBack(); }} styleText={CommonStyles_1["default"].cancelStyle} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
          </Themed_1.View>
        </Themed_1.View>
      </SpacerWrapper_1["default"]>);
    }
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[styles.container, { justifyContent: "space-between" }]}>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { marginTop: "auto", marginBottom: "auto" },
        ]}>
          <svg_1.UndrawCreditCardIcon color={colorScheme === "dark" ? "#E7E9EA" : "#000000"}/>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            marginTop: LayoutUtil_1.hp(30),
            textAlign: "center"
        }}>
            You do not have any credit/debit cards
          </Themed_1.Text>
          <Themed_1.View style={[CommonStyles_1["default"].row, { marginTop: LayoutUtil_1.hp(10) }]}>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14,
            maxWidth: 300,
            marginRight: 5,
            textAlign: "center"
        }}>
              Click ‘Add New Card’ to add a new card
            </Themed_1.Text>
            <svg_1.ArrowDownIcon color={colorScheme === "dark"
            ? Colors_1["default"].dark.secondaryText
            : Colors_1["default"].light.text} size={16}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { width: "100%", marginBottom: LayoutUtil_1.hp(45) }]}>
          <Button_1["default"] title="Add New Card" onPressButton={function () {
            return navigation.navigate("AddNewCard", {
                navigateBackTo: "Deposit"
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginBottom: LayoutUtil_1.hp(15),
            width: "100%",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { return navigation.goBack(); }} styleText={CommonStyles_1["default"].cancelStyle} style={{ borderBottomColor: Colors_1["default"].general.red }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = DepositScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
