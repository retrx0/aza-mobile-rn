import { ScrollView } from "react-native";
import React from "react";
import { PaymentStyles as styles } from "../styles";
import { View, Text } from "../../../../theme/Themed";

import ListItem from "../sub-components/ListItem";
import {
  CableTvIcon,
  DataIcon,
  DropIcon,
  ElectricIcon,
  WifiIcon,
} from "../../../../../assets/svg";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";

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
}: CommonScreenProps<"PaymentRecurring">) {
  const scheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(85),
            }}
          >
            Payments
          </Text>
        </View>
        <ScrollView style={styles.itemListContainer}>
          <ListItem
            index={0}
            onPress={() => {
              navigation.navigate("AirtimeRecurring");
            }}
            Icon={() => <DataIcon size={30} />}
            title="Airtime & Data"
            route=""
          />

          <ListItem
            index={1}
            onPress={() => {
              navigation.navigate("InternetRecurring");
            }}
            Icon={() => <WifiIcon size={30} />}
            title="Internet"
            route=""
          />

          <ListItem
            index={2}
            onPress={() => {
              navigation.navigate("CableRecurring");
            }}
            Icon={() => <CableTvIcon size={30} />}
            title="Cable TV"
            route=""
          />

          <ListItem
            index={3}
            onPress={() => {
              navigation.navigate("ElectricityRecurring");
            }}
            Icon={() => <ElectricIcon size={30} />}
            title="Electricity"
            route=""
          />

          <ListItem
            index={4}
            onPress={() => {
              navigation.navigate("WaterRecurring");
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
