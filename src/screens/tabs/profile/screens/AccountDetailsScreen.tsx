import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { CommonScreenProps } from "../../../../common/navigation/types";

import BackButton from "../../../../components/buttons/BackButton";
import Divider from "../../../../components/divider/Divider";
import { Text, View } from "../../../../components/Themed";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

interface Detail {
  title: string;
  subText: string;
  detail: string;
}

const AccountDetailsListItem = ({ title, subText, detail }: Detail) => {
  const colorScheme = useColorScheme();
  return (
    <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
      <View
        style={[
          CommonStyles.row,
          {
            alignSelf: "stretch",
            justifyContent: "space-between",
            paddingVertical: hp(20),
          },
        ]}
      >
        <View style={[CommonStyles.col]}>
          <Text
            lightColor={Colors[colorScheme].text}
            darkColor={Colors[colorScheme].mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.secondaryText}
            style={{ fontSize: 10, marginTop: 2 }}
          >
            {subText}
          </Text>
        </View>
        <Text
          lightColor={Colors[colorScheme].text}
          darkColor={Colors[colorScheme].mainText}
          style={{
            fontSize: 14,
          }}
        >
          {detail}
        </Text>
      </View>
      <Divider />
    </View>
  );
};

const AccountDetailsScreen = ({
  navigation,
}: CommonScreenProps<"AccountDetails">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
          Account Details
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

  const details = [
    {
      title: "Account status",
      subText: "Unverified or Verified",
      detail: "Verified",
    },
    {
      title: "Aza Number",
      subText: "You can receive money transfe/payment by sharing.",
      detail: "8081234567",
    },
    {
      title: "Available Balance",
      subText: "Available balance except for pending transactions",
      detail: "10,000,600",
    },
    {
      title: "Incoming transfer amount limit",
      subText: "Total amount limit that can be received per month",
      detail: "100,000",
    },
    {
      title: "Deposit amount limit",
      subText:
        "The amount that can be deposited to your account during this month",
      detail: "3,600",
    },
    {
      title: "Transfer received from different users",
      subText:
        "The number of people who transferred money to your account this month",
      detail: "6",
    },
    {
      title: "Number of incoming transfers",
      subText:
        "The number of money transfers received in your account this month",
      detail: "6",
    },
    {
      title: "Incoming transfer amount",
      subText:
        "The amount of incoming money transfers to your account this month",
      detail: "3,600",
    },
  ];

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.col, styles.container]}>
        <View style={[CommonStyles.row, { alignSelf: "stretch" }]}>
          <Image
            style={{ borderRadius: 50, width: 56, height: 56 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
            }}
          />
          <View style={[CommonStyles.col, { marginLeft: 20 }]}>
            <Text
              lightColor={Colors[colorScheme].text}
              darkColor={Colors[colorScheme].mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 14,
              }}
            >
              Chiazondu Joseph
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                marginVertical: 5,
                fontSize: 12,
              }}
            >
              +9091234567
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{ fontSize: 10 }}
            >
              chiazo@samplemail.com
            </Text>
          </View>
        </View>
        <View
          style={[
            CommonStyles.col,
            { alignSelf: "stretch", marginTop: hp(20) },
          ]}
        >
          {details.map(({ detail, subText, title }, i) => (
            <AccountDetailsListItem
              key={i}
              detail={detail}
              subText={subText}
              title={title}
            />
          ))}
        </View>
        <TouchableOpacity style={{ alignSelf: "center", marginTop: hp(35) }}>
          <Text
            lightColor={Colors[colorScheme].text}
            darkColor={Colors[colorScheme].mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
          >
            Term of Use
          </Text>
        </TouchableOpacity>
      </View>
    </SpacerWrapper>
  );
};

export default AccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
