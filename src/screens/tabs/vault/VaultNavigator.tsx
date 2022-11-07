import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Vault from "./Vault";
import NewVault from "./NewVault";
import AddVault from "./AddVault";
import ConfirmDeleteVault from "./ConfirmDeleteVault";
import VaultWithdrawsuccessful from "./withdraw-to-aza/VaultWithdrawSuccessful";
import VaultDetails from "./withdraw-to-aza/VaultDetails";
import VaultActivity from "./withdraw-to-aza/VaultActivity";
import { Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "../../../components/Themed";
import useColorScheme from "../../../hooks/useColorScheme";
import CommonStyles from "../../../common/styles/CommonStyles";
import VaulToBank from "./withdraw-to-bank/VaultWithdrawToBank";
import VaultWithdrawConfirmation from "./withdraw-to-bank/VaultWithdrawToBankConfirmation";
import VaultToAza from "./withdraw-to-aza/VaultwithdrawalConfirmation";
import VaultToBankSuccessfull from "./withdraw-to-bank/VaultToBankSuccessful";
import MaturedVault from "./withdraw-to-aza/MaturedVault";
import UnMatureVault from "./withdraw-to-aza/UnMatureVault";
import LockVault from "./LockVault";
import ArchievedVault from "./ArchievedVault";
import AddCoverImage from "./AddCoverImage";
import NewUserVault from "./NewUserVault";
import AddCoverImageSuccessful from "./SetVaultGoal";
import ConfirmGoal from "./GoalConfirmation";

const VaultStack = createNativeStackNavigator<VaultStackProps>();
const Tab = createMaterialTopTabNavigator();

export type VaultStackProps = {
  Vault: undefined;
  newvault: undefined;
  vaultpassword: undefined;
  lockVault: undefined;
  Vaultsuccessful: undefined;
  addVault: undefined;
  confirmDeleteVault: undefined;
  archievedVault: undefined;
  vaultToAza: undefined;
  vaultWithdrawsuccessful: undefined;
  VaultDetails: undefined;
  VaultActivity: undefined;
  vaultToBank: undefined;
  vaultWithdrawConfirmation: undefined;
  vaultToBankSuccessfull: undefined;
  unMatureVault: undefined;
  maturedVault: undefined;
  NewUserVault: undefined;
  AddCoverImage: undefined;
  AddCoverImageSuccessful: undefined;
  ConfirmGoal: undefined;
  UserVault: undefined;
  VaultRecurringTranser: undefined;
  VaultRecurringAmount: undefined;
  RecurringMoneyConfirmationScreen: undefined;
};

export const VaultTabs = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={CommonStyles.parentContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth: 2,
            borderColor: scheme == "light" ? "red" : "black",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
          },
        }}
        initialRouteName="VaultDetails">
        <Tab.Screen name="VaultDetails" component={VaultDetails} />
        <Tab.Screen name="VaultActivity" component={VaultActivity} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const VaultNavigator = () => {
  return (
    <VaultStack.Navigator>
      <VaultStack.Screen
        options={{
          headerShown: false,
        }}
        name="Vault"
        component={Vault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="newvault"
        component={NewVault}
      />

      <VaultStack.Screen
        options={{ headerShown: false }}
        name="lockVault"
        component={LockVault}
      />

      <VaultStack.Screen
        options={{ title: "Details & Activity" }}
        name="VaultDetails"
        component={VaultTabs}
      />

      <VaultStack.Screen
        options={{ headerShown: false }}
        name="vaultToBankSuccessfull"
        component={VaultToBankSuccessfull}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="addVault"
        component={AddVault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="confirmDeleteVault"
        component={ConfirmDeleteVault}
      />

      <VaultStack.Screen
        options={{ headerShown: false }}
        name="archievedVault"
        component={ArchievedVault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="vaultToAza"
        component={VaultToAza}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="vaultWithdrawsuccessful"
        component={VaultWithdrawsuccessful}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="vaultToBank"
        component={VaulToBank}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="vaultWithdrawConfirmation"
        component={VaultWithdrawConfirmation}
      />

      <VaultStack.Screen
        options={{ headerShown: false }}
        name="maturedVault"
        component={MaturedVault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="unMatureVault"
        component={UnMatureVault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="AddCoverImage"
        component={AddCoverImage}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="NewUserVault"
        component={NewUserVault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="AddCoverImageSuccessful"
        component={AddCoverImageSuccessful}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name="ConfirmGoal"
        component={ConfirmGoal}
      />
    </VaultStack.Navigator>
  );
};

export default VaultNavigator;
