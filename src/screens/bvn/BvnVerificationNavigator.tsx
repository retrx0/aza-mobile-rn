import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BvnVerificationStackParamList } from "../../common/navigation/types";
import BvnVerificationScreen from "./BvnVerificationScreen";

const BvnVerificationStack =
  createNativeStackNavigator<BvnVerificationStackParamList>();

const BvnVerificationNavigator = () => {
  return (
    <BvnVerificationStack.Navigator>
      <BvnVerificationStack.Screen
        component={BvnVerificationScreen}
        name="BvnVerificationScreen"
        options={() => ({ headerShadowVisible: false })}
      />
    </BvnVerificationStack.Navigator>
  );
};

export default BvnVerificationNavigator;
