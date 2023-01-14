import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { TextInput } from "../../theme/Themed";
import { View, Text } from "../../theme/Themed";

import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

const BvnVerificationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BvnVerification">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const { onVerifyNavigateBackTo } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}
        >
          Tier 1 Verification
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
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginVertical: hp(30),
              fontWeight: "500",
            }}
          >
            Verify your BVN
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),

                fontWeight: "400",
              }}
            >
              BVN
            </Text>
            <TextInput
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",

                fontSize: hp(16),
                fontWeight: "500",
              }}
              placeholder="Enter your bank verification number"
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Verify"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage:
                  "You have successfully added your BVN to your Aza account",
                navigateTo: onVerifyNavigateBackTo,
              })
            }
            styleText={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            style={{}}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            color={Colors.general.red}
            styleText={CommonStyles.cancelStyle}
            onPressButton={() => navigation.goBack()}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BvnVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
