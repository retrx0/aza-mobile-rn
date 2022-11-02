"use strict";
exports.__esModule = true;
exports.ActivityCard = exports.ActivityList = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
exports.ActivityList = [
    {
        send: <svg_1.WithDrawIcon />,
        status: "Withdrawal to Bank",
        price: "2,000",
        due: "4 July 2022 04:26"
    },
    {
        send: <svg_1.ReceiveIcon />,
        status: "Vault top up",
        price: "200",
        due: "4 July 2022 04:26"
    },
    {
        send: <svg_1.ReceiveIcon />,
        status: "Vault top up",
        price: "200",
        due: "4 July 2022 04:26"
    },
    {
        send: <svg_1.ReceiveIcon />,
        status: "Vault top up",
        price: "200",
        due: "4 July 2022 04:26"
    },
    {
        send: <svg_1.ReceiveIcon />,
        status: "Vault top up",
        price: "200",
        due: "4 July 2022 04:26"
    },
    {
        send: <svg_1.ReceiveIcon />,
        status: "Vault top up",
        price: "200",
        due: "4 July 2022 04:26"
    },
    {
        send: <svg_1.ReceiveIcon />,
        status: "Vault top up",
        price: "200",
        due: "4 July 2022 04:26"
    },
];
var ActivityCard = function (_a) {
    var send = _a.send, status = _a.status, price = _a.price, due = _a.due, onPress = _a.onPress;
    return (<Themed_1.View>
      <Themed_1.View style={styles.activityContainer}>
        <Themed_1.View style={styles.activityItem}>
          <react_native_1.TouchableOpacity onPress={onPress} style={[
            styles.sendContainer,
            {
                backgroundColor: status === "Withdrawal to Bank"
                    ? Colors_1["default"].general.lightRed
                    : status === "Vault top up"
                        ? Colors_1["default"].general.lightGreen
                        : Colors_1["default"].light.backgroundSecondary
            },
        ]}>
            {send}
          </react_native_1.TouchableOpacity>
          <Themed_1.Text style={styles.status}>{status}</Themed_1.Text>
        </Themed_1.View>
        <Themed_1.View>
          <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
            <Themed_1.Text style={[
            styles.amount,
            {
                color: status === "Withdrawal to Bank"
                    ? Colors_1["default"].general.red
                    : Colors_1["default"].general.green
            },
        ]}>
              {"\u20A6"} {price}
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.Text style={styles.date}> {due}</Themed_1.Text>
        </Themed_1.View>
      </Themed_1.View>
      <Themed_1.View style={styles.separator}/>
    </Themed_1.View>);
};
exports.ActivityCard = ActivityCard;
var styles = react_native_1.StyleSheet.create({
    sendContainer: {
        width: LayoutUtil_1.wp(36),
        height: LayoutUtil_1.hp(36),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: LayoutUtil_1.hp(18)
    },
    list: {
        marginLeft: LayoutUtil_1.hp(20)
    },
    activityItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    activityContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: LayoutUtil_1.hp(20),
        marginBottom: LayoutUtil_1.hp(10),
        marginTop: LayoutUtil_1.hp(10)
    },
    date: {
        fontSize: LayoutUtil_1.hp(10),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A"
    },
    amount: {
        fontSize: LayoutUtil_1.hp(12),
        fontWeight: "600",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A-Bold"
    },
    status: {
        fontSize: LayoutUtil_1.hp(14),
        fontWeight: "500",
        lineHeight: LayoutUtil_1.hp(17.75),
        fontFamily: "Euclid-Circular-A",
        marginLeft: LayoutUtil_1.hp(15)
    },
    separator: {
        borderWidth: LayoutUtil_1.hp(0.3),
        borderColor: "#EAEAEC",
        marginBottom: LayoutUtil_1.hp(10),
        width: LayoutUtil_1.wp(370),
        alignSelf: "center"
    }
});
