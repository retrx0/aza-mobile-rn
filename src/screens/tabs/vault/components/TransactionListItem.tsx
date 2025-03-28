import React from "react";
import { Image } from "react-native";
import { MessageIcon, ReceivedIcon, SendIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

interface TransactionItem {
  image: string;
  name: string;
  transactionType: string;
  transactionTitle: string;
  transactionMessage?: string;
  amount: string;
  date: string;
}

export default function TransactionListItem({
  image,
  name,
  transactionType,
  transactionTitle,
  transactionMessage,
  amount,
  date,
}: TransactionItem) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        CommonStyles.row,
        {
          paddingHorizontal: 20,
          alignSelf: "stretch",
        },
      ]}
    >
      <Image
        style={{ borderRadius: 45, width: 45, height: 45 }}
        source={{
          uri: image,
        }}
      />
      <View style={{ display: "flex", marginRight: "auto", marginLeft: 15 }}>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Bold",
            fontSize: hp(19),
            fontWeight: "600",
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
            <ReceivedIcon color="#2A9E17" />
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
              transactionType === "incoming" ? "#2A9E17" : Colors.light.error,
          }}
        >
          {"\u20A6"} {amount}
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: hp(12),
            marginTop: 3,
            fontFamily: "Euclid-Circular-A",
            fontWeight: "300",
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
