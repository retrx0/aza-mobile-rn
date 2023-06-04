import { TouchableOpacity } from "react-native";
import { IBankAccount } from "../../types/types.redux";
import { Text, View } from "../../theme/Themed";
import Divider from "../../components/divider/Divider";
import { hp } from "../../common/util/LayoutUtil";

const BeneficiaryBankAccountListItem = ({
  bankAccount,
  onPress,
}: {
  bankAccount: IBankAccount;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ margin: 10, padding: 5 }}>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            marginTop: hp(10),
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          {bankAccount.accountName}
        </Text>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            marginTop: hp(10),
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          {bankAccount.bankName}
        </Text>
        <Text>{bankAccount.accountNumber}</Text>
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

export default BeneficiaryBankAccountListItem;
