import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {PaymentsStackParamList} from "../../types";
import PaymentIndexScreen from "../screens/payments/PaymentIndexScreen";

const Stack = createNativeStackNavigator<PaymentsStackParamList>();

const PaymentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
     headerShown:false   
    }}>
      <Stack.Screen name="PaymentIndex" component={PaymentIndexScreen}/>

    </Stack.Navigator>
  );
};

export default PaymentNavigator;