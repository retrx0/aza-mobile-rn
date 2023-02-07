import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Platform } from "react-native";

import { AirtimeRecurringTab, AirtimeTabs } from "./PaymentsNavigation";

// Vault
import AddVault from "../screens/tabs/vault/AddVault";
import ConfirmDeleteVault from "../screens/tabs/vault/ConfirmDeleteVault";
import NewVault from "../screens/tabs/vault/NewVault";
import VaultActivity from "../screens/tabs/vault/withdraw-to-aza/VaultActivity";
import VaultDetails from "../screens/tabs/vault/withdraw-to-aza/VaultDetails";
import VaultSuccessful from "../screens/tabs/vault/VaultSuccessful";
import VaultWithdrawsuccessful from "../screens/tabs/vault/withdraw-to-aza/VaultWithdrawSuccessful";
import VaultToBank from "../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBank";
import VaultWithdrawConfirmation from "../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBankConfirmation";
import VaultToBankSuccessful from "../screens/tabs/vault/withdraw-to-bank/VaultToBankSuccessful";
import VaultToAza from "../screens/tabs/vault/withdraw-to-aza/VaultwithdrawalConfirmation";
import LockVault from "../screens/tabs/vault/LockVault";
import ArchievedVault from "../screens/tabs/vault/ArchievedVault";

import { CommonStackParamList } from "../common/navigation/types";
import { View, Text } from "../theme/Themed";
import BackButton from "../components/buttons/BackButton";
import SpacerWrapper from "../common/util/SpacerWrapper";
import Colors from "../constants/Colors";
import { BackIcon, InfoIcon } from "../../assets/svg";

import StatusScreen from "../screens/status/StatusScreen";
import ReceiptScreen from "../screens/receipt/ReceiptScreen";
import NotificationsScreen from "../screens/notification/NotificationsScreen";

// settings
import ChangePasswordScreen from "../screens/tabs/settings/screens/ChangePasswordScreen";
import NewPasswordScreen from "../screens/tabs/settings/screens/NewPasswordScreen";
import ChangePhoneNumberScreen from "../screens/tabs/settings/screens/ChangePhoneNumberScreen";
import ChangePhoneNumberOTPScreen from "../screens/tabs/settings/screens/ChangePhoneNumberOTPScreen";
import ChangeEmailScreen from "../screens/tabs/settings/screens/ChangeEmailScreen";
import PrivacySettingsScreen from "../screens/tabs/settings/screens/PrivacySettingsScreen";
import AccountBalanceVisibilityScreen from "../screens/tabs/settings/screens/AccountBalanceVisibilityScreen";
import NameVisibilityScreen from "../screens/tabs/settings/screens/NameVisibilityScreen";
import ContactsVisibilityScreen from "../screens/tabs/settings/screens/ContactsVisibilityScreen";
import SplitAndMoneyRequestsScreen from "../screens/tabs/settings/screens/SplitAndMoneyRequests";
import BlockUsersScreen from "../screens/tabs/settings/screens/BlockUsersScreen";
import NotificationSettingsScreen from "../screens/tabs/settings/screens/NotificationSettingsScreen";
import LoginWithFaceIdScreen from "../screens/tabs/settings/screens/LoginWithFaceIdScreen";
import LoginOptionsScreen from "../screens/tabs/settings/screens/LoginOptionsScreen";
import AppearanceScreen from "../screens/tabs/settings/screens/AppearanceScreen";
import AppLanguageScreen from "../screens/tabs/settings/screens/AppLanguageScreen";
import BlockNewUserScreen from "../screens/tabs/settings/screens/BlockNewUserScreen";

// Payments
import Pie from "../screens/tabs/payments/Pie";
import InternetPlans from "../screens/tabs/payments/internet-screens/InternetPlans";
import ElectricityIndex from "../screens/tabs/payments/electricity-screens/ElectricityIndex";
import CableTvIndex from "../screens/tabs/payments/cable-tv-screens/CableTvIndex";
import WaterScreen from "../screens/tabs/payments/water-screens/WaterScreen";
import CharityIndexScreen from "../screens/tabs/payments/charity-screens/CharityIndexScreen";
import InternetDetail from "../screens/tabs/payments/internet-screens/InternetDetail";
import PaymentConfirmationScreen from "../screens/tabs/payments/PaymentConfirmationScreen";

