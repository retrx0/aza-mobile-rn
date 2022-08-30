import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import { CommonStackParamList } from "./types";

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

const Stack = createNativeStackNavigator<CommonStackParamList>();

const CommonStack = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={BvnVerificationNavigator}
          name="BvnVerificationRoot"
        />
        <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
          <Stack.Screen
            component={StatusScreen}
            name="StatusScreen"
            options={() => ({ headerShown: false })}
          />
        </Stack.Group>
      </Stack.Group>
      
      {/* Settings */}
      <Stack.Group>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumberScreen} />
        <Stack.Screen name="ChangePhoneNumberOTP" component={ChangePhoneNumberOTPScreen} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} />
        <Stack.Screen name="PrivacySettings" component={PrivacySettingsScreen} />
        <Stack.Screen name="NameVisibility" component={NameVisibilityScreen} />
        <Stack.Screen name="ContactVisibility" component={ContactsVisibilityScreen} />
        <Stack.Screen name="SplitAndMoneyRequests" component={SplitAndMoneyRequestsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
