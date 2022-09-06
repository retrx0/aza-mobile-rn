import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import AddVault from "../../screens/tabs/Vault/AddVault";
import ConfirmDeleteVault from "../../screens/tabs/Vault/ConfirmDeleteVault";
import DeleteVault from "../../screens/tabs/Vault/LockVault";
import NewVault from "../../screens/tabs/Vault/NewVault";
import VaultActivity from "../../screens/tabs/Vault/withdrawToAza/VaultActivity";
import VaultDetails from "../../screens/tabs/Vault/withdrawToAza/VaultDetails";
import VaultSuccessful from "../../screens/tabs/Vault/VaultSuccessful";
import VaultWithdrawsuccessful from "../../screens/tabs/Vault/withdrawToAza/VaultWithdrawSuccessful";
import { CommonStackParamList } from "./types";
import { Platform } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../../components/Themed";
import CommonStyles from "../styles/CommonStyles";
import BackButton from "../../components/buttons/BackButton";
import SpacerWrapper from "../util/SpacerWrapper";
import VaulToBank from "../../screens/tabs/Vault/withdrawToBank/VaultWithdrawToBank";
import VaultWithdrawConfirmation from "../../screens/tabs/Vault/withdrawToBank/VaultWithdrawToBankConfirmation";
import VaultToAza from "../../screens/tabs/Vault/withdrawToAza/VaultwithdrawalConfirmation";
import VaultToBankSuccessfull from "../../screens/tabs/Vault/withdrawToBank/VaultToBankSuccessful";
import TransactionHistory from "../../screens/tabs/Vault/TransactionHistory";
import LockVault from "../../screens/tabs/Vault/LockVault";
import ArchievedVault from "../../screens/tabs/Vault/ArchievedVault";

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
        initialRouteName='details'>
        <Tab.Screen component={VaultDetails} name='details' />
        <Tab.Screen component={VaultActivity} name='activity' />
      </Tab.Navigator>
    </SpacerWrapper>
  );
};

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
          name='LockVault'
          component={LockVault}
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
        <Stack.Screen
          options={{ headerShown: false }}
          name='VaulToBank'
          component={VaulToBank}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultToAza'
          component={VaultToAza}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='ArchievedVault'
          component={ArchievedVault}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultWithdrawsuccessful'
          component={VaultWithdrawsuccessful}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name='TopBar'
          component={TopBar}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultWithdrawConfirmation'
          component={VaultWithdrawConfirmation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='VaultToBankSuccessfull'
          component={VaultToBankSuccessfull}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='TransactionHistory'
          component={TransactionHistory}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
