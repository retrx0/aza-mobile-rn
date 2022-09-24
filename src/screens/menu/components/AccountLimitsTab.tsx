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

const AccountLimitsTab = ({
  navigation,
}: CommonScreenProps<"FeesAndLimits">) => {
  const colorScheme = useColorScheme();
  const [isVerified] = useState(false);

  return (
    <View style={[styles.container, { paddingHorizontal: 15 }]}>
      <View>
        <View style={[CommonStyles.col, { alignSelf: "flex-start" }]}>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: 14,
            }}
          >
            My Level:{" "}
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",

                fontSize: 14,
              }}
            >
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
          ]}
        >
          <VerifyIcon
            color={
              isVerified ? "#2A9E17" : Colors[colorScheme].backgroundSecondary
            }
            size={34}
          />
          <View
            style={[CommonStyles.col, { marginRight: "auto", marginLeft: 25 }]}
          >
            <Text
              style={{
                fontSize: 12,
                color: isVerified
                  ? "#2A9E17"
                  : Colors[colorScheme].secondaryText,
              }}
            >
              {isVerified ? "Verified" : "Not verified"}
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: 16,
                fontFamily: "Euclid-Circular-A-Semi-Bold",

                // color: Colors[colorScheme].secondaryText,
              }}
            >
              Tier 1
            </Text>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: 14,
                  marginBottom: 5,

                  // color: Colors[colorScheme].secondaryText,
                }}
              >
                Daily Transaction Limit:
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: 14,
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                }}
              >
                {"\u20A6 "}
                50,000
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: 14,
                  marginBottom: 5,
                }}
              >
                Maximum Balance:
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: 14,
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                }}
              >
                {"\u20A6 "}
                200,000
              </Text>
            </View>
            <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: "flex-start",
                  marginTop: 20,
                },
              ]}
            >
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: 14,
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  marginRight: 5,
                }}
              >
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
          marginTop: "auto",
          marginBottom: hp(50),
          backgroundColor: isVerified
            ? Colors[colorScheme].disabledButton
            : Colors[colorScheme].button,
        }}
      />
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
