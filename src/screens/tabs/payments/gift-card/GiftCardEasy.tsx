import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, View } from "../../../../theme/Themed";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import ExitButton from "../../../../components/buttons/ExitButton";
import * as Images from "../../../../../assets/images";
import { Image } from "react-native";

const GiftCardEasy = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Giftcards
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
      featureTitle: "Gift Cards made easy",
      featureText:
        "Purchase any Gift Card of your choice effortlessly with affordable rates.",
      icon: Images.GiftEasy,
    },

    {
      key: 2,
      featureTitle: "The choice is yours",
      featureText:
        "Choose from a wide variety of Gift Cards, from multiple regions.",
      icon: Images.GiftEasy,
    },

    {
      key: 3,
      featureTitle: "Anyhow you see fit",
      featureText:
        "You can buy a Gift Card either for yourself or for another person and have the code swiftly delivered to the provided Email Address.",
      icon: Images.GiftEasy,
    },
  ];

  const _renderItem = ({ item }: any) => {
    return (
      <View>
        <View>
          <View
            style={{
              alignSelf: "center",
              marginTop: hp(55),
              marginBottom: hp(55),
            }}>
            <Image
              source={item.icon}
              resizeMode="cover"
              style={{ width: hp(215), height: hp(202) }}
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

export default GiftCardEasy;