// Profile
import AccountDetailsScreen from "../screens/tabs/profile/screens/AccountDetailsScreen";
import TransactionHistoryScreen from "../screens/tabs/profile/screens/TransactionHistoryScreen";
import BankAccountsScreen from "../screens/tabs/profile/screens/BankAccountsScreen";
import SelectBankScreen from "../screens/tabs/profile/screens/SelectBankScreen";
import AddBankAccountScreen from "../screens/tabs/profile/screens/AddBankAccountScreen";
import AddBankAccountConfirmationScreen from "../screens/tabs/profile/screens/AddBankAccountConfirmationScreen";
import EditBankAccountDetailsScreen from "../screens/tabs/profile/screens/EditBankAccountDetailsScreen";
import DebitCreditCardsScreen from "../screens/tabs/profile/screens/DebitCreditCardsScreen";
import ManageCardScreen from "../screens/tabs/profile/screens/ManageCardScreen";
import AddNewCardScreen from "../screens/tabs/profile/screens/AddNewCardScreen";
import ScanCardScreen from "../screens/tabs/profile/screens/ScanCardScreen";

//bvn
import BvnVerificationScreen from "../screens/bvn/BvnVerificationScreen";

// Home menu
import SplitScreen from "../screens/menu/SplitScreen";
import ChooseSplitScreen from "../screens/menu/ChooseSplitScreen";
import SplitSelectContactsScreen from "../screens/menu/SplitSelectContactsScreen";
import SplitEditContactsScreen from "../screens/menu/SplitEditContactsScreen";
import SplitEditContactScreen from "../screens/menu/SplitEditContactScreen";
import SplitConfirmationScreen from "../screens/menu/SplitConfirmationScreen";
import IncomingSplitRequestsScreen from "../screens/menu/IncomingSplitRequestsScreen";
import IncomingSplitRequestAcceptanceScreen from "../screens/menu/PendingRequestAcceptanceScreen";
import CompletedSplitRequestDetailsScreen from "../screens/menu/CompletedSplitRequestDetailsScreen";
import OutgoingSplitRequestsScreen from "../screens/menu/OutgoingSplitRequestsScreen";
import MonthlySummaryScreen from "../screens/menu/MonthlySummaryScreen";
import FeesAndLimitsScreen from "../screens/menu/FeesAndLimitsScreen";
import ContactUsScreen from "../screens/menu/ContactUsScreen";

// transfer modal screens
import SendMoneyScreen from "../screens/transfer-modal/send-money/SendMoneyScreen";
import RequestMoneyScreen from "../screens/transfer-modal/request-money/RequestMoneyScreen";
import RequestMoneyConfirmationScreen from "../screens/transfer-modal/request-money/RequestMoneyConfirmationScreen";
import SendMoneyConfirmationScreen from "../screens/transfer-modal/send-money/SendMoneyConfirmationScreen";
import RecurringTransferScreen from "../screens/transfer-modal/recurring-transfer/RecurringTransferScreen";
import SelectNewRecurringTransferScreen from "../screens/transfer-modal/recurring-transfer/SelectNewRecurringTransferScreen";
import SetupRecurringTransferScreen from "../screens/transfer-modal/recurring-transfer/SetupRecurringTransferScreen";
import RecurringTransferConfirmationScreen from "../screens/transfer-modal/recurring-transfer/RecurringTransferConfirmationScreen";

// transaction keypad screen
import TransactionKeypadScreen from "../screens/keypad/TransactionKeypadScreen";

