import React, { useEffect, useLayoutEffect } from "react";

import Button from "../../components/buttons/Button";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { StatusSuccessIcon, StatusWarningIcon } from "../../../assets/svg";
import { playSwooshSound } from "../../common/util/SoundUtil";
import { View as View, Text as Text } from "../../theme/Themed";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const StatusScreen = ({
  navigation,
  route,
}: CommonScreenProps<"StatusScreen">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const insets = useSafeAreaInsets();
  const {
    statusIcon,
    status,
    statusMessage,
    statusMessage2,
    recurringTransferBeneficiary,
    receiptDetails,
    cancelButton,
    navigateTo,
    navigateToParams,
    screenType,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });
  }, []);

  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }, { scale: scale.value }],
    };
  });

  //TODO fix sound to only play on transcations

  useEffect(() => {
    switch (statusIcon) {
      case "Success":
        if (screenType && screenType === "transaction") {
          playSwooshSound();
        }
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        scale.value = withSequence(withSpring(1.5), withSpring(1));
        rotation.value = withSequence(
          withTiming(-10, { duration: 50 }),
          withRepeat(withTiming(20, { duration: 200 }), 2, true),
          withTiming(0, { duration: 100 })
        );

        break;

      case "Warning":
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        rotation.value = withSequence(
          withTiming(-10, { duration: 50 }),
          withRepeat(withTiming(20, { duration: 100 }), 9, true),
          withTiming(0, { duration: 50 })
        );
        break;

      default:
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        break;
    }
  }, []);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={[
            CommonStyles.col,
            { alignItems: "center", marginTop: "auto", marginBottom: "auto" },
          ]}
        >
          <Animated.View style={[animatedStyles]}>
            {statusIcon === "Success" ? (
              <StatusSuccessIcon />
            ) : (
              <StatusWarningIcon />
            )}
          </Animated.View>
          <Text
            style={{
              color:
                statusIcon === "Success"
                  ? Colors.general.green
                  : Colors[appTheme].text,
              fontSize: hp(24),
              marginVertical: hp(20),
              textAlign: "center",
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontWeight: "500",
            }}
          >
            {status}
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              maxWidth: 350,
              fontFamily: "Euclid-Circular-A-Medium",
            }}
          >
            {statusMessage}
          </Text>

          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              marginTop: hp(25),
              fontFamily: "Euclid-Circular-A-Medium",
              maxWidth: 350,
            }}
          >
            {statusMessage2}
          </Text>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          {/* {recurringTransferBeneficiary !== undefined && (
            <Button
              title="Setup Recurring Transfer"
              onPressButton={() =>
                navigation.navigate(
                  "SetupRecurringTransfer",
                  recurringTransferBeneficiary
                )
              }
              style={[
                {
                  borderWidth: 1,
                  marginTop: hp(20),
                },
                { marginBottom: 20 },
              ]}
            />
          )} */}
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.getParent()?.navigate(navigateTo, navigateToParams)
            }
            style={{
              marginBottom: 15,
            }}
          />
          {receiptDetails !== undefined && (
            <ButtonWithUnderline
              title="Receipt"
              color={Colors[appTheme].text}
              onPressButton={() =>
                navigation.navigate("Receipt", {
                  ...receiptDetails,
                })
              }
            />
          )}
          {cancelButton && (
            <ButtonWithUnderline
              title="Cancel"
              styleText={CommonStyles.cancelStyle}
              color={Colors[appTheme].error}
              onPressButton={() => navigation.goBack()}
            />
          )}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default StatusScreen;
