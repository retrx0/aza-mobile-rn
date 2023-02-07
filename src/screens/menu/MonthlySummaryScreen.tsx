import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "../../theme/Themed";

import SummaryModal from "./components/Summary";

import { CommonScreenProps } from "../../common/navigation/types";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BankIcon,
  BankLargeIcon,
  DebitCardIcon,
  DebitCardSmallIcon,
  DepositIcon,
  DepositSmallIcon,
  DownLoadIcon,
  HeartIcon,
  IncomingTransferIcon,
  OutgoingTransferIcon,
  PaymentsOutlinedIcon,
  PlusIcon,
  QRCodeSmallIcon,
  VaultOutlinedIcon,
  VaultOutlinedSmallIcon,
  WithdrawIcon,
  WithdrawSmallIcon,
} from "../../../assets/svg";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { numberWithCommas } from "../../common/util/NumberUtils";

import summariesData from "../../data/summaries.json";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const filterBy = ["Summary", "Money Transfer", "Bills/Payment"];

const transactionIcons: Record<string, JSX.Element> = {
  depositIcon: <DepositIcon size={40} color="#FFFFFF" />,
  withdrawIcon: <WithdrawIcon size={40} color="#FFFFFF" />,
  debitCardIcon: <DebitCardIcon size={30} color="#FFFFFF" />,
  largeBankIcon: <BankLargeIcon size={30} color="#FFFFFF" />,
  outlinedVaultIcon: <VaultOutlinedIcon size={30} color="#FFFFFF" />,
};

const transactionDetailsIcons: Record<string, JSX.Element> = {
  debitCardSmallIcon: <DebitCardSmallIcon size={20} color="#FFFFFF" />,
  incomingTransferIcon: <IncomingTransferIcon size={20} color="#FFFFFF" />,
  qrCodeIcon: <QRCodeSmallIcon size={20} color="white" />,
  outgoingTransferIcon: <OutgoingTransferIcon size={20} color="#FFFFFF" />,
  bankIcon: <BankIcon size={16} color="#FFFFFF" />,
  outlinedVaultSmallIcon: <VaultOutlinedSmallIcon color={"white"} size={20} />,
  outlinedPaymentsIcon: <PaymentsOutlinedIcon size={24} color="white" />,
  smallDepositIcon: <DepositSmallIcon size={20} color="#FFFFFF" />,
  smallWithdrawIcon: <WithdrawSmallIcon size={20} color="#FFFFFF" />,
};

