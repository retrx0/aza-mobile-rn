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
import { darkGrey, Primary, white } from "../../../common/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/utils";

const SignUpPasswordScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<SignUpStackProps>) => {
  const { passWordScreenType }: any = route.params;
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <Text style={[CommonStyles.headerText]}>
        {passWordScreenType} AZA Passcode
      </Text>
      <Text style={[CommonStyles.bodyText]}>
        The passcode will be used to access your account
      </Text>
      <SegmentedInput
        value={"1221221"}
        secureInput
        headerText=''
        onValueChanged={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <View
        style={[CommonStyles.container, { bottom: insets.bottom || hp(15) }]}>
        <View style={[CommonStyles.row]}>
          <Text style={{ marginRight: 20 }}>Use as transaction pin?</Text>
          <Switch
            trackColor={{ false: white, true: white }}
            thumbColor={isEnabled ? darkGrey : "white"}
            ios_backgroundColor={white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Separator />
        <Button
          title='Continue'
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
    <View
      lightColor={Colors.light.separator}
      darkColor={Colors.dark.separator}
      style={[CommonStyles.separator]}></View>
  );
};

export default SignUpPasswordScreen;
