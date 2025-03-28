import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CloseIcon, LockIcon } from "../../../../../assets/svg";
import {
  DaysProps,
  PercentageProps,
  VaultListProps,
} from "../../../../types/types.navigation";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";

export const PercentageList = [
  {
    percentage: "2%",
  },
  {
    percentage: "5%",
  },
  {
    percentage: "7%",
  },
  {
    percentage: "10%",
  },
];

export const DaysList = [
  {
    days: "2 Days",
  },
  {
    days: "4 Days",
  },
  {
    days: "1 Week",
  },
  {
    days: "2 Weeks",
  },
  {
    days: "1 Month",
  },
];

export const VaultList = [
  {
    lockIcon: <LockIcon />,
    item: "Flight Ticket",
    amount: "2000",
    closeIcon: <CloseIcon />,
    stage: "Matured",
  },
  {
    lockIcon: <LockIcon />,
    item: "New Laptop",
    amount: "2000",
    closeIcon: <CloseIcon />,
    stage: "Matured",
  },
  {
    lockIcon: <LockIcon />,
    item: "New Phone",
    amount: "200000",
    closeIcon: <CloseIcon />,
    stage: "Matured",
  },
];

export const ListCard = ({
  lockIcon,
  closeIcon,
  item,
  amount,
  stage,
  onPress,
}: VaultListProps) => {
  return (
    <View>
      <View style={styles.vaultContainer}>
        <View style={styles.vaultItem}>
          <TouchableOpacity onPress={onPress}>{lockIcon}</TouchableOpacity>
          <View style={styles.list}>
            <Text style={styles.item}>{item}</Text>
            <Text style={styles.amount}>{`#${amount}`}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{stage}</Text>
          <TouchableOpacity onPress={onPress}>{closeIcon}</TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export const PercentageCard = ({ percentage, onPress }: PercentageProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.percentageContainer}>
      <Text style={styles.percentageStyle}>{percentage}</Text>
    </TouchableOpacity>
  );
};

export const DaysCard = ({ days, onPress }: DaysProps) => {
  return (
    <View>
      <View style={styles.separator} />
      <TouchableOpacity onPress={onPress} style={styles.daysContainer}>
        <Text style={styles.daysStyle}>{days}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginLeft: hp(20),
  },
  vaultItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  vaultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(20),
    marginBottom: hp(15),
    marginTop: hp(15),
  },
  amount: {
    fontSize: hp(12),
    fontWeight: "600",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A-Bold",
  },
  item: {
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
  },
  separator: {
    borderWidth: hp(0.3),
    borderColor: "#EAEAEC",
    marginBottom: hp(10),
    width: wp(335),
    alignSelf: "center",
  },
  daysStyle: {
    fontSize: hp(14),
    fontWeight: "400",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
  },
  daysContainer: {
    marginBottom: hp(10),
  },
  percentageStyle: {
    fontSize: hp(14),
    fontWeight: "600",
    lineHeight: 17.75,
    color: "#A6A6A6",
    fontFamily: "Euclid-Circular-A-Bold",
  },
  percentageContainer: {
    width: wp(70),
    height: hp(30),
    borderColor: "#A6A6A6",
    borderRadius: hp(3),
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: hp(10),
  },
});
