import React, { useEffect, useState } from "react";
import { SigninStyles as styles } from "./styles";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../types/types.navigation";
import { View, Text } from "../../../theme/Themed";
import { AppState, Image, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";
import ActivityModal from "../../../components/modal/ActivityModal";
import { forgetUser } from "./helpers";
import useSignIn from "./hooks/useSignIn";
import CommonStyles from "../../../common/styles/CommonStyles";

const SignInWelcomeBackScreen = ({
  navigation,
  route,
}: SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);

  const [passcode, setPasscode] = useState("");

  const {
    handleSignBack,
    verifyPassword,
    screenLoading,
    handleForgotPassword,
  } = useSignIn();

  useEffect(() => {
    setPasscode("");
    if (route.params.clearPasswordInput) setPasscode("");
    handleSignBack({ navigation, route });
    const appStateListener = AppState.addEventListener("change", (appState) => {
      if (appState === "background") setPasscode("");
    });
    return () => {
      appStateListener.remove();
    };
  }, []);

  return (
    <SpacerWrapper>
      <HideKeyboardOnTouch>
        <View>
          <Text style={styles.welcome}>
            Welcome back, {user.fullName.split(",")[1]}
          </Text>
          <Text style={styles.sentCode}>Enter your Aza password to login</Text>
          {/* <View style={[CommonStyles.row]}>
            <View>

            </View>

            <Image
              source={{ uri: user.pictureUrl }}
              style={{ width: 50, height: 50 }}
            />
          </View> */}

          <View
            style={{
              marginTop: hp(20),
              paddingHorizontal: hp(20),
              marginBottom: hp(100),
            }}
          >
            <SegmentedInput
              value={passcode}
              onValueChanged={(code) => {
                setPasscode(code);
                if (code.length > 5 && code.length === 6 && code.length < 7)
                  setTimeout(
                    () =>
                      verifyPassword(
                        user.emailAddress,
                        user.phoneNumber,
                        code,
                        user.fullName,
                        { navigation, route }
                      ),
                    100
                  );
              }}
              headerText="Password"
              secureInput={true}
              autoFocusOnLoad
              withKeypad
              isLoading={screenLoading}
              forgetPasswordOption
              onForgotPassword={() =>
                handleForgotPassword({ navigation, route })
              }
            />
          </View>
          <View
            style={[{ alignSelf: "center", bottom: insets.bottom || hp(15) }]}
          >
            <TouchableOpacity onPress={() => forgetUser(navigation)}>
              <Text style={styles.welcomeForgetMeButton}>Forget Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </HideKeyboardOnTouch>
      {/* <ActivityModal loading={screenLoading} /> */}
    </SpacerWrapper>
  );
};

export default SignInWelcomeBackScreen;
