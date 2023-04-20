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
            <View></View>

            <Image
              source={{ uri: user.pictureUrl }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View> */}

          <View
            style={{
              // marginTop: hp(20),
              paddingHorizontal: hp(20),
              marginBottom: hp(70),
            }}>
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
            />
          </View>
          {/* <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: hp(14),
                fontWeight: "500",
                marginBottom: hp(20),
                lineHeight: hp(18),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                color: Colors.light.secondaryText,
              }}>
              OR
            </Text>
            <Image
              source={require("../../../../assets/images/common/FaceId.png")}
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginBottom: hp(10),
              }}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: hp(14),
                fontWeight: "500",
                marginBottom: hp(20),
                lineHeight: hp(18),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                color: Colors.light.secondaryText,
              }}>
              Login with Face ID
            </Text>
          </View> */}
          <View style={[{ alignSelf: "center", marginTop: hp(370) }]}>
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
