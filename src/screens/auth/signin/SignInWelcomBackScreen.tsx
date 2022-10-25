import React, { useEffect } from "react";
import { SigninStyles as styles } from "./styles";
import Button from "../../../components/buttons/Button";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../../types";
import { View, Text } from "../../../components/Themed";
import { UserData } from "../../../constants/userData";
import api from "../../../api";
import { TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";

type WelcomeOTProp = {
  otpCode: string;
};

const verifyPasscode = (code: string, navigation: any) => {
  if (code.length === 6) {
    console.log("verifying passcode...");
    navigation.navigate("Root");
  }
};

const forgetUser = (navigation: any) => {
  console.log("forgetting user...");
  SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN, {
    requireAuthentication: true,
  })
    .then(() => {
      navigation.navigate("Welcome");
    })
    .catch((e) => console.log(e));
};

const SignInWelcomeBackScreen = ({
  otpCode,
  navigation,
}: WelcomeOTProp & SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to open AZA",
    }).then((result) => {
      console.log(result.success);
    });
  }, []);

  return (
    <SpacerWrapper>
      <Text style={styles.welcome}>Welcome back, {UserData.userFullName}</Text>
      <Text style={styles.sentCode}>Enter your Aza password to login</Text>
      <SegmentedInput
        value={otpCode}
        onValueChanged={(code) => verifyPasscode(code, navigation)}
        headerText="Password"
        secureInput={true}
      />
      <View style={[{ alignSelf: "center", bottom: insets.bottom || hp(15) }]}>
        <TouchableOpacity onPress={() => forgetUser(navigation)}>
          <Text style={styles.welcomeForgetMeButton}>Forget Me</Text>
        </TouchableOpacity>
      </View>
    </SpacerWrapper>
  );
};

export default SignInWelcomeBackScreen;
