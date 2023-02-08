import { CommonScreenProps } from "../../../common/navigation/types";

import { View, Text } from "../../../theme/Themed";
import Button from "../../../components/buttons/Button";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { UndrawCalendarIcon } from "../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useNavigationHeader from "../../../hooks/useNavigationHeader";

const RecurringTransferScreen = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const insets = useSafeAreaInsets();

  useNavigationHeader(navigation, "Recurring Money Transfer");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text style={[CommonStyles.descriptionStyle, { marginLeft: 20 }]}>
          You can add and edit daily, weekly and monthly recurring money
          transfer orders.
        </Text>

        <View style={{ marginTop: hp(100), alignSelf: "center" }}>
          <UndrawCalendarIcon color={Colors.general.grey} size={30} />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="New Recurring Transfer"
            onPressButton={() =>
              navigation.navigate("SelectNewRecurringTransfer")
            }
            styleText={{}}
            style={[]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default RecurringTransferScreen;
