import React, { useLayoutEffect } from "react";
import { Image, StyleProp, StyleSheet, ViewStyle } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import { View, Text } from "../../theme/Themed";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../components/buttons/ExitButton";
import Button from "../../components/buttons/Button";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { SvgIconProps } from "../../../assets/svg";

type FeatureScreenProps = {
  headerTitle: string;
  featureTitle: string;
  featureText: string;
  Icon: ({ color }: SvgIconProps) => JSX.Element;
  nextScreenToNavigateTo: any;
  imageSource: any;
  isImage: any;
  buttontitle: string;
};

const FeatureScreen = ({
  navigation,
  headerTitle,
  featureTitle,
  featureText,
  Icon,
  imageSource,
  isImage,
  buttontitle,
  nextScreenToNavigateTo,
}: CommonScreenProps<"RecurringTransfer"> & FeatureScreenProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          {headerTitle}
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerRight: () => <ExitButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={{
            alignSelf: "center",
            marginTop: hp(96),
            marginBottom: hp(96),
          }}>
          {isImage ? (
            <Image style={CommonStyles.gameImage} source={imageSource} />
          ) : (
            <Icon color={Colors[appTheme].Text} />
          )}
        </View>

        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              fontSize: hp(24),
              fontWeight: "600",
              fontFamily: "Euclid-Circular-A-Bold",
              textAlign: "center",
              alignSelf: "center",
              lineHeight: hp(30),
              maxWidth: 335,
            }}>
            {featureTitle}
          </Text>
          <Text
            style={{
              fontSize: hp(16),
              lineHeight: hp(25),
              fontFamily: "Euclid-Circular-A",
              textAlign: "center",
              fontWeight: "400",
              alignSelf: "center",
              marginTop: hp(20),
              maxWidth: 335,
            }}>
            {featureText}
          </Text>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title={buttontitle}
            onPressButton={() => navigation.navigate(nextScreenToNavigateTo)}
            styleText={{}}
            style={[{}]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default FeatureScreen;
