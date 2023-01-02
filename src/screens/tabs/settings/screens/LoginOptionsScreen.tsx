import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View as View, Text as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import ButtonLg from "../../../../components/buttons/ButtonLg";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../../../assets/svg";
import ThirdPartyAuthButtons from "../../../auth/common/ThirdPartyAuthButtons";

const LoginOptionsScreen = ({
  navigation,
}: CommonScreenProps<"LoginOptions">) => {
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
          Login Options
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
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: hp(23),
            marginTop: hp(30),
          }}
        >
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          >
            Login quickly by connecting your Aza account to your social media
            account.
          </Text>
        </View>
        <View style={{ marginTop: 330 }}>
          <ThirdPartyAuthButtons
            onValidated={function (email: string): void {
              throw new Error("Function not implemented.");
            }}
            authType={"signup"}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default LoginOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
