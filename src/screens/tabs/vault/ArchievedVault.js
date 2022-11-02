"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../../../components/Themed");
var header_1 = require("../../../components/text/header");
var LayoutUtil_1 = require("../../../common/util/LayoutUtil");
var svg_1 = require("../../../../assets/svg");
var react_1 = require("react");
var Colors_1 = require("../../../constants/Colors");
var core_1 = require("@react-navigation/core");
var Swipeable_1 = require("react-native-gesture-handler/Swipeable");
var SpacerWrapper_1 = require("../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var BackButton_1 = require("../../../components/buttons/BackButton");
var ArchieveList = [
    {
        id: "1",
        lockIcon: <svg_1.UnlockIcon color={Colors_1["default"].general.green}/>,
        item: "New Phone",
        amount: "200,000",
        closeIcon: <svg_1.CloseIcon />,
        stage: "Matured"
    },
    {
        id: "2",
        lockIcon: <svg_1.UnlockIcon color={Colors_1["default"].general.green}/>,
        item: "New Phone",
        amount: "200,000",
        closeIcon: <svg_1.CloseIcon />,
        stage: "Matured"
    },
];
var swipeFromRightOpen = function () {
    /* TODO document why this arrow function is empty */
};
var ListItem = function (_a) {
    var lockIcon = _a.lockIcon, item = _a.item, amount = _a.amount, closeIcon = _a.closeIcon, stage = _a.stage, onPress = _a.onPress;
    var navigation = core_1.useNavigation();
    return (<Swipeable_1["default"] renderRightActions={function () { return (<Themed_1.View style={{
                justifyContent: "center",
                flexDirection: react_native_1.I18nManager.isRTL ? "row-reverse" : "row",
                alignItems: "flex-end"
            }}>
          <react_native_1.TouchableOpacity style={{
                width: 77,
                height: 77,
                backgroundColor: "#A6A6A6",
                alignItems: "center",
                justifyContent: "center"
            }} onPress={function () {
                return navigation.navigate("Common", { screen: "AddVault" });
            }}>
            <svg_1.UnarchiveIcon />
            <Themed_1.Text style={{
                color: Colors_1["default"].general.white,
                fontSize: LayoutUtil_1.hp(12),
                fontWeight: "400",
                lineHeight: LayoutUtil_1.hp(15),
                fontFamily: "Euclid-Circular-A",
                marginTop: LayoutUtil_1.hp(12)
            }}>
              Unarchive
            </Themed_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity style={{
                width: 77,
                height: 77,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center"
            }} onPress={function () {
                return navigation.navigate("Common", { screen: "ConfirmDeleteVault" });
            }}>
            <svg_1.TrashIcon color="white" size={24}/>
            <Themed_1.Text style={{
                color: Colors_1["default"].general.white,
                fontSize: LayoutUtil_1.hp(12),
                fontWeight: "400",
                lineHeight: LayoutUtil_1.hp(15),
                fontFamily: "Euclid-Circular-A",
                marginTop: LayoutUtil_1.hp(12)
            }}>
              Delete
            </Themed_1.Text>
          </react_native_1.TouchableOpacity>
        </Themed_1.View>); }} onSwipeableRightOpen={swipeFromRightOpen} friction={2} rightThreshold={40}>
      <Themed_1.View>
        <Themed_1.View style={styles.vaultContainer}>
          <Themed_1.View style={styles.vaultItem}>
            <react_native_1.TouchableOpacity onPress={onPress} style={styles.flightContainer}>
              {lockIcon}
            </react_native_1.TouchableOpacity>
            <Themed_1.View style={styles.list}>
              <Themed_1.Text style={styles.item}>{item}</Themed_1.Text>
              <Themed_1.Text style={[
            styles.amount,
            {
                color: amount === "200,000"
                    ? Colors_1["default"].general.green
                    : Colors_1["default"].general.black
            },
        ]}>
                {"\u20A6"}
                {amount}
              </Themed_1.Text>
            </Themed_1.View>
          </Themed_1.View>
          <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
            <Themed_1.Text style={styles.stage}>{stage}</Themed_1.Text>
            <react_native_1.TouchableOpacity onPress={onPress}>{closeIcon}</react_native_1.TouchableOpacity>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={styles.separator}/>
      </Themed_1.View>
    </Swipeable_1["default"]>);
};
var ArchievedVault = function (_a) {
    var navigation = _a.navigation;
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <Themed_1.View style={CommonStyles_1["default"].archievedContainer}>
          <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>
          <header_1.Header heading="Archived Vaults" description={""} descriptionStyle={undefined} headerStyle={CommonStyles_1["default"].archieved}/>
          <react_native_1.TouchableOpacity>
            <svg_1.InfoIcon color={""} size={0}/>
          </react_native_1.TouchableOpacity>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].lineDivider}/>
        <react_native_1.FlatList data={ArchieveList} keyExtractor={function (item) { return item.id; }} renderItem={function (_a) {
        var item = _a.item;
        return <ListItem {...item}/>;
    }}/>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
var styles = react_native_1.StyleSheet.create({
    flightContainer: {
        width: 36,
        height: 36,
        backgroundColor: "#EBFCE9",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18
    },
    stage: {
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(15),
        fontFamily: "Euclid-Circular-A",
        color: Colors_1["default"].general.green,
        marginRight: LayoutUtil_1.hp(12)
    },
    container: {
        flex: 1
    },
    itemSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: "#444"
    },
    list: {
        marginLeft: LayoutUtil_1.hp(20)
    },
    vaultItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    vaultContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(20),
        marginTop: LayoutUtil_1.hp(20)
    },
    amount: {
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A-Bold",
        marginTop: LayoutUtil_1.hp(2)
    },
    item: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A"
    },
    separator: {
        borderWidth: LayoutUtil_1.hp(0.7),
        borderColor: "#EAEAEC",
        width: LayoutUtil_1.wp(370),
        alignSelf: "center"
    }
});
exports["default"] = ArchievedVault;
