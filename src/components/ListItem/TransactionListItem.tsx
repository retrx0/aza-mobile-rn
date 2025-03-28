import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { MessageIcon, ReceivedIcon, SendIcon } from "../../../assets/svg";
import CommonStyles from "../../common/styles/CommonStyles";
import { View, Text } from "../../theme/Themed";

import Colors from "../../constants/Colors";
import { hp, wp } from "../../common/util/LayoutUtil";
import { NAIRA_UNICODE } from "../../constants/AppConstants";
import ProfilePictureView from "../views/ProfilePictureView";

interface TransactionItem {
  image: string;
  name: string;
  transactionType: string;
  transactionTitle: string;
  transactionMessage?: string;
  amount: string;
  date: string;
  onPress?: () => void;
}

export default function TransactionListItem({
  image,
  name,
  transactionType,
  transactionTitle,
  transactionMessage,
  amount,
  date,
  onPress,
}: TransactionItem) {
  return (
    <View
      style={[
        CommonStyles.row,
        {
          alignItems: "flex-start",
          alignSelf: "stretch",
        },
      ]}
    >
      <ProfilePictureView
        firstName={name.substring(0, 1)}
        lastName={
          name.split(" ")[1]
            ? name.split(" ")[1].substring(0, 1).toUpperCase()
            : name.substring(1, 2).toUpperCase()
        }
        profilePictureUrl={image}
      />
      <View style={{ display: "flex", marginRight: "auto", marginLeft: 15 }}>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              maxWidth: "80%",
            }}
          >
            {name}
          </Text>
          <View
            style={[
              CommonStyles.row,
              {
                marginTop: hp(3),
                marginBottom: hp(8),
                alignSelf: "flex-start",
              },
            ]}
          >
            {transactionType === "incoming" ? (
              <ReceivedIcon color={Colors.general.green} />
            ) : (
              <SendIcon color={Colors.light.error} />
            )}
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                marginLeft: hp(3),
                fontSize: hp(14),
                fontWeight: "400",
                fontFamily: "Euclid-Circular-A-Medium",
              }}
            >
              {transactionTitle}
            </Text>
          </View>
        </TouchableOpacity>

        {transactionMessage ? (
          <View style={[CommonStyles.row, { alignSelf: "flex-start" }]}>
            <MessageIcon color={Colors.general.grey} size={12} />
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.secondaryText}
              style={{
                marginLeft: 3,
                fontSize: hp(11),
                fontFamily: "Euclid-Circular-A",
                fontWeight: "300",
                maxWidth: "80%",
              }}
            >
              {transactionMessage}
            </Text>
          </View>
        ) : null}
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
            color:
              transactionType === "incoming"
                ? Colors.general.green
                : Colors.light.error,
          }}
        >
          {NAIRA_UNICODE}
          {amount}
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: hp(12),
            marginTop: 3,
            fontFamily: "Euclid-Circular-A",
            fontWeight: "300",
            maxWidth: wp(70),
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
