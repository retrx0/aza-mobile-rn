import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { RequestIcon } from "../../../../../assets/svg";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, View } from "../../../../theme/Themed";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import ExitButton from "../../../../components/buttons/ExitButton";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { useAppSelector } from "./../../../../redux";

const RequestMoneyFeature = ({
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
          Request Money
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
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const slides = [
    {
      key: 1,
      featureTitle: "Easy and convinient",
      featureText:
        "Request money from your family and friends in a friendly manner, effortlessly.",
      icon: <RequestIcon color={appTheme === "dark" ? "#FFFFFF" : "#000000"} />,
    },
  ];

  const _renderItem = ({ item }: any) => {
    return (
      <View>
        <View>
          <View
            style={{
              alignSelf: "center",
              marginTop: hp(83),
              marginBottom: hp(81),
            }}>
            {item.icon}
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

export default RequestMoneyFeature;

// renderNextButton={_renderNextButton}
// renderDoneButton={_renderDoneButton}
// renderPrevButton={prevLabel}
// showPrevButton={true}
// onDone={

// const _renderDoneButton = () => {
//   return (
//     <View style={styles.nextbox}>
//       <Text style={styles.doneButton}>Next</Text>
//     </View>
//   );
// };

//   const _renderNextButton = () => {
//     return (
//       <View style={styles.nextbox}>
//         <Text style={styles.nextbutton}>Next</Text>
//       </View>
//     );
//   };

//   const prevLabel = () => {
//     return (
//       <View style={styles.nextbox}>
//         <Text style={styles.prevbutton}>Back</Text>
//       </View>
//     );
//   };
