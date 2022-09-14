import React from "react";
import { Image } from "react-native";
import { MessageIcon, ReceivedIcon, SendIcon } from "../../../assets/svg";
import CommonStyles from "../../common/styles/CommonStyles";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

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
          alignItems: "flex-start",
          alignSelf: "stretch",
        },
      ]}
    >
      <Image
        style={{ borderRadius: 50, width: 36, height: 36 }}
        source={{
          uri: image,
        }}
      />
      <View style={{ display: "flex", marginRight: "auto", marginLeft: 20 }}>
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
        >
          {name}
        </Text>
        <View
          style={[
            CommonStyles.row,
            {
              marginTop: 3,
              marginBottom: 8,
              alignSelf: "flex-start",
            },
          ]}
        >
          {transactionType === "incoming" ? (
            <ReceivedIcon />
          ) : (
            <SendIcon iconColor={Colors.light.error} />
          )}
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              marginLeft: 3,
              fontSize: 12,
              fontFamily: "Euclid-Circular-A",
            }}
          >
            {transactionTitle}
          </Text>
        </View>
        {transactionMessage ? (
          <View style={[CommonStyles.row, { alignSelf: "flex-start" }]}>
            <MessageIcon color={Colors[colorScheme].text} size={12} />
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                marginLeft: 3,
                fontSize: 10,
                fontFamily: "Euclid-Circular-A-Light",
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
        }}
      >
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14,
            color:
              transactionType === "incoming" ? "#2A9E17" : Colors.light.error,
          }}
        >
          {"\u20A6"} {amount}
        </Text>
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 10,
            marginTop: 3,
            fontFamily: "Euclid-Circular-A-Light",
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
