import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, View } from "../../../../theme/Themed";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import ExitButton from "../../../../components/buttons/ExitButton";
import * as Images from "../../../../../assets/images";
import { Image } from "react-native";

const CharityFeature = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Charity
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
  const slides = [
    {
      key: 1,
      featureTitle: "Be the difference",
      featureText:
        "Make a difference by donating to charities you genuinely believe in. Azarians are also making a difference just by using Aza, since 10% of Aza's quarterly profits goes to charity organizations.",
      icon: Images.CHARITY,
    },

    {
      key: 2,
      featureTitle: "Personalized experience",
      featureText:
        "Learn more about the charities you support, and donate either in your name or someone else. Azarians can also setup a recurring transfer to automatically donate a certain amount to any charity of their choice at periodic time frames.",
      icon: Images.CHARITY,
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <View
            style={{
              alignSelf: "center",
              marginTop: hp(56),
              marginBottom: hp(56),
            }}>
            <Image
              source={item.icon}
              resizeMode="cover"
              style={{ width: hp(200), height: hp(200) }}
            />
          </View>
          <View style={{ paddingHorizontal: hp(30) }}>
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
              {item.featureTitle}
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
              {item.featureText}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <AppIntroSlider
          keyExtractor={(item) => item.key.toString()}
          renderItem={_renderItem}
          data={slides}
          dotStyle={CommonStyles.dot}
          activeDotStyle={CommonStyles.activedot}
          showNextButton={false}
          showDoneButton={false}
        />
      </View>
    </SpacerWrapper>
  );
};

export default CharityFeature;
