import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import StatusScreen from "../../screens/bvn/StatusScreen";
import { CommonStackParamList } from "./types";

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
    </Stack.Navigator>
  );
};

export default CommonStack;
