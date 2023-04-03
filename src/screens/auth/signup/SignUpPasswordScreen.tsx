import React, { useState } from "react";
import { Platform } from "react-native";
import { View as View, Text as Text } from "../../../theme/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import Button from "../../../components/buttons/Button";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { hp } from "../../../common/util/LayoutUtil";
import { SignUpScreenProps } from "../../../../types";
import { Separator } from "../../../components/divider/Separator";
import useSignUp from "./hooks/useSignUp";

const SignUpPasswordScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpPassword" | "SignUpConfirmPassword">) => {
  const { passwordScreenType } = route.params;
  const [passcode, setPasscode] = useState("");
  const { handleSignUp, loading, isConfirmScreen } = useSignUp();

  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>
          {passwordScreenType} Aza Password
        </Text>
      </View>
      <Text style={[CommonStyles.bodyText]}>
        The password will be used to access your account
      </Text>
      <View
        style={{
          marginTop: hp(20),
          paddingHorizontal: hp(20),
          marginBottom: hp(100),
        }}
      >
        <SegmentedInput
          value={passcode}
          secureInput
          headerText=""
          onValueChanged={(code) => setPasscode(code)}
        />
      </View>
      <View
        style={[
          CommonStyles.container,
          { bottom: hp(Platform.OS == "android" ? 300 : 400) },
        ]}
      >
        <View style={[CommonStyles.row]}>
          {/* <Text style={[CommonStyles.transaction]}>
            Use as transaction pin?
          </Text> */}
          {/* <Switch
            trackColor={{
              false: Colors.general.tertiary,
              true: Colors.general.green,
            }}
            thumbColor={isUsePasscodeAsPin ? "white" : "grey"}
            ios_backgroundColor={Colors.general.tertiary}
            onValueChange={toggleSwitch}
            value={isUsePasscodeAsPin}
            style={{
              marginLeft: hp(13),
            }}
          /> */}
        </View>
        <Separator />
        <Button
          title="Continue"
          onPressButton={() => handleSignUp(passcode, { navigation, route })}
          style={[
            {
              marginTop: 5,
              width: "100%",
            },
            CommonStyles.button,
          ]}
          buttonLoading={isConfirmScreen && loading}
          disabled={passcode.length < 6 ? true : false}
        />
      </View>
    </SpacerWrapper>
  );
};

export default SignUpPasswordScreen;
