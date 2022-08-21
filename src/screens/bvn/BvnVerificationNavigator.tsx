import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BvnVerificationStackParamList } from "../../common/navigation/types";
import BvnVerificationScreen from "./BvnVerificationScreen";
import BvnVerificationSuccess from "./BvnVerificationSuccess";

const BvnVerificationStack = createNativeStackNavigator<BvnVerificationStackParamList>();

const BvnVerificationNavigator = () => {
  return (
    <BvnVerificationStack.Navigator>
      <BvnVerificationStack.Screen
        component={BvnVerificationScreen}
        name="BvnVerificationScreen"
        options={() => ({ headerShadowVisible: false })}
      />
      <BvnVerificationStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <BvnVerificationStack.Screen
          component={BvnVerificationSuccess}
          name="BvnVerificationSuccess"
          options={() => ({ headerShown: false })}
        />
      </BvnVerificationStack.Group>
    </BvnVerificationStack.Navigator>
  );
};

export default BvnVerificationNavigator;
