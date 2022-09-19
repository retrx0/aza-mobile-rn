import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Platform } from "react-native";

import { AirtimeTabs, CharityTabs } from "../../navigation/PaymensNavigation";

// Vault
import AddVault from "../../screens/tabs/vault/AddVault";
import ConfirmDeleteVault from "../../screens/tabs/vault/ConfirmDeleteVault";
import NewVault from "../../screens/tabs/vault/NewVault";
import VaultActivity from "../../screens/tabs/vault/withdraw-to-aza/VaultActivity";
import VaultDetails from "../../screens/tabs/vault/withdraw-to-aza/VaultDetails";
import VaultSuccessful from "../../screens/tabs/vault/VaultSuccessful";
import VaultWithdrawsuccessful from "../../screens/tabs/vault/withdraw-to-aza/VaultWithdrawSuccessful";
import VaultToBank from "../../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBank";
import VaultWithdrawConfirmation from "../../screens/tabs/vault/withdraw-to-bank/VaultWithdrawToBankConfirmation";
import VaultToBankSuccessful from "../../screens/tabs/vault/withdraw-to-bank/VaultToBankSuccessful";
import VaultToAza from "../../screens/tabs/vault/withdraw-to-aza/VaultwithdrawalConfirmation";
import LockVault from "../../screens/tabs/vault/LockVault";
import ArchievedVault from "../../screens/tabs/vault/ArchievedVault";

import { CommonStackParamList } from "./types";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../../components/Themed";
import CommonStyles from "../styles/CommonStyles";
import BackButton from "../../components/buttons/BackButton";
import SpacerWrapper from "../util/SpacerWrapper";
import Colors from "../../constants/Colors";
import { BackIcon } from "../../../assets/svg";

import StatusScreen from "../../screens/status/StatusScreen";

// settings
import ChangePasswordScreen from "../../screens/tabs/settings/screens/ChangePasswordScreen";
import NewPasswordScreen from "../../screens/tabs/settings/screens/NewPasswordScreen";
import ChangePhoneNumberScreen from "../../screens/tabs/settings/screens/ChangePhoneNumberScreen";
import ChangePhoneNumberOTPScreen from "../../screens/tabs/settings/screens/ChangePhoneNumberOTPScreen";
import ChangeEmailScreen from "../../screens/tabs/settings/screens/ChangeEmailScreen";
import PrivacySettingsScreen from "../../screens/tabs/settings/screens/PrivacySettingsScreen";
import NameVisibilityScreen from "../../screens/tabs/settings/screens/NameVisibilityScreen";
import ContactsVisibilityScreen from "../../screens/tabs/settings/screens/ContactsVisibilityScreen";
import SplitAndMoneyRequestsScreen from "../../screens/tabs/settings/screens/SplitAndMoneyRequests";
import BlockUsersScreen from "../../screens/tabs/settings/screens/BlockUsersScreen";
import NotificationSettingsScreen from "../../screens/tabs/settings/screens/NotificationSettingsScreen";
import LoginWithFaceIdScreen from "../../screens/tabs/settings/screens/LoginWithFaceIdScreen";
import LoginOptionsScreen from "../../screens/tabs/settings/screens/LoginOptionsScreen";
import AppearanceScreen from "../../screens/tabs/settings/screens/AppearanceScreen";
import AppLanguageScreen from "../../screens/tabs/settings/screens/AppLanguageScreen";
import BlockNewUserScreen from "../../screens/tabs/settings/screens/BlockNewUserScreen";

// Payments
import Pie from "../../screens/tabs/payments/Pie";
import InternetPlans from "../../screens/tabs/payments/internet-screens/InternetPlans";
import ElectricityIndex from "../../screens/tabs/payments/electricity-screens/ElectricityIndex";
import CableTvIndex from "../../screens/tabs/payments/cable-tv-screens/CableTvIndex";
import WaterScreen from "../../screens/tabs/payments/water-screens/WaterScreen";
import CharityIndexScreen from "../../screens/tabs/payments/charity-screens/CharityIndexScreen";
import InternetDetail from "../../screens/tabs/payments/internet-screens/InternetDetail";
import ConfirmTransaction from "../../screens/tabs/payments/ConfirmTransaction";

