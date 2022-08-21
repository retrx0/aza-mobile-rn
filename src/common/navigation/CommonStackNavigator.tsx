import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BvnVerificationNavigator from "../../screens/bvn/BvnVerificationNavigator";
import { CommonStackParamList } from "./types";

const Stack = createNativeStackNavigator<CommonStackParamList>();

const CommonStack = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BvnVerificationNavigator} name="BvnVerificationRoot" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommonStack;
