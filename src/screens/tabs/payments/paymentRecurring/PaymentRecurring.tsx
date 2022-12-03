import { ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { PaymentStyles as styles } from "../styles";
import { SafeAreaView, Text, View } from "../../../../components/Themed";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import Divider from "../sub-components/Divider";
import ListItem from "../sub-components/ListItem";
import {
  CableTvIcon,
  DataIcon,
  DropIcon,
  ElectricIcon,
  GameIcon,
  GiftIcon,
  LoveIcon,
  PieIcon,
  WifiIcon,
} from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../../types";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import * as Images from "../../../../../assets/images/index";
import { Card } from "../sub-components/Card";
import { PaymentsCard } from "../sub-components/PaymentsCard";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

// const Network = [
//   {
//     title: "MTN",
//     icon: Images.Mtn,
//     amount: "\u20A62,050",
//   },
//   {
//     title: "Swift N",
//     icon: Images.Swift,
//     amount: "\u20A620,000",
//   },
//   {
//     title: "DSTV",
//     icon: Images.Dstv,
//     amount: "\u20A621,000",
//   },
//   {
//     title: "Ikeja El...",
//     icon: Images.Ie,
//     amount: "\u20A62,150",
//   },
//   {
//     title: "FCT Wat",
//     icon: Images.Fctwb,
//     amount: "\u20A62,150",
//   },
// ];

export default function PaymentRecurring({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const scheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
          }}>
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(85),
            }}>
            Payments
          </Text>
        </View>
        <ScrollView style={styles.itemListContainer}>
          <ListItem
            index={0}
            onPress={() => {
              navigation.navigate("Common", { screen: "AirtimeRecurring" });
            }}
            Icon={() => <DataIcon size={30} />}
            title="Airtime & Data"
            route=""
          />

          <ListItem
            index={1}
            onPress={() => {
              navigation.navigate("Common", { screen: "InternetRecurring" });
            }}
            Icon={() => <WifiIcon size={30} />}
            title="Internet"
            route=""
          />

          <ListItem
            index={2}
            onPress={() => {
              navigation.navigate("Common", { screen: "CableRecurring" });
            }}
            Icon={() => <CableTvIcon size={30} />}
            title="Cable TV"
            route=""
          />

          <ListItem
            index={3}
            onPress={() => {
              navigation.navigate("Common", { screen: "ElectricityRecurring" });
            }}
            Icon={() => <ElectricIcon size={30} />}
            title="Electricity"
            route=""
          />

          <ListItem
            index={4}
            onPress={() => {
              navigation.navigate("Common", { screen: "WaterRecurring" });
            }}
            Icon={() => <DropIcon size={30} />}
            title="Water"
            route=""
          />
        </ScrollView>
      </View>
    </SpacerWrapper>
  );
}
