import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, TouchableOpacity } from "react-native";
import { BackIcon } from "../../../../assets/svg";
import Vault from "./Vault";
import NewVault from "./NewVault";
// import VaultPassword from "./VaultPassword";
import DeleteVault from "./DeleteVault";
import VaultSuccessful from "./VaultSuccessful";
import AddVault from "./AddVault";
import ConfirmDeleteVault from "./ConfirmDeleteVault";
import ArchievedVault from "./ArchievedVault";

const VaultStack = createNativeStackNavigator<VaultStackProps>();

export type VaultStackProps = {
  Vault: undefined;
  newvault: undefined;
  vaultpassword: undefined;
  deleteVault: undefined;
  Vaultsuccessful: undefined;
  addVault: undefined;
  confirmDeleteVault: undefined;
  archievedVault: undefined;
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
      {/* <VaultStack.Screen
        options={{ headerShown: false }}
        name='vaultpassword'
        component={VaultPassword}
      /> */}
      <VaultStack.Screen
        options={{ headerShown: false }}
        name='deleteVault'
        component={DeleteVault}
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

      <VaultStack.Screen
        options={{ headerShown: false }}
        name='archievedVault'
        component={ArchievedVault}
      />
    </VaultStack.Navigator>
  );
};

export default VaultNavigator;
