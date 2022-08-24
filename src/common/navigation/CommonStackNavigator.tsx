import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import AddVault from "../../screens/tabs/vault/AddVault";
import ArchievedVault from "../../screens/tabs/vault/ArchievedVault";
import ConfirmDeleteVault from "../../screens/tabs/vault/ConfirmDeleteVault";
import DeleteVault from "../../screens/tabs/vault/DeleteVault";
import NewVault from "../../screens/tabs/vault/NewVault";
import VaultSuccessful from "../../screens/tabs/vault/VaultSuccessful";
import { CommonStackParamList } from "./types";

const Stack = createNativeStackNavigator<CommonStackParamList>();

const CommonStack = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BvnVerificationNavigator} name="BvnVerificationRoot" />
        <Stack.Screen options={{ headerShown: false }} component={NewVault} name="NewVault" />
        {/* <Stack.Screen
        options={{ headerShown: false }}
        name='VaultPassword'
        component={VaultPassword}
      /> */}
        <Stack.Screen options={{ headerShown: false }} name="DeleteVault" component={DeleteVault} />
        <Stack.Screen options={{ headerShown: false }} name="VaultSuccessful" component={VaultSuccessful} />
        <Stack.Screen options={{ headerShown: false }} name="AddVault" component={AddVault} />
        <Stack.Screen options={{ headerShown: false }} name="ConfirmDeleteVault" component={ConfirmDeleteVault} />

        <Stack.Screen options={{ headerShown: false }} name="ArchievedVault" component={ArchievedVault} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