// withdraw/deposit
import { hp } from "../common/util/LayoutUtil";
import NewUserVault from "../screens/tabs/vault/NewUserVault";
import AddCoverImage from "../screens/tabs/vault/AddCoverImage";
// import AddCoverImageSuccessful from "../screens/tabs/vault/SetVaultGoal";
import SetVaultGoal from "../screens/tabs/vault/SetVaultGoal";
import ConfirmGoal from "../screens/tabs/vault/GoalConfirmation";
import UserVault from "../screens/tabs/vault/UserVault";
import ChangeVaultName from "../screens/tabs/vault/ChangeVaultName";
import ChangeGoalAmount from "../screens/tabs/vault/ChangeGoalAmount";
import VaultRecurringTransfer from "../screens/tabs/vault/VaultRecurring/VaultRecurringTransfer";
import VaultRecurringAmount from "../screens/tabs/vault/VaultRecurring/VaultRecurringAmount";
import RecurringMoneyConfirmationScreen from "../screens/tabs/vault/VaultRecurring/RecurringMoneyConfirmationScreen";
import Vault from "../screens/tabs/vault/Vault";
import VaultToBankAmount from "../screens/tabs/vault/withdraw-to-bank/VaultToBankAmount";
// import VaultConfirmation from "../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBankConfirmation";
import CharityConfirmation from "../screens/tabs/payments/charity-screens/CharityConfirmation";
import GiftCardScreen from "../screens/tabs/payments/gift-card/GiftCardScreen";
import GiftCardConfirmation from "../screens/tabs/payments/gift-card/GiftCardConfirmation";
import GiftCardDetails from "../screens/tabs/payments/gift-card/GiftCard_Details";
import GameScreen from "../screens/tabs/payments/game/GameScreen";
import PaymentRecurring from "../screens/tabs/payments/paymentRecurring/PaymentRecurring";
// import AirtimeRecurring from "../screens/tabs/payments/paymentRecurring/AirtimeRecurring/AirtimeRecurring";
import InternetRecurring from "../screens/tabs/payments/paymentRecurring/InternetRecurring/InternetRecurring";
import RecurringPlan from "../screens/tabs/payments/paymentRecurring/InternetRecurring/RecurringPlan";
import WaterRecurring from "../screens/tabs/payments/paymentRecurring/WaterRecurring/WaterRecurring";
import CableRecurring from "../screens/tabs/payments/paymentRecurring/CableRecurring/CableRecurring";
import ElectricityRecurring from "../screens/tabs/payments/paymentRecurring/ElctricityRecurring/ElectricityRecurring";
import GiftCardEmail from "../screens/tabs/payments/gift-card/EmailScreen";
import VaultWithdrawConfirm from "../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBankConfirmation";
// import SendMoney from "../screens/transfer-modal/send-money/feature/SendMoney";
import SendMoneyFeature from "../screens/transfer-modal/send-money/feature/SendMoneyFeature";
// import TransactionCertainty from "../screens/transfer-modal/send-money/feature/TransactionCertainty";
// import InviteUsers from "../screens/transfer-modal/send-money/feature/InviteUsers";
import RequestMoneyFeature from "../screens/transfer-modal/request-money/feature/RequestMoneyFeature";
import VaultFeature from "../screens/tabs/vault/VaultFeature/VaultFeature";
import VaultLiberty from "../screens/tabs/vault/VaultFeature/VaultLiberty";
import QRFeature from "../screens/qr-transactions/components/QRFeature";
import GameCredit from "../screens/tabs/payments/game/GameCredit";
// import GameFeature from "../screens/tabs/payments/game/GameFeature";
import CharityFeature from "../screens/tabs/payments/charity-screens/CharityFeature";
// import CharitySupport from "../screens/tabs/payments/charity-screens/CharitySupport";
import GiftCardEasy from "../screens/tabs/payments/gift-card/GiftCardEasy";
// import GiftCardChoice from "../screens/tabs/payments/gift-card/GiftCardChoice";
// import GiftCardFit from "../screens/tabs/payments/gift-card/GiftCardFit";
import { getAppTheme } from "../theme";
import { useAppSelector } from "../redux";
import { selectAppTheme } from "../redux/slice/themeSlice";
import CloseAccountScreen from "../screens/tabs/settings/closeAccount/CloseAccountScreen";
import AccountClosureSurveyScreen from "../screens/tabs/settings/closeAccount/AccountClosureSurvey";
import CloseAccount from "../screens/tabs/settings/closeAccount/CloseAccount";
import AlternativeSurvey from "../screens/tabs/settings/closeAccount/AlternativeSurvey";
import TermsOfUse from "../screens/onboarding/TermsOfUse";
import CharityTabs from "../screens/tabs/payments/charity-screens/CharityTabs";
import WithdrawDepositTabs from "../screens/tabs/home/withdraw-deposit/WithdrawDepositTabs";
import DepositScreen from "../screens/tabs/home/withdraw-deposit/deposit/DepositScreen";
import WithdrawFeature from "../screens/tabs/home/withdraw-deposit/withdraw/WithdrawFeature";
import DepositFeature from "../screens/tabs/home/withdraw-deposit/withdraw/DepositFeature";
import DataBundle from "../screens/tabs/payments/airtime-screens/DataBundle";
import AirtimeIndexScreen from "../screens/tabs/payments/airtime-screens/AirtimeIndex";
import TransactionPin from "../screens/tabs/settings/screens/TransactionPin";

