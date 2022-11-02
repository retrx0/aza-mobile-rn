"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Button_1 = require("../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var CustomDropdown_1 = require("../../components/dropdown/CustomDropdown");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var SetupRecurringTransferScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(""), periodValue = _b[0], setPeriodValue = _b[1];
    var _c = react_1.useState(""), dayValue = _c[0], setDayValue = _c[1];
    var colorScheme = useColorScheme_1["default"]();
    var period = [
        { label: "Monthly", value: "monthly" },
        { label: "Weekly", value: "weekly" },
        { label: "Daily", value: "daily" },
    ];
    var dayMonthly = [
        { label: "First Day of the Month", value: "1" },
        { label: "2nd", value: "2" },
        { label: "3rd", value: "3" },
    ];
    var dayWeekly = [
        { label: "Sunday", value: "sunday" },
        { label: "Monday", value: "monday" },
        { label: "Tuesday", value: "tuesday" },
        { label: "Wednesday", value: "wednesday" },
        { label: "Thursday", value: "thursday" },
        { label: "Friday", value: "friday" },
        { label: "Saturday", value: "saturday" },
    ];
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Recurring Transfer
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View>
          <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: 14,
            marginTop: LayoutUtil_1.hp(30),
            marginBottom: LayoutUtil_1.hp(40)
        }}>
            Setup a recurring money transfer
          </Themed_1.Text>
          <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(40) }}>
            <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 14
        }}>
              Period
            </Themed_1.Text>
            <CustomDropdown_1["default"] data={period} placeholder="Choose a period" setValue={setPeriodValue} value={periodValue}/>
          </Themed_1.View>
          {periodValue !== 'daily' &&
            <Themed_1.View style={{ marginBottom: LayoutUtil_1.hp(40) }}>
              <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
                    fontSize: 14
                }}>
                Day
              </Themed_1.Text>
              <CustomDropdown_1["default"] data={periodValue === 'weekly' ? dayWeekly : dayMonthly} placeholder="Choose a day" setValue={setDayValue} value={dayValue}/>
            </Themed_1.View>}
        </Themed_1.View>
        <Themed_1.View style={[CommonStyles_1["default"].col, { marginBottom: LayoutUtil_1.hp(50), width: "100%" }]}>
          <Button_1["default"] title="Continue" onPressButton={function () { return navigation.push('TransactionKeypad', {
            headerTitle: 'Recurring Transfer',
            transactionType: {
                type: 'recurring',
                beneficiary: {
                    beneficiaryAccount: '',
                    beneficiaryImage: '',
                    beneficiaryName: ''
                },
                period: periodValue,
                day: dayValue
            }
        }); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: LayoutUtil_1.hp(15),
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" color={Colors_1["default"].general.red} styleText={CommonStyles_1["default"].cancelStyle} onPressButton={function () { return navigation.goBack(); }}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SetupRecurringTransferScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
});
