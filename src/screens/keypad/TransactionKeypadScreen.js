"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var VirtualKeyboard_1 = require("../../components/input/VirtualKeyboard");
var Button_1 = require("../../components/buttons/Button");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var svg_1 = require("../../../assets/svg");
var NumberUtils_1 = require("../../common/util/NumberUtils");
var redux_1 = require("../../hooks/redux");
var userSlice_1 = require("../../redux/slice/userSlice");
var AppUtil_1 = require("../../common/util/AppUtil");
var DescriptionModal_1 = require("./modal/DescriptionModal");
var transferToSlice_1 = require("../../redux/slice/transferToSlice");
var TransactionKeypadScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(""), amount = _b[0], setAmount = _b[1];
    var _c = react_1.useState(""), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState(false), descModal = _d[0], setDescModalOpen = _d[1];
    var user = redux_1.useAppSelector(userSlice_1.selectUser);
    var colorScheme = useColorScheme_1["default"]();
    var _e = route.params, headerTitle = _e.headerTitle, transactionType = _e.transactionType;
    var beneficiary = transactionType.beneficiary, type = transactionType.type;
    var normalTransaction = type === "normal";
    var recurringTransaction = type === "recurring";
    var dispatch = redux_1.useAppDispatch();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          {headerTitle}
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<>
      <Themed_1.View style={[styles.container]}>
        <Themed_1.View style={{ alignItems: "center" }}>
          <react_native_1.Image style={{ borderRadius: 50, width: 50, height: 50 }} source={{
            uri: beneficiary.pictureUrl && beneficiary.pictureUrl !== ""
                ? beneficiary.pictureUrl
                : AppUtil_1.getInitialsAvatar({
                    firstName: beneficiary.fullName,
                    lastName: beneficiary.lastName,
                    scheme: colorScheme
                })
        }}/>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14,
            marginTop: 15
        }}>
            {beneficiary.fullName}
          </Themed_1.Text>
          <Themed_1.View lightColor="#eaeaec" darkColor="#1D1D20" style={[
            CommonStyles_1["default"].row,
            {
                marginVertical: 20,
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50
            },
        ]}>
            <Themed_1.Text lightColor={Colors_1["default"].general.darkGrey} darkColor={"#CCCCCC"} style={{ fontSize: 12 }}>
              Nigerian Naira
            </Themed_1.Text>
            <react_native_1.Image style={{
            width: 15,
            height: 15,
            marginHorizontal: 10,
            resizeMode: "cover"
        }} source={require("../../../assets/images/icons/NigerianFlag.png")}/>
            <Themed_1.Text lightColor={Colors_1["default"].general.darkGrey} darkColor={"#CCCCCC"} style={{ fontSize: 12 }}>
              NGN
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.View style={[CommonStyles_1["default"].row]}>
            <svg_1.NairaLargeIcon color={!amount
            ? Colors_1["default"][colorScheme].secondaryText
            : colorScheme === "dark"
                ? Colors_1["default"].dark.mainText
                : Colors_1["default"].light.text}/>
            <Themed_1.Text style={{
            color: !amount
                ? Colors_1["default"][colorScheme].secondaryText
                : colorScheme === "dark"
                    ? Colors_1["default"].dark.mainText
                    : Colors_1["default"].light.text,
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 36,
            marginVertical: 15
        }}>
              {!amount && " 0"} {NumberUtils_1.numberWithCommas(amount)}
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.View style={[CommonStyles_1["default"].row]}>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 12
        }}>
              Aza Balance:
            </Themed_1.Text>
            <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            marginLeft: 3,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
              {"\u20A6"} {user.azaBalance}
            </Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <VirtualKeyboard_1["default"] value={amount} setValue={setAmount}/>
        <Button_1["default"] title="Continue" disabled={!amount} onPressButton={function () {
            // TODO check if normal transaction is withdraw or deposit which only needs to navigate to status screen with no modal opening
            if (normalTransaction) {
                // This checks if the transactions are send or request money which have optional description message
                switch (transactionType.transaction) {
                    case "deposit":
                        console.log("deposit");
                        break;
                    case "request":
                        console.log("request");
                        break;
                    case "send":
                        dispatch(transferToSlice_1.setTransferTo({
                            amount: Number(amount),
                            beneficairy: beneficiary,
                            description: description,
                            transferType: "normal"
                        }));
                        break;
                    case "withdraw":
                        console.log("withdrawing");
                        break;
                }
                //}else if(deposit){
                //}
                transactionType.openDescriptionModal && setDescModalOpen(true);
            }
            else {
                // TODO create and pass required params
                navigation.navigate("RecurringTransferConfirmation");
            }
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
      </Themed_1.View>

      {/* description modal */}
      <DescriptionModal_1["default"] visible={descModal} setModalVisible={setDescModalOpen} description={description} setDescription={setDescription} navigation={navigation} normalTransaction={normalTransaction} recurringTransaction={recurringTransaction} transactionType={transactionType}/>
    </>);
};
exports["default"] = TransactionKeypadScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "space-around"
    }
});