const Stack = createNativeStackNavigator<CommonStackParamList>();
const Tab = createMaterialTopTabNavigator<CommonStackParamList>();

export const TopBar = ({ navigation }: { navigation: any }) => {
  const scheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <SpacerWrapper>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: hp(20),
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Bold",
            fontSize: hp(16),
            fontWeight: "600",
            marginLeft: hp(65),
          }}
        >
          Flight Ticket Vault
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth: 0.9,
            borderColor: scheme == "light" ? "#000000" : "#ffffff",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: hp(16),
            fontWeight: "600",
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            // marginTop: hp(30),
          },
        }}
        initialRouteName="details"
      >
        <Tab.Screen component={VaultDetails} name="details" />
        <Tab.Screen component={VaultActivity} name="activity" />
      </Tab.Navigator>
    </SpacerWrapper>
  );
};

const CommonStack = () => {
  const scheme = getAppTheme(useAppSelector(selectAppTheme));
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          component={BvnVerificationScreen}
          name="BvnVerification"
        />
      </Stack.Group>

      {/* status screen */}
      {/* TODO fix status screen not navigating to SetupRecurringTransferScreen on ios when presentation mode is modal  */}
      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen
          component={StatusScreen}
          name="StatusScreen"
          options={() => ({ headerShown: false })}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen component={NotificationsScreen} name="Notifications" />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          component={ReceiptScreen}
          name="Receipt"
          options={() => ({ headerShown: false })}
        />
      </Stack.Group>

      {/* Transaction keypad screen */}
      <Stack.Group>
        <Stack.Screen
          name="TransactionKeypad"
          component={TransactionKeypadScreen}
        />
        <Stack.Screen
          name="VaultWithdrawConfirm"
          component={VaultWithdrawConfirm}
        />
      </Stack.Group>

      {/* Settings */}
      <Stack.Group>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen
          name="ChangePhoneNumber"
          component={ChangePhoneNumberScreen}
        />
        <Stack.Screen
          name="ChangePhoneNumberOTP"
          component={ChangePhoneNumberOTPScreen}
        />
        <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} />
        <Stack.Screen
          name="PrivacySettings"
          component={PrivacySettingsScreen}
        />
        <Stack.Screen name="TransactionPin" component={TransactionPin} />

        <Stack.Screen
          name="AccountBalanceVisibility"
          component={AccountBalanceVisibilityScreen}
        />
        <Stack.Screen name="NameVisibility" component={NameVisibilityScreen} />
        <Stack.Screen
          name="ContactVisibility"
          component={ContactsVisibilityScreen}
        />
        <Stack.Screen
          name="SplitAndMoneyRequests"
          component={SplitAndMoneyRequestsScreen}
        />
        <Stack.Screen name="BlockUsers" component={BlockUsersScreen} />
        <Stack.Screen name="BlockNewUser" component={BlockNewUserScreen} />
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettingsScreen}
        />
        <Stack.Screen name="FaceId" component={LoginWithFaceIdScreen} />
        <Stack.Screen name="LoginOptions" component={LoginOptionsScreen} />
        <Stack.Screen name="Appearance" component={AppearanceScreen} />
        <Stack.Screen name="AppLanguage" component={AppLanguageScreen} />
        <Stack.Screen
          name="CloseAccountScreen"
          component={CloseAccountScreen}
        />
        <Stack.Screen name="CloseAccount" component={CloseAccount} />
        <Stack.Screen
          name="AccountClosureSurveyScreen"
          component={AccountClosureSurveyScreen}
        />
        <Stack.Screen name="AlternativeSurvey" component={AlternativeSurvey} />
      </Stack.Group>

      {/* Vault */}
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={NewVault} name="NewVault" />

        <Stack.Screen
          options={{ headerShown: false }}
          name="LockVault"
          component={LockVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultSuccessful"
          component={VaultSuccessful}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddVault"
          component={AddVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmDeleteVault"
          component={ConfirmDeleteVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultToBank"
          component={VaultToBank}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultToAza"
          component={VaultToAza}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ArchievedVault"
          component={ArchievedVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultWithdrawsuccessful"
          component={VaultWithdrawsuccessful}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="TopBar"
          component={TopBar}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultWithdrawConfirmation"
          component={VaultWithdrawConfirmation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultToBankSuccessful"
          component={VaultToBankSuccessful}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NewUserVault"
          component={NewUserVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AddCoverImage"
          component={AddCoverImage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SetVaultGoal"
          component={SetVaultGoal}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmGoal"
          component={ConfirmGoal}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserVault"
          component={UserVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChangeVaultName"
          component={ChangeVaultName}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChangeGoalAmount"
          component={ChangeGoalAmount}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultRecurringTransfer"
          component={VaultRecurringTransfer}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultRecurringAmount"
          component={VaultRecurringAmount}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RecurringMoneyConfirmationScreen"
          component={RecurringMoneyConfirmationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Vault"
          component={Vault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultToBankAmount"
          component={VaultToBankAmount}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultFeature"
          component={VaultFeature}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="VaultLiberty"
          component={VaultLiberty}
        />
      </Stack.Group>

      {/* Payments */}
      <Stack.Screen
        name="AirtimeData"
        component={AirtimeIndexScreen}
        options={{
          title: "Withdraw/Deposit",
        }}
      />
      <Stack.Group
        screenOptions={(props) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BackIcon
                color={scheme == "light" ? "#000000" : "#ffffff"}
                size={12}
              />
              <Text
                style={{
                  marginLeft: hp(5),
                  fontSize: hp(16),
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          ),
          // headerRight: () => (
          //   <TouchableOpacity>
          //     <InfoIcon color={scheme === "dark" ? "#999999" : "#000000"} />
          //   </TouchableOpacity>
          // ),
          headerStyle: {
            backgroundColor:
              scheme == "light"
                ? Colors.light.background
                : Colors.dark.background,
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "600",
          },
        })}
      >
        <Stack.Screen
          options={{ title: "Airtime & Data" }}
          name="AirtimeRecurring"
          component={AirtimeRecurringTab}
        />
        <Stack.Screen
          options={{ presentation: "fullScreenModal", title: "" }}
          name="Pie"
          component={Pie}
        />
        <Stack.Screen
          options={{ title: "Confirmation" }}
          name="PaymentConfirmation"
          component={PaymentConfirmationScreen}
        />
        <Stack.Screen
          options={{ title: "Confirmation" }}
          name="CharityConfirmation"
          component={CharityConfirmation}
        />
        <Stack.Screen
          options={{ title: "Internet" }}
          name="InternetPlans"
          component={InternetPlans}
        />

        <Stack.Group
          screenOptions={(props) => ({
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <BackIcon
                  color={scheme == "light" ? "#000000" : "#ffffff"}
                  size={24}
                />
                <Text
                  style={{
                    fontSize: hp(16),
                    fontWeight: "600",
                    fontFamily: "Euclid-Circular-A",
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("GiftCardEasy")}
              >
                <InfoIcon color={scheme === "dark" ? "#999999" : "#000000"} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor:
                scheme == "light"
                  ? Colors.light.background
                  : Colors.dark.background,
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
            },
          })}
        >
          <Stack.Screen
            options={{ title: "Gift Cards" }}
            name="GiftCard"
            component={GiftCardScreen}
          />
        </Stack.Group>

        <Stack.Screen name="GiftCardDetails" component={GiftCardDetails} />
        <Stack.Screen
          options={{ title: "GiftCardEasy" }}
          name="GiftCardEasy"
          component={GiftCardEasy}
        />
        {/* <Stack.Screen
          options={{ title: "GiftCardChoice" }}
          name="GiftCardChoice"
          component={GiftCardChoice}
        /> */}
        {/* <Stack.Screen
          options={{ title: "GiftCardFit" }}
          name="GiftCardFit"
          component={GiftCardFit}
        /> */}
        <Stack.Group
          screenOptions={(props) => ({
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <BackIcon
                  color={scheme == "light" ? "#000000" : "#ffffff"}
                  size={24}
                />
                <Text
                  style={{
                    fontSize: hp(16),
                    fontWeight: "600",
                    fontFamily: "Euclid-Circular-A",
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("GameCredit")}
              >
                <InfoIcon color={scheme === "dark" ? "#999999" : "#000000"} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor:
                scheme == "light"
                  ? Colors.light.background
                  : Colors.dark.background,
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
            },
          })}
        >
          <Stack.Screen
            options={{ title: "Game Credits" }}
            name="GameScreen"
            component={GameScreen}
          />
        </Stack.Group>

        <Stack.Screen
          options={{ headerShown: false }}
          name="GiftCardEmail"
          component={GiftCardEmail}
        />
        <Stack.Screen
          options={{ title: "Confirmation" }}
          name="GiftCardConfirmation"
          component={GiftCardConfirmation}
        />
        <Stack.Screen
          options={{ title: "Electricity" }}
          name="Electricity"
          component={ElectricityIndex}
        />
        <Stack.Screen
          options={{ title: "Cable TV" }}
          name="CableTV"
          component={CableTvIndex}
        />
        <Stack.Screen
          options={{ title: "Water" }}
          name="Water"
          component={WaterScreen}
        />
        <Stack.Group
          screenOptions={(props) => ({
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <BackIcon
                  color={scheme == "light" ? "#000000" : "#ffffff"}
                  size={24}
                />
                <Text
                  style={{
                    fontSize: hp(16),
                    fontWeight: "600",
                    fontFamily: "Euclid-Circular-A",
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("CharityFeature")}
              >
                <InfoIcon color={scheme === "dark" ? "#999999" : "#000000"} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor:
                scheme == "light"
                  ? Colors.light.background
                  : Colors.dark.background,
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
            },
          })}
        >
          <Stack.Screen name="Charity" component={CharityIndexScreen} />
        </Stack.Group>

        <Stack.Group
          screenOptions={(props) => ({
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <BackIcon
                  color={scheme == "light" ? "#000000" : "#ffffff"}
                  size={24}
                />
                <Text
                  style={{
                    fontSize: hp(16),
                    fontWeight: "600",
                    fontFamily: "Euclid-Circular-A",
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("GameCredit")}
              >
                <InfoIcon color={scheme === "dark" ? "#999999" : "#000000"} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor:
                scheme == "light"
                  ? Colors.light.background
                  : Colors.dark.background,
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
            },
          })}
        >
          <Stack.Screen
            options={{ title: "GameCredit" }}
            name="GameCredit"
            component={GameCredit}
          />
        </Stack.Group>
        {/* <Stack.Screen
          options={{ title: "GameCredit" }}
          name="GameFeature"
          component={GameFeature}
        /> */}
        {/* <Stack.Screen
          options={{ title: "CharitySupport" }}
          name="CharitySupport"
          component={CharitySupport}
        /> */}
        <Stack.Screen
          options={{ title: "CharityFeature" }}
          name="CharityFeature"
          component={CharityFeature}
        />
        <Stack.Screen
          options={({ route }: { route: any }) => ({
            title: route.params.name,
          })}
          name="CharityDetail"
          component={CharityTabs}
        />

        <Stack.Screen
          options={({ route }: { route: any }) => ({
            title: route.params.name,
          })}
          name="InternetPlanDetail"
          component={InternetDetail}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CompleteTransaction"
          component={StatusScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="PaymentRecurring"
          component={PaymentRecurring}
        />
        <Stack.Screen
          options={{ title: "Internet" }}
          name="InternetRecurring"
          component={InternetRecurring}
        />
        <Stack.Screen
          options={{ title: "Internet" }}
          name="RecurringPlan"
          component={RecurringPlan}
        />
        <Stack.Screen
          options={{ title: "Water" }}
          name="WaterRecurring"
          component={WaterRecurring}
        />
        <Stack.Screen
          options={{ title: "Cable" }}
          name="CableRecurring"
          component={CableRecurring}
        />
        <Stack.Screen
          options={{ title: "Electricity" }}
          name="ElectricityRecurring"
          component={ElectricityRecurring}
        />
      </Stack.Group>

      {/* Profile */}
      <Stack.Group>
        <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistoryScreen}
        />
        <Stack.Screen name="BankAccounts" component={BankAccountsScreen} />
        <Stack.Screen name="SelectBank" component={SelectBankScreen} />
        <Stack.Screen name="AddBankAccount" component={AddBankAccountScreen} />
        <Stack.Screen
          name="AddBankAccountConfirmation"
          component={AddBankAccountConfirmationScreen}
        />
        <Stack.Screen
          name="EditBankAccountDetails"
          component={EditBankAccountDetailsScreen}
        />
        <Stack.Screen
          name="DebitCreditCards"
          component={DebitCreditCardsScreen}
        />
        <Stack.Screen name="ManageCard" component={ManageCardScreen} />
        <Stack.Screen name="AddNewCard" component={AddNewCardScreen} />
        <Stack.Screen name="ScanCard" component={ScanCardScreen} />
      </Stack.Group>

      {/* Home menu */}
      <Stack.Group>
        <Stack.Screen name="Split" component={SplitScreen} />
        <Stack.Screen name="ChooseSplit" component={ChooseSplitScreen} />
        <Stack.Screen
          name="SplitSelectContacts"
          component={SplitSelectContactsScreen}
        />
        <Stack.Screen
          name="SplitEditContacts"
          component={SplitEditContactsScreen}
        />
        <Stack.Screen
          name="SplitEditContact"
          component={SplitEditContactScreen}
        />
        <Stack.Screen
          name="SplitConfirmation"
          component={SplitConfirmationScreen}
        />
        <Stack.Screen
          name="IncomingSplitRequests"
          component={IncomingSplitRequestsScreen}
        />
        <Stack.Screen
          name="IncomingSplitRequestAcceptance"
          component={IncomingSplitRequestAcceptanceScreen}
        />
        <Stack.Screen
          name="CompletedSplitRequestDetails"
          component={CompletedSplitRequestDetailsScreen}
        />

        <Stack.Screen
          name="OutgoingSplitRequests"
          component={OutgoingSplitRequestsScreen}
        />
        <Stack.Screen name="FeesAndLimits" component={FeesAndLimitsScreen} />
        <Stack.Screen name="MonthlySummary" component={MonthlySummaryScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="QRFeature" component={QRFeature} />

        <Stack.Group
        // screenOptions={(props) => ({
        //   headerTitleAlign: "center",
        //   headerLeft: () => (
        //     <TouchableOpacity
        //       onPress={() => props.navigation.goBack()}
        //       style={{
        //         flexDirection: "row",
        //         alignItems: "center",
        //       }}>
        //       <BackIcon
        //         color={scheme == "light" ? "#000000" : "#ffffff"}
        //         size={24}
        //       />
        //       <Text
        //         style={{
        //           fontSize: hp(16),
        //           fontWeight: "600",
        //           fontFamily: "Euclid-Circular-A",
        //         }}>
        //         Back
        //       </Text>
        //     </TouchableOpacity>
        //   ),

        //   headerStyle: {
        //     backgroundColor:
        //       scheme == "light"
        //         ? Colors.light.background
        //         : Colors.dark.background,
        //   },
        //   headerTransparent: true,
        //   headerTitleStyle: {
        //     fontSize: hp(16),
        //     fontWeight: "500",
        //     fontFamily: "Euclid-Circular-A-Medium",
        //   },

        //   headerRight: () => (
        //     <TouchableOpacity
        //       onPress={() => props.navigation.navigate("WithdrawFeature")}>
        //       <InfoIcon color={scheme === "dark" ? "#999999" : "#000000"} />
        //     </TouchableOpacity>
        //   ),
        >
          <Stack.Screen
            name="WithdrawDepositTabs"
            component={WithdrawDepositTabs}
          />
          <Stack.Screen component={DepositScreen} name="Deposit" />
        </Stack.Group>
      </Stack.Group>

      {/* transfer bottomsheet screens */}
      <Stack.Group>
        <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
        <Stack.Screen name="RequestMoney" component={RequestMoneyScreen} />
        <Stack.Screen
          name="SendMoneyConfirmation"
          component={SendMoneyConfirmationScreen}
        />
        <Stack.Screen
          name="RequestMoneyConfirmation"
          component={RequestMoneyConfirmationScreen}
        />
        <Stack.Screen
          name="RecurringTransfer"
          component={RecurringTransferScreen}
        />
        <Stack.Screen
          name="SelectNewRecurringTransfer"
          component={SelectNewRecurringTransferScreen}
        />
        <Stack.Screen
          name="SetupRecurringTransfer"
          component={SetupRecurringTransferScreen}
        />
        <Stack.Screen
          name="RecurringTransferConfirmation"
          component={RecurringTransferConfirmationScreen}
        />
        <Stack.Screen name="SendMoneyFeature" component={SendMoneyFeature} />
        {/* <Stack.Screen
          name="TransactionCertainty"
          component={TransactionCertainty}
        /> */}
        {/* <Stack.Screen name="InviteUsers" component={InviteUsers} /> */}
        <Stack.Screen
          name="RequestMoneyFeature"
          component={RequestMoneyFeature}
        />
        <Stack.Screen name="WithdrawFeature" component={WithdrawFeature} />
        <Stack.Screen name="DepositFeature" component={DepositFeature} />
        <Stack.Screen
          name="TermsOfUse"
          component={TermsOfUse}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
