import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import AddVault from "../../screens/tabs/Vault/AddVault";
// import ArchievedVault from "../../screens/tabs/Vault/ArchievedVault";
import ConfirmDeleteVault from "../../screens/tabs/Vault/ConfirmDeleteVault";
import DeleteVault from "../../screens/tabs/Vault/DeleteVault";
import NewVault from "../../screens/tabs/Vault/NewVault";
import VaultSuccessful from "../../screens/tabs/Vault/VaultSuccessful";
import VaultWithdraw from "../../screens/tabs/Vault/VaultwithdrawalConfirmation";
import VaultWithdrawsuccessful from "../../screens/tabs/Vault/VaultWithdrawSuccessful";
import { CommonStackParamList } from "./types";

const Stack = createNativeStackNavigator<CommonStackParamList>();

const CommonStack = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={BvnVerificationNavigator}
          name='BvnVerificationRoot'
        />

        <Stack.Screen component={NewVault} name='NewVault' />

        <Stack.Screen
          options={{ headerShown: false }}
          name='DeleteVault'
          component={DeleteVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultSuccessful'
          component={VaultSuccessful}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='AddVault'
          component={AddVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='ConfirmDeleteVault'
          component={ConfirmDeleteVault}
        />

        {/* <Stack.Screen
          options={{ headerShown: false }}
          name='ArchievedVault'
          component={ArchievedVault}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultWithdraw'
          component={VaultWithdraw}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultWithdrawsuccessful'
          component={VaultWithdrawsuccessful}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
