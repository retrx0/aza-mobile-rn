import React, { useState } from "react";
import { Switch } from "react-native";
import { Text, View } from "../../../components/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import Button from "../../../components/buttons/Button";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignUpStackProps } from "./SignUpNavigator";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";

const SignUpPasswordScreen = ({ navigation, route }: NativeStackScreenProps<SignUpStackProps>) => {
  const { passWordScreenType }: any = route.params;
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const insets = useSafeAreaInsets();

  const colorScheme = useColorScheme();

  const switchColor = Colors[colorScheme].backgroundSecondary;
  const switchOnColor = Colors[colorScheme].success;

  return (
    <SpacerWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <Text style={[CommonStyles.headerText]}>{passWordScreenType} AZA Passcode</Text>
      <Text style={[CommonStyles.bodyText]}>The passcode will be used to access your account</Text>
      <SegmentedInput value={"1221221"} secureInput headerText="" onValueChanged={(): void => {}} />
      <View style={[CommonStyles.container, { bottom: insets.bottom || hp(15) }]}>
        <View style={[CommonStyles.row]}>
          <Text style={{ marginRight: 20 }}>Use as transaction pin?</Text>
          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isEnabled ? "white" : "grey"}
            ios_backgroundColor={switchColor}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Separator />
        <Button
          title="Continue"
          style={{}}
          styleText={{}}
          onPressButton={() => {
            passWordScreenType === "Create"
              ? navigation.navigate("SignUpConfirmPassword")
              : navigation.getParent()?.navigate("Root");
          }}
        />
      </View>
    </SpacerWrapper>
  );
};

const Separator = () => {
  return (
    <View lightColor={Colors.light.separator} darkColor={Colors.dark.separator} style={[CommonStyles.separator]}></View>
  );
};

export default SignUpPasswordScreen;
