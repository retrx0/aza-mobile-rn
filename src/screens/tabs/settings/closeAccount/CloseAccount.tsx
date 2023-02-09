import { View, Text } from "../../../../theme/Themed";

import Button from "../../../../components/buttons/Button";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const CloseAccount = ({ navigation }: CommonScreenProps<"Common">) => {
  const insets = useSafeAreaInsets();

  useNavigationHeader(navigation, "Close Account");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              marginTop: hp(280),
              alignSelf: "center",
              fontSize: hp(70),
              marginBottom: hp(20),
            }}
          >
            😔
          </Text>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(24),
              fontWeight: "500",
              maxWidth: wp(350),
              alignSelf: "center",
            }}
          >
            We're sad to see you go
          </Text>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                statusMessage: "You have successfully closed your Aza account",
                navigateTo: "AccountClosureSurveyScreen",
              })
            }
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default CloseAccount;
