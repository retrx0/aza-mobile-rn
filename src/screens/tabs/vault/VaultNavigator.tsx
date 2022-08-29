import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Vault from "./Vault";
import NewVault from "./NewVault";
import DeleteVault from "./DeleteVault";
import VaultSuccessful from "./VaultSuccessful";
import AddVault from "./AddVault";
import ConfirmDeleteVault from "./ConfirmDeleteVault";
// import ArchievedVault from "./ArchievedVault";
import VaultWithdraw from "./VaultwithdrawalConfirmation";
import VaultWithdrawsuccessful from "./VaultWithdrawSuccessful";
import VaultDetails from "./VaultDetails";
import VaultActivity from "./VaultActivity";
import { Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "../../../components/Themed";
import useColorScheme from "../../../hooks/useColorScheme";
import CommonStyles from "../../../common/styles/CommonStyles";

const VaultStack = createNativeStackNavigator<VaultStackProps>();
const Tab = createMaterialTopTabNavigator();

export type VaultStackProps = {
  Vault: undefined;
  newvault: undefined;
  vaultpassword: undefined;
  deleteVault: undefined;
  Vaultsuccessful: undefined;
  addVault: undefined;
  confirmDeleteVault: undefined;
  archievedVault: undefined;
  vaultWithdraw: undefined;
  vaultWithdrawsuccessful: undefined;
  VaultDetails: undefined;
  VaultActivity: undefined;
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
        initialRouteName='VaultDetails'>
        <Tab.Screen name='VaultDetails' component={VaultDetails} />
        <Tab.Screen name='VaultActivity' component={VaultDetails} />
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
        name='Vault'
        component={Vault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name='newvault'
        component={NewVault}
      />

      <VaultStack.Screen
        options={{ headerShown: false }}
        name='deleteVault'
        component={DeleteVault}
      />

      <VaultStack.Screen
        options={{ title: "Details & Activity" }}
        name='VaultDetails'
        component={VaultTabs}
      />

      <VaultStack.Screen
        options={{ headerShown: false }}
        name='Vaultsuccessful'
        component={VaultSuccessful}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name='addVault'
        component={AddVault}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name='confirmDeleteVault'
        component={ConfirmDeleteVault}
      />

      {/* <VaultStack.Screen
        options={{ headerShown: false }}
        name='archievedVault'
        component={ArchievedVault}
      /> */}
      <VaultStack.Screen
        options={{ headerShown: false }}
        name='vaultWithdraw'
        component={VaultWithdraw}
      />
      <VaultStack.Screen
        options={{ headerShown: false }}
        name='vaultWithdrawsuccessful'
        component={VaultWithdrawsuccessful}
      />
    </VaultStack.Navigator>
  );
};

export default VaultNavigator;
