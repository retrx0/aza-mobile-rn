"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Themed_1 = require("../../../../components/Themed");
var Button_1 = require("../../../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../../../components/buttons/CancelButtonWithUnderline");
var Divider_1 = require("../../../../components/divider/Divider");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var svg_1 = require("../../../../../assets/svg");
var BankAccountsScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var colorScheme = useColorScheme_1["default"]();
    var _b = react_1.useState(""), selectedAccount = _b[0], setSelectedAccount = _b[1];
    var accountAvailable = react_1.useState(true)[0];
    var screenType = route.params.screenType;
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          {screenType}
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
            image: require("../../../../../assets/images/AccessBank.png"),
            name: "Access Bank (123........)"
        },
    ];
    if (accountAvailable && screenType === "Withdraw") {
        return (<Themed_1.View style={[
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
            Select the bank you wish to withdraw to
          </Themed_1.Text>
          <Divider_1["default"] />
          {accounts.map(function (_a, i) {
                var image = _a.image, name = _a.name;
                return (<Themed_1.View key={i}>
              <react_native_1.TouchableOpacity onPress={function () { return setSelectedAccount(name); }}>
                <Themed_1.View style={[
                        CommonStyles_1["default"].row,
                        { alignSelf: "stretch", paddingVertical: 15 },
                    ]}>
                  <react_native_1.Image source={image} style={{
                        width: 36,
                        height: 36,
                        borderRadius: 50
                    }}/>
                  <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: 14
                    }}>
                    Access Bank (123........)
                  </Themed_1.Text>
                  <Themed_1.View style={{
                        marginLeft: "auto",
                        width: LayoutUtil_1.hp(20),
                        height: LayoutUtil_1.hp(20),
                        borderRadius: LayoutUtil_1.hp(10),
                        borderColor: selectedAccount === name
                            ? Colors_1["default"].general.green
                            : "#3A3D42",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: LayoutUtil_1.hp(1)
                    }}>
                    {selectedAccount === name && (<Themed_1.View style={CommonStyles_1["default"].doneSelect}/>)}
                  </Themed_1.View>
                </Themed_1.View>
              </react_native_1.TouchableOpacity>
              <Divider_1["default"] />
            </Themed_1.View>);
            })}
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(45), width: "100%" }]}>
          <Button_1["default"] disabled={!selectedAccount} title="Continue" onPressButton={function () {
                return navigation.navigate("TransactionKeypad", {
                    headerTitle: "Amount",
                    transactionType: {
                        transaction: "withdraw",
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
      </Themed_1.View>);
    }
    if (accountAvailable && screenType === "Bank Account") {
        return (<Themed_1.View style={[
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
            Select a bank account to perform any activity
          </Themed_1.Text>
          <Divider_1["default"] />
          {accounts.map(function (_a, i) {
                var image = _a.image, name = _a.name;
                return (<Themed_1.View key={i}>
              <react_native_1.TouchableOpacity onPress={function () { return navigation.navigate("EditBankAccountDetails"); }}>
                <Themed_1.View style={[
                        CommonStyles_1["default"].row,
                        { alignSelf: "stretch", paddingVertical: 15 },
                    ]}>
                  <react_native_1.Image source={image} style={{
                        width: 36,
                        height: 36,
                        borderRadius: 50
                    }}/>
                  <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: 14
                    }}>
                    Access Bank (123........)
                  </Themed_1.Text>
                  <Themed_1.View style={{ marginLeft: "auto" }}>
                    <svg_1.ChevronRightIcon color={"#2A9E17"} size={20}/>
                  </Themed_1.View>
                </Themed_1.View>
              </react_native_1.TouchableOpacity>
              <Divider_1["default"] />
            </Themed_1.View>);
            })}
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(45), width: "100%" }]}>
          <Button_1["default"] title="Add another bank Account" onPressButton={function () {
                return navigation.navigate("SelectBank", {
                    screenType: screenType
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
        </Themed_1.View>
      </Themed_1.View>);
    }
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[styles.container, { justifyContent: "space-between" }]}>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { marginTop: "auto", marginBottom: "auto" },
        ]}>
          <svg_1.UndrawAccountIcon color={colorScheme === "dark" ? "#E7E9EA" : "#000000"} size={30}/>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            marginTop: LayoutUtil_1.hp(30),
            maxWidth: 300,
            textAlign: "center"
        }}>
            There is no bank account registered to your Aza account
          </Themed_1.Text>
          <Themed_1.View style={[CommonStyles_1["default"].row, { marginTop: LayoutUtil_1.hp(15) }]}>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14,
            maxWidth: 300,
            marginRight: 5,
            textAlign: "center"
        }}>
              Click ‘Add Bank Account’ to link your bank account to aza
            </Themed_1.Text>
            <svg_1.ArrowDownIcon color={colorScheme === "dark"
            ? Colors_1["default"].dark.secondaryText
            : Colors_1["default"].light.text} size={16}/>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { width: "100%", marginBottom: LayoutUtil_1.hp(45) }]}>
          <Button_1["default"] title="Add Bank Account" onPressButton={function () {
            return navigation.navigate("SelectBank", {
                screenType: screenType
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
exports["default"] = BankAccountsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
