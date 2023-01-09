import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "../../../../components/buttons/BackButton";
import { View, Text } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AccountClosureSurveyScreen = ({
  navigation,
}: CommonScreenProps<"CloseAccountScreen">) => {
  const colorScheme = useColorScheme();
  const [selectedCard, setSelectedCard] = useState("");
  const insets = useSafeAreaInsets();

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

  const accounts = [
    {
      surveyToppings: "Poor user experience or technical issues with the app.",
    },
    {
      surveyToppings: "Difficulties with customer service or support.",
    },
    {
      surveyToppings: "Financial issues, such as subscription costs or fees.",
    },
    {
      surveyToppings:
        "Changes to the app's terms of service or policies that are unacceptable.",
    },
    {
      surveyToppings: "Privacy concerns or data breaches.",
    },
    {
      surveyToppings: "Others",
    },
  ];

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(30),
              fontWeight: "500",
              paddingLeft: hp(7),
              maxWidth: wp(350),
            }}>
            We would love to know why you decided to close your account
          </Text>
          {accounts.map(({ surveyToppings }, i) => (
            <View key={i}>
              <>
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => setSelectedCard(surveyToppings)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: hp(20),
                    }}>
                    <View
                      style={{
                        width: hp(20),
                        height: hp(20),
                        borderRadius: hp(10),
                        borderColor:
                          selectedCard === surveyToppings
                            ? Colors.general.green
                            : "#3A3D42",

                        borderWidth: hp(1),
                      }}>
                      {selectedCard === surveyToppings && (
                        <View
                          style={[
                            CommonStyles.doneSelect,
                            { marginLeft: wp(2), marginTop: wp(2) },
                          ]}
                        />
                      )}
                    </View>
                    <Text
                      style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A",
                        fontSize: hp(16),
                        maxWidth: 350,
                      }}>
                      {surveyToppings}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            </View>
          ))}
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            disabled={!selectedCard}
            title="Continue"
            onPressButton={() => {
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                //TODO update message to accept JSX
                statusMessage: "Survey has been successfully filled and sent",
                navigateTo: "Home",
              });
            }}
            styleText={{}}
            style={[{}]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AccountClosureSurveyScreen;

// if (accounts.map("Others")) {
//   navigation.navigate("AlternativeSurvey");
// } else {
//   navigation.navigate("StatusScreen", {
//     status: "Successful",
//     statusIcon: "Success",
//     //TODO update message to accept JSX
//     statusMessage: "Survey has been successfully filled and sent",
//     navigateTo: "Home",
//   });
// }
