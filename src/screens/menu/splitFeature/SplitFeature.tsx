import { CommonScreenProps } from "../../../common/navigation/types";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, View } from "../../../theme/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import ExitButton from "../../../components/buttons/ExitButton";
import * as Images from "../../../../assets/images";
import { Image } from "react-native";
import useNavigationHeader from "../../../hooks/useNavigationHeader";

const SplitFeature = ({ navigation }: CommonScreenProps<"SplitFeature">) => {
  useNavigationHeader(
    navigation,
    "Split",
    <ExitButton onPress={() => navigation.goBack()} />,
    true
  );
  const slides = [
    {
      key: 1,
      featureTitle: "Lightning-fast transaction speed",
      featureText:
        "Send money to anyone on Aza or other banks at lightning speeds",
      icon: Images.Split,
    },

    {
      key: 2,
      featureTitle: "Transaction Certainty",
      featureText:
        "Send money with Aza and instantly carry on with your life, knowing that the transaction will go through without fail.",
      icon: Images.Split,
    },
    {
      key: 3,
      featureTitle: "Invite new users to Aza",
      featureText:
        "Azarians can send money to users who don't even use Aza, after which an sms will be sent to those users with a guide on how to create an Aza account.",
      icon: Images.Split,
    },
  ];

  const _renderItem = ({ item }: any) => {
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
              style={{ width: hp(258), height: hp(194), borderRadius: hp(10) }}
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

export default SplitFeature;
