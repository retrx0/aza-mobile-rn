import React, { useState } from "react";
import { Switch } from "react-native";
import { Text, View } from "../../../components/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import Button from "../../../components/buttons/Button";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";
import { SignUpScreenProps } from "../../../../types";

const SignUpPasswordScreen = ({ navigation, route }: SignUpScreenProps<"SignUpPassword">) => {
  const { passwordScreenType, password, usePasscodeAsPin } = route.params;
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isUsePasscodeAsPin, setIsEnabled] = useState(passwordScreenType === "Create" ? false : usePasscodeAsPin);
  const insets = useSafeAreaInsets();

  const colorScheme = useColorScheme();

  const [passcode, setPasscode] = useState("");

  const switchColor = Colors[colorScheme].backgroundSecondary;
  const switchOnColor = Colors[colorScheme].success;

  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>{passwordScreenType} Aza Password</Text>
      </View>
      <Text style={[CommonStyles.bodyText]}>The password will be used to access your account</Text>
      <SegmentedInput value={passcode} secureInput headerText="" onValueChanged={(code) => setPasscode(code)} />
      <View style={[CommonStyles.container, { bottom: hp(400) }]}>
        <View style={[CommonStyles.row]}>
          <Text style={[CommonStyles.transaction]}>Use as transaction pin?</Text>

          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isUsePasscodeAsPin ? "white" : "grey"}
            ios_backgroundColor={switchColor}
            onValueChange={toggleSwitch}
            value={isUsePasscodeAsPin}
            style={{
              marginLeft: hp(13),
            }}
          />
        </View>
        <Separator />
        <Button
          title="Continue"
          onPressButton={() => {
            if (passwordScreenType === "Create") {
              navigation.navigate("SignUpConfirmPassword", {
                passwordScreenType: "Confirm",
                password: passcode,
                usePasscodeAsPin: isUsePasscodeAsPin,
              });
            } else {
              if (passcode === password) {
                navigation.getParent()?.navigate("Root");
              } else {
                alert("Password does not match");
              }
            }
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
          }}
          style={[
            {
              backgroundColor: Colors[colorScheme].button,
              marginTop: 5,
            },
            CommonStyles.button,
          ]}
        />
      </View>
    </SpacerWrapper>
  );
};

const Separator = () => {
  return (
    <View lightColor={Colors.light.separator} darkColor={Colors.dark.separator} style={[CommonStyles.separator]} />
  );
};

export default SignUpPasswordScreen;
