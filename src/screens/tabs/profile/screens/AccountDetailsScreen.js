"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../../../components/buttons/BackButton");
var Divider_1 = require("../../../../components/divider/Divider");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var redux_1 = require("../../../../hooks/redux");
var userSlice_1 = require("../../../../redux/slice/userSlice");
var AppConstants_1 = require("../../../../constants/AppConstants");
var AppUtil_1 = require("../../../../common/util/AppUtil");
var AccountDetailsListItem = function (_a) {
    var title = _a.title, subText = _a.subText, data = _a.data;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[CommonStyles_1["default"].col, { alignSelf: "stretch" }]}>
      <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                justifyContent: "space-between",
                paddingVertical: LayoutUtil_1.hp(15)
            },
        ]}>
        <Themed_1.View style={[CommonStyles_1["default"].col]}>
          <Themed_1.Text lightColor={Colors_1["default"][colorScheme].text} darkColor={Colors_1["default"][colorScheme].mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
            {title}
          </Themed_1.Text>
          <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 10, marginTop: 2 }}>
            {subText}
          </Themed_1.Text>
        </Themed_1.View>
        <Themed_1.Text lightColor={Colors_1["default"][colorScheme].text} darkColor={Colors_1["default"][colorScheme].mainText} style={{
            fontSize: 14
        }}>
          {data}
        </Themed_1.Text>
      </Themed_1.View>
      <Divider_1["default"] />
    </Themed_1.View>);
};
var AccountDetailsScreen = function (_a) {
    var navigation = _a.navigation;
    var colorScheme = useColorScheme_1["default"]();
    var user = redux_1.useAppSelector(userSlice_1.selectUser);
    var currencySymbol = AppUtil_1.getCurrencyUnicode(user.accountCurency);
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Account Details
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    var details = [
        {
            title: "Account status",
            subText: "Unverified or Verified",
            data: user.accountVerified ? "Verified" : "Not Verified"
        },
        {
            title: "Aza Number",
            subText: "You can receive money transfe/payment \nby sharing.",
            data: user.azaAccountNumber
        },
        {
            title: "Available Balance",
            subText: "Available balance except for pending \ntransactions",
            data: currencySymbol + " " + user.azaBalance
        },
        {
            title: "Incoming transfer amount limit",
            subText: "Total amount limit that can be received per \nmonth",
            data: AppConstants_1.NAIRA_UNICODE + " " + user.transfers.incommingTransferLimit
        },
        {
            title: "Deposit amount limit",
            subText: "The amount that can be deposited to your \naccount during this month",
            data: AppConstants_1.NAIRA_UNICODE + " " + user.transfers.depositAmountLimit
        },
        {
            title: "Transfer received from different users",
            subText: "The number of people who transferred money to \nyour account this month",
            data: user.transfers.totalMonthlyReceivers
        },
        {
            title: "Number of incoming transfers",
            subText: "The number of money transfers received in your \naccount this month",
            data: user.transfers.totalMonthlyIncomingTransfers
        },
        {
            title: "Incoming transfer amount",
            subText: "The amount of incoming money transfers to your \naccount this month",
            data: AppConstants_1.NAIRA_UNICODE + " " + user.transfers.totalMonthlyIncomingTransferAmount
        },
    ];
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[CommonStyles_1["default"].col, styles.container]}>
        <Themed_1.View style={[CommonStyles_1["default"].row, { alignSelf: "stretch" }]}>
          <react_native_1.Image style={{ borderRadius: 50, width: 56, height: 56 }} source={{
            uri: user.pictureUrl
                ? user.pictureUrl
                : AppUtil_1.getInitialsAvatar({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    scheme: colorScheme
                })
        }}/>
          <Themed_1.View style={[CommonStyles_1["default"].col, { marginLeft: 20 }]}>
            <Themed_1.Text lightColor={Colors_1["default"][colorScheme].text} darkColor={Colors_1["default"][colorScheme].mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
              {user.fullName}
            </Themed_1.Text>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{
            marginVertical: 5,
            fontSize: 12
        }}>
              {user.phoneNumber}
            </Themed_1.Text>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.secondaryText} style={{ fontSize: 10 }}>
              {user.emailAddress}
            </Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
          <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { alignSelf: "stretch", marginTop: LayoutUtil_1.hp(20) },
        ]}>
            {details.map(function (_a, i) {
            var data = _a.data, subText = _a.subText, title = _a.title;
            return (<AccountDetailsListItem key={i} data={data} subText={subText} title={title}/>);
        })}
          </Themed_1.View>
        </react_native_1.ScrollView>
        <react_native_1.TouchableOpacity style={{ alignSelf: "center", marginVertical: LayoutUtil_1.hp(35) }}>
          <Themed_1.Text lightColor={Colors_1["default"][colorScheme].text} darkColor={Colors_1["default"][colorScheme].mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
            Term of Use
          </Themed_1.Text>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = AccountDetailsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
