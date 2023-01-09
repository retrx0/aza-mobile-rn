import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "../../../../components/buttons/BackButton";
import { View, Text, TextInput } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { useAppSelector } from "./../../../../redux";

const AlternativeSurvey = ({
  navigation,
}: CommonScreenProps<"CloseAccountScreen">) => {
  const colorScheme = useColorScheme();
  const [reason, setReason] = useState("");
  const insets = useSafeAreaInsets();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
          }}>
          Account Closure Survey
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
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(100),
              fontWeight: "500",
              maxWidth: wp(350),
            }}>
            We would love to know why you decided to close your account
          </Text>
        </View>

        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(20),
              fontWeight: "500",
            }}>
            Leave your reason here
          </Text>
          <View
            style={{
              width: wp(390),
              height: hp(150),
              borderRadius: hp(5),
              borderWidth: hp(0.8),
              borderColor: Colors[appTheme].secondaryText,
              paddingLeft: hp(12),
              backgroundColor: Colors[appTheme].background,
              paddingVertical: hp(10),
            }}>
            <TextInput
              placeholder="Write your reason..."
              style={{
                borderColor: Colors[appTheme].secondaryText,
                backgroundColor: Colors[appTheme].background,
              }}
              placeholderTextColor={
                colorScheme === "dark" ? "#999999" : "#A6A6A6"
              }
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                //TODO update message to accept JSX
                statusMessage: "Survey has been successfully filled and sent",
                navigateTo: "Home",
              })
            }
            styleText={{}}
            style={[{}]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AlternativeSurvey;
