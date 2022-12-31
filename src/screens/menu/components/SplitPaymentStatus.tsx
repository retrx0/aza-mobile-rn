import { View } from "../../../theme/components/View";
import { Text } from "../../../theme/components/Text";

interface IProps {
  paid: boolean;
}

const SplitPaymentStatus = ({ paid }: IProps) => {
  return (
    <View
      style={{
        backgroundColor: paid ? "#2A9E17" : "#A6A6A6",
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
