"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var CustomBottomSheet_1 = require("../../../../components/bottomsheet/CustomBottomSheet");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var useBottomSheetType_1 = require("../hooks/useBottomSheetType");
var TransactionOptions = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState(false), isModalVisible = _b[0], setModalVisible = _b[1];
    var transferBottomSheetListItems = useBottomSheetType_1.useBottomSheetType("transfer", {
        navigation: navigation,
        route: route
    });
    var toggleModal = function () {
        setModalVisible(!isModalVisible);
    };
    var colorScheme = useColorScheme_1["default"]();
    return (<>
      <Themed_1.View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 25
        }}>
        <react_native_1.TouchableOpacity onPress={function () {
            return navigation.navigate("Common", {
                screen: "WithdrawDepositTabs",
                params: {
                    screen: "WithdrawIndex"
                }
            });
        }} style={{ display: "flex", alignItems: "center" }}>
          <svg_1.WithdrawIcon size={40} color="#FF361A"/>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={"#CCCCCC"} style={{ marginTop: 8, fontSize: 14 }}>
            Withdraw
          </Themed_1.Text>
        </react_native_1.TouchableOpacity>

        <react_native_1.TouchableOpacity onPress={toggleModal}>
          <Themed_1.View style={{ display: "flex", alignItems: "center" }}>
            <svg_1.TransferIcon size={40} color={Colors_1["default"][colorScheme].text}/>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={"#CCCCCC"} style={{ marginTop: 8, fontSize: 14 }}>
              Transfer
            </Themed_1.Text>
          </Themed_1.View>
        </react_native_1.TouchableOpacity>

        <react_native_1.TouchableOpacity onPress={function () {
            return navigation.navigate("Common", {
                screen: "WithdrawDepositTabs",
                params: {
                    screen: "DepositIndex"
                }
            });
        }} style={{ display: "flex", alignItems: "center" }}>
          <svg_1.DepositIcon color="#2AD168" size={40}/>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={"#CCCCCC"} style={{ marginTop: 8, fontSize: 14 }}>
            Deposit
          </Themed_1.Text>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>
      <CustomBottomSheet_1["default"] isModalVisible={isModalVisible} toggleModal={toggleModal} listItems={transferBottomSheetListItems}/>
    </>);
};
exports["default"] = TransactionOptions;
