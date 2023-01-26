import Colors from "../../../constants/Colors";
import { View, Text } from "../../../theme/Themed";

interface IProps {
  paid: boolean;
}

const SplitPaymentStatus = ({ paid }: IProps) => {
  return (
    <View
      style={{
        backgroundColor: paid ? Colors.general.green : "#A6A6A6",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
      }}
    >
      <Text style={{ color: "white", fontSize: 10 }}>
        {paid ? "Paid" : "Pending"}
      </Text>
    </View>
  );
};

export default SplitPaymentStatus;
