import { StyleSheet } from "react-native";

import { View as View, Text as Text } from "../../../../theme/Themed";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../../../assets/svg";
import ThirdPartyAuthButtons from "../../../auth/common/ThirdPartyAuthButtons";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const LoginOptionsScreen = ({
  navigation,
}: CommonScreenProps<"LoginOptions">) => { 

  useNavigationHeader(navigation, "Login Options");

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
