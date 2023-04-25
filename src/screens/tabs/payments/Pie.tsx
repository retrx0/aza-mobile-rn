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
import { IPayment, PaymentCategory } from "../../../types/types.redux";
import { numberWithCommas } from "../../../common/util/NumberUtils";

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
      value: calculatePaymentSum(payments.data, "Airtime & Data"),
      color: "#2A9E17",
      text: "Airtime & Data",
    },
    {
      value: calculatePaymentSum(payments.data, "Cable Tv"),
      color: "#ED8A0A",
      text: "Cable Tv",
    },
    {
      value: calculatePaymentSum(payments.data, "Charity"),
      color: "#753FF6",
      text: "Charity",
    },
    {
      value: calculatePaymentSum(payments.data, "Electricity"),
      color: "#ead919",
      text: "Electricity",
    },
    {
      value: calculatePaymentSum(payments.data, "Game Credits"),
      color: "#56179e",
      text: "Game Credits",
    },
    {
      value: calculatePaymentSum(payments.data, "Gift Cards"),
      color: "#c71c1c",
      text: "Gift Cards",
    },

    {
      value: calculatePaymentSum(payments.data, "Internet"),
      color: "#176f9e",
      text: "Internet",
    },
    {
      value: calculatePaymentSum(payments.data, "Water"),
      color: "#9c179e",
      text: "Water",
    },
  ];

  useEffect(() => {
    var _t = 0;
    payments.data.forEach((p) => (_t += Number(p.amount)));
    setTotal(_t);
  }, [payments.data]);

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
          {payments.data.length > 0 && (
            <Text style={styles.monthText}>{payments.data[0].date}</Text>
          )}

          <TouchableOpacity>
            <ArrowRightIcon
              color={appTheme == "light" ? "#292D32" : "white"}
              size={16}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.chartContainer}>
          <PieChart
            data={data}
            innerCircleColor={"transparent"}
            centerLabelComponent={() => {
              return (
                <View style={styles.chartCenter}>
                  <Text
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.secondaryText}
                    style={{
                      fontSize: 14,
                    }}
                  >
                    Total
                  </Text>
                  <Text
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.mainText}
                    style={{
                      fontFamily: "Euclid-Circular-A-Semi-Bold",
                      fontSize: hp(16),
                    }}
                  >
                    {NAIRA_UNICODE} {numberWithCommas(0)}
                  </Text>
                </View>
              );
            }}
          />

          <View style={styles.chartLegendContainer}>
            {data.map(({ color, text }, i) => (
              <View
                key={i}
                style={[CommonStyles.row, { marginRight: 10, marginTop: 15 }]}
              >
                <View
                  style={[
                    styles.legendBox,
                    {
                      backgroundColor: color,
                    },
                  ]}
                />
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.secondaryText}
                  style={{
                    fontSize: 16,
                  }}
                >
                  {text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SpacerWrapper>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    marginTop: 40,
    paddingLeft: 20,
  },
  chartLegendContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 300,
  },
  legendBox: {
    width: 15,
    height: 15,
    borderRadius: 3,
    marginRight: 10,
  },
  chartCenter: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    borderRadius: 150,
  },
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
    fontSize: hp(20),
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
