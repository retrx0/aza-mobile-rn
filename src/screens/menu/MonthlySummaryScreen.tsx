import React, { useLayoutEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";

import { CommonScreenProps } from "../../common/navigation/types";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
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
  QRCodeIcon,
  VaultOutlinedIcon,
  VaultOutlinedSmallIcon,
  WithdrawIcon,
  WithdrawSmallIcon,
} from "../../../assets/svg";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { numberWithCommas } from "../../common/util/NumberUtils";

const MonthlySummaryScreen = ({
  navigation,
}: CommonScreenProps<"MonthlySummary">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}>
          Monthly Summary
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
        <TouchableOpacity
          style={[CommonStyles.col, { alignItems: "center", marginTop: 2 }]}>
          <DownLoadIcon color={Colors[colorScheme].secondaryText} size={16} />
          <Text
            style={{
              color: Colors[colorScheme].secondaryText,
              fontSize: hp(12),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              textAlign: "center",
              fontWeight: "600",
            }}>
            Download
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const chartData = [
    { value: 0, color: "#1198F6", text: "Water" },
    { value: 45, color: "#ED8A0A", text: "Electricity" },
    { value: 42, color: "#753FF6", text: "Internet" },
    { value: 46, color: "#2A9E17", text: "Airtime" },
    { value: 10, color: "#FFD200", text: "Cable Tv" },
  ];

  const filterBy = ["Summary", "Money Transfer", "Withdrawal", "Bills/Payment"];

  const summaries = [
    {
      transactionType: "Incoming",
      icon: (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#2AD168",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <DepositIcon size={40} color="#FFFFFF" />
        </View>
      ),
      totalAmount: "100000",
      info: "Total money received in account this month",
      transactions: [
        {
          amount: "30000",
          transactionInfo: "Amount deposited via Debit/Credit card",
          transactionIcon: <DebitCardSmallIcon size={20} color="#FFFFFF" />,
        },
        {
          amount: "40000",
          transactionInfo: "Incoming money transfer",
          transactionIcon: <IncomingTransferIcon size={20} color="#FFFFFF" />,
        },
        {
          amount: "30000",
          transactionInfo: "Payments received through QR code",
          transactionIcon: <QRCodeIcon size={20} color="white" />,
        },
      ],
    },
    {
      transactionType: "Outgoing",
      icon: (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FF361A",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <WithdrawIcon size={40} color="#FFFFFF" />
        </View>
      ),
      totalAmount: "480000",
      info: "Total amount debited from your account",
      transactions: [
        {
          amount: "25000",
          transactionInfo: "Outgoing money transfer",
          transactionIcon: <OutgoingTransferIcon size={20} color="#FFFFFF" />,
        },
        {
          amount: "200000",
          transactionInfo: "Total money withdrawn to your bank",
          transactionIcon: <BankIcon size={16} color="#FFFFFF" />,
        },
        {
          amount: "200000",
          transactionInfo: "Total money withdrawn to your vault",
          transactionIcon: <VaultOutlinedSmallIcon color={"white"} size={20} />,
        },
        {
          amount: "55000",
          transactionInfo: "Bills, donations and other payments",
          transactionIcon: <PaymentsOutlinedIcon size={24} color="white" />,
        },
      ],
    },

    {
      transactionType: "Money Transfer",
      icon: (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FF361A",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <DebitCardIcon size={30} color="#FFFFFF" />
        </View>
      ),
      transactions: [
        {
          amount: "5000",
          transactionInfo: "Sent with a total of 9 transactions",
          transactionIcon: <DepositSmallIcon size={20} color="#FFFFFF" />,
        },
        {
          amount: "30000",
          transactionInfo: "Payments made through QR code",
          transactionIcon: <QRCodeIcon size={20} color="#FFFFFF" />,
        },
      ],
    },
    {
      transactionType: "Withdrawal to bank",
      icon: (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FF361A",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <BankLargeIcon size={30} color="#FFFFFF" />
        </View>
      ),
      transactions: [
        {
          amount: "150000",
          transactionInfo: "Withdrawn with a total of 3 transactions",
          transactionIcon: <DepositSmallIcon size={20} color="#FFFFFF" />,
        },
      ],
    },
    {
      transactionType: "Vault",
      icon: (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FF361A",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <VaultOutlinedIcon size={30} color="#FFFFFF" />
        </View>
      ),
      transactions: [
        {
          amount: "50000",
          transactionInfo: "Total money withdrawn from Vault to Bank",
          transactionIcon: <BankIcon size={16} color="#FFFFFF" />,
        },
        {
          amount: "100000",
          transactionInfo: "Total money withdrawn from Vault to Aza",
          transactionIcon: <WithdrawSmallIcon size={20} color="#FFFFFF" />,
        },
      ],
    },
    {
      transactionType: "Bills & Payment",
      icon: (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FF361A",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <DebitCardIcon size={30} color="#FFFFFF" />
        </View>
      ),
      totalAmount: "75000",
      info: "See distribution of money spent in a chart",
    },
  ];

  return (
    <SpacerWrapper>
      <View style={[styles.container]}>
        <View
          style={[
            CommonStyles.col,
            {
              alignSelf: "stretch",
            },
          ]}>
          <View style={[CommonStyles.row]}>
            <TouchableOpacity>
              <ArrowLeftIcon color={Colors[colorScheme].mainText} />
            </TouchableOpacity>
            <Text
              // lightColor={Colors.light.text}
              // darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(16),
                marginHorizontal: 20,
                fontWeight: "600",
              }}>
              Jun 2022
            </Text>
            <TouchableOpacity>
              <ArrowRightIcon color={Colors[colorScheme].mainText} size={16} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{ marginTop: hp(25) }}
            showsHorizontalScrollIndicator={false}>
            {filterBy.map((filter, i) => (
              <View key={i}>
                {i === 0 ? (
                  <Text
                    // lightColor={Colors.light.text}
                    // darkColor={Colors.dark.mainText}
                    style={{
                      fontFamily: "Euclid-Circular-A-Semi-Bold",
                      fontSize: hp(16),
                      marginRight: 25,
                      marginLeft: hp(5),
                    }}>
                    {filter}
                  </Text>
                ) : (
                  <Text
                    lightColor={Colors.light.secondaryText}
                    darkColor={Colors.dark.secondaryText}
                    style={{
                      fontFamily: "Euclid-Circular-A-Semi-Bold",
                      fontSize: hp(16),
                      marginRight: 25,
                      marginLeft: hp(5),
                    }}>
                    {filter}
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}>
            {summaries.map(
              (
                { icon, info, totalAmount, transactionType, transactions },
                index
              ) => (
                <View
                  key={index}
                  style={[
                    CommonStyles.col,
                    {
                      alignSelf: "stretch",
                      alignItems: "center",
                      paddingTop: hp(40),
                    },
                  ]}>
                  {icon}
                  <Text
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.mainText}
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: 16,
                      marginTop: 10,
                    }}>
                    {transactionType}
                  </Text>
                  {totalAmount && (
                    <Text
                      style={{
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: hp(16),
                        marginTop: hp(10),
                        color:
                          transactionType === "Incoming"
                            ? "#2A9E17"
                            : "#FF361A",
                      }}>
                      {"\u20A6"} {numberWithCommas(totalAmount)}
                    </Text>
                  )}
                  {info && (
                    <Text
                      style={{
                        fontFamily: "Euclid-Circular-A-Medium",
                        fontSize: hp(16),
                        marginTop: hp(3),
                        color: Colors[colorScheme].secondaryText,
                      }}>
                      {info}
                    </Text>
                  )}
                  {transactions?.length !== undefined && (
                    <View style={{ marginVertical: 10 }}>
                      <ArrowDownIcon
                        color={Colors[colorScheme].mainText}
                        size={16}
                      />
                    </View>
                  )}
                  {transactions?.map((transaction, i, { length }) => (
                    <View
                      key={i}
                      style={[
                        CommonStyles.col,
                        { alignSelf: "stretch", alignItems: "center" },
                      ]}>
                      <View
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor:
                            colorScheme === "dark" ? "#3A3D42" : "black",
                        }}>
                        {transaction.transactionIcon}
                      </View>
                      <Text
                        style={{
                          fontFamily: "Euclid-Circular-A-Semi-Bold",
                          fontSize: hp(16),
                          marginRight: 25,
                          marginLeft: hp(5),
                          marginTop: hp(10),
                          color:
                            transactionType === "Incoming"
                              ? "#2A9E17"
                              : "#FF361A",
                        }}>
                        {"\u20A6"} {numberWithCommas(transaction.amount)}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Euclid-Circular-A-Medium",
                          fontSize: hp(16),
                          marginTop: hp(3),
                          color: Colors[colorScheme].secondaryText,
                        }}>
                        {transaction.transactionInfo}
                      </Text>
                      {length - 1 !== i && (
                        <View style={{ marginVertical: 15 }}>
                          <PlusIcon
                            color={Colors[colorScheme].mainText}
                            size={34}
                          />
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )
            )}
            <View
              style={{
                alignItems: "center",
                marginTop: 40,
                paddingLeft: 20,
              }}>
              <PieChart
                data={chartData}
                innerCircleColor={"transparent"}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 130,
                        height: 130,
                        borderRadius: 150,
                      }}>
                      <Text
                        lightColor={Colors.light.text}
                        darkColor={Colors.dark.secondaryText}
                        style={{
                          fontSize: 14,
                        }}>
                        Total
                      </Text>
                      <Text
                        lightColor={Colors.light.text}
                        darkColor={Colors.dark.mainText}
                        style={{
                          fontFamily: "Euclid-Circular-A-Semi-Bold",
                          fontSize: hp(16),
                        }}>
                        {"\u20A6"} {numberWithCommas(65000)}
                      </Text>
                    </View>
                  );
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  width: 300,
                }}>
                {chartData.map(({ color, text }, i) => (
                  <View
                    key={i}
                    style={[
                      CommonStyles.row,
                      { marginRight: 10, marginTop: 15 },
                    ]}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: color,
                        borderRadius: 3,
                        marginRight: 10,
                      }}
                    />
                    <Text
                      lightColor={Colors.light.text}
                      darkColor={Colors.dark.secondaryText}
                      style={{
                        fontSize: 16,
                      }}>
                      {text}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={[
                CommonStyles.col,
                { alignSelf: "stretch", alignItems: "center", marginTop: 20 },
              ]}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colorScheme === "dark" ? "#3A3D42" : "black",
                }}>
                <HeartIcon color="#FF361A" size={20} />
              </View>
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(16),
                  marginTop: hp(10),
                  color: "#FF361A",
                }}>
                {"\u20A6"} {numberWithCommas(10000)}
              </Text>
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontSize: hp(16),
                  marginTop: hp(3),
                  color: Colors[colorScheme].secondaryText,
                }}>
                Worth of donations made
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default MonthlySummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