// Profile
import AccountDetailsScreen from "../../screens/tabs/profile/screens/AccountDetailsScreen";
import TransactionHistoryScreen from "../../screens/tabs/profile/screens/TransactionHistoryScreen";
import BankAccountsScreen from "../../screens/tabs/profile/screens/BankAccountsScreen";
import SelectBankScreen from "../../screens/tabs/profile/screens/SelectBankScreen";
import AddBankAccountScreen from "../../screens/tabs/profile/screens/AddBankAccountScreen";
import AddBankAccountConfirmationScreen from "../../screens/tabs/profile/screens/AddBankAccountConfirmationScreen";
import DebitCreditCardsScreen from "../../screens/tabs/profile/screens/DebitCreditCardsScreen";
import ManageCardScreen from "../../screens/tabs/profile/screens/ManageCardScreen";
import AddNewCardScreen from "../../screens/tabs/profile/screens/AddNewCardScreen";
import ScanCardScreen from "../../screens/tabs/profile/screens/ScanCardScreen";

//bvn
import BvnVerificationScreen from "../../screens/bvn/BvnVerificationScreen";

// Home menu
import SplitScreen from "../../screens/menu/SplitScreen";
import ChooseSplitScreen from "../../screens/menu/ChooseSplitScreen";
import SplitSelectContactsScreen from "../../screens/menu/SplitSelectContactsScreen";
import SplitEditContactsScreen from "../../screens/menu/SplitEditContactsScreen";
import SplitEditContactScreen from "../../screens/menu/SplitEditContactScreen";
import SplitConfirmationScreen from "../../screens/menu/SplitConfirmationScreen";
import IncomingSplitRequestsScreen from "../../screens/menu/IncomingSplitRequestsScreen";
import IncomingSplitRequestAcceptanceScreen from "../../screens/menu/IncomingSplitRequestAcceptanceScreen";
import CompletedSplitRequestDetailsScreen from "../../screens/menu/CompletedSplitRequestDetailsScreen";
import OutgoingSplitRequestsScreen from "../../screens/menu/OutgoingSplitRequestsScreen";
import MonthlySummaryScreen from "../../screens/menu/MonthlySummaryScreen";
import FeesAndLimitsScreen from "../../screens/menu/FeesAndLimitsScreen";

const Stack = createNativeStackNavigator<CommonStackParamList>();
const Tab = createMaterialTopTabNavigator<CommonStackParamList>();

export const TopBar = ({ navigation }: { navigation: any }) => {
  const scheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.topTab]}>
        <View style={{ marginLeft: 20 }}>
          <BackButton
            onPress={() => {
              navigation.getParent()?.navigate("AddVault");
            }}
          />
        </View>
        <Text style={CommonStyles.vaultTab}>Vault</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
            borderColor: scheme == "light" ? "#000000" : "#ffffff",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
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
  const scheme = useColorScheme();
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen
          component={BvnVerificationScreen}
          name="BvnVerification"
        />
      </Stack.Group>

      {/* status screen */}
      <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <Stack.Screen
          component={StatusScreen}
          name="StatusScreen"
          options={() => ({ headerShown: false })}
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
      </Stack.Group>

      {/* Payments */}

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
              <Text style={{ marginLeft: 5 }}>Back</Text>
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
            fontSize: 16,
            fontWeight: "600",
          },
        })}
      >
        <Stack.Screen
          options={{ title: "Airtime & Data" }}
          name="AirtimeData"
          component={AirtimeTabs}
        />
        <Stack.Screen
          options={{ presentation: "fullScreenModal", title: "" }}
          name="Pie"
          component={Pie}
        />
        <Stack.Screen
          options={{ title: "Confirmation" }}
          name="Confirm"
          component={ConfirmTransaction}
        />
        <Stack.Screen
          options={{ title: "Internet" }}
          name="InternetPlans"
          component={InternetPlans}
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
        <Stack.Screen name="Charity" component={CharityIndexScreen} />
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
