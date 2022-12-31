import { StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View2 as View, Text2 as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import Button from "../../../../components/buttons/Button";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

const ChangePhoneNumberOTPScreen = ({
  navigation,
}: CommonScreenProps<"ChangePhoneNumberOTP">) => {
  const [otp, setOTP] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          OTP
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

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
