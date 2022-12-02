import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  CurrencyIcon,
  FlightIcon,
  ReceiveIcon,
  WithDrawIcon,
} from "../../../../../assets/svg";
import { VaultActivitytProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

export const ActivityList = [
  {
    send: <WithDrawIcon />,
    status: "Withdrawal to Bank",
    amount: "\u20A62,000",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    amount: "\u20A6200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    amount: "\u20A6200",
    due: "4 July 2022 04:26",
  },
  {
    send: (
      <Image
        style={{
          width: 36,
          height: 36,
        }}
        source={require("../../../../../assets/images/icons/CoverImage.png")}
      />
    ),
    status: "Goal amount changed",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    amount: "\u20A6200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    amount: "\u20A6200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    amount: "\u20A6200",
    due: "4 July 2022 04:26",
  },
  {
    send: (
      <Image
        style={{
          width: 36,
          height: 36,
        }}
        source={require("../../../../../assets/images/icons/CoverImage.png")}
      />
    ),
    status: "Flight Ticket vault created",
    due: "4 July 2022 04:26",
  },
];

export const ActivityCard = ({
  send,
  status,
  amount,
  due,
  onPress,
}: VaultActivitytProps) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.activityContainer}>
        <View style={styles.activityItem}>
          <View
            style={[
              styles.sendContainer,
              {
                backgroundColor:
                  status === "Withdrawal to Bank"
                    ? Colors.general.lightRed
                    : status === "Vault top up"
                    ? Colors.general.lightGreen
                    : Colors.light.backgroundSecondary,
              },
            ]}>
            {send}
          </View>
          <Text style={styles.status}>{status}</Text>
        </View>
        <View>
          <View>
            <Text
              style={[
                styles.amount,
                {
                  color:
                    status === "Withdrawal to Bank"
                      ? Colors.general.red
                      : Colors.general.green,
                },
              ]}>
              {amount}
            </Text>
          </View>
          <Text style={styles.date}>{due}</Text>
        </View>
      </View>
      <View
        style={[
          styles.separator,
          { borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC" },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sendContainer: {
    width: wp(36),
    height: hp(36),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(18),
  },
  list: {
    marginLeft: hp(20),
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(20),
    marginBottom: hp(10),
    marginTop: hp(10),
  },
  date: {
    fontSize: hp(10),
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A",
  },
  amount: {
    fontSize: hp(14),
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A-Bold",
    alignSelf: "flex-end",
  },
  status: {
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
    marginLeft: hp(15),
  },
  separator: {
    borderWidth: hp(0.3),
    marginBottom: hp(10),
    width: wp(370),
    alignSelf: "center",
  },
});
