import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { DaysProps, PercentageProps } from "../../../../types";
import { hp, wp } from "../../../common/utils";

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

export const PercentageCard = ({ percentage, onPress }: PercentageProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.percentageContainer}>
      <Text style={styles.percentageStyle}>{percentage}</Text>
    </TouchableOpacity>
  );
};

export const DaysCard = ({ days, onPress }: DaysProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.daysContainer}>
      <View style={styles.line} />
      <Text style={styles.daysStyle}>{days}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.4,
    borderColor: "#EAEAEC",
    marginBottom: hp(10),
  },
  daysStyle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17.75,
    color: "#4D4D4D",
  },
  daysContainer: {
    marginBottom: hp(10),
    borderRadius: hp(10),
    marginTop: hp(5),
  },
  percentageStyle: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 17.75,
    color: "#A6A6A6",
  },
  percentageContainer: {
    width: wp(70),
    height: hp(30),
    borderColor: "#A6A6A6",
    borderRadius: hp(3),
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
