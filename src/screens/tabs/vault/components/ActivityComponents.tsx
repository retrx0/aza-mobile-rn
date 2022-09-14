import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import {
  CurrencyIcon,
  FlightIcon,
  ReceiveIcon,
  WithDrawIcon,
} from "../../../../../assets/svg";
import { VautActivitytProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";

export const ActiivityList = [
  {
    send: <WithDrawIcon />,
    status: "Withdrawal to Bank",
    price: "2,000",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    price: "200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    price: "200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    price: "200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    price: "200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    price: "200",
    due: "4 July 2022 04:26",
  },
  {
    send: <ReceiveIcon />,
    status: "Vault top up",
    price: "200",
    due: "4 July 2022 04:26",
  },
];

export const ActiivityCard = ({
  send,
  status,
  price,
  due,
  onPress,
}: VautActivitytProps) => {
  return (
    <View>
      <View style={styles.activityContainer}>
        <View style={styles.activityItem}>
          <TouchableOpacity
            onPress={onPress}
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
          </TouchableOpacity>
          <Text style={styles.status}>{status}</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              {"\u20A6"} {price}
            </Text>
          </View>
          <Text style={styles.date}> {due}</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
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
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
  },
  amount: {
    fontSize: hp(12),
    fontWeight: "600",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A-Bold",
  },
  status: {
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
    marginLeft: hp(15),
  },
  separator: {
    borderWidth: hp(0.3),
    borderColor: "#EAEAEC",
    marginBottom: hp(10),
    width: wp(370),
    alignSelf: "center",
  },
});