const MonthlySummaryScreen = ({
  navigation,
}: CommonScreenProps<"MonthlySummary">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [filter, setFilter] = useState("Summary");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ModalVisible, setModalVisible] = useState(false);

  const [currentSummariesToShow, setCurrentSummariesToShow] = useState<
    typeof summariesData[0]
  >({
    date: new Date().getMonth() + " " + new Date().getFullYear(),
    chartData: [],
    summaries: [],
    totalWorthOfDonations: "0",
  });

  useNavigationHeader(
    navigation,
    "Monthly Summary",
    <TouchableOpacity
      style={[CommonStyles.col, { alignItems: "center", marginTop: 2 }]}
      onPress={() => setModalVisible(true)}
    >
      <DownLoadIcon color={Colors[appTheme].secondaryText} size={16} />
      <Text
        style={{
          color: Colors[appTheme].secondaryText,
          fontSize: hp(12),
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Download
      </Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    // start by showing this months summaries
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("default", { month: "short" });
    const formattedDate = `${month} ${year}`;
    showThisMonthsSummaries(formattedDate);

    // Get the current summaries based on the current index
    setCurrentSummariesToShow(summariesData[currentIndex]);
  }, []);

  const showSummaries = (direction: "previous" | "next") => {
    // Increment or decrement index by 1 to access the next or previous summary
    const newIndex =
      direction === "previous" ? currentIndex - 1 : currentIndex + 1;

    // Check if the new index is within the array bounds
    if (newIndex >= 0 && newIndex < summariesData.length) {
      // Set the new index as the current index
      setCurrentIndex(newIndex);
    }
  };

  const showThisMonthsSummaries = (date: string) => {
    // Find the index of the summary with the matching date
    const index = summariesData.findIndex((summary) => summary.date === date);

    // Set the current index to the index of the matching summary
    setCurrentIndex(index);
  };

  return (
    <>
      <SpacerWrapper>
        <View style={[styles.container]}>
          <View
            style={[
              CommonStyles.col,
              {
                alignSelf: "center",
              },
            ]}
          >
            <View style={[CommonStyles.row]}>
              <TouchableOpacity onPress={() => showSummaries("previous")}>
                <ArrowLeftIcon color={Colors[appTheme].mainText} />
              </TouchableOpacity>
              <Text style={styles.date}>{currentSummariesToShow.date}</Text>
              <TouchableOpacity onPress={() => showSummaries("next")}>
                <ArrowRightIcon color={Colors[appTheme].mainText} size={16} />
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              style={{ marginTop: hp(25) }}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "space-between",
                marginLeft: 10,
              }}
            >
              {filterBy.map((filterItem, i) => (
                <TouchableOpacity
                  onPress={() => setFilter(filterItem)}
                  key={i}
                  activeOpacity={0.9}
                >
                  <Text
                    lightColor={
                      filterItem === filter ? "" : Colors.light.secondaryText
                    }
                    darkColor={
                      filterItem === filter ? "" : Colors.dark.secondaryText
                    }
                    style={styles.filterItem}
                  >
                    {filterItem}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 150 }}
            >
              {currentSummariesToShow.summaries
                .filter((item) =>
                  filter === "Summary"
                    ? item
                    : filter === "Money Transfer"
                    ? item.transactionName === filter
                    : filter === "Bills/Payment" &&
                      item.transactionName === "Bills & Payment"
                )
                .map(
                  (
                    {
                      transactionIconName,
                      info,
                      totalAmount,
                      transactionName,
                      transactionDetails,
                      transactionType,
                    },
                    index
                  ) => (
                    <View
                      key={index}
                      style={[
                        CommonStyles.col,
                        {
                          alignSelf: "center",
                          alignItems: "center",
                          paddingTop: hp(40),
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.transactionIcon,
                          {
                            backgroundColor:
                              transactionType === "debit"
                                ? "#FF361A"
                                : "#2AD168",
                          },
                        ]}
                      >
                        {transactionIcons[transactionIconName]}
                      </View>
                      <Text
                        lightColor={Colors.light.text}
                        darkColor={Colors.dark.mainText}
                        style={styles.transactionNameStyle}
                      >
                        {transactionName}
                      </Text>
                      {totalAmount && (
                        <Text
                          style={[
                            styles.totalAmount,
                            {
                              color:
                                transactionType === "debit"
                                  ? "#FF361A"
                                  : "#2A9E17",
                            },
                          ]}
                        >
                          {"\u20A6"} {numberWithCommas(totalAmount)}
                        </Text>
                      )}
                      {info && (
                        <Text
                          style={[
                            styles.info,
                            {
                              color: Colors[appTheme].secondaryText,
                            },
                          ]}
                        >
                          {info}
                        </Text>
                      )}
                      {transactionDetails?.length !== undefined && (
                        <View style={{ marginVertical: 10 }}>
                          <ArrowDownIcon
                            color={Colors[appTheme].mainText}
                            size={16}
                          />
                        </View>
                      )}
                      {transactionDetails?.map((transaction, i, { length }) => (
                        <View
                          key={i}
                          style={[
                            CommonStyles.col,
                            { alignSelf: "stretch", alignItems: "center" },
                          ]}
                        >
                          <View
                            style={[
                              styles.transactionDetailsIcons,
                              {
                                backgroundColor:
                                  appTheme === "dark" ? "#3A3D42" : "black",
                              },
                            ]}
                          >
                            {
                              transactionDetailsIcons[
                                transaction.detailIconName
                              ]
                            }
                          </View>
                          <Text
                            style={[
                              styles.detailAmount,
                              {
                                color:
                                  transactionType === "debit"
                                    ? "#FF361A"
                                    : "#2A9E17",
                              },
                            ]}
                          >
                            {"\u20A6"}{" "}
                            {numberWithCommas(transaction.detailAmount)}
                          </Text>
                          <Text
                            style={[
                              styles.detailInfo,
                              {
                                color: Colors[appTheme].secondaryText,
                              },
                            ]}
                          >
                            {transaction.detailInfo}
                          </Text>
                          {length - 1 !== i && (
                            <View style={{ marginVertical: 15 }}>
                              <PlusIcon
                                color={Colors[appTheme].mainText}
                                size={34}
                              />
                            </View>
                          )}
                        </View>
                      ))}
                    </View>
                  )
                )}
              <Text
                style={[
                  styles.info,
                  {
                    color: Colors[appTheme].secondaryText,
                    alignSelf: "center",
                  },
                ]}
              >
                See distribution of money spent in a chart
              </Text>
              <View style={styles.chartContainer}>
                <PieChart
                  data={currentSummariesToShow.chartData}
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
                          {"\u20A6"} {numberWithCommas(65000)}
                        </Text>
                      </View>
                    );
                  }}
                />

                <View style={styles.chartLegendContainer}>
                  {currentSummariesToShow.chartData.map(
                    ({ color, text }, i) => (
                      <View
                        key={i}
                        style={[
                          CommonStyles.row,
                          { marginRight: 10, marginTop: 15 },
                        ]}
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
                    )
                  )}
                </View>
              </View>

              <View
                style={[
                  CommonStyles.col,
                  { alignSelf: "stretch", alignItems: "center", marginTop: 20 },
                ]}
              >
                <View
                  style={[
                    styles.donationIconContainer,
                    {
                      backgroundColor:
                        appTheme === "dark" ? "#3A3D42" : "black",
                    },
                  ]}
                >
                  <HeartIcon color="#FF361A" size={20} />
                </View>
                <Text style={styles.donationAmount}>
                  {"\u20A6"}{" "}
                  {numberWithCommas(
                    currentSummariesToShow.totalWorthOfDonations
                  )}
                </Text>
                <Text
                  style={[
                    styles.donationText,
                    {
                      color: Colors[appTheme].secondaryText,
                    },
                  ]}
                >
                  Worth of donations made
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </SpacerWrapper>
      <SummaryModal
        visible={ModalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </>
  );
};

export default MonthlySummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
  date: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    marginHorizontal: 20,
  },
  filterItem: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    marginRight: 25,
    marginLeft: hp(5),
  },
  transactionIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionNameStyle: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: 16,
    marginTop: 10,
  },
  totalAmount: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(16),
    marginTop: hp(10),
  },
  info: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(16),
    marginTop: hp(3),
  },
  transactionDetailsIcons: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  detailAmount: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    marginTop: hp(10),
  },
  detailInfo: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(16),
    marginTop: hp(3),
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 40,
    paddingLeft: 20,
  },
  chartCenter: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    borderRadius: 150,
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
  donationIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  donationAmount: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    marginTop: hp(10),
    color: "#FF361A",
  },
  donationText: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(16),
    marginTop: hp(3),
  },
});
