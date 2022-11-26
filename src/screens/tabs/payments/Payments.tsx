import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { PaymentStyles as styles } from "./styles";
import { SafeAreaView, Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import HeadrImage from "./sub-components/HeadrImage";
import Divider from "./sub-components/Divider";
import ListItem from "./sub-components/ListItem";
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
} from "../../../../assets/svg";
import { RootTabScreenProps } from "../../../../types";
import { Dstv, Fctwb, Ie, Mtn, Swift } from "../../../../assets/images";
import useColorScheme from "../../../hooks/useColorScheme";
import { hp } from "../../../common/util/LayoutUtil";

export default function Payments({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Common", { screen: "Pie" });
          }}
          style={styles.icon}>
          <PieIcon style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
      <Header
        description=""
        headerStyle={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: hp(16),
          fontWeight: "400",
        }}
        descriptionStyle={null}
        style={styles.subHead}
        heading="Recent Payments"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.imageHeaderContainer}>
        <HeadrImage
          selected
          index={0}
          header="Paid"
          title="MTN"
          amount="2,050"
          image={Mtn}
        />
        <HeadrImage
          selected
          index={0}
          header="Paid"
          title="Swift N"
          amount="20,000"
          image={Swift}
        />
        <HeadrImage
          selected
          index={0}
          header="Paid"
          title="DSTV"
          amount="21,000"
          image={Dstv}
        />
        <HeadrImage
          selected
          index={0}
          header="Paid"
          title="Ikeja El..."
          amount="2,150"
          image={Ie}
        />
        <HeadrImage
          selected
          index={0}
          header="Paid"
          title="FCT Wat"
          amount="2,150"
          image={Fctwb}
        />
      </ScrollView>

      <ScrollView style={styles.itemListContainer}>
        <ListItem
          index={0}
          onPress={() => {
            navigation.navigate("Common", { screen: "AirtimeData" });
          }}
          Icon={() => <DataIcon size={24} />}
          title="Airtime & Data"
          route=""
        />

        <ListItem
          index={1}
          onPress={() => {
            navigation.navigate("Common", { screen: "InternetPlans" });
          }}
          Icon={() => <WifiIcon size={24} />}
          title="Internet"
          route=""
        />

        <ListItem
          index={2}
          onPress={() => {
            navigation.navigate("Common", { screen: "CableTV" });
          }}
          Icon={() => <CableTvIcon size={20} />}
          title="Cable TV"
          route=""
        />

        <ListItem
          index={3}
          onPress={() => {
            navigation.navigate("Common", { screen: "Electricity" });
          }}
          Icon={() => <ElectricIcon size={24} />}
          title="Electricity"
          route=""
        />

        <ListItem
          index={4}
          onPress={() => {
            navigation.navigate("Common", { screen: "Water" });
          }}
          Icon={() => <DropIcon size={24} />}
          title="Water"
          route=""
        />

        <ListItem
          index={5}
          onPress={() => {
            navigation.navigate("Common", { screen: "GiftCard" });
          }}
          Icon={() => <GiftIcon size={24} />}
          title="Gift Cards"
          route=""
        />

        <ListItem
          index={6}
          onPress={() => {
            navigation.navigate("Common", { screen: "Charity" });
          }}
          Icon={() => <LoveIcon size={24} />}
          title="Charity"
          route=""
        />
        <ListItem
          index={6}
          onPress={() => {
            navigation.navigate("Common", { screen: "GameScreen" });
          }}
          Icon={() => <GameIcon size={24} />}
          title="Game Credits"
          route=""
        />
      </ScrollView>
    </SafeAreaView>
  );
}
