import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { AwardIcon, SmallVerifyIcon, VerifyIcon } from "../../../../assets/svg";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { CommonScreenProps } from "../../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AccountLimitsTab = ({
  navigation,
}: CommonScreenProps<"FeesAndLimits">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const [isVerified] = useState(false);

  return (
    <View style={[styles.container, { paddingHorizontal: 15 }]}>
      <View>
        <View style={[CommonStyles.col, { alignSelf: "flex-start" }]}>
          <Text
            // lightColor={Colors.light.text}
            // darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: hp(14),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Semi-Bold",
            }}>
            My Level:{" "}
            <Text
              // lightColor={Colors.light.text}
              // darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
              }}>
              Tier {isVerified ? "1" : "0"}
            </Text>
          </Text>
          <View
            style={{
              marginTop: 6,
              borderWidth: 1,
              borderColor: isVerified
                ? "#2A9E17"
                : Colors[colorScheme].secondaryText,
              borderRadius: 50,
              width: 120,
            }}
          />
        </View>
        <View
          style={[
            CommonStyles.row,
            {
              alignSelf: "stretch",
              alignItems: "flex-start",
              marginTop: hp(35),
            },
          ]}>
          <VerifyIcon
            color={
              isVerified ? "#2A9E17" : Colors[colorScheme].backgroundSecondary
            }
            size={34}
          />
          <View
            style={[
              CommonStyles.col,
              { width: "100%", marginRight: "auto", marginLeft: 25 },
            ]}>
            <Text
              style={{
                fontSize: hp(15),
                marginBottom: hp(5),
                fontWeight: "500",
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                color: isVerified
                  ? "#2A9E17"
                  : Colors[colorScheme].secondaryText,
              }}>
              {isVerified ? "Verified" : "Not verified"}
            </Text>
            <Text
              // lightColor={Colors.light.text}
              // darkColor={Colors.dark.mainText}
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Medium",
                fontWeight: "600",

                // color: Colors[colorScheme].secondaryText,
              }}>
              Tier 1
            </Text>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text
                // lightColor={Colors.light.text}
                // darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: hp(16),
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",

                  // color: Colors[colorScheme].secondaryText,
                }}>
                Daily Transaction Limit:
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "600",
                  marginTop: hp(5),
                }}>
                {"\u20A650,000"}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: hp(16),
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                }}>
                Maximum Balance:
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "600",
                  marginTop: hp(5),
                }}>
                {"\u20A6200,000"}
              </Text>
            </View>
            <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: "flex-start",
                  marginTop: 20,
                },
              ]}>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(16),
                  marginBottom: hp(5),
                  fontWeight: "600",
                  fontFamily: "Euclid-Circular-A-Medium",
                }}>
                Verify BVN
              </Text>
              {isVerified && <SmallVerifyIcon color={"#2A9E17"} />}
            </View>
          </View>
          <AwardIcon
            color={
              isVerified ? "#ECCA13" : Colors[colorScheme].backgroundSecondary
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
          title="Upgrade Account"
          disabled={isVerified}
          onPressButton={() =>
            navigation.navigate("BvnVerification", {
              onVerifyNavigateBackTo: "FeesAndLimits",
            })
          }
          styleText={{
            color: isVerified
              ? Colors[colorScheme].disabledButtonText
              : Colors[colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            backgroundColor: isVerified
              ? Colors[colorScheme].disabledButton
              : Colors[colorScheme].button,
          }}
        />
      </View>
    </View>
  );
};

export default AccountLimitsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(35),
  },
});
