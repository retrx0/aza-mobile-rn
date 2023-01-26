import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../../common/navigation/types";
import { AddUsers, AzaLOGO, MoneyTick } from "../../../../../../assets/svg";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, View } from "../../../../../theme/Themed";
import { hp } from "../../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import ExitButton from "../../../../../components/buttons/ExitButton";
import * as Images from "../../../../../../assets/images";
import { Image } from "react-native";

type WithdrawScreenProps = {
  headerTitle: string;
};

const WithdrawFeature = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer"> & WithdrawScreenProps) => {
  const slides = [
    {
      key: 1,
      headerTitle: "Withdraw",
      featureTitle: "Withdraw anytime",
      featureText:
        "Link your personal bank account to Aza and easily withdraw your Aza funds to your bank.",
      icon: Images.DepositFeature,
    },

    {
      key: 2,
      headerTitle: "Deposit",
      featureTitle: "Deposit funds to your Aza",
      featureText:
        "Fund your Aza account via your debit/credit card, securely.",
      icon: Images.WithdrawFeature,
    },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Withdraw
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
  const _renderItem = ({ item }: any) => {
    return (
      <View>
        <View>
          <View
            style={{
              alignSelf: "center",
              marginTop: hp(81),
              marginBottom: hp(81),
            }}>
            <Image
              source={item.icon}
              resizeMode="cover"
              style={{ width: hp(200), height: hp(150), borderRadius: hp(10) }}
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

export default WithdrawFeature;
