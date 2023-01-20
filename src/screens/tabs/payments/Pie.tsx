import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text } from "../../../theme/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import { PieChart } from "react-native-gifted-charts";
import RegularText from "../../../components/text/RegularText";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../assets/svg";
import { hp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { NAIRA_UNICODE } from "../../../constants/AppConstants";
import { selectUser } from "../../../redux/slice/userSlice";
import Colors from "../../../constants/Colors";
import { IPayment, PaymentCategory } from "../../../redux/types";

export default function Pie() {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const { payments } = useAppSelector(selectUser);
  // const [date, setDate] = useState("10-06-2022");
  const [total, setTotal] = useState(0);

  const calculatePaymentSum = (
    payments: IPayment[],
    category: PaymentCategory
  ): number => {
    return payments
      .filter((p) => p.category === category)
      .map((p) => Number(p.amount))
      .reduce((p, i) => p + i, 0);
  };

  const data = [
    {
      value: calculatePaymentSum(payments.recentPayments, "Airtime & Data"),
      color: "#2A9E17",
      text: "Airtime & Data",
    },
    {
      value: calculatePaymentSum(payments.recentPayments, "Cable Tv"),
      color: "#ED8A0A",
      text: "Cable Tv",
    },
    {
      value: calculatePaymentSum(payments.recentPayments, "Charity"),
      color: "#753FF6",
      text: "Charity",
    },
    {
      value: calculatePaymentSum(payments.recentPayments, "Electricity"),
      color: "#a1ea19",
      text: "Electricity",
    },
    {
      value: calculatePaymentSum(payments.recentPayments, "Game Credits"),
      color: "#56179e",
      text: "Game Credits",
    },
    {
      value: calculatePaymentSum(payments.recentPayments, "Gift Cards"),
      color: "#c71c1c",
      text: "Gift Cards",
    },

    {
      value: calculatePaymentSum(payments.recentPayments, "Internet"),
      color: "#176f9e",
      text: "Internet",
    },
    {
      value: calculatePaymentSum(payments.recentPayments, "Water"),
      color: "#9c179e",
      text: "Water",
    },
  ];

  useEffect(() => {
    var _t = 0;
    payments.recentPayments.forEach((p) => (_t += Number(p.amount)));
    setTotal(_t);
  }, [payments.recentPayments]);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={styles.month}>
          <TouchableOpacity>
            <ArrowLeftIcon
              color={appTheme == "light" ? "#292D32" : "white"}
              size={0}
            />
          </TouchableOpacity>
          <Text style={styles.monthText}>Jun 2022</Text>

          <TouchableOpacity>
            <ArrowRightIcon
              color={appTheme == "light" ? "#292D32" : "white"}
              size={16}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "center" }}>
          <PieChart
            textBackgroundRadius={26}
            textColor="#ffffff"
            donut={true}
            data={data}
            focusOnPress
            showValuesAsLabels
            centerLabelComponent={() => (
              <View style={[styles.centerLabel]}>
                <Text
                  darkColor={Colors.general.black}
                  lightColor={Colors.general.black}
                >
                  Total
                </Text>
                <RegularText
                  text={NAIRA_UNICODE + total}
                  style={[
                    {
                      color: Colors.general.black,
                    },
                  ]}
                />
              </View>
            )}
          />
        </View>

        <View style={(styles.labels, { maxWidth: "100%" })}>
          {data.map((item, ind) => (
            <View key={ind.toString()} style={styles.individualLabel}>
              <View
                style={[styles.colors, { backgroundColor: item.color }]}
              ></View>
              <Text style={{ fontSize: hp(15), padding: 5 }}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </SpacerWrapper>
  );
}

const styles = StyleSheet.create({
  centerLabel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  container: {
    marginTop: 70,
    flex: 1,
    alignItems: "center",
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 60,
    alignSelf: "center",
  },
  individualLabel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  colors: {
    height: 15,
    width: 15,
    borderRadius: 3,
    marginRight: 3,
  },
  month: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    alignSelf: "center",
  },
  monthText: {
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    marginRight: hp(10),
    marginLeft: hp(10),
  },
  datecontainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
