"use strict";
exports.__esModule = true;
exports.TopBar = void 0;
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var native_stack_1 = require("@react-navigation/native-stack");
var react_native_1 = require("react-native");
var PaymensNavigation_1 = require("../../navigation/PaymensNavigation");
// Vault
var AddVault_1 = require("../../screens/tabs/vault/AddVault");
var ConfirmDeleteVault_1 = require("../../screens/tabs/vault/ConfirmDeleteVault");
var NewVault_1 = require("../../screens/tabs/vault/NewVault");
var VaultActivity_1 = require("../../screens/tabs/vault/withdraw-to-aza/VaultActivity");
var VaultDetails_1 = require("../../screens/tabs/vault/withdraw-to-aza/VaultDetails");
var VaultSuccessful_1 = require("../../screens/tabs/vault/VaultSuccessful");
var VaultWithdrawSuccessful_1 = require("../../screens/tabs/vault/withdraw-to-aza/VaultWithdrawSuccessful");
var VaultWithdrawToBank_1 = require("../../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBank");
var VaultWithdrawToBankConfirmation_1 = require("../../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBankConfirmation");
var VaultToBankSuccessful_1 = require("../../screens/tabs/vault/withdraw-to-bank/VaultToBankSuccessful");
var VaultwithdrawalConfirmation_1 = require("../../screens/tabs/vault/withdraw-to-aza/VaultwithdrawalConfirmation");
var LockVault_1 = require("../../screens/tabs/vault/LockVault");
var ArchievedVault_1 = require("../../screens/tabs/vault/ArchievedVault");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../../components/Themed");
var CommonStyles_1 = require("../styles/CommonStyles");
var BackButton_1 = require("../../components/buttons/BackButton");
var SpacerWrapper_1 = require("../util/SpacerWrapper");
var Colors_1 = require("../../constants/Colors");
var svg_1 = require("../../../assets/svg");
var StatusScreen_1 = require("../../screens/status/StatusScreen");
// settings
var ChangePasswordScreen_1 = require("../../screens/tabs/settings/screens/ChangePasswordScreen");
var NewPasswordScreen_1 = require("../../screens/tabs/settings/screens/NewPasswordScreen");
var ChangePhoneNumberScreen_1 = require("../../screens/tabs/settings/screens/ChangePhoneNumberScreen");
var ChangePhoneNumberOTPScreen_1 = require("../../screens/tabs/settings/screens/ChangePhoneNumberOTPScreen");
var ChangeEmailScreen_1 = require("../../screens/tabs/settings/screens/ChangeEmailScreen");
var PrivacySettingsScreen_1 = require("../../screens/tabs/settings/screens/PrivacySettingsScreen");
var NameVisibilityScreen_1 = require("../../screens/tabs/settings/screens/NameVisibilityScreen");
var ContactsVisibilityScreen_1 = require("../../screens/tabs/settings/screens/ContactsVisibilityScreen");
var SplitAndMoneyRequests_1 = require("../../screens/tabs/settings/screens/SplitAndMoneyRequests");
var BlockUsersScreen_1 = require("../../screens/tabs/settings/screens/BlockUsersScreen");
var NotificationSettingsScreen_1 = require("../../screens/tabs/settings/screens/NotificationSettingsScreen");
var LoginWithFaceIdScreen_1 = require("../../screens/tabs/settings/screens/LoginWithFaceIdScreen");
var LoginOptionsScreen_1 = require("../../screens/tabs/settings/screens/LoginOptionsScreen");
var AppearanceScreen_1 = require("../../screens/tabs/settings/screens/AppearanceScreen");
var AppLanguageScreen_1 = require("../../screens/tabs/settings/screens/AppLanguageScreen");
var BlockNewUserScreen_1 = require("../../screens/tabs/settings/screens/BlockNewUserScreen");
// Payments
var Pie_1 = require("../../screens/tabs/payments/Pie");
var InternetPlans_1 = require("../../screens/tabs/payments/internet-screens/InternetPlans");
var ElectricityIndex_1 = require("../../screens/tabs/payments/electricity-screens/ElectricityIndex");
var CableTvIndex_1 = require("../../screens/tabs/payments/cable-tv-screens/CableTvIndex");
var WaterScreen_1 = require("../../screens/tabs/payments/water-screens/WaterScreen");
var CharityIndexScreen_1 = require("../../screens/tabs/payments/charity-screens/CharityIndexScreen");
var InternetDetail_1 = require("../../screens/tabs/payments/internet-screens/InternetDetail");
var ConfirmTransaction_1 = require("../../screens/tabs/payments/ConfirmTransaction");
// Profile
var AccountDetailsScreen_1 = require("../../screens/tabs/profile/screens/AccountDetailsScreen");
var TransactionHistoryScreen_1 = require("../../screens/tabs/profile/screens/TransactionHistoryScreen");
var BankAccountsScreen_1 = require("../../screens/tabs/profile/screens/BankAccountsScreen");
var SelectBankScreen_1 = require("../../screens/tabs/profile/screens/SelectBankScreen");
var AddBankAccountScreen_1 = require("../../screens/tabs/profile/screens/AddBankAccountScreen");
var AddBankAccountConfirmationScreen_1 = require("../../screens/tabs/profile/screens/AddBankAccountConfirmationScreen");
var EditBankAccountDetailsScreen_1 = require("../../screens/tabs/profile/screens/EditBankAccountDetailsScreen");
var DebitCreditCardsScreen_1 = require("../../screens/tabs/profile/screens/DebitCreditCardsScreen");
var ManageCardScreen_1 = require("../../screens/tabs/profile/screens/ManageCardScreen");
var AddNewCardScreen_1 = require("../../screens/tabs/profile/screens/AddNewCardScreen");
var ScanCardScreen_1 = require("../../screens/tabs/profile/screens/ScanCardScreen");
//bvn
var BvnVerificationScreen_1 = require("../../screens/bvn/BvnVerificationScreen");
// Home menu
var SplitScreen_1 = require("../../screens/menu/SplitScreen");
var ChooseSplitScreen_1 = require("../../screens/menu/ChooseSplitScreen");
var SplitSelectContactsScreen_1 = require("../../screens/menu/SplitSelectContactsScreen");
var SplitEditContactsScreen_1 = require("../../screens/menu/SplitEditContactsScreen");
var SplitEditContactScreen_1 = require("../../screens/menu/SplitEditContactScreen");
var SplitConfirmationScreen_1 = require("../../screens/menu/SplitConfirmationScreen");
var IncomingSplitRequestsScreen_1 = require("../../screens/menu/IncomingSplitRequestsScreen");
var IncomingSplitRequestAcceptanceScreen_1 = require("../../screens/menu/IncomingSplitRequestAcceptanceScreen");
var CompletedSplitRequestDetailsScreen_1 = require("../../screens/menu/CompletedSplitRequestDetailsScreen");
var OutgoingSplitRequestsScreen_1 = require("../../screens/menu/OutgoingSplitRequestsScreen");
var MonthlySummaryScreen_1 = require("../../screens/menu/MonthlySummaryScreen");
var FeesAndLimitsScreen_1 = require("../../screens/menu/FeesAndLimitsScreen");
var ContactUsScreen_1 = require("../../screens/menu/ContactUsScreen");
// transfer modal screens
var SendMoneyScreen_1 = require("../../screens/transferModal/SendMoneyScreen");
var RequestMoneyScreen_1 = require("../../screens/transferModal/RequestMoneyScreen");
var RequestMoneyConfirmationScreen_1 = require("../../screens/transferModal/RequestMoneyConfirmationScreen");
var SendMoneyConfirmationScreen_1 = require("../../screens/transferModal/SendMoneyConfirmationScreen");
var RecurringTransferScreen_1 = require("../../screens/transferModal/RecurringTransferScreen");
var SelectNewRecurringTransferScreen_1 = require("../../screens/transferModal/SelectNewRecurringTransferScreen");
var SetupRecurringTransferScreen_1 = require("../../screens/transferModal/SetupRecurringTransferScreen");
var RecurringTransferConfirmationScreen_1 = require("../../screens/transferModal/RecurringTransferConfirmationScreen");
// transaction keypad screen
var TransactionKeypadScreen_1 = require("../../screens/keypad/TransactionKeypadScreen");
// withdraw/deposit
var WithdrawDepositTabs_1 = require("../../screens/tabs/home/withdraw-deposit/WithdrawDepositTabs");
var DepositScreen_1 = require("../../screens/tabs/home/withdraw-deposit/deposit/DepositScreen");
var Stack = native_stack_1.createNativeStackNavigator();
var Tab = material_top_tabs_1.createMaterialTopTabNavigator();
var TopBar = function (_a) {
    var navigation = _a.navigation;
    var scheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={[CommonStyles_1["default"].topTab]}>
        <Themed_1.View style={{ marginLeft: 20 }}>
          <BackButton_1["default"] onPress={function () {
            var _a;
            (_a = navigation.getParent()) === null || _a === void 0 ? void 0 : _a.navigate("AddVault");
        }}/>
        </Themed_1.View>
        <Themed_1.Text style={CommonStyles_1["default"].vaultTab}>Vault</Themed_1.Text>
      </Themed_1.View>
      <Tab.Navigator screenOptions={{
            tabBarItemStyle: {
                borderRadius: 100,
                marginTop: react_native_1.Platform.OS == "android" ? 50 : 0
            },
            tabBarIndicatorStyle: {
                borderWidth: 1,
                borderColor: scheme == "light" ? "#000000" : "#ffffff"
            },
            tabBarLabelStyle: {
                textTransform: "capitalize"
            }
        }} initialRouteName="details">
        <Tab.Screen component={VaultDetails_1["default"]} name="details"/>
        <Tab.Screen component={VaultActivity_1["default"]} name="activity"/>
      </Tab.Navigator>
    </SpacerWrapper_1["default"]>);
};
exports.TopBar = TopBar;
var CommonStack = function () {
    var scheme = useColorScheme_1["default"]();
    return (<Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen component={BvnVerificationScreen_1["default"]} name="BvnVerification"/>
      </Stack.Group>

      {/* status screen */}
      {/* TODO fix status screen not navigating to SetupRecurringTransferScreen on ios when presentation mode is modal  */}
      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen component={StatusScreen_1["default"]} name="StatusScreen" options={function () { return ({ headerShown: false }); }}/>
      </Stack.Group>

      {/* Transaction keypad screen */}
      <Stack.Group>
        <Stack.Screen name="TransactionKeypad" component={TransactionKeypadScreen_1["default"]}/>
      </Stack.Group>

      {/* Settings */}
      <Stack.Group>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen_1["default"]}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen_1["default"]}/>
        <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumberScreen_1["default"]}/>
        <Stack.Screen name="ChangePhoneNumberOTP" component={ChangePhoneNumberOTPScreen_1["default"]}/>
        <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen_1["default"]}/>
        <Stack.Screen name="PrivacySettings" component={PrivacySettingsScreen_1["default"]}/>
        <Stack.Screen name="NameVisibility" component={NameVisibilityScreen_1["default"]}/>
        <Stack.Screen name="ContactVisibility" component={ContactsVisibilityScreen_1["default"]}/>
        <Stack.Screen name="SplitAndMoneyRequests" component={SplitAndMoneyRequests_1["default"]}/>
        <Stack.Screen name="BlockUsers" component={BlockUsersScreen_1["default"]}/>
        <Stack.Screen name="BlockNewUser" component={BlockNewUserScreen_1["default"]}/>
        <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen_1["default"]}/>
        <Stack.Screen name="FaceId" component={LoginWithFaceIdScreen_1["default"]}/>
        <Stack.Screen name="LoginOptions" component={LoginOptionsScreen_1["default"]}/>
        <Stack.Screen name="Appearance" component={AppearanceScreen_1["default"]}/>
        <Stack.Screen name="AppLanguage" component={AppLanguageScreen_1["default"]}/>
      </Stack.Group>

      {/* Vault */}
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={NewVault_1["default"]} name="NewVault"/>

        <Stack.Screen options={{ headerShown: false }} name="LockVault" component={LockVault_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="VaultSuccessful" component={VaultSuccessful_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="AddVault" component={AddVault_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="ConfirmDeleteVault" component={ConfirmDeleteVault_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="VaultToBank" component={VaultWithdrawToBank_1["default"]}/>

        <Stack.Screen options={{ headerShown: false }} name="VaultToAza" component={VaultwithdrawalConfirmation_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="ArchievedVault" component={ArchievedVault_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="VaultWithdrawsuccessful" component={VaultWithdrawSuccessful_1["default"]}/>

        <Stack.Screen options={{ headerShown: false }} name="TopBar" component={exports.TopBar}/>

        <Stack.Screen options={{ headerShown: false }} name="VaultWithdrawConfirmation" component={VaultWithdrawToBankConfirmation_1["default"]}/>
        <Stack.Screen options={{ headerShown: false }} name="VaultToBankSuccessful" component={VaultToBankSuccessful_1["default"]}/>
      </Stack.Group>

      {/* Payments */}

      <Stack.Group screenOptions={function (props) { return ({
            headerTitleAlign: "center",
            headerLeft: function () { return (<react_native_1.TouchableOpacity onPress={function () { return props.navigation.goBack(); }} style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
              <svg_1.BackIcon color={scheme == "light" ? "#000000" : "#ffffff"} size={24}/>
              <Themed_1.Text style={{ marginLeft: 5 }}>Back</Themed_1.Text>
            </react_native_1.TouchableOpacity>); },
            headerStyle: {
                backgroundColor: scheme == "light"
                    ? Colors_1["default"].light.background
                    : Colors_1["default"].dark.background
            },
            headerTransparent: true,
            headerTitleStyle: {
                fontSize: 16,
                fontWeight: "600"
            }
        }); }}>
        <Stack.Screen options={{ title: "Airtime & Data" }} name="AirtimeData" component={PaymensNavigation_1.AirtimeTabs}/>
        <Stack.Screen options={{ presentation: "fullScreenModal", title: "" }} name="Pie" component={Pie_1["default"]}/>
        <Stack.Screen options={{ title: "Confirmation" }} name="Confirm" component={ConfirmTransaction_1["default"]}/>
        <Stack.Screen options={{ title: "Internet" }} name="InternetPlans" component={InternetPlans_1["default"]}/>
        <Stack.Screen options={{ title: "Electricity" }} name="Electricity" component={ElectricityIndex_1["default"]}/>
        <Stack.Screen options={{ title: "Cable TV" }} name="CableTV" component={CableTvIndex_1["default"]}/>
        <Stack.Screen options={{ title: "Water" }} name="Water" component={WaterScreen_1["default"]}/>
        <Stack.Screen name="Charity" component={CharityIndexScreen_1["default"]}/>
        <Stack.Screen options={function (_a) {
            var route = _a.route;
            return ({
                title: route.params.name
            });
        }} name="CharityDetail" component={PaymensNavigation_1.CharityTabs}/>

        <Stack.Screen options={function (_a) {
            var route = _a.route;
            return ({
                title: route.params.name
            });
        }} name="InternetPlanDetail" component={InternetDetail_1["default"]}/>

        <Stack.Screen options={{
            headerShown: false
        }} name="CompleteTransaction" component={StatusScreen_1["default"]}/>
      </Stack.Group>

      {/* Profile */}
      <Stack.Group>
        <Stack.Screen name="AccountDetails" component={AccountDetailsScreen_1["default"]}/>
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen_1["default"]}/>
        <Stack.Screen name="BankAccounts" component={BankAccountsScreen_1["default"]}/>
        <Stack.Screen name="SelectBank" component={SelectBankScreen_1["default"]}/>
        <Stack.Screen name="AddBankAccount" component={AddBankAccountScreen_1["default"]}/>
        <Stack.Screen name="AddBankAccountConfirmation" component={AddBankAccountConfirmationScreen_1["default"]}/>
        <Stack.Screen name="EditBankAccountDetails" component={EditBankAccountDetailsScreen_1["default"]}/>
        <Stack.Screen name="DebitCreditCards" component={DebitCreditCardsScreen_1["default"]}/>
        <Stack.Screen name="ManageCard" component={ManageCardScreen_1["default"]}/>
        <Stack.Screen name="AddNewCard" component={AddNewCardScreen_1["default"]}/>
        <Stack.Screen name="ScanCard" component={ScanCardScreen_1["default"]}/>
      </Stack.Group>

      {/* Home menu */}
      <Stack.Group>
        <Stack.Screen name="Split" component={SplitScreen_1["default"]}/>
        <Stack.Screen name="ChooseSplit" component={ChooseSplitScreen_1["default"]}/>
        <Stack.Screen name="SplitSelectContacts" component={SplitSelectContactsScreen_1["default"]}/>
        <Stack.Screen name="SplitEditContacts" component={SplitEditContactsScreen_1["default"]}/>
        <Stack.Screen name="SplitEditContact" component={SplitEditContactScreen_1["default"]}/>
        <Stack.Screen name="SplitConfirmation" component={SplitConfirmationScreen_1["default"]}/>
        <Stack.Screen name="IncomingSplitRequests" component={IncomingSplitRequestsScreen_1["default"]}/>
        <Stack.Screen name="IncomingSplitRequestAcceptance" component={IncomingSplitRequestAcceptanceScreen_1["default"]}/>
        <Stack.Screen name="CompletedSplitRequestDetails" component={CompletedSplitRequestDetailsScreen_1["default"]}/>

        <Stack.Screen name="OutgoingSplitRequests" component={OutgoingSplitRequestsScreen_1["default"]}/>
        <Stack.Screen name="FeesAndLimits" component={FeesAndLimitsScreen_1["default"]}/>
        <Stack.Screen name="MonthlySummary" component={MonthlySummaryScreen_1["default"]}/>
        <Stack.Screen name="ContactUs" component={ContactUsScreen_1["default"]}/>

        <Stack.Group screenOptions={function (props) { return ({
            headerTitleAlign: "center",
            headerLeft: function () { return (<react_native_1.TouchableOpacity onPress={function () { return props.navigation.goBack(); }} style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                <svg_1.BackIcon color={scheme == "light" ? "#000000" : "#ffffff"} size={24}/>
                <Themed_1.Text style={{ marginLeft: 5 }}>Back</Themed_1.Text>
              </react_native_1.TouchableOpacity>); },
            headerStyle: {
                backgroundColor: scheme == "light"
                    ? Colors_1["default"].light.background
                    : Colors_1["default"].dark.background
            },
            headerTransparent: true,
            headerTitleStyle: {
                fontSize: 16,
                fontWeight: "600"
            }
        }); }}>
          <Stack.Screen name="WithdrawDepositTabs" component={WithdrawDepositTabs_1.WithdrawDepositTabs} options={{
            title: "Withdraw/Deposit"
        }}/>
          <Stack.Screen component={DepositScreen_1["default"]} name="Deposit"/>
        </Stack.Group>
      </Stack.Group>

      {/* transfer bottomsheet screens */}
      <Stack.Group>
        <Stack.Screen name="SendMoney" component={SendMoneyScreen_1["default"]}/>
        <Stack.Screen name="RequestMoney" component={RequestMoneyScreen_1["default"]}/>
        <Stack.Screen name="SendMoneyConfirmation" component={SendMoneyConfirmationScreen_1["default"]}/>
        <Stack.Screen name="RequestMoneyConfirmation" component={RequestMoneyConfirmationScreen_1["default"]}/>
        <Stack.Screen name="RecurringTransfer" component={RecurringTransferScreen_1["default"]}/>
        <Stack.Screen name="SelectNewRecurringTransfer" component={SelectNewRecurringTransferScreen_1["default"]}/>
        <Stack.Screen name="SetupRecurringTransfer" component={SetupRecurringTransferScreen_1["default"]}/>
        <Stack.Screen name="RecurringTransferConfirmation" component={RecurringTransferConfirmationScreen_1["default"]}/>
      </Stack.Group>
    </Stack.Navigator>);
};
exports["default"] = CommonStack;
