"use strict";
exports.__esModule = true;
exports.DaysCard = exports.PercentageCard = exports.ListCard = exports.VaultList = exports.DaysList = exports.PercentageList = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Themed_1 = require("../../../../components/Themed");
exports.PercentageList = [
    {
        percentage: "2%"
    },
    {
        percentage: "5%"
    },
    {
        percentage: "7%"
    },
    {
        percentage: "10%"
    },
];
exports.DaysList = [
    {
        days: "2 Days"
    },
    {
        days: "4 Days"
    },
    {
        days: "1 Week"
    },
    {
        days: "2 Weeks"
    },
    {
        days: "1 Month"
    },
];
exports.VaultList = [
    {
        lockIcon: <svg_1.LockIcon />,
        item: "Flight Ticket",
        amount: "2000",
        closeIcon: <svg_1.CloseIcon />,
        stage: "Matured"
    },
    {
        lockIcon: <svg_1.LockIcon />,
        item: "New Laptop",
        amount: "2000",
        closeIcon: <svg_1.CloseIcon />,
        stage: "Matured"
    },
    {
        lockIcon: <svg_1.LockIcon />,
        item: "New Phone",
        amount: "200000",
        closeIcon: <svg_1.CloseIcon />,
        stage: "Matured"
    },
];
var ListCard = function (_a) {
    var lockIcon = _a.lockIcon, closeIcon = _a.closeIcon, item = _a.item, amount = _a.amount, stage = _a.stage, onPress = _a.onPress;
    return (<Themed_1.View>
      <Themed_1.View style={styles.vaultContainer}>
        <Themed_1.View style={styles.vaultItem}>
          <react_native_1.TouchableOpacity onPress={onPress}>{lockIcon}</react_native_1.TouchableOpacity>
          <Themed_1.View style={styles.list}>
            <Themed_1.Text style={styles.item}>{item}</Themed_1.Text>
            <Themed_1.Text style={styles.amount}>{"#" + amount}</Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
          <Themed_1.Text>{stage}</Themed_1.Text>
          <react_native_1.TouchableOpacity onPress={onPress}>{closeIcon}</react_native_1.TouchableOpacity>
        </Themed_1.View>
      </Themed_1.View>
      <Themed_1.View style={styles.separator}/>
    </Themed_1.View>);
};
exports.ListCard = ListCard;
var PercentageCard = function (_a) {
    var percentage = _a.percentage, onPress = _a.onPress;
    return (<react_native_1.TouchableOpacity onPress={onPress} style={styles.percentageContainer}>
      <Themed_1.Text style={styles.percentageStyle}>{percentage}</Themed_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.PercentageCard = PercentageCard;
var DaysCard = function (_a) {
    var days = _a.days, onPress = _a.onPress;
    return (<Themed_1.View>
      <Themed_1.View style={styles.separator}/>
      <react_native_1.TouchableOpacity onPress={onPress} style={styles.daysContainer}>
        <Themed_1.Text style={styles.daysStyle}>{days}</Themed_1.Text>
      </react_native_1.TouchableOpacity>
    </Themed_1.View>);
};
exports.DaysCard = DaysCard;
var styles = react_native_1.StyleSheet.create({
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
        marginBottom: LayoutUtil_1.hp(15),
        marginTop: LayoutUtil_1.hp(15)
    },
    amount: {
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A-Bold"
    },
    item: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A"
    },
    separator: {
        borderWidth: LayoutUtil_1.hp(0.3),
        borderColor: "#EAEAEC",
        marginBottom: LayoutUtil_1.hp(10),
        width: LayoutUtil_1.wp(335),
        alignSelf: "center"
    },
    daysStyle: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "400",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A"
    },
    daysContainer: {
        marginBottom: LayoutUtil_1.hp(10)
    },
    percentageStyle: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "600",
        lineHeight: 17.75,
        color: "#A6A6A6",
        fontFamily: "Euclid-Circular-A-Bold"
    },
    percentageContainer: {
        width: LayoutUtil_1.wp(70),
        height: LayoutUtil_1.hp(30),
        borderColor: "#A6A6A6",
        borderRadius: LayoutUtil_1.hp(3),
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center"
    }
});
