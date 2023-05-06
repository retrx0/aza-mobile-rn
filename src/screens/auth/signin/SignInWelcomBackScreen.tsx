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
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../constants/Colors";
import ProfilePictureView from "../../../components/views/ProfilePictureView";
import { FaceIdIcon } from "../../../../assets/svg";
import * as LocalAuthentication from "expo-local-authentication";

const SignInWelcomeBackScreen = ({
  navigation,
  route,
}: SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);

  const [passcode, setPasscode] = useState("");
  const [biometricEnrolled, setBiometricEnrolled] = useState(false);

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

    LocalAuthentication.isEnrolledAsync()
      .then((e) => setBiometricEnrolled(e))
      .catch((e) => {});
    return () => {
      appStateListener.remove();
    };
  }, []);

  return (
    <SpacerWrapper>
      <HideKeyboardOnTouch>
        <View>
          <View
            style={[
              CommonStyles.row,
              { alignSelf: "flex-start", width: "100%" },
            ]}
          >
            <View style={{ maxWidth: "75%" }}>
              <Text style={styles.welcome}>
                Welcome back, {user.fullName.split(",")[1]}
              </Text>
              <Text style={styles.sentCode}>
                Enter your Aza password to login
              </Text>
            </View>
            <View style={{ position: "absolute", right: 30 }}>
              {user.fullName && (
                <ProfilePictureView
                  firstName={user.fullName.split(",")[1].substring(1, 2)}
                  lastName={user.fullName.split(",")[0].substring(0, 1)}
                  profilePictureUrl={user.pictureUrl}
                />
              )}
            </View>
          </View>

          <View
            style={{
              // marginTop: hp(20),
              paddingHorizontal: hp(20),
              marginBottom: hp(50),
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
              isLoading={screenLoading}
              withKeypad
              // forgetPasswordOption
              // onForgotPassword={() =>
              //   handleForgotPassword({ navigation, route })
              // }
            />
          </View>
          {route.params.cachedUser && biometricEnrolled && (
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: hp(14),
                  fontWeight: "500",
                  marginBottom: hp(5),
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  color: Colors.light.secondaryText,
                }}
              >
                OR
              </Text>
              <TouchableOpacity
                style={{ alignSelf: "center", marginVertical: 10 }}
                onPress={() => handleSignBack({ navigation, route })}
              >
                <FaceIdIcon color={Colors["general"].darkGrey} size={40} />
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: hp(12),
                  fontWeight: "500",
                  marginBottom: hp(8),
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  color: Colors.light.secondaryText,
                }}
              >
                Login with biometrics
              </Text>
            </View>
          )}

          <View
            style={[
              {
                alignSelf: "center",
                top:
                  route.params.cachedUser && biometricEnrolled
                    ? hp(300)
                    : hp(50),
              },
            ]}
          >
            <TouchableOpacity>
              <CancelButtonWithUnderline
                title="Forget Me"
                onPressButton={() => forgetUser(navigation)}
                styleText={CommonStyles.resend}
              />
            </TouchableOpacity>
          </View>
        </View>
      </HideKeyboardOnTouch>
      {/* <ActivityModal loading={screenLoading} /> */}
    </SpacerWrapper>
  );
};

export default SignInWelcomeBackScreen;
