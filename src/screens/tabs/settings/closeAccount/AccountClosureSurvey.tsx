import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const AccountClosureSurveyScreen = ({
  navigation,
}: CommonScreenProps<"AccountClosureSurveyScreen">) => {
  const [selectToppings, setSelectToppings] = useState("");
  const insets = useSafeAreaInsets();

  useNavigationHeader(navigation, "Account Closure Survey");

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
              paddingLeft: hp(15),
              maxWidth: wp(350),
            }}
          >
            We would love to know why you decided to close your account
          </Text>

          {accounts.map(({ surveyToppings }, i) => (
            <View key={i}>
              <>
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => setSelectToppings(surveyToppings)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: hp(20),
                    }}
                  >
                    <View
                      style={{
                        width: hp(20),
                        height: hp(20),
                        borderRadius: hp(10),
                        borderColor:
                          selectToppings === surveyToppings
                            ? Colors.general.green
                            : Colors.dark.backgroundSecondary,

                        borderWidth: hp(1),
                      }}
                    >
                      {selectToppings === surveyToppings && (
                        <View
                          style={[
                            CommonStyles.doneSelect,
                            { marginHorizontal: wp(2), marginTop: wp(2) },
                          ]}
                        />
                      )}
                    </View>

                    <Text
                      style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A",
                        fontSize: hp(16),
                        maxWidth: 300,
                      }}
                    >
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
          ]}
        >
          <Button
            disabled={!selectToppings}
            title="Continue"
            onPressButton={() => {
              if (selectToppings === "Others") {
                navigation.navigate("AlternativeSurvey");
              } else {
                navigation.navigate("StatusScreen", {
                  status: "Successful",
                  statusIcon: "Success",
                  //TODO update message to accept JSX
                  statusMessage: "Survey has been successfully filled and sent",
                  navigateTo: "Home",
                });
              }
            }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AccountClosureSurveyScreen;
