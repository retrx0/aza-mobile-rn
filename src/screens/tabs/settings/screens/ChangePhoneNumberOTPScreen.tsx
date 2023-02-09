import { StyleSheet } from "react-native";
import React, {  useState } from "react";

import { View as View, Text as Text } from "../../../../theme/Themed";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const ChangePhoneNumberOTPScreen = ({
  navigation,
}: CommonScreenProps<"ChangePhoneNumberOTP">) => {
  const [otp, setOTP] = useState("");

  useNavigationHeader(navigation, "OTP");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
            marginLeft: hp(20),
          }}
        >
          Please enter the OTP sent to your phone via SMS
        </Text>
        <View
          style={{
            marginBottom: 89,
            marginTop: 78,
            paddingHorizontal: hp(20),
          }}
        >
          <SegmentedInput
            value={otp}
            secureInput={false}
            headerText="OTP"
            onValueChanged={(pass) => setOTP(pass)}
          />
        </View>
        <Button
          title="Continue"
          onPressButton={() => navigation.getParent()?.navigate("Settings")}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(14),
          }}
          style={{}}
        />
      </View>
    </SpacerWrapper>
  );
};

export default ChangePhoneNumberOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
